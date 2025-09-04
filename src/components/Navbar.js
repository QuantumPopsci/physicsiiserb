import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAtom, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = "text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkStyles = "bg-gray-800 text-white";

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Title */}
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 text-white" onClick={() => setIsOpen(false)}>
              <FaAtom className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-xl">Physics Guide</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Home</NavLink>
              <NavLink to="/courses" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Courses</NavLink>
              <NavLink to="/timetable" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Timetable</NavLink>
              <NavLink to="/resources" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Resources</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Contacts</NavLink>
              <NavLink to="/chat" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Chat</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/courses" className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Courses</NavLink>
            <NavLink to="/timetable" className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Timetable</NavLink>
            <NavLink to="/resources" className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Resources</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Contacts</NavLink>
            <NavLink to="/chat" className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Chat</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

