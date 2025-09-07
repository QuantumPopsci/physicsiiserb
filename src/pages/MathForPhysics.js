import React from 'react';
import { mathTopics, mathResources } from '../data/mathForPhysicsData';
import { FaBook, FaLink } from 'react-icons/fa';

const MathForPhysics = () => {
    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Math for Physics</h1>
            <p className="text-lg text-text-secondary mb-12">A guide to the essential mathematical tools and concepts required for various fields in physics.</p>

            {/* Mathematical Fields Section */}
            <section className="mb-16">
                 <h2 className="text-3xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-8">Mathematical Fields in Physics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mathTopics.map((topic, index) => (
                        <div key={index} className="card-base p-6 flex flex-col">
                            <h3 className="text-xl font-bold text-text-primary mb-2">{topic.field}</h3>
                            <p className="text-text-secondary text-sm mb-4 flex-grow">{topic.description}</p>
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">Key Topics:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {topic.courses.map((course, i) => (
                                        <span key={i} className="bg-background-primary text-accent-primary text-xs font-medium px-3 py-1 rounded-full border border-border-color">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interesting Resources Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-8">Interesting Resources</h2>
                <div className="space-y-4">
                    {mathResources.articles.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-4 card-base hover:border-accent-primary transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-lg text-accent-primary">{item.title}</h3>
                                    <p className="text-text-secondary">{item.description}</p>
                                </div>
                                <FaLink className="text-2xl text-text-secondary" />
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Explanatory Videos Section */}
            <section>
                <h2 className="text-3xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-8">Explanatory Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mathResources.videos.map((video, index) => (
                        <div key={index} className="card-base overflow-hidden">
                            <div className="relative pt-[56.25%]">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-text-primary">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MathForPhysics;
