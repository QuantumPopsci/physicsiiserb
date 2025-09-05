// This file contains all the data for the Timetable page.
// The data structure has been updated to handle clashing time slots.

export const courses = [
  { type: 'Mandatory', name: 'Condensed Matter Physics', code: 'PHY 403', slot: 'B', hall: 'A1', instructor: 'Dhanvir Singh Rana', color: 'bg-green-600' },
  { type: 'Mandatory', name: 'Electrodynamics', code: 'PHY 407', slot: 'L', hall: 'A1', instructor: 'Adarsh Bhaskar Vasista', color: 'bg-lime-500' },
  { type: 'Mandatory', name: 'Condensed Matter Physics Lab', code: 'PHY 405', slot: 'XYK', hall: 'LAB', instructor: 'Arnab Khan', color: 'bg-cyan-600' },
  { type: 'Elective', name: 'Quantum Information Theory', code: 'PHY 425', slot: 'A', hall: 'A1', instructor: 'Phani Kumar Peddibhotla', color: 'bg-purple-600' },
  { type: 'Elective', name: 'Decoherence and Open Quantum Systems', code: 'PHY 435', slot: 'E', hall: 'A1', instructor: 'Subhash Chaturvedi', color: 'bg-orange-500' },
  { type: 'Elective', name: 'General Relativity', code: 'PHY 416', slot: 'F', hall: 'A1', instructor: 'Ritam Mallick', color: 'bg-teal-500' },
  { type: 'Elective', name: 'Experimental Techniques', code: 'PHY 419', slot: 'M', hall: 'A1', instructor: 'Ravi Prakash Singh', color: 'bg-pink-600' },
  { type: 'Elective', name: 'Advanced Mathematical Methods', code: 'PHY 601', slot: 'J', hall: 'A1', instructor: 'Arnab Rudra', color: 'bg-red-600' },
  { type: 'Elective', name: 'Advanced Statistical Mechanics', code: 'PHY 634', slot: 'K', hall: 'ABL 108', instructor: 'Auditya Sharma', color: 'bg-gray-500' },
  { type: 'Elective', name: 'Quantum Field Theory I', code: 'PHY 415', slot: 'K', hall: 'A1', instructor: 'Subhendra Mohanty', color: 'bg-indigo-600' },
  { type: 'Elective', name: 'Special Topics in Quantum Mechanics', code: 'PHY 442', slot: 'C', hall: 'A1', instructor: 'Suvankar Dutta', color: 'bg-amber-400' },
  { type: '(5TH YEAR)', name: 'Standard Model of Physics', code: 'PHY 639', slot: 'D', hall: 'A1', instructor: 'Rahul Srivastava', color: 'bg-blue-600' },
];

export const schedule = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
  events: {
    "Monday": {
      "10:00 AM": [{ code: "PHY 405", span: 3 }],
      "11:00 AM": [{ code: "PHY 639", span: 1 }],
      "3:00 PM": [{ code: "PHY 407", span: 1 }],
      "4:00 PM": [{ code: "PHY 601", span: 1 }],
      "5:00 PM": [{ code: "PHY 415", span: 1 }], // Clash
      "6:00 PM": [{ code: "PHY 442", span: 1 }],
    },
    "Tuesday": {
      "8:00 AM": [{ code: "PHY 425", span: 1 }],
      "10:00 AM": [{ code: "PHY 639", span: 1 }],
      "11:00 AM": [{ code: "PHY 435", span: 1 }], // Clash
      "12:00 PM": [{ code: "PHY 416", span: 1 }], // Lab
      "2:00 PM": [{ code: "PHY 405", span: 3 }], // Clash
      "4:00 PM": [{ code: "PHY 601", span: 1 }],
    },
    "Wednesday": {
      "8:00 AM": [{ code: "PHY 425", span: 1 }],
      "9:00 AM": [{ code: "PHY 442", span: 1 }],
      "10:00 AM": [{ code: "PHY 403", span: 1 }],
      "11:00 AM": [{ code: "PHY 639", span: 1 }],// Clash
      "12:00 AM": [{ code: "PHY 416", span: 1 }],
      "2:00 PM": [{ code: "PHY 419", span: 1 }],// Clash
      "4:00 PM": [{ code: "PHY 601", span: 1 }],
      "5:00 PM": [{ code: "PHY 634", span: 1 }],
      
    },
    "Thursday": {
      "10:00 AM": [{ code: "PHY 403", span: 1 }],
      "11:00 AM": [{ code: "PHY 435", span: 1 }], // Clash
      "12:00 AM": [{ code: "PHY 416", span: 1 }],
      "2:00 PM": [{ code: "PHY 419", span: 1 }],
      "3:00 PM": [{ code: "PHY 415", span: 1 }],
      "4:00 PM": [{ code: "PHY 407", span: 1 }],
      "5:00 PM": [{ code: "PHY 634", span: 1 }],
    },
    "Friday": {
      "8:00 AM": [{ code: "PHY 425", span: 1 }],
      "9:00 AM": [{ code: "PHY 442", span: 1 }],
      "10:00 AM": [{ code: "PHY 403", span: 1 }],
      "11:00 AM": [{ code: "PHY 435", span: 1 }],
      "12:00 AM": [{ code: "PHY 419", span: 1 }],
      "2:00 PM": [{ code: "PHY 415", span: 1 }],
      "4:00 PM": [{ code: "PHY 407", span: 1 }],
      "5:00 PM": [{ code: "PHY 634", span: 1 }],
    }
  }
};

