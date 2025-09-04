import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Resources from './pages/Resources';
import Contacts from './pages/Contacts';
import Chat from './pages/Chat';
import Timetable from './pages/Timetable';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [theme, setTheme] = useState('light');

  // This effect runs once on mount to get the saved theme.
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // This effect runs whenever the 'theme' state changes.
  useEffect(() => {
    // THE FIX IS HERE: Use the 'theme' state variable to set the class.
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary text-text-primary">
      <ParticleBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

