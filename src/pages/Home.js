import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaBookOpen, FaUsers } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="text-center py-16 animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        <span className="gradient-text">A Hitchhiker's Guide to</span>
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">Physics at IISER Bhopal</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10">
        Your central hub for navigating the cosmos of the physics curriculum. Find course materials, helpful resources, and connect with peers and alumni.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Card 1: Courses */}
        <Link to="/courses" className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 border border-gray-700 transition-all transform hover:-translate-y-1">
          <FaBookOpen className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Explore Courses</h3>
          <p className="text-gray-400">Dive into detailed guides for every course in the curriculum.</p>
        </Link>

        {/* Card 2: Resources */}
        <Link to="/resources" className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 border border-gray-700 transition-all transform hover:-translate-y-1">
          <FaRocket className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Interesting Resources</h3>
          <p className="text-gray-400">Discover curated papers, articles, and videos to fuel your curiosity.</p>
        </Link>

        {/* Card 3: Contacts */}
        <Link to="/contacts" className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 border border-gray-700 transition-all transform hover:-translate-y-1">
          <FaUsers className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Connect with People</h3>
          <p className="text-gray-400">Find and connect with alumni and current students in the field.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
