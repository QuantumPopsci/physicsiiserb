export const courses = [
  {
    id: 'phy101',
    code: 'PHY101',
    title: 'Classical Mechanics',
    description: 'Fundamentals of Newtonian mechanics, Lagrangians, and Hamiltonian dynamics.',
    syllabus: [
      'Kinematics and Dynamics of a Particle',
      'Work, Energy, and Conservation Laws',
      'Oscillations and Waves',
      'Lagrangian and Hamiltonian Formulation',
      'Central Force Motion and Celestial Mechanics',
      'Rigid Body Dynamics'
    ],
    texts: [
      { title: 'Classical Mechanics', author: 'John R. Taylor', link: '/#' },
      { title: 'An Introduction to Mechanics', author: 'Kleppner and Kolenkow', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Astrophysics', 'Condensed Matter', 'Engineering Physics']
  },
  {
    id: 'phy201',
    code: 'PHY201',
    title: 'Quantum Mechanics I',
    description: 'Introduction to the principles of quantum mechanics, wave functions, and the Schrödinger equation.',
    syllabus: [
        'The Wave Function and Schrödinger Equation',
        'Formalism of Quantum Mechanics',
        'Quantum Mechanics in Three Dimensions',
        'The Hydrogen Atom',
        'Spin and Angular Momentum'
    ],
    texts: [
      { title: 'Introduction to Quantum Mechanics', author: 'David J. Griffiths', link: '/#' },
      { title: 'Principles of Quantum Mechanics', author: 'R. Shankar', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Particle Physics', 'Quantum Computing', 'Condensed Matter']
  },
  {
    id: 'phy202',
    code: 'PHY202',
    title: 'Electromagnetism',
    description: 'Study of electrostatics, magnetostatics, and Maxwell\'s equations.',
    syllabus: [
        'Electrostatics and Gauss\'s Law',
        'Magnetostatics and Ampere\'s Law',
        'Electrodynamics and Faraday\'s Law',
        'Maxwell\'s Equations',
        'Electromagnetic Waves'
    ],
    texts: [
      { title: 'Introduction to Electrodynamics', author: 'David J. Griffiths', link: '/#' },
    ],
    notesLink: '/#',
    relevantFields: ['Optics', 'Plasma Physics', 'Accelerator Physics']
  }
];
