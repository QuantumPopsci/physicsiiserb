import React from 'react';
import { resources } from '../data/resourceData';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Resources = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Interesting Resources</h1>

      {/* Papers and Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-6">Papers & Articles</h2>
        <div className="space-y-4">
          {resources.articles.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-cyan-300">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {item.type === 'pdf' ? <FaFilePdf className="text-2xl text-red-400" /> : <FaExternalLinkAlt className="text-2xl text-gray-400" />}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section>
        <h2 className="text-3xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-6">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.videos.map((video, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
