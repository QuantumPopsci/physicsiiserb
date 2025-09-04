import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import { FaBook, FaLink, FaFlask, FaArrowLeft } from 'react-icons/fa';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) { return <div className="text-center text-red-500">Course not found!</div>; }

  return (
    <div className="max-w-4xl mx-auto animate-fadeInUp">
      <Link to="/courses" className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary mb-6 transition-colors">
        <FaArrowLeft />
        Back to Courses
      </Link>
      <h1 className="text-4xl font-extrabold mb-2 gradient-text">{course.title}</h1>
      <p className="text-lg text-text-secondary font-mono mb-8">{course.code}</p>
      
      <div className="space-y-10">
        {/* Course Structure and Syllabus */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-4">Course Structure & Syllabus</h2>
          <div className="prose max-w-none bg-background-secondary/50 p-6 rounded-lg border border-border-color">
              <ul className="text-text-secondary">{course.syllabus.map((item, index) => <li key={index}>{item}</li>)}</ul>
          </div>
        </section>

        {/* Course Texts */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-4">Course Texts</h2>
          <ul className="space-y-4">
            {course.texts.map((book, index) => (
              <li key={index} className="flex items-start gap-4 p-4 card-base">
                <FaBook className="text-accent-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-text-primary">{book.title}</p>
                  <p className="text-sm text-text-secondary">{book.author}</p>
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent-primary hover:underline">[PDF Link]</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Notes */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-4">Notes</h2>
          <a href={course.notesLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary rounded-md transition-colors text-white font-semibold">
            <FaLink /> Access Drive Folder
          </a>
        </section>

        {/* Relevant Fields */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-4">Relevant For</h2>
          <div className="flex flex-wrap gap-3">
              {course.relevantFields.map((field, index) => (
                  <span key={index} className="flex items-center gap-2 bg-background-secondary text-accent-primary text-sm font-medium px-4 py-2 rounded-full border border-border-color">
                      <FaFlask /> {field}
                  </span>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetail;

