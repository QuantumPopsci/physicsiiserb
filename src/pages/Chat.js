import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import { collection, doc, addDoc, getDoc, setDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { FaPaperPlane, FaGoogle, FaSignOutAlt, FaTrash, FaUserShield } from 'react-icons/fa';

// --- Helper Functions ---
const anonymousNames = ["Curious Quark", "Anonymous Atom", "Clever Photon", "Bold Boson", "Wise Wavefunction"];
const generateConsistentName = (uid) => {
    let hash = 0;
    for (let i = 0; i < uid.length; i++) {
        hash = uid.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % anonymousNames.length);
    return anonymousNames[index];
};

// --- Sub-Components ---
const TermsAndConditions = ({ onAccept }) => (
    <div className="text-center animate-fade-in-up max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 gradient-text">Community Guidelines</h1>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-left text-gray-300 space-y-4">
            <p>Welcome! To ensure this remains a safe and productive space for everyone, please agree to the following terms:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Be Respectful:</strong> Treat all members with respect. Harassment, hate speech, and any form of bullying will not be tolerated.</li>
                <li><strong>Stay On Topic:</strong> This chat is for academic doubts and constructive discussions related to physics at IISERB.</li>
                <li><strong>No Inappropriate Content:</strong> Do not share any content that is offensive, illegal, or otherwise inappropriate. This includes spam and unsolicited advertisements.</li>
                <li><strong>Anonymity is a Privilege:</strong> While your display name is anonymous, your authenticated email is logged for moderation purposes.</li>
            </ul>
            <p className="font-bold text-red-400">Violation of these terms will result in a permanent block of your account from this chat service. Moderators reserve the right to remove any content or user at their discretion.</p>
        </div>
        <button onClick={onAccept} className="mt-6 w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white font-semibold">
            I Understand and Agree
        </button>
    </div>
);

// --- Main Chat Component ---
const Chat = () => {
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState({ role: 'user', termsAccepted: false });
    const [isBlocked, setIsBlocked] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [userDisplayName, setUserDisplayName] = useState('');
    const messagesEndRef = useRef(null);

    // Main effect for handling user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                if (currentUser.email && currentUser.email.endsWith('@iiserb.ac.in')) {
                    setIsAuthorized(true);
                    setUserDisplayName(generateConsistentName(currentUser.uid));
                    
                    // Check if user is blocked
                    const blockedDocRef = doc(db, 'blockedUsers', currentUser.uid);
                    const blockedDocSnap = await getDoc(blockedDocRef);
                    if (blockedDocSnap.exists()) {
                        setIsBlocked(true);
                        return; // Stop further checks if blocked
                    }
                    setIsBlocked(false);

                    // Fetch or create user profile
                    const userDocRef = doc(db, 'users', currentUser.uid);
                    const docSnap = await getDoc(userDocRef);
                    if (docSnap.exists()) {
                        setUserProfile(docSnap.data());
                    } else {
                        const newProfile = { email: currentUser.email, role: 'user', termsAccepted: false };
                        await setDoc(userDocRef, newProfile);
                        setUserProfile(newProfile);
                    }
                } else {
                    setIsAuthorized(false);
                }
            } else {
                setUser(null);
                setIsAuthorized(false);
                setUserProfile({ role: 'user', termsAccepted: false });
            }
        });
        return () => unsubscribe();
    }, []);

    // Effect for fetching messages
    useEffect(() => {
        if (!isAuthorized || isBlocked || !userProfile.termsAccepted) {
            setMessages([]);
            return;
        }
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, [isAuthorized, isBlocked, userProfile.termsAccepted]);

    // Effect for auto-scrolling
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // --- Event Handlers ---
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try { await signInWithPopup(auth, provider); } catch (error) { console.error("Sign-in error:", error); }
    };
    const handleSignOut = async () => {
        try { await signOut(auth); } catch (error) { console.error("Sign-out error:", error); }
    };
    const handleAcceptTerms = async () => {
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, { termsAccepted: true }, { merge: true });
        setUserProfile(prev => ({ ...prev, termsAccepted: true }));
    };
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;
        await addDoc(collection(db, 'messages'), {
            text: newMessage,
            timestamp: serverTimestamp(),
            uid: user.uid,
            email: user.email, // Store email for moderation purposes
            displayName: userDisplayName,
        });
        setNewMessage('');
    };
    const handleDeleteMessage = async (messageId) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            await deleteDoc(doc(db, 'messages', messageId));
        }
    };
    const handleBlockUser = async (msg) => {
        if (window.confirm(`Are you sure you want to permanently block this user (${msg.displayName} - ${msg.email})? This action cannot be undone.`)) {
            const blockedDocRef = doc(db, 'blockedUsers', msg.uid);
            await setDoc(blockedDocRef, {
                email: msg.email,
                blockedBy: user.email,
                timestamp: serverTimestamp()
            });
            // Also delete their message that was reported
            await deleteDoc(doc(db, 'messages', msg.id));
        }
    };


    // --- Conditional Rendering ---
    if (!user) {
        return <div className="text-center animate-fade-in-up"><h1 className="text-3xl font-bold mb-4 gradient-text">Doubts & Discussion</h1><p className="text-gray-400 mb-6">Please sign in with your IISERB Google account to access the chat.</p><button onClick={handleGoogleSignIn} className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white font-semibold"><FaGoogle /> Sign in with Google</button></div>;
    }
    if (!isAuthorized) {
        return <div className="text-center animate-fade-in-up"><h1 className="text-3xl font-bold mb-4 text-red-400">Access Denied</h1><p className="text-gray-400 mb-6">This chat is restricted to users with an <span className="font-bold text-cyan-300">@iiserb.ac.in</span> email address.</p><p className="text-gray-500 mb-6 text-sm">You are signed in as: {user.email}</p><button onClick={handleSignOut} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-semibold"><FaSignOutAlt /> Sign Out</button></div>;
    }
    if (isBlocked) {
        return <div className="text-center animate-fade-in-up"><h1 className="text-3xl font-bold mb-4 text-red-400">Account Blocked</h1><p className="text-gray-400 mb-6">Your account has been blocked from accessing this chat due to a violation of the community guidelines.</p><button onClick={handleSignOut} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-semibold"><FaSignOutAlt /> Sign Out</button></div>;
    }
    if (!userProfile.termsAccepted) {
        return <TermsAndConditions onAccept={handleAcceptTerms} />;
    }

    // --- Main Chat UI ---
    return (
        <div className="flex flex-col h-[75vh] max-w-3xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold gradient-text">Anonymous Chat</h1>
                <button onClick={handleSignOut} className="text-gray-400 hover:text-white text-sm flex items-center gap-2"><FaSignOutAlt /> Sign Out</button>
            </div>
            
            <div className="flex-grow bg-gray-800/50 rounded-lg p-4 border border-gray-700 overflow-y-auto mb-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex items-end mb-3 group ${msg.uid === user.uid ? 'justify-end' : 'justify-start'}`}>
                        {/* --- Moderation Controls --- */}
                        <div className={`flex items-center opacity-0 group-hover:opacity-100 transition-opacity ${msg.uid === user.uid ? 'mr-2' : 'ml-2 order-2'}`}>
                            {(userProfile.role === 'moderator' || msg.uid === user.uid) && (
                                <button onClick={() => handleDeleteMessage(msg.id)} className="text-gray-500 hover:text-red-400 p-1"><FaTrash /></button>
                            )}
                            {userProfile.role === 'moderator' && msg.uid !== user.uid && (
                                <button onClick={() => handleBlockUser(msg)} className="text-gray-500 hover:text-yellow-400 p-1"><FaUserShield /></button>
                            )}
                        </div>
                        <div className={`p-3 rounded-lg max-w-xs md:max-w-md ${msg.uid === user.uid ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-gray-200'}`}>
                            <p className="text-xs font-bold text-cyan-300 mb-1">{msg.uid === user.uid ? 'You' : msg.displayName}</p>
                            <p className="text-sm break-words">{msg.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Ask a question..."
                    className="flex-grow bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
                <button type="submit" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white font-semibold flex items-center gap-2">
                    <FaPaperPlane /> <span className="hidden sm:inline">Send</span>
                </button>
            </form>
        </div>
    );
};

export default Chat;

