// src/data/courseData.js
export const courses = [
  {
    id: 'phy101',
    name: 'PHY101: Mechanics',
    syllabus: 'Newtonian Mechanics, Work-Energy Theorem, Rotational Motion, Gravitation...',
    texts: [
      { name: 'An Introduction to Mechanics by Kleppner and Kolenkow', link: '#' },
      { name: 'Classical Mechanics by John R. Taylor', link: '#' },
    ],
    notesLink: '#',
    fields: 'Classical Mechanics, Astrophysics, Engineering Physics',
  },
  {
    id: 'phy102',
    name: 'PHY102: Electricity & Magnetism',
    syllabus: 'Electrostatics, Magnetostatics, Maxwell\'s Equations, Electromagnetic Waves...',
    texts: [
        { name: 'Introduction to Electrodynamics by David J. Griffiths', link: '#' },
    ],
    notesLink: '#',
    fields: 'Electromagnetism, Condensed Matter Physics, Optics',
  },
  // Add more courses here...
];
