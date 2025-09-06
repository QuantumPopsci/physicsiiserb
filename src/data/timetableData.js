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

  { type: 'Core', title: 'Mechanics', courseCode: 'PHY101', slot: 'X', hall: 'L-5', instructor: 'Suhas Gangadharaiah, Mayuresh Surnis', color: '#ff6347' },

  { type: 'Core', title: 'General Physics Laboratory I', courseCode: 'PHY103', slot: 'N/A', hall: 'UG Lab', instructor: 'Ravi Shankar Singh, Sukanta Panda', color: '#4682b4' },

  { type: 'PreMajor', title: 'Waves and Optics', courseCode: 'PHY201X', slot: 'C', hall: 'L1', instructor: 'Adarsh K V', color: '#32cd32' },

  { type: 'PreMajor', title: 'General Physics Laboratory II', courseCode: 'PHY205', slot: 'N/A', hall: 'UG Lab', instructor: 'Surajit Saha', color: '#ffd700' },

  { type: 'PreMajor', title: 'Electromagnetism', courseCode: 'PHY209', slot: 'X', hall: 'L1', instructor: 'Sunil Pratap Singh', color: '#ff4500' },

  { type: 'Mandatory', title: 'Mathematical Methods I', courseCode: 'PHY301N', slot: 'C', hall: 'A2', instructor: 'Nirmal Ganguli', color: '#da70d6' },

  { type: 'Mandatory', title: 'Introduction to Quantum Mechanics', courseCode: 'PHY303N', slot: 'A', hall: 'A2', instructor: 'Nabamita Banerjee', color: '#00ced1' },

  { type: 'Mandatory', title: 'Classical Mechanics', courseCode: 'PHY305', slot: 'J', hall: 'A2', instructor: 'Chandan Samanta', color: '#8a2be2' },

  { type: 'Mandatory', title: 'Physics Laboratory I', courseCode: 'PHY307N', slot: 'N/A', hall: 'PG Lab', instructor: 'Rohan Singh', color: '#ff1493' },

  { type: 'Elective', title: 'Thermal Physics', courseCode: 'PHY309', slot: 'D', hall: 'A2', instructor: 'Snigdha Thakur', color: '#20b2aa' },

  { type: 'Mandatory', title: 'Basic Electronics', courseCode: 'PHY311', slot: 'I', hall: 'L-4', instructor: 'Pydi Ganga Mamba Bahubalindruni', color: '#778899' },

];



export const schedule = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
  events: {
    "Monday": {
      "9:00 AM": [{ code: "PHY 405", span: 4 }, { code: "PHY101", span: 1 }],
      
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
      "9:00 AM": [{ code: "PHY 442", span: 1 }, { code: "PHY101", span: 1 }],
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
      "12:00 PM": [{ code: "PHY 416", span: 1 }, { code: "PHY101", span: 1 }],
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
