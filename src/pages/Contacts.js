import React from 'react';
import { contacts } from '../data/contactData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Contacts</h1>
      <p className="text-lg text-text-secondary mb-8">Alumni and current students from various fields.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {contacts.map((person, index) => (
          <div key={index} className="card-base p-6 text-center flex flex-col items-center">
            <img 
              src={person.photo} 
              alt={person.name} 
              className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-accent-primary"
            />
            <h2 className="text-xl font-bold text-text-primary">{person.name}</h2>
            <p className="text-accent-primary mb-2">{person.position}</p>
            <p className="text-sm text-text-secondary mb-4">{person.field}</p>

            <div className="flex space-x-4 mt-auto">
              <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href={person.socials.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href={`mailto:${person.socials.email}`} className="text-text-secondary hover:text-accent-primary transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
