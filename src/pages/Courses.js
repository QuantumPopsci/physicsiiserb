import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData'; // We will create this file next

const Courses = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Physics Courses</h1>
      <p className="text-lg text-gray-400 mb-8">Click on a course to view its details, syllabus, and resources.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link 
            key={course.id} 
            to={`/courses/${course.id}`}
            className="block p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-cyan-300">{course.title}</h2>
            <p className="text-gray-400 mt-2 font-mono text-sm">{course.code}</p>
            <p className="text-gray-300 mt-3">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
