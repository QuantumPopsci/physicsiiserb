import React, { useState } from 'react';
import { contacts as staticContacts } from '../data/contactData';
import { FaLinkedin, FaGithub, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// --- Reusable Components ---
const ContactCard = ({ person }) => (
    <div className="card-base p-6 text-center flex flex-col items-center">
        <img 
            src={person.photo} 
            alt={person.name} 
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-accent-primary"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/1f2937/9ca3af?text=Photo' }}
        />
        <h2 className="text-xl font-bold text-text-primary">{person.name}</h2>
        <p className="text-accent-primary mb-2 text-sm">{person.position}</p>
        <p className="text-sm text-text-secondary mb-4 flex-grow">{person.field}</p>
        <div className="flex space-x-4 mt-auto">
            {person.socials.linkedin && <SocialLink href={person.socials.linkedin} icon={<FaLinkedin className="text-2xl" />} />}
            {person.socials.github && <SocialLink href={person.socials.github} icon={<FaGithub className="text-2xl" />} />}
            {person.socials.email && <SocialLink href={`mailto:${person.socials.email}`} icon={<FaEnvelope className="text-2xl" />} />}
        </div>
    </div>
);

const SocialLink = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
        {icon}
    </a>
);

const SubmissionForm = ({ scriptUrl }) => {
    const [formData, setFormData] = useState({ name: '', position: '', field: '', linkedin: '', github: '', email: '' });
    const [photo, setPhoto] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) {
            setStatus({ type: 'error', message: 'Photo is too large. Please select an image under 2MB.' });
            setPhoto(null);
        } else {
            setStatus({ type: '', message: '' });
            setPhoto(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!photo) {
            setStatus({ type: 'error', message: 'Please upload a photo.' });
            return;
        }
        setStatus({ type: 'submitting', message: 'Submitting...' });
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = async (event) => {
            try {
                await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({ ...formData, photoData: event.target.result, photoName: photo.name, photoType: photo.type }),
                });
                
                setStatus({ type: 'success', message: 'Thank you! Your profile has been submitted for review.' });
                setFormData({ name: '', position: '', field: '', linkedin: '', github: '', email: '' });
                setPhoto(null);
                document.getElementById('photo-input').value = null;

            } catch (error) {
                setStatus({ type: 'error', message: 'Submission failed. Please check your network connection.' });
            }
        };
        reader.onerror = () => {
             setStatus({ type: 'error', message: 'Error reading file.' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name *" required className="form-input" />
                <input name="position" value={formData.position} onChange={handleChange} placeholder="Current Position *" required className="form-input" />
            </div>
            <input name="field" value={formData.field} onChange={handleChange} placeholder="Field of Interest *" required className="form-input w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="form-input" />
                <input name="github" value={formData.github} onChange={handleChange} placeholder="GitHub URL" className="form-input" />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="form-input w-full" />
            <div>
                <label htmlFor="photo-input" className="block text-sm font-medium text-text-secondary mb-1">Profile Photo (max 2MB) *</label>
                <input id="photo-input" type="file" onChange={handleFileChange} required accept="image/png, image/jpeg" className="form-file-input" />
            </div>
            <button type="submit" disabled={status.type === 'submitting'} className="w-full px-4 py-3 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold transition-colors disabled:bg-gray-500">
                {status.type === 'submitting' ? 'Submitting...' : 'Submit for Review'}
            </button>
            {status.message && <p className={`mt-4 text-center text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status.message}</p>}
        </form>
    );
};

// --- Main Contacts Page Component ---
const Contacts = () => {
    const [showForm, setShowForm] = useState(false);
    // IMPORTANT: Make sure this is the URL from your LATEST script deployment.
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsfouI5IFrfupAp3l4WOaurBS7ExHRB7x7DBCYNv4HCSRw5bIqK4qMDVg1KZFuTELUlg/exec"; 

    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Contacts</h1>
            <p className="text-lg text-text-secondary mb-8">Connect with alumni, peers, and the wider physics community.</p>

            <h2 className="text-2xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-6">Contacts Directory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                {staticContacts.map((person, index) => <ContactCard key={index} person={person} />)}
            </div>
            
            <div className="card-base p-6 text-center">
                <h3 className="text-xl font-bold text-text-primary mb-2">Want to be featured here?</h3>
                <p className="text-text-secondary mb-4">Submit your profile, and it will be added after a brief review.</p>
                {!showForm ? (
                    <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold transition-colors">
                        <FaPlusCircle /> Add Your Profile
                    </button>
                ) : (
                    <div className="mt-6 text-left">
                        <SubmissionForm scriptUrl={SCRIPT_URL} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contacts;

