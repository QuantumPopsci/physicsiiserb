import React from 'react';
import { schedule, courses } from '../data/timetableData';

const Timetable = () => {
    // A map for quick course lookup by code.
    const courseMap = React.useMemo(() => {
        const map = new Map();
        courses.forEach(course => {
            const codes = course.courseCode?.split('/') || [course.courseCode];
            codes.forEach(code => {
                if (code) map.set(code.trim(), course);
            });
        });
        return map;
    }, []);

    // Pre-process the schedule to unroll multi-hour events and find max clashes
    const processedLayout = React.useMemo(() => {
        const layout = {};
        const maxClashesByTime = {};

        schedule.timeSlots.forEach(time => {
            maxClashesByTime[time] = 1; // Default to 1 row
        });

        schedule.days.forEach(day => {
            layout[day] = {};
            // Unroll spanned events first
            Object.entries(schedule.events[day] || {}).forEach(([time, dayEvents]) => {
                const mainEvent = dayEvents[0];
                if (mainEvent.span > 1) {
                    const startIndex = schedule.timeSlots.indexOf(time);
                    for (let i = 0; i < mainEvent.span; i++) {
                        const currentTimeSlot = schedule.timeSlots[startIndex + i];
                        if (currentTimeSlot) {
                            if (!layout[day][currentTimeSlot]) layout[day][currentTimeSlot] = [];
                            layout[day][currentTimeSlot].push({ ...mainEvent, isContinuation: i > 0 });
                        }
                    }
                } else {
                    if (!layout[day][time]) layout[day][time] = [];
                    layout[day][time].push(...dayEvents);
                }
            });

            // Calculate max clashes for each time slot
            Object.entries(layout[day]).forEach(([time, events]) => {
                if (events.length > maxClashesByTime[time]) {
                    maxClashesByTime[time] = events.length;
                }
            });
        });

        return { layout, maxClashesByTime };
    }, []);
    
    const { layout, maxClashesByTime } = processedLayout;

    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Semester Timetable</h1>
            <p className="text-lg text-text-secondary mb-8">Schedule for the upcoming semester (2025-26 I)</p>

            <div className="card-base p-4 overflow-x-auto mb-12">
                <table className="w-full min-w-[1000px] border-collapse">
                    <thead>
                        <tr>
                            <th className="w-28 font-bold text-text-primary text-center p-2 border-b border-r border-border-color">Time</th>
                            {schedule.days.map(day => (
                                <th key={day} className="font-bold text-text-primary text-center p-2 border-b border-border-color">{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.timeSlots.map(time => {
                            const numRowsForTime = maxClashesByTime[time];
                            return Array.from({ length: numRowsForTime }).map((_, rowIndex) => (
                                <tr key={`${time}-${rowIndex}`}>
                                    {rowIndex === 0 && (
                                        <td rowSpan={numRowsForTime} className="font-mono text-xs text-text-secondary text-center p-2 border-r border-t border-border-color align-middle">
                                            {time}
                                        </td>
                                    )}
                                    {schedule.days.map(day => {
                                        const eventsForSlot = layout[day]?.[time] || [];
                                        const event = eventsForSlot[rowIndex];
                                        if (!event) {
                                            return <td key={`${day}-${time}-${rowIndex}`} className="border-t border-border-color"></td>;
                                        }
                                        const course = courseMap.get(event.code);
                                        if (!course) return <td key={`${day}-${time}-${rowIndex}`} className="border-t border-border-color"></td>;
                                        
                                        return (
                                            <td key={`${day}-${time}-${rowIndex}`} className="p-1 border-t border-border-color">
                                                <div
                                                    style={{ backgroundColor: course.color, textShadow: '0px 1px 3px rgba(0, 0, 0, 0.4)' }}
                                                    className="p-1.5 rounded text-white text-xs font-semibold flex flex-col justify-center items-center text-center h-12"
                                                >
                                                    <span>{event.code}</span>
                                                    <span className="font-normal opacity-90 hidden sm:block">{course.title}</span>
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ));
                        })}
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

