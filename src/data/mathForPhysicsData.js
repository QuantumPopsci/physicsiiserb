// This file contains the data for the "Math for Physics" page,
// structured by mathematical field and its applications in physics.

export const mathTopics = [
  {
    field: "Calculus (Differential & Integral)",
    description: "The study of continuous change. Calculus is the bedrock of physics, used to describe everything from the motion of planets to the flow of heat and the evolution of quantum wavefunctions.",
    applications: ["Classical Mechanics", "Electromagnetism", "Thermodynamics", "Quantum Mechanics"],
  },
  {
    field: "Linear Algebra",
    description: "The mathematics of vectors, vector spaces, and linear transformations. It is the essential language for quantum mechanics, where physical states are represented as vectors in Hilbert space.",
    applications: ["Quantum Mechanics", "Classical Mechanics (Rotations)", "Computational Physics"],
  },
  {
    field: "Differential Equations (ODEs & PDEs)",
    description: "Equations that relate a function with its derivatives. Nearly every fundamental law of physics, from Newton's second law to the Schrödinger equation, is expressed as a differential equation.",
    applications: ["Electromagnetism (Maxwell's Eqns)", "Quantum Mechanics (Schrödinger Eqn)", "Wave Mechanics", "Fluid Dynamics"],
  },
  {
    field: "Vector Calculus",
    description: "Extends calculus to vector fields. It is indispensable for electromagnetism, providing the tools (gradient, divergence, curl) to understand electric and magnetic fields in three dimensions.",
    applications: ["Electromagnetism", "Fluid Mechanics", "Classical Mechanics"],
  },
  {
    field: "Complex Analysis",
    description: "The study of functions of complex numbers. It provides powerful techniques for solving difficult integrals and is a cornerstone of quantum mechanics and quantum field theory.",
    applications: ["Quantum Mechanics", "Quantum Field Theory", "Electrical Engineering", "Wave Phenomena"],
  },
  {
    field: "Tensor Calculus & Differential Geometry",
    description: "The language of modern gravity and curved spaces. Tensors provide a generalized way to describe physical quantities independent of a coordinate system, while differential geometry is essential for understanding the curvature of spacetime in General Relativity.",
    applications: ["General Relativity", "Continuum Mechanics", "String Theory"],
  },
  {
    field: "Probability & Statistics",
    description: "The mathematics of uncertainty and data. It's fundamental to statistical mechanics for describing systems with many particles and to quantum mechanics for its probabilistic nature.",
    applications: ["Statistical Mechanics", "Quantum Mechanics (Measurement)", "Experimental Data Analysis"],
  },
  {
    field: "Group & Representation Theory",
    description: "The mathematical study of symmetry. Group theory is fundamental because symmetries lead to conservation laws (Noether's Theorem). Representation theory provides the framework to describe how physical states (like elementary particles) transform under these symmetries.",
    applications: ["Particle Physics (Standard Model)", "Quantum Field Theory", "Condensed Matter (Crystallography)", "Spectroscopy"],
  },
  {
    field: "Topology & Modern Geometry",
    description: "The study of properties of space that are preserved under continuous deformations. In modern physics, topology is crucial for understanding exotic phases of matter, like topological insulators, and for describing defects in condensed matter systems and the global structure of spacetime.",
    applications: ["Condensed Matter (Topological Phases)", "Quantum Field Theory (Solitons & Monopoles)", "Cosmology"],
  },
];

export const mathResources = {
  articles: [
    {
      title: 'Mathematical Methods for Physicists',
      description: 'A classic, comprehensive textbook by Arfken, Weber, and Harris. A must-have reference.',
      link: '#', // Placeholder for a link to buy or find the book
      type: 'web'
    },
    {
      title: 'Div, Grad, Curl, and All That',
      description: 'An informal text on vector calculus that is highly praised for its intuitive approach.',
      link: '#', // Placeholder
      type: 'web'
    },
     {
      title: 'The Road to Reality by Roger Penrose',
      description: 'A complete and comprehensive guide to the laws of the universe, with a deep dive into the required mathematics.',
      link: '#', // Placeholder
      type: 'web'
    },
  ],
  videos: [
    {
      title: 'The Map of Mathematics | Domain of Science',
      videoId: 's_orc52_o_0'
    },
    {
      title: 'But what is a Fourier series? | 3Blue1Brown',
      videoId: 'r6sGWTCMz2k'
    },
    {
      title: 'Tensors for Beginners | eigenchris',
      videoId: 'TvxmkZmBa-k'
    },
    {
      title: 'Essence of linear algebra | 3Blue1Brown',
      videoId: 'fNk_zzaMoSs'
    },
    {
      title: 'Differential equations, a tourist\'s guide | Grant Sanderson',
      videoId: 'p_di4Zn4wz4'
    },
    {
      title: 'Why is Group Theory important? | PBS Space Time',
      videoId: '_HlS-T_RRg4'
    },
    {
      title: 'Who cares about topology? (Inscribed rectangle problem) | 3Blue1Brown',
      videoId: 'AmgkSdhK4K8'
    },
    {
      title: 'Lie groups and Lie algebras for physicists | Michael Penn',
      videoId: 'N2zd_b_3_48'
    }
  ]
};

