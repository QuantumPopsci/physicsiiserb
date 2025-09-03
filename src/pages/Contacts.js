import React from 'react';
import { contacts } from '../data/contactData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Contacts</h1>
      <p className="text-lg text-gray-400 mb-8">Alumni and current students from various fields.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {contacts.map((person, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700 flex flex-col items-center">
            <img 
              src={person.photo} 
              alt={person.name} 
              className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-cyan-400"
            />
            <h2 className="text-xl font-bold text-white">{person.name}</h2>
            <p className="text-cyan-300 mb-2">{person.position}</p>
            <p className="text-sm text-gray-400 mb-4">{person.field}</p>

            <div className="flex space-x-4 mt-auto">
              <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href={person.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href={`mailto:${person.socials.email}`} className="text-gray-400 hover:text-white transition-colors">
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
