// src/components/pages/ContactsPage.js
import React from 'react';
import { contacts } from '../../data/contactData';
import './Pages.css';

function ContactsPage() {
  return (
    <div className="page-container">
      <h1>Alumni & Senior Contacts</h1>
      <div className="contacts-grid">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <img src={contact.photo} alt={contact.name} className="contact-photo" />
            <h3>{contact.name}</h3>
            <p>{contact.position}</p>
            <div className="contact-links">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={contact.email}>Email</a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsPage;
