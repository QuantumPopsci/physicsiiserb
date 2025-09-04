import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { FaPaperPlane, FaGoogle, FaSignOutAlt } from 'react-icons/fa';

// Helper to generate a fun, random anonymous name based on user's unique ID
const anonymousNames = ["Curious Quark", "Anonymous Atom", "Clever Photon", "Bold Boson", "Wise Wavefunction"];
const generateConsistentName = (uid) => {
    // Simple hash function to pick a name based on the UID
    let hash = 0;
    for (let i = 0; i < uid.length; i++) {
        hash = uid.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % anonymousNames.length);
    return anonymousNames[index];
};


const Chat = () => {
    const [user, setUser] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [userDisplayName, setUserDisplayName] = useState('');
    const messagesEndRef = useRef(null);

    // Listen to authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                // Check if the user's email is from the allowed domain
                if (currentUser.email && currentUser.email.endsWith('@iiserb.ac.in')) {
                    setIsAuthorized(true);
                    setUserDisplayName(generateConsistentName(currentUser.uid));
                } else {
                    setIsAuthorized(false);
                }
            } else {
                setUser(null);
                setIsAuthorized(false);
            }
        });
        return () => unsubscribe();
    }, []);

    // Fetch messages in real-time if authorized
    useEffect(() => {
        if (!isAuthorized) {
            setMessages([]);
            return;
        };

        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, [isAuthorized]);

    // Auto-scroll to the latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Sign-out error:", error);
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '' || !isAuthorized) return;

        await addDoc(collection(db, 'messages'), {
            text: newMessage,
            timestamp: serverTimestamp(),
            uid: user.uid,
            displayName: userDisplayName,
        });

        setNewMessage('');
    };

    // Render different UIs based on authentication state
    if (!user) {
        return (
            <div className="text-center animate-fade-in-up">
                <h1 className="text-3xl font-bold mb-4 gradient-text">Doubts & Discussion</h1>
                <p className="text-gray-400 mb-6">Please sign in with your IISERB Google account to access the chat.</p>
                <button onClick={handleGoogleSignIn} className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white font-semibold">
                    <FaGoogle />
                    Sign in with Google
                </button>
            </div>
        );
    }

    if (!isAuthorized) {
        return (
            <div className="text-center animate-fade-in-up">
                <h1 className="text-3xl font-bold mb-4 text-red-400">Access Denied</h1>
                <p className="text-gray-400 mb-6">This chat is restricted to users with an <span className="font-bold text-cyan-300">@iiserb.ac.in</span> email address.</p>
                <p className="text-gray-500 mb-6 text-sm">You are signed in as: {user.email}</p>
                <button onClick={handleSignOut} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-md text-white font-semibold">
                    <FaSignOutAlt />
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[75vh] max-w-3xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold gradient-text">Anonymous Chat</h1>
                <button onClick={handleSignOut} className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                    <FaSignOutAlt />
                    Sign Out
                </button>
            </div>
            
            <div className="flex-grow bg-gray-800/50 rounded-lg p-4 border border-gray-700 overflow-y-auto mb-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex mb-3 ${msg.uid === user.uid ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-lg max-w-xs md:max-w-md ${msg.uid === user.uid ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-gray-200'}`}>
                            <p className="text-xs font-bold text-cyan-300 mb-1">{msg.uid === user.uid ? 'You' : msg.displayName}</p>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-grow bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                />
                <button type="submit" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white font-semibold flex items-center gap-2">
                    <FaPaperPlane />
                    <span className="hidden sm:inline">Send</span>
                </button>
            </form>
        </div>
    );
};

export default Chat;

