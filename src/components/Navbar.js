import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAtom, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = "text-text-secondary hover:text-text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkStyles = "bg-background-secondary text-text-primary";

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/courses", text: "Courses" },
    { to: "/timetable", text: "Timetable" },
    { to: "/research", text: "Research" },
    { to: "/shared-resources", text: "Shared Resources" },
    { to: "/resources", text: "Resources" },
    { to: "/contacts", text: "Contacts" },
    { to: "/chat", text: "Discussion Forum" },
  ];

  return (
    <nav className="bg-background-primary/80 backdrop-blur-sm sticky top-0 z-40 shadow-md border-b border-border-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 text-text-primary" onClick={() => setIsOpen(false)}>
              <FaAtom className="h-8 w-8 text-accent-primary" />
              <span className="font-bold text-xl">Physics Guide</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map(link => (
                <NavLink key={link.to} to={link.to} className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>
                  {link.text}
                </NavLink>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
             <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-background-secondary inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-primary focus:ring-accent-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border-color bg-background-primary" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
                <NavLink 
                    key={link.to} 
                    to={link.to} 
                    className={({ isActive }) => `block ${linkStyles} ${isActive ? activeLinkStyles : ''}`} 
                    onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

