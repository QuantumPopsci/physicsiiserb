import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} IISER Bhopal Physics Community. All rights reserved.</p>
        <p className="text-sm mt-1">Crafted with ⚛️ for the love of Physics.</p>
      </div>
    </footer>
  );
};

export default Footer;
