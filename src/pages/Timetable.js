import React, { useState, useMemo, useRef } from 'react';
import html2canvas from 'html2canvas';
import { schedule, courses } from '../data/timetableData';
import { FaCheckSquare, FaRegSquare, FaDownload } from 'react-icons/fa';

const Timetable = () => {
    const [selectedCourses, setSelectedCourses] = useState(new Set());
    const tableRef = useRef(null); // 👈 create a reference

    const handleCourseToggle = (courseCode) => {
        setSelectedCourses(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(courseCode)) {
                newSelected.delete(courseCode);
            } else {
                newSelected.add(courseCode);
            }
            return newSelected;
        });
    };

    const courseMap = useMemo(() => {
        const map = new Map();
        courses.forEach(course => {
            const codes = course.courseCode?.split('/') || [course.courseCode];
            codes.forEach(code => {
                if (code) map.set(code.trim(), course);
            });
        });
        return map;
    }, []);

    const processedLayout = useMemo(() => {
        const layout = {};
        const maxClashesByTime = {};

        schedule.timeSlots.forEach(time => {
            maxClashesByTime[time] = 1;
        });

        schedule.days.forEach(day => {
            layout[day] = {};
            const dayEvents = schedule.events[day] || {};
            Object.entries(dayEvents).forEach(([time, eventsInSlot]) => {
                const selectedEvents = eventsInSlot.filter(event => selectedCourses.has(event.code));

                selectedEvents.forEach(event => {
                    if (event.span > 1) {
                        const startIndex = schedule.timeSlots.indexOf(time);
                        for (let i = 0; i < event.span; i++) {
                            const currentTimeSlot = schedule.timeSlots[startIndex + i];
                            if (currentTimeSlot) {
                                if (!layout[day][currentTimeSlot]) layout[day][currentTimeSlot] = [];
                                layout[day][currentTimeSlot].push(event);
                            }
                        }
                    } else {
                        if (!layout[day][time]) layout[day][time] = [];
                        layout[day][time].push(event);
                    }
                });
            });
        });

        schedule.timeSlots.forEach(time => {
            let maxForThisHour = 1;
            schedule.days.forEach(day => {
                const eventsCount = layout[day]?.[time]?.length || 0;
                if (eventsCount > maxForThisHour) {
                    maxForThisHour = eventsCount;
                }
            });
            maxClashesByTime[time] = maxForThisHour;
        });

        return { layout, maxClashesByTime };
    }, [selectedCourses]);
    
    const { layout, maxClashesByTime } = processedLayout;

    // ✅ Step 3: Download timetable as PNG
    const handleDownload = async () => {
        if (!tableRef.current) return;
        const canvas = await html2canvas(tableRef.current, { scale: 2 });
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'My_Timetable.png';
        link.click();
    };

    return (
        <div className="animate-fadeInUp">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold gradient-text">Timetable Builder</h1>
                <button 
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-accent-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-accent-hover transition-colors"
                >
                    <FaDownload /> Download PNG
                </button>
            </div>
            <p className="text-lg text-text-secondary mb-8">
                Select courses from the list to build your personalized schedule.
            </p>

            <div className="lg:flex lg:gap-8">
                {/* Course Selection Panel */}
                <div className="lg:w-1/3 xl:w-1/4 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">Select Your Courses</h2>
                    <div className="card-base p-4 space-y-3 max-h-[70vh] overflow-y-auto">
                        {courses.map(course => (
                            <div 
                                key={course.courseCode} 
                                onClick={() => handleCourseToggle(course.courseCode)}
                                className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-background-primary transition-colors"
                            >
                                {selectedCourses.has(course.courseCode) ? 
                                    <FaCheckSquare className="text-accent-primary text-xl mr-3" /> : 
                                    <FaRegSquare className="text-text-secondary text-xl mr-3" />
                                }
                                <div>
                                    <p className="font-semibold text-text-primary">{course.title}</p>
                                    <p className="text-xs text-text-secondary">{course.courseCode} - {course.instructor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timetable Grid */}
                <div ref={tableRef} className="lg:w-2/3 xl:w-3/4 card-base p-4 overflow-x-auto bg-white">
                    <table className="w-full min-w-[800px] border-collapse">
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
            </div>
        </div>
    );
};

export default Timetable;
