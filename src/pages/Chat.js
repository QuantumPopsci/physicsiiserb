import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import { collection, doc, addDoc, getDoc, setDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { FaPaperPlane, FaGoogle, FaSignOutAlt, FaTrash, FaUserShield, FaChevronDown } from 'react-icons/fa';

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
const InitialTermsModal = ({ onAccept }) => (
    <div className="text-center animate-fade-in-up max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 gradient-text">Community Guidelines</h1>
        <div className="bg-background-secondary p-6 rounded-lg border border-border-color text-left text-text-primary space-y-4">
            <p className="text-text-secondary">Welcome! To ensure this remains a safe and productive space, please agree to the following terms:</p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Be Respectful:</strong> Harassment, hate speech, and bullying will not be tolerated.</li>
                <li><strong>Stay On Topic:</strong> This forum is for academic doubts and constructive physics discussions.</li>
                <li><strong>No Inappropriate Content:</strong> Do not share offensive, illegal, or spam content.</li>
                <li><strong>Anonymity is a Privilege:</strong> Your display name is anonymous, but your authenticated email is logged for moderation.</li>
            </ul>
            <p className="font-bold text-red-500">Violation of these terms will result in a permanent block of your account. Moderators reserve the right to remove any content or user.</p>
        </div>
        <button onClick={onAccept} className="mt-6 w-full px-6 py-3 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold">
            I Understand and Agree
        </button>
    </div>
);

const CommunityGuidelines = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mb-4 bg-background-secondary rounded-lg border border-border-color">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-3 text-left">
                <span className="font-semibold text-text-primary">Community Guidelines</span>
                <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 border-t border-border-color text-sm text-text-secondary space-y-2">
                    <p><strong>Be Respectful:</strong> No harassment or bullying.</p>
                    <p><strong>Stay On Topic:</strong> Keep discussions related to physics.</p>
                    <p><strong>No Inappropriate Content:</strong> No offensive posts, spam, or illegal content.</p>
                    <p className="font-semibold text-red-500">Violations will lead to a permanent block.</p>
                </div>
            )}
        </div>
    );
};


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
                    
                    const blockedDocRef = doc(db, 'blockedUsers', currentUser.uid);
                    const blockedDocSnap = await getDoc(blockedDocRef);
                    if (blockedDocSnap.exists()) {
                        setIsBlocked(true);
                        return;
                    }
                    setIsBlocked(false);

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
    const handleGoogleSignIn = async () => { /* ... same as before ... */ };
    const handleSignOut = async () => { /* ... same as before ... */ };
    const handleAcceptTerms = async () => { /* ... same as before ... */ };
    const handleSendMessage = async (e) => { /* ... same as before ... */ };
    const handleDeleteMessage = async (messageId) => { /* ... same as before ... */ };
    const handleBlockUser = async (msg) => { /* ... same as before ... */ };

    // --- Conditional Rendering Logic (same as before) ---
    // ...

    // --- Main Chat UI ---
    return (
        <div className="flex flex-col h-[75vh] max-w-3xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold gradient-text">Physics Discussion Forum</h1>
                <button onClick={handleSignOut} className="text-text-secondary hover:text-text-primary text-sm flex items-center gap-2">
                    <FaSignOutAlt /> Sign Out
                </button>
            </div>

            <CommunityGuidelines />
            
            <div className="flex-grow bg-background-secondary rounded-lg p-4 border border-border-color overflow-y-auto mb-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex items-end mb-3 group ${msg.uid === user.uid ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center opacity-0 group-hover:opacity-100 transition-opacity ${msg.uid === user.uid ? 'mr-2' : 'ml-2 order-2'}`}>
                            {(userProfile.role === 'moderator' || msg.uid === user.uid) && (
                                <button onClick={() => handleDeleteMessage(msg.id)} className="text-text-secondary hover:text-red-500 p-1"><FaTrash /></button>
                            )}
                            {userProfile.role === 'moderator' && msg.uid !== user.uid && (
                                <button onClick={() => handleBlockUser(msg)} className="text-text-secondary hover:text-yellow-400 p-1"><FaUserShield /></button>
                            )}
                        </div>
                        <div className={`p-3 rounded-lg max-w-xs md:max-w-md ${msg.uid === user.uid ? 'bg-accent-secondary text-white' : 'bg-gray-700 text-gray-200'}`}>
                             <p className={`text-xs font-bold mb-1 ${msg.uid === user.uid ? 'text-accent-text' : 'text-accent-primary'}`}>{msg.uid === user.uid ? 'You' : msg.displayName}</p>
                            <p className="text-sm break-words">{msg.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Ask a question..."
                    className="flex-grow bg-background-secondary border border-border-color rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-accent-primary focus:border-accent-primary"/>
                <button type="submit" className="px-4 py-2 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold flex items-center gap-2">
                    <FaPaperPlane /> <span className="hidden sm:inline">Send</span>
                </button>
            </form>
        </div>
    );
};

export default Chat;

