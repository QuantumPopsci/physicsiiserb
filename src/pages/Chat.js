import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { faqs } from '../data/faqData';
import {
  FaPaperPlane,
  FaGoogle,
  FaSignOutAlt,
  FaTrash,
  FaUserShield,
  FaChevronDown
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ---------------- HELPERS ----------------

const anonymousNames = [
  "Curious Quark",
  "Anonymous Atom",
  "Clever Photon",
  "Bold Boson",
  "Wise Wavefunction"
];

const generateConsistentName = (uid) => {
  let hash = 0;
  for (let i = 0; i < uid.length; i++) {
    hash = uid.charCodeAt(i) + ((hash << 5) - hash);
  }
  return anonymousNames[Math.abs(hash % anonymousNames.length)];
};

const clean = (text) =>
  text.toLowerCase().replace(/[^\w\s]/g, "");

// 🔥 FIXED SMART MATCHING
const getBestMatches = (query) => {
  const q = clean(query);
  const tokens = q.split(" ").filter(t => t.length > 2);

  let scored = faqs.map(faq => {
    const text = clean(faq.question + " " + faq.answerText);

    let score = 0;

    tokens.forEach(t => {
      if (text.includes(t)) score++;
    });

    return { faq, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const filtered = scored.filter(item => item.score > 0);

  return filtered.slice(0, 2).map(item => item.faq);
};

// Convert /docs/... → clickable links
const renderTextWithLinks = (text) => {
  if (!text) return null;

  return text.split(/(\/docs\/[^\s]+)/g).map((part, i) =>
    part.startsWith("/docs/") ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-primary underline"
      >
        📄 Open PDF
      </a>
    ) : (
      part
    )
  );
};

// ---------------- SUB COMPONENTS ----------------

const InitialTermsModal = ({ onAccept }) => (
  <div className="text-center animate-fadeInUp max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-4 gradient-text">
      Community Guidelines
    </h1>

    <div className="bg-background-secondary p-6 rounded-lg border border-border-color text-left">
      <p>Be respectful. No spam. Stay on topic. Use @bot to speak with bot</p>

      <p className="text-xs mt-4">
        You agree to the
        <Link to="/terms" className="text-accent-primary ml-1 underline">
          Terms
        </Link>
      </p>
    </div>

    <button
      onClick={onAccept}
      className="mt-6 px-6 py-3 bg-accent-primary text-white rounded"
    >
      I Agree
    </button>
  </div>
);

const CommunityGuidelines = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-background-secondary rounded border border-border-color">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between p-3"
      >
        <span>Community Guidelines</span>
        <FaChevronDown className={isOpen ? "rotate-180" : ""} />
      </button>

      {isOpen && (
        <div className="p-3 text-sm">
          Be respectful. No spam. Stay on topic.
        </div>
      )}
    </div>
  );
};

// ---------------- MAIN ----------------

const Chat = () => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState({ role: 'user', termsAccepted: false });
  const [isBlocked, setIsBlocked] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');
  const messagesEndRef = useRef(null);

  // AUTH
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        return;
      }

      setUser(currentUser);

      if (!currentUser.email.endsWith('@iiserb.ac.in')) {
        setIsAuthorized(false);
        return;
      }

      setIsAuthorized(true);
      setUserDisplayName(generateConsistentName(currentUser.uid));

      const blockedDoc = await getDoc(doc(db, 'blockedUsers', currentUser.uid));
      if (blockedDoc.exists()) {
        setIsBlocked(true);
        return;
      }

      const userRef = doc(db, 'users', currentUser.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        setUserProfile(snap.data());
      } else {
        const newProfile = {
          email: currentUser.email,
          role: 'user',
          termsAccepted: false
        };
        await setDoc(userRef, newProfile);
        setUserProfile(newProfile);
      }
    });

    return () => unsubscribe();
  }, []);

  // MESSAGES LISTENER
  useEffect(() => {
    if (!isAuthorized || isBlocked || !userProfile.termsAccepted) {
      setMessages([]);
      return;
    }

    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => unsubscribe();
  }, [isAuthorized, isBlocked, userProfile.termsAccepted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AUTH ACTIONS
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const handleAcceptTerms = async () => {
    await setDoc(doc(db, 'users', user.uid), { termsAccepted: true }, { merge: true });
    setUserProfile(prev => ({ ...prev, termsAccepted: true }));
  };

  // SEND MESSAGE (FIXED BOT LOGIC)
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user) return;

    const messageText = newMessage;
    setNewMessage('');

    await addDoc(collection(db, 'messages'), {
      text: messageText,
      timestamp: serverTimestamp(),
      uid: user.uid,
      email: user.email,
      displayName: userDisplayName,
    });

    if (!messageText.toLowerCase().startsWith("@bot")) return;

    const queryText = messageText.replace("@bot", "").trim();

    if (!queryText) {
      await addDoc(collection(db, 'messages'), {
        text: "Try asking:\n- @bot ms thesis outside\n- @bot qt minor\n- @bot electives",
        uid: "bot",
        displayName: "Physics Guide Bot",
        timestamp: serverTimestamp(),
      });
      return;
    }

    const matches = getBestMatches(queryText);

    if (matches.length > 0) {
      const combined = matches
        .map(m => `🔹 ${m.question}\n${m.answerText}`)
        .join("\n\n");

      await addDoc(collection(db, 'messages'), {
        text: combined,
        uid: "bot",
        displayName: "Physics Guide Bot",
        timestamp: serverTimestamp(),
      });

      return;
    }

    await addDoc(collection(db, 'messages'), {
      text: "I couldn't find a direct answer.\n\nTry asking:\n- @bot ms thesis outside\n- @bot qt minor\n- @bot electives",
      uid: "bot",
      displayName: "Physics Guide Bot",
      timestamp: serverTimestamp(),
    });
  };

  const handleDeleteMessage = async (messageId) => {
    if (window.confirm("Delete this message?")) {
      await deleteDoc(doc(db, 'messages', messageId));
    }
  };

  const handleBlockUser = async (msg) => {
    if (window.confirm(`Block ${msg.displayName}?`)) {
      await setDoc(doc(db, 'blockedUsers', msg.uid), {
        email: msg.email,
        blockedBy: user.email,
        timestamp: serverTimestamp()
      });

      await deleteDoc(doc(db, 'messages', msg.id));
    }
  };

  if (!user) {
    return (
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="bg-accent-primary text-white px-4 py-2 rounded">
          <FaGoogle /> Sign in
        </button>
      </div>
    );
  }

  if (!isAuthorized) return <div>Access denied</div>;
  if (isBlocked) return <div>Account blocked</div>;
  if (!userProfile.termsAccepted) return <InitialTermsModal onAccept={handleAcceptTerms} />;

  return (
    <div className="flex flex-col h-[75vh] max-w-3xl mx-auto">
      <div className="flex justify-between mb-3">
        <h1 className="text-xl font-bold">Physics Forum</h1>
        <button onClick={handleSignOut}><FaSignOutAlt /></button>
      </div>

      <CommunityGuidelines />

      <div className="flex-grow overflow-y-auto mb-4 border p-3 rounded">
        {messages.map(msg => (
          <div key={msg.id} className={`mb-3 group ${msg.uid === user.uid ? 'text-right' : ''}`}>
            <div className={`inline-block p-3 rounded max-w-md ${
              msg.uid === user.uid
                ? 'bg-accent-primary text-white'
                : msg.uid === "bot"
                ? 'bg-green-600 text-white'
                : 'bg-background-secondary text-text-primary'
            }`}>

              <div className="text-xs font-bold mb-1">
                {msg.uid === user.uid
                  ? "You"
                  : msg.uid === "bot"
                  ? "Physics Guide Bot"
                  : msg.displayName}
              </div>

              <div className="text-sm break-words">
                {renderTextWithLinks(msg.text)}
              </div>

              {(userProfile.role === 'moderator' || msg.uid === user.uid) && msg.uid !== "bot" && (
                <button onClick={() => handleDeleteMessage(msg.id)}>
                  <FaTrash />
                </button>
              )}

              {userProfile.role === 'moderator' && msg.uid !== user.uid && msg.uid !== "bot" && (
                <button onClick={() => handleBlockUser(msg)}>
                  <FaUserShield />
                </button>
              )}

            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask about thesis, QT minor, electives by @bot or speak with other Physics Majors"
          className="flex-grow p-2 rounded border border-border-color bg-background-secondary text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary"
        />

        <button className="bg-accent-primary text-white px-4 rounded">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chat;
