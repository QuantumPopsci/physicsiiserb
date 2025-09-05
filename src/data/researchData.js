// This file contains the data for the "Research in Physics" page.

export const researchTopics = [
  {
    title: "Quantum Computing & Information",
    description: "Quantum computing harnesses the principles of quantum mechanics, like superposition and entanglement, to process information in fundamentally new ways. Unlike classical bits, qubits can exist in multiple states at once, allowing for a massive increase in computational power for specific problems, such as drug discovery, materials science, and cryptography.",
    imageUrl: "https://placehold.co/600x400/9333ea/white?text=Quantum+Computer",
    references: [
      { name: "Review Paper: Quantum Computation", link: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.75.715" },
      { name: "Nielsen & Chuang (Textbook)", link: "#" },
    ],
    labs: [
      { name: "IBM Quantum", link: "https://www.ibm.com/quantum-computing/" },
      { name: "Google Quantum AI", link: "https://quantumai.google/" },
    ]
  },
  {
    title: "Condensed Matter Physics",
    description: "This vast field explores the macroscopic and microscopic physical properties of matter. It focuses on the 'condensed' phases that appear whenever the number of constituents in a system is large and their interactions are strong. Research includes everything from developing new semiconductors and superconductors to understanding exotic states of matter like topological insulators.",
    imageUrl: "https://placehold.co/600x400/16a34a/white?text=Graphene+Lattice",
    references: [
      { name: "Review: Topological Insulators", link: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.82.3045" },
      { name: "Ashcroft & Mermin (Textbook)", link: "#" },
    ],
    labs: [
      { name: "Max Planck Institute for Solid State Research", link: "https://www.fkf.mpg.de/en" },
      { name: "MIT Center for Materials Science", link: "https://cmse.mit.edu/" },
    ]
  },
  {
    title: "Astrophysics & Cosmology",
    description: "Astrophysics applies the laws of physics to understand the universe and our place in it. Researchers study the birth, life, and death of stars, planets, and galaxies. Cosmology focuses on the origin and evolution of the universe itself, investigating cosmic mysteries like dark matter, dark energy, and the nature of the Big Bang.",
    imageUrl: "https://placehold.co/600x400/2563eb/white?text=Galaxy+NGC+1300",
    references: [
      { name: "Review: Dark Matter", link: "https://www.nature.com/articles/nature11072" },
      { name: "Carroll & Ostlie (Textbook)", link: "#" },
    ],
    labs: [
      { name: "NASA Hubble Space Telescope", link: "https://www.nasa.gov/mission_pages/hubble/main/index.html" },
      { name: "European Southern Observatory (ESO)", link: "https://www.eso.org/public/" },
    ]
  },
  {
    title: "High Energy & Particle Physics",
    description: "This field explores the fundamental constituents of matter and radiation. Using particle accelerators like the Large Hadron Collider, physicists study the interactions of subatomic particles to test and extend the Standard Model, which describes the quantum world. Key research areas include the Higgs boson, neutrinos, and the search for new physics beyond the Standard Model.",
    imageUrl: "https://placehold.co/600x400/dc2626/white?text=LHC+Collision",
    references: [
      { name: "Review: The Standard Model", link: "https://pdg.lbl.gov/2021/reviews/rpp2021-rev-standard-model.pdf" },
      { name: "Griffiths (Textbook)", link: "#" },
    ],
    labs: [
      { name: "CERN", link: "https://home.cern/" },
      { name: "Fermilab", link: "https://www.fnal.gov/" },
    ]
  },
  {
    title: "Soft Matter & Biophysics",
    description: "Soft matter physics studies materials that are easily deformed by thermal stresses or fluctuations, such as liquids, polymers, foams, and gels. A major subfield is biophysics, which applies the approaches of physics to understand biological systems. This includes studying the mechanics of DNA, the folding of proteins, and the behavior of cell membranes.",
    imageUrl: "https://placehold.co/600x400/f97316/white?text=Cell+Membrane",
    references: [
      { name: "Review: Physics of Proteins", link: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.81.1665" },
    ],
    labs: [
      { name: "AMOLF - Physics of Biomolecular Systems", link: "https://amolf.nl/research-groups/physics-of-biomolecular-systems" },
    ]
  },
  {
    title: "Quantum Optics & AMO Physics",
    description: "Atomic, Molecular, and Optical (AMO) physics is the study of matter-matter and light-matter interactions. Quantum optics focuses on the quantum mechanical properties of light. This research has led to technologies like lasers, atomic clocks, and Bose-Einstein condensates, and it forms the foundation for many quantum technologies.",
    imageUrl: "https://placehold.co/600x400/0d9488/white?text=Laser+Cooling",
    references: [
      { name: "Review: Ultracold Atoms", link: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.71.S253" },
    ],
    labs: [
      { name: "JILA (CU Boulder & NIST)", link: "https://jila.colorado.edu/" },
      { name: "Max Planck Institute of Quantum Optics", link: "https://www.mpq.mpg.de/en" },
    ]
  },
  {
    title: "Nonlinear Dynamics & Chaos Theory",
    description: "This field studies systems whose behavior is highly sensitive to initial conditions—a phenomenon popularly known as the 'butterfly effect.' It has applications across science, from modeling fluid turbulence and weather patterns to understanding population dynamics and the behavior of neural networks. Researchers explore concepts like attractors, bifurcations, and fractals.",
    imageUrl: "https://placehold.co/600x400/db2777/white?text=Lorenz+Attractor",
    references: [
      { name: "Strogatz (Textbook)", link: "#" },
    ],
    labs: [
      { name: "MPI for Dynamics and Self-Organization", link: "https://www.ds.mpg.de/en" },
    ]
  }
];
