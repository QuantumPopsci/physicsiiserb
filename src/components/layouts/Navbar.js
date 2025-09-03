// src/components/layouts/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layouts.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        A Hitchhiker's Guide to Physics @ IISERB
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
