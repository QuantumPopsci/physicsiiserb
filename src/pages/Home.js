import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaBookOpen, FaUsers, FaCalendarAlt, FaComments } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="text-center py-8 sm:py-16 animate-fade-in-up">
      {/* Responsive Headings */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        <span className="gradient-text">A Hitchhiker's Guide to</span>
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">Physics at IISER Bhopal</h2>
      
      {/* Responsive Paragraph */}
      <p className="max-w-3xl mx-auto text-base sm:text-lg text-text-secondary mb-10 px-4">
        Your central hub for navigating the cosmos of the physics curriculum. Find course materials, helpful resources, and connect with peers and alumni.
      </p>

      {/* Responsive Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        <DashboardCard 
          to="/courses" 
          icon={<FaBookOpen className="text-5xl text-accent-primary mx-auto mb-4" />}
          title="Explore Courses"
          description="Dive into detailed guides for every course in the curriculum."
        />
        <DashboardCard 
          to="/timetable" 
          icon={<FaCalendarAlt className="text-5xl text-accent-primary mx-auto mb-4" />}
          title="Semester Timetable"
          description="View the weekly class schedule, venues, and instructors."
        />
        <DashboardCard 
          to="/resources" 
          icon={<FaRocket className="text-5xl text-accent-primary mx-auto mb-4" />}
          title="Interesting Resources"
          description="Discover curated papers, articles, and videos to fuel your curiosity."
        />
        <DashboardCard 
          to="/contacts" 
          icon={<FaUsers className="text-5xl text-accent-primary mx-auto mb-4" />}
          title="Connect with People"
          description="Find and connect with alumni and current students in the field."
        />
        <DashboardCard 
          to="/chat" 
          icon={<FaComments className="text-5xl text-accent-primary mx-auto mb-4" />}
          title="Physics Discussion Forum"
          description="Ask questions and chat with peers in a moderated, exclusive forum."
        />
      </div>
    </div>
  );
};

// Reusable Card Component for the Dashboard
const DashboardCard = ({ to, icon, title, description }) => (
  <Link 
    to={to} 
    className="bg-background-secondary p-6 rounded-lg hover:bg-opacity-80 border border-border-color transition-all transform hover:-translate-y-1 flex flex-col items-center shadow-lg"
  >
    {icon}
    <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
    <p className="text-text-secondary text-sm">{description}</p>
  </Link>
);

export default Home;

