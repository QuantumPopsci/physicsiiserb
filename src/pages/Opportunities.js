import React from 'react';
import { programs } from '../data/opportunitiesData';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Opportunities = () => {
    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Internships & Post-Graduate Programs</h1>
            <p className="text-lg text-text-secondary mb-12">A curated list of research internships, masters, and PhD programs for physics students.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <div key={index} className="card-base flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                        <img src={program.imageUrl} alt={`${program.institute} campus`} className="w-full h-40 object-cover"/>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-text-primary mb-2">{program.name}</h2>
                            <p className="text-sm font-semibold text-text-secondary mb-4">{program.institute}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-xs font-semibold bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">{program.type}</span>
                                <span className="text-xs font-semibold bg-gray-500/10 text-text-secondary px-3 py-1 rounded-full">{program.time}</span>
                            </div>

                            <div className="mt-auto">
                                <a 
                                    href={program.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold transition-colors"
                                >
                                    Visit Website <FaExternalLinkAlt size="0.8em" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Opportunities;
