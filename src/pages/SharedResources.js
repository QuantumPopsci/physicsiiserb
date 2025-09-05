import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { FaFileUpload, FaQuestionCircle } from 'react-icons/fa';

// --- Main Component ---
const SharedResources = () => {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('resources'); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.email.endsWith('@iiserb.ac.in')) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    if (!user) {
        return <div className="text-center animate-fadeInUp"><h1 className="text-3xl font-bold mb-4 gradient-text">Access Restricted</h1><p className="text-text-secondary">You must be signed in with an @iiserb.ac.in account to access this feature.</p></div>;
    }

    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Shared Resources Hub</h1>
            <p className="text-lg text-text-secondary mb-8">A collaborative space to share and request academic resources.</p>
            
            <div className="flex flex-wrap border-b border-border-color mb-8">
                <TabButton name="resources" activeTab={activeTab} setActiveTab={setActiveTab} label="Shared Resources" />
                <TabButton name="requests" activeTab={activeTab} setActiveTab={setActiveTab} label="Request a Resource" />
                <TabButton name="submit" activeTab={activeTab} setActiveTab={setActiveTab} label="Submit a Resource" />
            </div>

            <div>
                {activeTab === 'resources' && <ApprovedResourcesView />}
                {activeTab === 'requests' && <ResourceRequestsView user={user} />}
                {activeTab === 'submit' && <SubmitResourceView user={user} />}
            </div>
        </div>
    );
};

// --- Sub-Components ---
const TabButton = ({ name, activeTab, setActiveTab, label }) => (
    <button onClick={() => setActiveTab(name)} className={`px-4 py-2 -mb-px font-semibold border-b-2 transition-colors duration-300 ${activeTab === name ? 'text-accent-primary border-accent-primary' : 'text-text-secondary border-transparent hover:text-text-primary'}`}>
        {label}
    </button>
);

const ApprovedResourcesView = () => (
    <div className="card-base p-6">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Approved Resources</h2>
        <p className="text-text-secondary">This section will display resources approved by moderators. Currently, moderators can view and approve submissions directly in the Google Sheet named "Resource Submissions".</p>
    </div>
);

const ResourceRequestsView = ({ user }) => {
    const [newRequest, setNewRequest] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVtG4XtpwjYXPjRD5elwTvdausBioL3G33mHhaloeMW2UN_dOnboMbpQSyBH2EbIvd/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newRequest.trim() === '') return;
        setStatus({ type: 'submitting', message: 'Posting...' });
        
        try {
            // FIX: Removed mode: 'no-cors' and changed Content-Type to text/plain
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: 'postRequest', text: newRequest, userEmail: user.email }),
            });
            
            const result = await response.json();
            if (result.result !== 'success') throw new Error(result.error);

            setStatus({ type: 'success', message: 'Your request has been posted!' });
            setNewRequest('');
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to post request.' });
            console.error("Fetch Error:", error);
        }
    };
    
    return (
         <div className="card-base p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Request a Resource</h2>
            <form onSubmit={handleSubmit} className="flex gap-3">
                <input type="text" value={newRequest} onChange={(e) => setNewRequest(e.target.value)} placeholder="What resource are you looking for?"
                    className="flex-grow bg-background-primary border border-border-color rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"/>
                <button type="submit" disabled={status.type === 'submitting'} className="px-4 py-2 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold flex items-center gap-2 transition-colors disabled:bg-gray-500">
                    Post
                </button>
            </form>
            {status.message && <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status.message}</p>}
            <p className="text-text-secondary mt-4 text-sm">This section will also display a live list of all requests once the display functionality is built.</p>
        </div>
    );
};

const SubmitResourceView = ({ user }) => {
    const [caption, setCaption] = useState('');
    const [file, setFile] = useState(null);
    const [agreed, setAgreed] = useState(false);
    const [status, setStatus] = useState({ type: '', message: ''});
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVtG4XtpwjYXPjRD5elwTvdausBioL3G33mHhaloeMW2UN_dOnboMbpQSyBH2EbIvd/exec";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file || !caption || !agreed) {
            setStatus({type: 'error', message: 'Please fill all fields and agree to the terms.'});
            return;
        }
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            setStatus({type: 'error', message: 'File is too large. Please select a file under 5MB.'});
            return;
        }
        setStatus({ type: 'uploading', message: 'Preparing file...'});
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (e) => {
            const fileData = e.target.result;
            try {
                // FIX: Removed mode: 'no-cors' and changed Content-Type to text/plain
                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({
                        action: 'submitResource',
                        caption: caption,
                        fileData: fileData,
                        fileName: file.name,
                        fileType: file.type,
                        userEmail: user.email,
                    }),
                });

                const result = await response.json();
                if (result.result !== 'success') throw new Error(result.error);

                setStatus({type: 'success', message: 'File submitted for review!'});
                setCaption('');
                setFile(null);
                setAgreed(false);
                document.getElementById('file').value = null;
            } catch (error) {
                setStatus({type: 'error', message: 'Upload failed. Please try again.'});
                console.error("Fetch Error:", error);
            }
        };
        reader.onerror = () => {
             setStatus({type: 'error', message: 'Error reading file.'});
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="card-base p-6 mb-6">
                <h3 className="font-bold text-text-primary mb-2">Terms of Submission</h3>
                <p className="text-sm text-text-secondary">By uploading a file, you agree not to submit any material that is obscene, harassing, hateful, or violates copyright laws. All submissions are subject to review by moderators.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="caption" className="block text-sm font-medium text-text-secondary">Caption / Description</label>
                    <input id="caption" type="text" value={caption} onChange={(e) => setCaption(e.target.value)} required className="mt-1 w-full bg-background-primary border border-border-color rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"/>
                </div>
                <div>
                    <label htmlFor="file" className="block text-sm font-medium text-text-secondary">File (PDF, PNG, JPG - max 5MB)</label>
                    <input id="file" type="file" onChange={(e) => setFile(e.target.files[0])} required accept=".pdf,.png,.jpg,.jpeg" className="mt-1 block w-full text-sm text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent-primary file:text-white hover:file:bg-accent-secondary"/>
                </div>
                <div className="flex items-center">
                    <input id="agree" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"/>
                    <label htmlFor="agree" className="ml-2 block text-sm text-text-secondary">I have read and agree to the terms of submission.</label>
                </div>
                <button type="submit" disabled={status.type === 'uploading'} className="w-full px-4 py-2 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold transition-colors disabled:bg-gray-500">
                    {status.type === 'uploading' ? status.message : 'Submit for Review'}
                </button>
            </form>
            {status.message && status.type !== 'uploading' && (
                <p className={`mt-4 text-center text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status.message}</p>
            )}
        </div>
    );
};

export default SharedResources;

