import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaBookOpen, FaUsers, FaCalendarAlt, FaComments } from 'react-icons/fa';
import { FaShareAlt, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative text-center py-8 sm:py-16 animate-fadeInUp">
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="gradient-text">A Hitchhiker's Guide to</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">Physics at IISER Bhopal</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-text-secondary mb-12 px-4">
          Your central hub for navigating the cosmos of the physics curriculum. Find course materials, helpful resources, and connect with peers and alumni.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <DashboardCard to="/courses" icon={<FaBookOpen />} title="Explore Courses" description="Dive into detailed guides for every course in the curriculum." />
          <DashboardCard to="/timetable" icon={<FaCalendarAlt />} title="Semester Timetable" description="View the weekly class schedule, venues, and instructors." />
          <DashboardCard to="/resources" icon={<FaRocket />} title="Interesting Resources" description="Discover curated papers, articles, and videos to fuel your curiosity." />
          <DashboardCard to="/chat" icon={<FaComments />} title="Physics Discussion Forum" description="Ask questions and chat with peers in a moderated, exclusive forum." />
          <DashboardCard to="/shared-resources" icon={<FaShareAlt />} title="Share & Request Resources" description="Exchange notes, books, and other useful materials with your peers." />
          <DashboardCard to="/contact-us" icon={<FaEnvelope />} title="Contact Us" description="Send suggestions, improvements, or feedback to help us grow." />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ to, icon, title, description }) => (
  <Link
    to={to}
    className="bg-background-secondary/80 backdrop-blur-sm p-8 rounded-xl border border-border-color transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center shadow-lg"
  >
    <div className="text-5xl text-accent-primary mb-5">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
    <p className="text-text-secondary text-sm">{description}</p>
  </Link>
);

export default Home;

