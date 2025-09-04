import React from 'react';
import { schedule, courses } from '../data/timetableData';

const Timetable = () => {
  // A map for quick course lookup by code.
  const courseMap = React.useMemo(() => {
    const map = new Map();
    courses.forEach(course => {
      // Handle codes like "PHY 425/625" by mapping both parts
      const codes = course.code.split('/');
      codes.forEach(code => map.set(code.trim(), course));
    });
    return map;
  }, []);

  // Pre-process the schedule to handle multi-hour spans
  const gridLayout = React.useMemo(() => {
    const layout = {};
    schedule.days.forEach(day => {
      layout[day] = {};
      schedule.timeSlots.forEach(time => {
        const events = schedule.events[day]?.[time];
        if (events) {
          layout[day][time] = events;
          // Mark subsequent slots as occupied if an event spans multiple hours
          const mainEvent = events[0]; // Assume span is the same for clashing events
          if (mainEvent.span > 1) {
            const startIndex = schedule.timeSlots.indexOf(time);
            for (let i = 1; i < mainEvent.span; i++) {
              const nextTimeSlot = schedule.timeSlots[startIndex + i];
              if (nextTimeSlot) {
                layout[day][nextTimeSlot] = 'occupied';
              }
            }
          }
        }
      });
    });
    return layout;
  }, []);


  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Semester Timetable</h1>
      <p className="text-lg text-gray-400 mb-8">Schedule for the upcoming semester (2025-26 I)</p>

      {/* Timetable Grid */}
      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 overflow-x-auto mb-12">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="w-24 font-bold text-center p-2 border-b border-r border-gray-600">Time</th>
              {schedule.days.map(day => (
                <th key={day} className="font-bold text-center p-2 border-b border-gray-600">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.timeSlots.map(time => (
              <tr key={time}>
                <td className="font-mono text-xs text-center p-2 border-r border-gray-600 border-t border-gray-700">{time}</td>
                {schedule.days.map(day => {
                  const cellContent = gridLayout[day]?.[time];
                  
                  if (cellContent === 'occupied') {
                    return null; // This cell is covered by a multi-hour class
                  }
                  
                  if (Array.isArray(cellContent)) {
                    const mainEvent = cellContent[0];
                    return (
                      <td key={`${day}-${time}`} rowSpan={mainEvent.span} className="p-1 border-t border-gray-700 align-top">
                        <div className="flex flex-col gap-1">
                          {cellContent.map((event, index) => {
                             const course = courseMap.get(event.code);
                             return (
                              <div key={index} className={`p-2 rounded text-white text-sm font-semibold flex flex-col justify-center items-center text-center ${course.color}`}>
                                <span>{event.code}</span>
                                <span className="text-xs font-normal opacity-90 hidden sm:block">{course.name}</span>
                              </div>
                             )
                          })}
                        </div>
                      </td>
                    );
                  }

                  return <td key={`${day}-${time}`} className="border-t border-gray-700"></td>; // Empty cell
                })}
              </tr>
            ))}
          </tbody>
        </table>
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

