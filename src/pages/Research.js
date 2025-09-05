import React from 'react';
import { researchTopics } from '../data/researchData';
import { FaExternalLinkAlt, FaBook, FaFlask } from 'react-icons/fa';

const Research = () => {
    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Research in Physics</h1>
            <p className="text-lg text-text-secondary mb-12">An overview of some active and exciting directions in modern physics research.</p>

            <div className="space-y-16">
                {researchTopics.map((topic, index) => (
                    <div key={index} className="card-base p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                        {/* Image Section */}
                        <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <img src={topic.imageUrl} alt={topic.title} className="rounded-lg shadow-lg w-full h-auto object-cover"/>
                        </div>
                        
                        {/* Text Content Section */}
                        <div className={`md:col-span-3 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-3">{topic.title}</h2>
                            <p className="text-text-secondary mb-6">{topic.description}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2 flex items-center gap-2"><FaBook /> Key References</h3>
                                    <ul className="space-y-1">
                                        {topic.references.map((ref, i) => (
                                            <li key={i}>
                                                <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent-primary hover:underline flex items-center gap-1.5">
                                                    {ref.name} <FaExternalLinkAlt className="opacity-70" size="0.7em"/>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                     <h3 className="font-semibold text-text-primary mb-2 flex items-center gap-2"><FaFlask /> Active Labs</h3>
                                    <ul className="space-y-1">
                                        {topic.labs.map((lab, i) => (
                                            <li key={i}>
                                                <a href={lab.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent-primary hover:underline flex items-center gap-1.5">
                                                    {lab.name} <FaExternalLinkAlt className="opacity-70" size="0.7em"/>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
