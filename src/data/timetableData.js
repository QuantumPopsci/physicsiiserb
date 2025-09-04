// This file contains all the data for the Timetable page.
// The colors are chosen to match the user-provided image.

export const courses = [
  { type: 'Mandatory', name: 'Condensed Matter Physics', code: 'PHY 403', slot: 'B', hall: 'A1', instructor: 'DSR', color: 'bg-yellow-500' },
  { type: 'Mandatory', name: 'Electrodynamics', code: 'PHY 407', slot: 'L', hall: 'A1', instructor: 'ABN', color: 'bg-lime-500' },
  { type: 'Mandatory', name: 'Condensed Matter Physics Lab', code: 'PHY 405', slot: 'XYK', hall: 'LAB', instructor: 'AK', color: 'bg-cyan-600' },
  { type: 'Elective', name: 'Quantum Information Theory', code: 'PHY 425/625', slot: 'A', hall: 'A1', instructor: 'PKP', color: 'bg-purple-600' },
  { type: 'Elective', name: 'Decoherence and Open Quantum Systems', code: 'PHY 435', slot: 'E', hall: 'ABL 308', instructor: 'SC', color: 'bg-orange-500' },
  { type: 'Elective', name: 'General Relativity', code: 'PHY 416', slot: 'F', hall: 'A1', instructor: 'RM', color: 'bg-teal-500' },
  { type: 'Elective', name: 'Experimental Techniques', code: 'PHY 419', slot: 'M', hall: 'A1', instructor: 'RPS', color: 'bg-pink-600' },
  { type: 'Elective', name: 'Advanced MM', code: 'PHY 601', slot: 'J', hall: 'A1', instructor: 'AR', color: 'bg-red-600' },
  { type: 'Elective', name: 'Advanced Statmech', code: 'PHY 634', slot: 'K', hall: 'ABL 108', instructor: 'AS', color: 'bg-gray-500' },
  { type: 'Elective', name: 'QFT I', code: 'PHY 415/615', slot: 'K', hall: 'A1', instructor: 'Subhendra Mohanty', color: 'bg-indigo-600' },
  { type: 'Elective', name: 'Special Topics in QM 3', code: 'PHY 442', slot: 'C', hall: 'A1', instructor: 'SD', color: 'bg-amber-400' },
  { type: '(5TH YEAR)', name: 'Cosmology', code: 'PHY 531/631', slot: 'I', hall: 'A1', instructor: 'Raha', color: 'bg-green-600' },
  { type: '(5TH YEAR)', name: 'Standard Model of Physics', code: 'PHY 639', slot: 'D', hall: 'A1', instructor: 'Rahul Srivastava', color: 'bg-blue-600' },
];

export const schedule = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
  events: {
    "Monday": [
      { time: "9:00 AM", code: "PHY 425", span: 1 },
      { time: "10:00 AM", code: "PHY 442", span: 1 },
      { time: "11:00 AM", code: "PHY 639", span: 1 },
      { time: "2:00 PM", code: "PHY 405", span: 1 },
      { time: "3:00 PM", code: "PHY 531", span: 1, shared: "PHY 601" },
      { time: "4:00 PM", code: "PHY 415", span: 1 },
    ],
    "Tuesday": [
      { time: "9:00 AM", code: "PHY 425", span: 1 },
      { time: "10:00 AM", code: "PHY 639", span: 1 },
      { time: "11:00 AM", code: "PHY 435", span: 1, shared: "PHY 416" },
      { time: "12:00 PM", code: "PHY 405", span: 3 },
      { time: "3:00 PM", code: "PHY 531", span: 1, shared: "PHY 601" },
      { time: "4:00 PM", code: "PHY 407", span: 1 },
    ],
    "Wednesday": [
      { time: "9:00 AM", code: "PHY 442", span: 1 },
      { time: "10:00 AM", code: "PHY 403", span: 1 },
      { time: "11:00 AM", code: "PHY 639", span: 1, shared: "PHY 416" },
      { time: "2:00 PM", code: "PHY 405", span: 1 },
      { time: "3:00 PM", code: "PHY 531", span: 1, shared: "PHY 601" },
      { time: "4:00 PM", code: "PHY 419", span: 1 },
    ],
    "Thursday": [
      { time: "9:00 AM", code: "PHY 425", span: 1 },
      { time: "10:00 AM", code: "PHY 403", span: 1 },
      { time: "11:00 AM", code: "PHY 435", span: 1, shared: "PHY 416" },
      { time: "2:00 PM", code: "PHY 405", span: 1 },
      { time: "3:00 PM", code: "PHY 407", span: 1 },
      { time: "4:00 PM", code: "PHY 419", span: 1 },
    ],
    "Friday": [
        { time: "9:00 AM", code: "PHY 442", span: 1 },
        { time: "10:00 AM", code: "PHY 403", span: 1 },
        { time: "2:00 PM", code: "PHY 415", span: 1 },
        { time: "3:00 PM", code: "PHY 407", span: 1 },
        { time: "4:00 PM", code: "PHY 419", span: 1 },
    ]
  }
};
