import React from 'react';
import { schedule, courses } from '../data/timetableData';

const Timetable = () => {
  const { days, timeSlots, events } = schedule;

  return (
    <div className="animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Semester Timetable</h1>
      <p className="text-lg text-text-secondary mb-8">Schedule for the 2025-26 academic year.</p>

      {/* Timetable Grid */}
      <div className="overflow-x-auto card-base p-4">
        <div className="min-w-full grid" style={{ gridTemplateColumns: `auto repeat(${days.length}, 1fr)` }}>
          {/* Header Row */}
          <div className="font-bold text-text-secondary p-2">Time</div>
          {days.map(day => <div key={day} className="font-bold text-text-primary text-center p-2 border-b border-border-color">{day}</div>)}

          {/* Time Slots and Events */}
          {timeSlots.map(time => (
            <React.Fragment key={time}>
              <div className="font-semibold text-text-secondary p-2 border-r border-border-color">{time}</div>
              {days.map(day => {
                const dayEvents = events.filter(e => e.day === day && e.time === time);
                return (
                  <div key={`${day}-${time}`} className="border-b border-r border-border-color p-1 space-y-1">
                    {dayEvents.map(event => (
                       <div key={event.courseCode} className={`p-2 rounded-md text-white text-xs font-bold text-center shadow-md`} style={{ backgroundColor: event.color }}>
                        {event.courseCode}
                      </div>
                    ))}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Course List */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-6">Course Offerings</h2>
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.courseCode} className="card-base p-4 flex items-center gap-4">
              <div className="w-4 h-12 rounded" style={{ backgroundColor: course.color }}></div>
              <div>
                <h3 className="font-bold text-accent-primary">{course.courseCode} - {course.title}</h3>
                <p className="text-sm text-text-secondary">
                  <strong>Instructor:</strong> {course.instructor} | <strong>Venue:</strong> {course.hall} | <strong>Type:</strong> {course.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;

