import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Timetable from './pages/Timetable';
import Resources from './pages/Resources';
import Contacts from './pages/Contacts';
import Chat from './pages/Chat';
import SharedResources from './pages/SharedResources';
import Research from './pages/Research';
import Terms from './pages/Terms';
import ContactUs from './pages/ContactUs';
import MathForPhysics from './pages/MathForPhysics';

function App() {
  // A safer way to initialize state from localStorage, preventing crashes if it's unavailable.
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      // Ensure it only returns 'light' or 'dark'
      return savedTheme === 'dark' ? 'dark' : 'light';
    } catch (error) {
      console.error("Could not access localStorage. Defaulting to light theme.", error);
      return 'light';
    }
  });

  // This effect safely applies the theme to the document and saves the preference.
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error("Could not access localStorage to save theme.", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary relative">
      <ParticleBackground />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/shared-resources" element={<SharedResources />} />
            <Route path="/research" element={<Research />} />
            <Route path="/math-for-physics" element={<MathForPhysics />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

