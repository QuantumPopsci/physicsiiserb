import React from 'react';
import { schedule, courses } from '../data/timetableData';

const Timetable = () => {
  const courseMap = courses.reduce((acc, course) => {
    acc[course.code.split('/')[0].trim()] = course; // Handle codes like PHY 425/625
    if (course.code.includes('/')) {
      acc[course.code.split('/')[1].trim()] = course;
    }
    return acc;
  }, {});

  const findEvent = (day, time) => {
    return schedule.events[day]?.find(event => event.time === time);
  };
  
  // Create an array representing occupied slots to handle multi-hour classes
  const getOccupiedSlots = (day) => {
    const occupied = new Set();
    schedule.events[day]?.forEach(event => {
      const startIndex = schedule.timeSlots.indexOf(event.time);
      if (startIndex !== -1) {
        for (let i = 0; i < event.span; i++) {
          occupied.add(schedule.timeSlots[startIndex + i]);
        }
      }
    });
    return occupied;
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Semester Timetable</h1>
      <p className="text-lg text-gray-400 mb-8">Schedule for the upcoming semester (2025-26 I)</p>

      {/* Timetable Grid */}
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 overflow-x-auto mb-12">
        <div className="grid grid-cols-[auto,repeat(5,1fr)] min-w-[800px]">
          {/* Header Row */}
          <div className="font-bold text-center p-2 border-b border-r border-gray-600">Time</div>
          {schedule.days.map(day => (
            <div key={day} className="font-bold text-center p-2 border-b border-gray-600">{day}</div>
          ))}

          {/* Time Slots Rows */}
          {schedule.timeSlots.map(time => {
            const rowCells = [];
            for (const day of schedule.days) {
              const occupiedSlots = getOccupiedSlots(day);
              if (occupiedSlots.has(time)) {
                const event = findEvent(day, time);
                if (event) {
                  const course = courseMap[event.code];
                  const sharedCourse = event.shared ? courseMap[event.shared] : null;
                  rowCells.push(
                    <div key={`${day}-${time}`} className={`row-span-${event.span} p-2 rounded text-white text-sm font-semibold flex flex-col justify-center items-center text-center ${course.color}`} style={{ gridRow: `span ${event.span} / span ${event.span}` }}>
                      <span>{event.code}</span>
                      {sharedCourse && <span className="text-xs opacity-80">/ {event.shared}</span>}
                      <span className="text-xs font-normal opacity-90 hidden sm:block">{course.name}</span>
                    </div>
                  );
                }
              } else {
                 rowCells.push(<div key={`${day}-${time}`} className="border-t border-gray-700"></div>);
              }
            }
            return (
              <React.Fragment key={time}>
                <div className="font-mono text-xs text-center p-2 border-r border-gray-600 border-t border-gray-700">{time}</div>
                {rowCells}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Course List */}
      <div>
        <h2 className="text-3xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4 mb-6">Course Offerings</h2>
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.code} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-4">
              <div className={`w-3 h-12 rounded ${course.color}`}></div>
              <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <div>
                  <h3 className="font-bold text-lg text-white">{course.name}</h3>
                  <p className="text-sm text-cyan-300 font-mono">{course.code} ({course.type})</p>
                </div>
                <div className="text-gray-300"><span className="font-semibold text-gray-400">Instructor:</span> {course.instructor}</div>
                <div className="text-gray-300"><span className="font-semibold text-gray-400">Slot:</span> {course.slot}</div>
                <div className="text-gray-300"><span className="font-semibold text-gray-400">Venue:</span> {course.hall}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
