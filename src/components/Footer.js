import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background-secondary/80 backdrop-blur-sm border-t border-border-color transition-colors duration-300">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <div className="flex justify-center items-center space-x-4 text-sm">
            <p>&copy; {new Date().getFullYear()}  IISER Bhopal Physics Major.</p>
            <span className="text-gray-400">|</span>
            <Link to="/terms" className="hover:text-accent-primary transition-colors">
                Terms of Use
            </Link>
        </div>
        <p className="text-xs mt-2">Crafted for the love of Physics by Samriddha.</p>
      </div>
    </footer>
  );
};

export default Footer;
