import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        id: '',
        suggestion: '',
        complaint: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    // IMPORTANT: Make sure this URL is from your LATEST deployment.
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz80oaJFOfamGZKiowRBBJvpnCz_Q-NO0QlUCsf6ACb0bLEmSOw1cAHrt9O5xebVTouOA/exec";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.suggestion.trim() === '') {
            setStatus({ type: 'error', message: 'Suggestion/Feedback field is required.' });
            return;
        }
        setStatus({ type: 'submitting', message: 'Submitting...' });

        try {
            // FIX: This is the most reliable way to send data to Google Apps Script.
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });

            const result = await response.json();
            if (result.result !== 'success') {
                throw new Error(result.error || 'The script returned an error.');
            }
            setStatus({ type: 'success', message: 'Thank you! Your feedback has been submitted.' });
            setFormData({ id: '', suggestion: '', complaint: '' }); // Reset form
        } catch (error) {
            setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
            console.error("Submission Error:", error);
        }
    };

    return (
        <div className="animate-fadeInUp max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
            <p className="text-lg text-text-secondary mb-8">Have suggestions to improve the site or a complaint about content? Let us know.</p>

            <form onSubmit={handleSubmit} className="card-base p-6 md:p-8 space-y-6">
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-text-secondary">Associated ID (Optional)</label>
                    <input type="text" name="id" id="id" value={formData.id} onChange={handleChange} placeholder="e.g., Anonymous user ID from chat"
                        className="mt-1 w-full bg-background-primary border border-border-color rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"/>
                    <p className="text-xs text-text-secondary mt-1">If your complaint is about a specific message, please provide your anonymous user ID.</p>
                </div>
                <div>
                    <label htmlFor="suggestion" className="block text-sm font-medium text-text-secondary">Suggestions / Feedback for the Site <span className="text-red-500">*</span></label>
                    <textarea name="suggestion" id="suggestion" value={formData.suggestion} onChange={handleChange} required rows="4"
                        placeholder="What can we improve? What features would you like to see?"
                        className="mt-1 w-full bg-background-primary border border-border-color rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"/>
                </div>
                <div>
                    <label htmlFor="complaint" className="block text-sm font-medium text-text-secondary">Complaints Against Content (Optional)</label>
                    <textarea name="complaint" id="complaint" value={formData.complaint} onChange={handleChange} rows="4"
                        placeholder="Please describe the content you are concerned about."
                        className="mt-1 w-full bg-background-primary border border-border-color rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"/>
                </div>
                <button type="submit" disabled={status.type === 'submitting'} className="w-full px-4 py-3 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold transition-colors disabled:bg-gray-500">
                    {status.type === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
             {status.message && (
                <p className={`mt-4 text-center text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status.message}</p>
            )}
        </div>
    );
};

export default ContactUs;

