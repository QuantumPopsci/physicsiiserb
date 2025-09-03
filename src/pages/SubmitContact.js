import React, { useState } from 'react';

const SubmitContact = () => {
  const [formData, setFormData] = useState({
    name: '', position: '', field: '', linkedinURL: '', githubURL: '', email: ''
  });
  const [photo, setPhoto] = useState(null);
  const [status, setStatus] = useState(''); // Manages the submission state: '', 'submitting', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('');
  
  // The Web App URL you provided.
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzEHtTcrJNJ3YGRfi_zPSJbY4oeldXz9CCpnmxhrvnJk6pb1As_dPXbWtAFbR8DyLGe/exec";

  // Handles changes for all text input fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handles the file selection, validation, and conversion to Base64.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 1. Validate file size (must be under 2MB).
      if (file.size > 2 * 1024 * 1024) {
        setErrorMsg('File is too large. Please select an image under 2MB.');
        e.target.value = null; // Clear the file input.
        setPhoto(null);
        return;
      }
      
      // 2. Convert the valid file into a Base64 string.
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setErrorMsg(''); // Clear any previous error message.
      };
      reader.onerror = () => {
        setErrorMsg('Failed to read the selected file.');
      };
    }
  };

  // Handles the final form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      setErrorMsg('Please select a photo before submitting.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    try {
      // Combine text data and the Base64 photo string into one object.
      const submissionData = { ...formData, photo };

      // Send the data to your Google Apps Script URL.
      // 'no-cors' mode is required to prevent a CORS error from the browser.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      // Since we use 'no-cors', we can't read the response. We assume success if no error was thrown.
      setStatus('success');
      setFormData({ name: '', position: '', field: '', linkedinURL: '', githubURL: '', email: '' });
      setPhoto(null);
      document.getElementById('photo-input').value = null; // Visually reset the file input.

    } catch (error) {
      setStatus('error');
      setErrorMsg('Something went wrong during submission. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Submit Your Profile</h1>
      <p className="text-lg text-gray-400 mb-8">
        Add your details to be featured on the contacts page. Your submission will be saved to a Google Sheet.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Text Inputs */}
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label htmlFor={key} className="block text-sm font-medium text-gray-300 capitalize">{key.replace('URL', ' URL')}</label>
            <input type="text" name={key} id={key} value={formData[key]} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
          </div>
        ))}
        
        {/* File Input */}
        <div>
          <label htmlFor="photo-input" className="block text-sm font-medium text-gray-300">Photo (PNG, JPG - max 2MB)</label>
          <input type="file" name="photo" id="photo-input" onChange={handleFileChange} required accept="image/png, image/jpeg"
            className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"/>
        </div>
        
        {/* Submit Button & Status Messages */}
        <div>
          <button type="submit" disabled={status === 'submitting'}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-500">
            {status === 'submitting' ? 'Submitting...' : 'Submit Profile'}
          </button>
        </div>
        
        {errorMsg && <p className="mt-4 text-center text-red-400">{errorMsg}</p>}
        {status === 'success' && <p className="mt-4 text-center text-green-400">Thank you! Your profile has been submitted successfully.</p>}
      </form>
    </div>
  );
};

export default SubmitContact;
