import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courseData'; // Ensure this data file exists
import { FaBook, FaLink, FaFlask, FaArrowLeft } from 'react-icons/fa';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div className="text-center text-red-400">Course not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <Link to="/courses" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6">
        <FaArrowLeft />
        Back to Courses
      </Link>
      <h1 className="text-4xl font-extrabold mb-2 gradient-text">{course.title}</h1>
      <p className="text-lg text-gray-400 font-mono mb-8">{course.code}</p>
      
      {/* Course Structure and Syllabus */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-4">Course Structure & Syllabus</h2>
        <div className="prose prose-invert max-w-none bg-gray-800/50 p-4 rounded-md border border-gray-700">
            <ul>
                {course.syllabus.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
      </div>

      {/* Course Texts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-4">Course Texts</h2>
        <ul className="space-y-3">
          {course.texts.map((book, index) => (
            <li key={index} className="flex items-start gap-4 p-3 bg-gray-800/50 rounded-md border border-gray-700">
              <FaBook className="text-cyan-400 text-xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-100">{book.title}</p>
                <p className="text-sm text-gray-400">{book.author}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-500 hover:underline">
                  [PDF Link]
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-4">Notes</h2>
        <a href={course.notesLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 p-3 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors text-white font-semibold">
          <FaLink />
          Access Drive Folder
        </a>
      </div>

      {/* Relevant Fields */}
      <div>
        <h2 className="text-2xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-4">Relevant For</h2>
        <div className="flex flex-wrap gap-2">
            {course.relevantFields.map((field, index) => (
                <span key={index} className="flex items-center gap-2 bg-gray-700 text-cyan-200 text-sm font-medium px-3 py-1 rounded-full">
                    <FaFlask />
                    {field}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
