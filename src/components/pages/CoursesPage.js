// src/components/pages/CoursesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courseData';
import './Pages.css';

function CoursesPage() {
  return (
    <div className="page-container">
      <h1>Physics Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`} className="course-card">
            <h3>{course.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
