import React from 'react';
import { schedule, courses } from '../data/timetableData';

const Timetable = () => {
  // A map for quick course lookup by code.
  const courseMap = React.useMemo(() => {
    const map = new Map();
    courses.forEach(course => {
      // FIX: Added optional chaining (?.) and a fallback to prevent crashing on malformed data.
      const codes = course.courseCode?.split('/') || [course.courseCode];
      codes.forEach(code => {
        if (code) {
          map.set(code.trim(), course)
        }
      });
    });
    return map;
  }, []);

  // Pre-process the schedule to handle multi-hour spans
  const gridLayout = React.useMemo(() => {
    const layout = {};
    if (!schedule || !schedule.days || !schedule.timeSlots || !schedule.events) {
        return {}; // Failsafe for malformed schedule data
    }
    schedule.days.forEach(day => {
      layout[day] = {};
      schedule.timeSlots.forEach(time => {
        const events = schedule.events[day]?.[time];
        if (events) {
          layout[day][time] = events;
          const mainEvent = events[0];
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
    <div className="animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 gradient-text">Semester Timetable</h1>
      <p className="text-lg text-text-secondary mb-8">Schedule for the upcoming semester (2025-26 I)</p>

      {/* Timetable Grid */}
      <div className="card-base p-4 overflow-x-auto mb-12">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr>
              <th className="w-28 font-bold text-text-primary text-center p-2 border-b border-r border-border-color">Time</th>
              {schedule.days.map(day => (
                <th key={day} className="font-bold text-text-primary text-center p-2 border-b border-border-color">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.timeSlots.map(time => (
              <tr key={time} className="h-28">
                <td className="font-mono text-xs text-text-secondary text-center p-2 border-r border-t border-border-color">{time}</td>
                {schedule.days.map(day => {
                  const cellContent = gridLayout[day]?.[time];
                  if (cellContent === 'occupied') return null;

                  if (Array.isArray(cellContent)) {
                    const mainEvent = cellContent[0];
                    return (
                      <td key={`${day}-${time}`} rowSpan={mainEvent.span} className="p-1 border-t border-border-color align-top">
                        <div className="flex flex-col gap-1 h-full">
                          {cellContent.map((event, index) => {
                            const course = courseMap.get(event.code);
                            if (!course) return <div key={index} className="flex-1"></div>;
                            return (
                              <div 
                                key={index} 
                                style={{ 
                                  backgroundColor: course.color,
                                  textShadow: '0px 1px 3px rgba(0, 0, 0, 0.4)' 
                                }} 
                                className={`p-1.5 rounded text-white text-xs font-semibold flex flex-col justify-center items-center text-center flex-1`}
                              >
                                <span>{event.code}</span>
                                <span className="font-normal opacity-90 hidden sm:block">{course.title}</span>
                              </div>
                            )
                          })}
                          {Array.from({ length: 3 - cellContent.length }).map((_, i) => <div key={`fill-${i}`} className="flex-1"></div>)}
                        </div>
                      </td>
                    );
                  }
                  return <td key={`${day}-${time}`} className="border-t border-border-color"></td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Course List */}
      <div>
        <h2 className="text-3xl font-bold text-text-primary border-l-4 border-accent-primary pl-4 mb-6">Course Offerings</h2>
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.courseCode} className="card-base p-4 flex items-center gap-4">
              <div style={{ backgroundColor: course.color }} className={`w-3 h-12 rounded`}></div>
              <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <div>
                  <h3 className="font-bold text-lg text-text-primary">{course.title}</h3>
                  <p className="text-sm text-accent-primary font-mono">{course.courseCode} ({course.type})</p>
                </div>
                <div className="text-text-primary"><span className="font-semibold text-text-secondary">Instructor:</span> {course.instructor}</div>
                <div className="text-text-primary"><span className="font-semibold text-text-secondary">Slot:</span> {course.slot}</div>
                <div className="text-text-primary"><span className="font-semibold text-text-secondary">Venue:</span> {course.hall}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;

