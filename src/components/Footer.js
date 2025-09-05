import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-secondary/80 backdrop-blur-sm border-t border-border-color transition-colors duration-300">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} IISER Bhopal 22279 Physics Major. All rights reserved.</p>
        <p className="text-sm mt-1">Crafted for the love of Physics.</p>
      </div>
    </footer>
  );
};

export default Footer;
