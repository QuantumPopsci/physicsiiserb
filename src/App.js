import React, { useState, useEffect } from 'react';
// ... other imports
import Timetable from './pages/Timetable';

function App() {
  const [theme, setTheme] = useState('light'); // Default theme is now 'light'

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
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

