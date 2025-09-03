// src/components/pages/CourseDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../../data/courseData';
import './Pages.css';

function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <div className="page-container"><h2>Course not found!</h2></div>;
  }

  return (
    <div className="page-container course-detail-container">
      <h1>{course.name}</h1>

      <div className="course-section">
        <h2>1. Course Structure & Syllabus</h2>
        <p>{course.syllabus}</p>
      </div>

      <div className="course-section">
        <h2>2. Course Texts</h2>
        <ul>
          {course.texts.map((text, index) => (
            <li key={index}>
              <a href={text.link} target="_blank" rel="noopener noreferrer">
                {text.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="course-section">
        <h2>3. Notes</h2>
        <a href={course.notesLink} target="_blank" rel="noopener noreferrer" className="notes-link">
          Link to Google Drive
        </a>
      </div>

      <div className="course-section">
        <h2>4. Relevant Fields</h2>
        <p>{course.fields}</p>
      </div>
    </div>
  );
}

export default CourseDetailPage;
