import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import { collection, doc, addDoc, getDoc, setDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { faqs } from '../data/faqData';
import { FaPaperPlane, FaGoogle, FaSignOutAlt, FaTrash, FaUserShield, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ---------- HELPERS ----------

const anonymousNames = ["Curious Quark", "Anonymous Atom", "Clever Photon", "Bold Boson", "Wise Wavefunction"];

const generateConsistentName = (uid) => {
    let hash = 0;
    for (let i = 0; i < uid.length; i++) {
        hash = uid.charCodeAt(i) + ((hash << 5) - hash);
    }
    return anonymousNames[Math.abs(hash % anonymousNames.length)];
};

const clean = (text) => text.toLowerCase().replace(/[^\w\s]/g, "");

// smart matching
const getLocalAnswer = (query) => {
    const q = clean(query);

    return faqs.find(faq => {
        const question = clean(faq.question);

        if (question.includes(q)) return true;

        const words = q.split(" ").filter(w => w.length > 3);

        return words.some(word => question.includes(word));
    });
};

// convert /docs/... into clickable links
const renderTextWithLinks = (text) => {
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

// ---------- COMPONENTS ----------

const InitialTermsModal = ({ onAccept }) => (
    <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Community Guidelines</h1>
        <p className="mb-4">Be respectful. No spam. Stay on topic.</p>
        <button onClick={onAccept} className="px-6 py-3 bg-accent-primary text-white rounded">
            I Agree
        </button>
    </div>
);

const CommunityGuidelines = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-4 border rounded">
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between p-3">
                <span>Community Guidelines</span>
                <FaChevronDown className={open ? "rotate-180" : ""} />
            </button>
            {open && (
                <div className="p-3 text-sm">
                    Be respectful. No spam. Stay on topic.
                </div>
            )}
        </div>
    );
};

// ---------- MAIN ----------

const Chat = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState({ role: 'user', termsAccepted: false });
    const [blocked, setBlocked] = useState(false);
    const [authorized, setAuthorized] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [displayName, setDisplayName] = useState('');
    const endRef = useRef(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (u) => {
            if (!u) return setUser(null);

            setUser(u);

            if (!u.email.endsWith('@iiserb.ac.in')) return setAuthorized(false);

            setAuthorized(true);
            setDisplayName(generateConsistentName(u.uid));

            const blockedSnap = await getDoc(doc(db, 'blockedUsers', u.uid));
            if (blockedSnap.exists()) return setBlocked(true);

            const userRef = doc(db, 'users', u.uid);
            const snap = await getDoc(userRef);

            if (snap.exists()) setProfile(snap.data());
            else {
                const newProfile = { email: u.email, role: 'user', termsAccepted: false };
                await setDoc(userRef, newProfile);
                setProfile(newProfile);
            }
        });

        return () => unsub();
    }, []);

    useEffect(() => {
        if (!authorized || blocked || !profile.termsAccepted) return;

        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        return onSnapshot(q, snap => {
            setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        });
    }, [authorized, blocked, profile.termsAccepted]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const logout = async () => {
        await signOut(auth);
    };

    const acceptTerms = async () => {
        await setDoc(doc(db, 'users', user.uid), { termsAccepted: true }, { merge: true });
        setProfile(prev => ({ ...prev, termsAccepted: true }));
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const text = newMessage;
        setNewMessage('');

        // save user message
        await addDoc(collection(db, 'messages'), {
            text,
            uid: user.uid,
            displayName,
            timestamp: serverTimestamp()
        });

        const match = getLocalAnswer(text);

        if (match) {
            await addDoc(collection(db, 'messages'), {
                text: match.answerText,
                uid: "bot",
                displayName: "Physics Guide Bot",
                timestamp: serverTimestamp()
            });
        }
    };

    if (!user) return <button onClick={signIn}>Sign in with Google</button>;
    if (!authorized) return <div>Access denied</div>;
    if (blocked) return <div>Blocked</div>;
    if (!profile.termsAccepted) return <InitialTermsModal onAccept={acceptTerms} />;

    return (
        <div className="flex flex-col h-[75vh] max-w-3xl mx-auto">
            <div className="flex justify-between mb-2">
                <h1 className="text-xl font-bold">Physics Forum</h1>
                <button onClick={logout}>Logout</button>
            </div>

            <CommunityGuidelines />

            <div className="flex-grow overflow-y-auto mb-4 border p-2">
                {messages.map(msg => (
                    <div key={msg.id} className={`mb-2 ${msg.uid === user.uid ? 'text-right' : ''}`}>
                        <div className={`inline-block p-2 rounded ${
                            msg.uid === user.uid ? 'bg-blue-500 text-white' :
                            msg.uid === "bot" ? 'bg-green-600 text-white' :
                            'bg-gray-200'
                        }`}>
                            <div className="text-xs font-bold">
                                {msg.uid === user.uid ? "You" :
                                 msg.uid === "bot" ? "Physics Guide Bot" :
                                 msg.displayName}
                            </div>
                            <div>{renderTextWithLinks(msg.text)}</div>
                        </div>
                    </div>
                ))}
                <div ref={endRef} />
            </div>

            <form onSubmit={sendMessage} className="flex gap-2">
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow border p-2"
                    placeholder="Ask about thesis, minor, electives..."
                />
                <button className="bg-blue-500 text-white px-4">Send</button>
            </form>
        </div>
    );
};

export default Chat;
