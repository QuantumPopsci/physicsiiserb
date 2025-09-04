import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';

const Courses = () => {
  return (
    <div className="animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Physics Courses</h1>
      <p className="text-lg text-text-secondary mb-8">Click on a course to view its details, syllabus, and resources.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link 
            key={course.id} 
            to={`/courses/${course.id}`}
            className="block p-6 card-base hover:border-accent-primary transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-accent-primary">{course.title}</h2>
            <p className="text-text-secondary mt-2 font-mono text-sm">{course.code}</p>
            <p className="text-text-primary mt-3">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
