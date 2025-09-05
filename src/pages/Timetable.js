import React from 'react';
import { schedule, courses } from '../data/timetableData';

const Timetable = () => {
    const { days, timeSlots, events } = schedule;

    // A map for quick course lookup by code.
    const courseMap = React.useMemo(() => {
        const map = new Map();
        courses.forEach(course => {
            // FIX: Use 'courseCode' and 'title' from the corrected data file
            const codes = course.courseCode?.split('/') || [course.courseCode];
            codes.forEach(code => {
                if (code) map.set(code.trim(), course);
            });
        });
        return map;
    }, []);

    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Semester Timetable</h1>
            <p className="text-lg text-text-secondary mb-8">Schedule for the upcoming semester (2025-26 I)</p>

            {/* Timetable Grid */}
            <div className="card-base p-4 overflow-x-auto mb-12">
                <div className="min-w-[1000px] grid" style={{
                    gridTemplateColumns: `auto repeat(${days.length}, 1fr)`,
                    gridTemplateRows: `auto repeat(${timeSlots.length}, 1fr)`
                }}>
                    {/* Top-left empty cell */}
                    <div className="sticky top-0 left-0 z-20"></div>
                    
                    {/* Day Headers */}
                    {days.map((day) => (
                        <div key={day} className="font-bold text-text-primary text-center p-2 border-b border-border-color sticky top-0 bg-background-secondary/80 z-10">
                            {day}
                        </div>
                    ))}

                    {/* Time Slot Headers */}
                    {timeSlots.map((time, index) => (
                        <div key={time} className="font-semibold text-text-secondary p-2 border-r border-border-color sticky left-0 bg-background-secondary/80 flex items-center justify-center" style={{ gridRow: index + 2 }}>
                            {time}
                        </div>
                    ))}

                    {/* Grid Cells for Background */}
                    {days.map((day, dayIndex) => (
                        timeSlots.map((time, timeIndex) => (
                            <div key={`${day}-${time}`} className="border-b border-r border-border-color" style={{
                                gridColumn: dayIndex + 2,
                                gridRow: timeIndex + 2,
                            }}></div>
                        ))
                    ))}

                    {/* Event Blocks */}
                    {days.map((day, dayIndex) => (
                        Object.entries(events[day] || {}).map(([time, dayEvents]) => {
                            const timeIndex = timeSlots.indexOf(time);
                            if (timeIndex === -1) return null;

                            return (
                                <div
                                    key={`${day}-${time}`}
                                    className="p-1 relative"
                                    style={{
                                        gridColumn: dayIndex + 2,
                                        gridRow: `${timeIndex + 2} / span ${dayEvents[0].span}`
                                    }}
                                >
                                    {dayEvents.map((event, index) => {
                                        const course = courseMap.get(event.code);
                                        if (!course) return null;
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    backgroundColor: course.color,
                                                    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.4)',
                                                    // Overlap clashing courses
                                                    top: `${index * 1}rem`, 
                                                    left: `${index * 1}rem`,
                                                }}
                                                className="absolute w-[calc(100%-1.5rem)] h-[calc(100%-0.5rem)] p-1.5 rounded text-white text-xs font-semibold flex flex-col justify-center items-center text-center shadow-lg"
                                            >
                                                <span>{event.code}</span>
                                                <span className="font-normal opacity-90 hidden sm:block">{course.title}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })
                    ))}
                </div>
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

