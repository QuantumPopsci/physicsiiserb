// This file contains all the data for the Timetable page.
// The data structure has been updated to handle clashing time slots.

export const courses = [
  { type: 'Mandatory', title: 'Condensed Matter Physics', courseCode: 'PHY 403', slot: 'B', hall: 'A1', instructor: 'Dhanvir Singh Rana', color: '#16a34a' },
  { type: 'Mandatory', title: 'Electrodynamics', courseCode: 'PHY 407', slot: 'L', hall: 'A1', instructor: 'Adarsh Bhaskar Vasista', color: '#84cc16' },
  { type: 'Mandatory', title: 'Condensed Matter Physics Lab', courseCode: 'PHY 405', slot: 'XYK', hall: 'LAB', instructor: 'Arnab Khan', color: '#0891b2' },
  { type: 'Elective', title: 'Quantum Information Theory', courseCode: 'PHY 425', slot: 'A', hall: 'A1', instructor: 'Phani Kumar Peddibhotla', color: '#9333ea' },
  { type: 'Elective', title: 'Decoherence and Open Quantum Systems', courseCode: 'PHY 435', slot: 'E', hall: 'A1', instructor: 'Subhash Chaturvedi', color: '#f97316' },
  { type: 'Elective', title: 'General Relativity', courseCode: 'PHY 416', slot: 'F', hall: 'A1', instructor: 'Ritam Mallick', color: '#0d9488' },
  { type: 'Elective', title: 'Experimental Techniques', courseCode: 'PHY 419', slot: 'M', hall: 'A1', instructor: 'Ravi Prakash Singh', color: '#db2777' },
  { type: 'Elective', title: 'Advanced Mathematical Methods', courseCode: 'PHY 601', slot: 'J', hall: 'A1', instructor: 'Arnab Rudra', color: '#dc2626' },
  { type: 'Elective', title: 'Advanced Statistical Mechanics', courseCode: 'PHY 634', slot: 'K', hall: 'ABL 108', instructor: 'Auditya Sharma', color: '#6b7280' },
  { type: 'Elective', title: 'Quantum Field Theory I', courseCode: 'PHY 415', slot: 'K', hall: 'A1', instructor: 'Subhendra Mohanty', color: '#4f46e5' },
  { type: 'Elective', title: 'Special Topics in Quantum Mechanics', courseCode: 'PHY 442', slot: 'C', hall: 'A1', instructor: 'Suvankar Dutta', color: '#f59e0b' },
  { type: '(5TH YEAR)', title: 'Standard Model of Physics', courseCode: 'PHY 639', slot: 'D', hall: 'A1', instructor: 'Rahul Srivastava', color: '#2563eb' },
];

export const schedule = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
  events: {
    "Monday": {
      "9:00 AM": [{ code: "PHY 405", span: 4 }],
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
      "2:00 PM": [{ code: "PHY 405", span: 4 }], // Clash
      "4:00 PM": [{ code: "PHY 601", span: 1 }],
    },
    "Wednesday": {
      "8:00 AM": [{ code: "PHY 425", span: 1 }],
      "9:00 AM": [{ code: "PHY 442", span: 1 }],
      "10:00 AM": [{ code: "PHY 403", span: 1 }],
      "11:00 AM": [{ code: "PHY 639", span: 1 }],// Clash
      "12:00 PM": [{ code: "PHY 416", span: 1 }],
      "2:00 PM": [{ code: "PHY 419", span: 1 }],// Clash
      "4:00 PM": [{ code: "PHY 601", span: 1 }],
      "5:00 PM": [{ code: "PHY 634", span: 1 }],
      
    },
    "Thursday": {
      "10:00 AM": [{ code: "PHY 403", span: 1 }],
      "11:00 AM": [{ code: "PHY 435", span: 1 }], // Clash
      "12:00 PM": [{ code: "PHY 416", span: 1 }],
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
      "12:00 PM": [{ code: "PHY 419", span: 1 }],
      "2:00 PM": [{ code: "PHY 415", span: 1 }],
      "4:00 PM": [{ code: "PHY 407", span: 1 }],
      "5:00 PM": [{ code: "PHY 634", span: 1 }],
    }
  }
};

