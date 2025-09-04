import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAtom } from 'react-icons/fa';

const Navbar = () => {
  const linkStyles = "text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkStyles = "bg-gray-800 text-white";

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 text-white">
              <FaAtom className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-xl">Physics Guide</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Home</NavLink>
              <NavLink to="/courses" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Courses</NavLink>
              <NavLink to="/timetable" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Timetable</NavLink>
              <NavLink to="/chat" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Chat</NavLink> {/* Add Chat Link */}
              <NavLink to="/resources" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Resources</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Contacts</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

