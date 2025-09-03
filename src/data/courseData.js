export const courses = [
  {
    id: 'phy101',
    code: 'PHY 101',
    title: 'Mechanics',
    description: "Learn the concepts of Newton's laws of mechanics and their application to many-particle systems and small oscillations.",
    syllabus: [
      'Kinematics: Introduction to coordinate systems, Cartesian and polar coordinates, velocity and acceleration in polar coordinates.',
      'Kinetics: Force, Newton\'s laws of motion, frames of reference, statics, dynamics, rotational motion about a single axis and moment of inertia.',
      'Momentum, momentum of a system of particles, conservation laws, center of mass, variable mass systems.',
      'Work and energy, conservation of energy, collisions, conservative and non-conservative forces.',
      'Simple harmonic oscillator, small oscillations, damped harmonic oscillation, differential equation for waves in one dimension and its solution.',
      'Brief introduction to motion under central force.'
    ],
    texts: [
      { title: 'An Introduction to Mechanics', author: 'D. Kleppner and R. Kolenkow', link: '/#' },
      { title: 'Fundamentals of Physics', author: 'R. Shankar', link: '/#' },
      { title: 'Introduction to Classical Mechanics', author: 'David Morin', link: '/#' },
      { title: 'Mechanics (Berkeley Physics Course) Vol 1', author: 'C. Kittel, W. D. Knight, et al.', link: '/#' },
      { title: 'Physics, Vol 1, 5th Ed.', author: 'D. Resnick, R. Halliday and K. S. Krane', link: '/#' },
      { title: 'Introduction to Mechanics', author: 'M. K. Verma', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Astrophysics', 'Engineering Physics', 'Classical Systems']
  },
  {
    id: 'phy106',
    code: 'PHY 106',
    title: 'Quantum Physics',
    description: 'An introduction to wave mechanics, the particle and wave properties of matter, atomic structure, and the fundamentals of Quantum Mechanics including the Schrödinger equation.',
    syllabus: [
      'Introduction to wave mechanics: wave equation, solutions, superposition, interference, dispersion relation, group and phase velocity.',
      'Particle properties of wave: black body radiation, photoelectric effect, Compton effect, X-ray diffraction, pair production.',
      'Wave properties of particle: de Broglie wavelength, wave particle duality, particle diffraction, particle in a box, uncertainty principle.',
      'Structure of Atom: Rutherford\'s model, Bohr\'s model, Atomic spectrum, correspondence principle.',
      'Quantum Mechanics: Schroedinger equation, linearity, super-position, expectation value, operators, particle in a box, finite well potential, tunneling, simple harmonic oscillator.',
      'Hydrogen Atom: H-atom, method of separation of variables, quantum numbers, electron probability density, selection rules, Zeeman effect.',
      'Many electron system: electron spin, Pauli exclusion principle, symmetric and anti-symmetric wave function.',
      'Molecules: molecular bond, electron sharing, hydrogen ion, hydrogen molecule, rotational and vibrational spectra.'
    ],
    texts: [
      { title: 'Concept of Modern Physics', author: 'A. Beiser', link: '/#' },
      { title: 'Quantum Physics', author: 'H. C. Verma', link: '/#' },
      { title: 'The Feynman Lecture of Physics Vol 3', author: 'R. P. Feynman, R. B. Leighton and M. Sands', link: '/#' },
      { title: 'Introduction to Modern Physics', author: 'H. S. Mani and G. K. Mehta', link: '/#' },
      { title: 'Fundamentals of Physics II', author: 'R. Shankar', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Particle Physics', 'Condensed Matter', 'Quantum Information']
  },
  {
    id: 'phy201',
    code: 'PHY 201',
    title: 'Waves and Optics',
    description: 'Introduces fundamental concepts of waves and classical optics with a focus on interference and diffraction phenomena.',
    syllabus: [
        'Oscillations: Review of simple harmonic motion and damped oscillations, coupled oscillators and normal modes.',
        'Waves: wave equation, superposition of waves, Lissajous figures, standing waves, dispersion relations and group velocity.',
        'Maxwell\'s equations: Wave equation, plane, spherical, cylindrical and beam like solutions.',
        'Boundary conditions: reflection and transmission at the boundary.',
        'Propagation of light in anisotropic media, Polarization and double refraction, quarter and half wave plates.',
        'Geometrical optics: Paraxial approximation, lens aberrations, ray matrix approach to Gaussian optics, optical systems and resolving power.',
        'Interference: Division of wavefront (Young\'s double slit) and amplitudes (Newton\'s rings, Michelson interferometer), multi-wave interference-Fabry-Perot interferometer.',
        'Diffraction: Huygen-Fresnel and Kirchhoff\'s theories, Fresnel diffraction, and Fraunhoffer diffraction.'
    ],
    texts: [
        { title: 'Waves and Oscillations', author: 'A. P. French', link: '/#' },
        { title: 'The Physics of Waves and Oscillations', author: 'N. K. Bajaj', link: '/#' },
        { title: 'Optics', author: 'A. K. Ghatak', link: '/#' },
        { title: 'Fundamentals of Optics', author: 'F. A. Jenkins and H. E. White', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Optical Physics', 'Photonics', 'Signal Processing']
  },
  {
    id: 'phy203',
    code: 'PHY 203',
    title: 'Electromagnetism',
    description: "Learn the properties of electric and magnetic fields with static charges and currents, and the dynamics of these fields governed by Maxwell's equations.",
    syllabus: [
        'Introduction to vector calculus: Gradient, divergence and curl, Divergence theorem, Stokes Theorem, Dirac delta function.',
        'Electrostatics: Coulomb\'s Law, Gauss\'s law, Electric potential, Laplace\'s and Poisson\'s equations, Method of images, Polarization in a dielectric.',
        'Magnetostatics: Biot-Savart and Ampere\'s law, divergence and curl of B, vector potential, Magnetization in materials.',
        'Electrodynamics: Electromagnetic induction, motional emf and Faraday\'s law, inductance and energy in a magnetic field, the displacement current, Maxwell\'s equations.'
    ],
    texts: [
        { title: 'Introduction to Electrodynamics 4th Ed.', author: 'D. J. Griffiths', link: '/#' },
        { title: 'Electricity and Magnetism (Berkeley Physics course) 2nd Ed.', author: 'E. M. Purcell', link: '/#' },
        { title: 'The Feynman Lectures on Physics Vol 2', author: 'R. P. Feynman, R. B. Leighton and M. Sands', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Plasma Physics', 'Optics', 'Particle Physics']
  },
  {
    id: 'phy301',
    code: 'PHY 301',
    title: 'Mathematical Methods I',
    description: 'Equips students with mathematical tools required for advanced physics courses, particularly quantum mechanics and electrodynamics.',
    syllabus: [
        'Finite dimensional vector spaces: Linear independence, basis, dimension, subspaces, tensors, linear operators, eigenvalues and eigenvectors.',
        'Inner product on a vector space, Orthonormal bases, Gram-Schmidt orthogonalization, Adjoint of an operator.',
        'Fourier series, Fourier and Laplace transforms and their properties, Dirac delta function.',
        'Introduction to Groups: Finite Groups, subgroups, Lie groups, generators, SO(3).',
        'Introduction to representation theory of unitary and rotation groups.',
        'Ordinary differential equations of second order: Frobenius method for solving Bessel, Legendre, Laguerre, Hermite differential equations.'
    ],
    texts: [
        { title: 'Finite Dimensional Vector Spaces', author: 'P. R. Halmos', link: '/#' },
        { title: 'Mathematical Methods for Physicists, 6th Ed', author: 'B. Arfken and H. J. Weber', link: '/#' },
        { title: 'Mathematical Methods in Physical Sciences', author: 'M. L. Boas', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Theoretical Physics', 'Quantum Mechanics', 'Electrodynamics']
  },
  {
    id: 'phy303',
    code: 'PHY 303',
    title: 'Quantum Mechanics I',
    description: 'Lays the foundations of quantum mechanics, including the uncertainty principle, Schrödinger equation, operator formalism, and applications to hydrogen atom and angular momentum.',
    syllabus: [
      'Uncertainty Principle, Schrödinger Equation, Probability interpretation, wave packets.',
      'One Dimensional Problems: Harmonic Oscillator with creation/annihilation operators, potential step, barrier and well, Dirac-delta function potential.',
      'Central Potential: Bound states in three dimensions; Hydrogen atom.',
      'Operator formalism: Vector spaces, Hermitian operators, Eigenvalues, Commuting operators, Dirac\'s notation.',
      'Theory of Angular Momentum: Orbital angular momentum, spherical harmonics, addition of angular momenta.',
      'Theory of spin: Stern-Gerlach experiment, spin 1/2 states, Pauli matrices.',
      'Identical particles: Fermions, Bosons.',
      'Foundational Issues: Measurements, interpretations, Bell\'s inequality; EPR paradox.'
    ],
    texts: [
      { title: 'Introduction to Quantum Mechanics', author: 'D. J. Griffiths', link: '/#' },
      { title: 'Quantum Mechanics: Concepts and Applications', author: 'N. Zettili', link: '/#' },
      { title: 'Principles of Quantum Mechanics, 2nd Ed', author: 'R. Shankar', link: '/#' },
      { title: 'Modern Quantum Mechanics', author: 'J. J. Sakurai', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Particle Physics', 'Condensed Matter', 'Quantum Computing']
  },
  {
    id: 'phy305',
    code: 'PHY 305',
    title: 'Classical Mechanics',
    description: 'Covers advanced concepts of mechanics including Lagrangian mechanics, conservation principles, central forces, scattering, and rigid body dynamics.',
    syllabus: [
      'Review of Newtonian mechanics, Lagrangian mechanics, generalized coordinates, Hamilton\'s principle, calculus of variations.',
      'Derivation of Lagrange\'s equation, Conservation theorems and Symmetry principles, Noether theorem.',
      'Central forces, Planetary motions, Collisions, Scattering.',
      'Small oscillations, Normal modes, Forced oscillators, Anharmonic oscillators.',
      'Rigid body dynamics, Orthogonal transformations, Euler angles, Inertia tensor, Motion of a symmetrical top.',
      'Hamilton\'s equations, phase space and phase trajectories, Poisson brackets, canonical transformations, Hamilton-Jacobi theory.'
    ],
    texts: [
      { title: 'Classical Mechanics', author: 'H. Goldstein', link: '/#' },
      { title: 'Mechanics', author: 'L. D. Landau and E. M. Lifshitz', link: '/#' },
      { title: 'Classical Dynamics of Particles and Systems', author: 'S. T. Thronton and J. B. Marion', link: '/#' },
      { title: 'Classical Mechanics', author: 'D. Morin', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['High Energy Physics', 'Cosmology', 'Dynamical Systems']
  },
  {
    id: 'phy401',
    code: 'PHY 401',
    title: 'Electrodynamics and Special Theory of Relativity',
    description: "A detailed study of Maxwell's equations with applications to electromagnetic fields and radiation, studied within the context of special relativity.",
    syllabus: [
      'Boundary problems with Green functions, Method of image, Electric fields in matter, Multipole expansion.',
      'Vector potential, Magnetic fields, Magnetic moment, Boundary value problems in magnetostatics.',
      'Maxwell equations, Gauge transformations, Poynting\'s theorem, Transformation properties of electromagnetic fields.',
      'Plane electromagnetic waves and wave propagation, polarization, Reflection and refraction, dispersion.',
      'Radiation from an accelerated charge, Larmor formula, Electric dipole fields and radiation, Rayleigh scattering.',
      'Introduction to Special Theory of Relativity, Minkowski space and four vectors, Relativistic formulation of electrodynamics.'
    ],
    texts: [
      { title: 'Introduction to Electrodynamics, 4th Ed', author: 'D. J. Griffiths', link: '/#' },
      { title: 'Modern Electrodynamics, 1st Ed.', author: 'A. Zangwill', link: '/#' },
      { title: 'Classical Electrodynamics', author: 'J. D. Jackson', link: '/#' },
      { title: 'Classical Theory of Fields', author: 'L. D. Landau and E. M. Lifshitz', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Particle Physics', 'Astrophysics', 'Accelerator Physics']
  },
  {
    id: 'phy403',
    code: 'PHY 403',
    title: 'Condensed Matter Physics',
    description: 'Introduces the physical properties of solids including their electrical, magnetic, optical, and thermal properties, with a focus on structure, symmetry, and bonding.',
    syllabus: [
      'Bonding in solids, Cohesive energy, Ionic crystals, Covalent crystals, Metals.',
      'Drude and Sommerfeld theories of metals: DC/AC conductivity, Hall effect, thermal conductivity, density of states.',
      'Structure of solids, Bravais lattices, Miller indices, Reciprocal lattice, Bragg\'s law, Diffraction.',
      'Band theory: Free electron theory, Kronig-Penney Model, Tight binding, Classification of metals, insulators and semiconductors.',
      'Phonons: Vibrations of one dimensional chains, Normal modes, Phonon spectrum, specific heat capacity.',
      'Dia-, Para-, and Ferromagnetism, origin of magnetism, Langevin\'s theory, Weiss Molecular theory.'
    ],
    texts: [
      { title: 'Introduction to Solids State Physics', author: 'C. Kittel', link: '/#' },
      { title: 'Solids State Physics', author: 'N. W. Ashcroft and N. D. Mermin', link: '/#' },
      { title: 'Principles of Condensed Matter Physics', author: 'P. M. Chaikin and T. C. Lubensky', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Materials Science', 'Solid State Physics', 'Nanoscience']
  },
  {
    id: 'phy402',
    code: 'PHY 402',
    title: 'Atomic and Molecular Physics',
    description: 'Explores the hierarchy of atomic and molecular energy levels, their interaction with electromagnetic radiation, and the quantum-many body problem in atoms and molecules.',
    syllabus: [
      'Review of the Hydrogen atom, atomic orbitals, quantum numbers.',
      'Single valence electron atoms: Spin-orbit interaction, fine structures, Lamb shift, Hyperfine structure, Stark and Zeeman effects.',
      'Many valence electron atoms: Para- and ortho states, He atom, Slater determinant, LS and JJ coupling.',
      'Width and shape of spectral lines, Selection rules, Rabi oscillations, Photo-ionisation.',
      'Molecules: Valance and bonding, Born-Oppenheimer approximation, Hydrogen molecule.',
      'Molecular orbital and electronic configuration, Vibrational and Rotational spectra, Raman spectra.',
      'Overview of modern atomic physics: Laser cooling, Bose-Einstein Condensation, Atomic clocks.'
    ],
    texts: [
      { title: 'Molecular Quantum Mechanics 3rd Ed.', author: 'P. W. Atkins and R. S. Friedman', link: '/#' },
      { title: 'Atoms, Molecules and Photons', author: 'W. Demtroder', link: '/#' },
      { title: 'Elementary Atomic Structure', author: 'G. W. Woodgate', link: '/#' },
      { title: 'Physics of Atoms and Molecules', author: 'B. H. Bransden and C. J. Joachain', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['Quantum Optics', 'Chemical Physics', 'Spectroscopy']
  },
  {
    id: 'phy404',
    code: 'PHY 404',
    title: 'Nuclear and Particle Physics',
    description: 'Covers the theory of nuclear forces, different types of nuclear emissions, and the theoretical and experimental aspects of elementary particles.',
    syllabus: [
      'Properties of nucleon-nucleon interaction, low energy neutron-proton scattering, ground state of deuteron.',
      'Compound nucleus theory, shell model, liquid drop model, electromagnetic interaction in nuclei.',
      'Alpha decay and Gamow\'s theory, Beta decay and neutrinos, Gamma decay and selection rules.',
      'Basic interactions, elementary particles, quantum numbers, conservation laws, isospin, quark model.',
      'Feynman diagrams, Standard Model, CKM matrix, neutrino mixing, decay channels.',
      'Relativistic Kinematics, Four vectors, Noether\'s theorem, discrete symmetries (CPT).',
      'Brief review of Experimental Methods: Gas Filled counters, Scintillation counter, etc.'
    ],
    texts: [
      { title: 'Introductory Nuclear Physics', author: 'S. S. M. Wong', link: '/#' },
      { title: 'Nuclear Physics', author: 'V. Devanathan', link: '/#' },
      { title: 'Concepts of Nuclear Physics', author: 'B. L. Cohen', link: '/#' }
    ],
    notesLink: '/#',
    relevantFields: ['High Energy Physics', 'Medical Physics', 'Astrophysics']
  }
];
