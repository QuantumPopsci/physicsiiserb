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
      { title: 'An Introduction to Mechanics', author: 'D. Kleppner and R. Kolenkow', link: 'https://drive.google.com/file/d/1gr8xiR44D8lST6FD6ZtSYj_4Yph7nNwj/view?usp=sharing' },
      { title: 'Introduction to Classical Mechanics', author: 'David Morin', link: 'https://irp-cdn.multiscreensite.com/721e955d/files/uploaded/classicaltextbook.pdf' },
    ],
    notesLink: 'https://drive.google.com/drive/folders/1S9rBnJ9D2_Ujy6FAJiz7vb62zW9REfJG?usp=sharing',
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
      { title: 'Concept of Modern Physics', author: 'A. Beiser', link: 'https://drive.google.com/file/d/1ZQWcpUGVhKmbtYIosQzrx_lvHYbtErE9/view?usp=drive_link' },
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
    notesLink: 'https://drive.google.com/drive/folders/1NSntfV5OwwdPvAjevafhg-oDDhRClHfb?usp=drive_link',
    relevantFields: ['Optical Physics', 'Photonics', 'Signal Processing']
  },
  {
    id: 'phy209',
    code: 'PHY 209',
    title: 'Electromagnetism',
    description: "Learn the properties of electric and magnetic fields with static charges and currents, and the dynamics of these fields governed by Maxwell's equations.",
    syllabus: [
        'Introduction to vector calculus: Gradient, divergence and curl, Divergence theorem, Stokes Theorem, Dirac delta function.',
        'Electrostatics: Coulomb\'s Law, Gauss\'s law, Electric potential, Laplace\'s and Poisson\'s equations, Method of images, Polarization in a dielectric.',
        'Magnetostatics: Biot-Savart and Ampere\'s law, divergence and curl of B, vector potential, Magnetization in materials.',
        'Electrodynamics: Electromagnetic induction, motional emf and Faraday\'s law, inductance and energy in a magnetic field, the displacement current, Maxwell\'s equations.'
    ],
    texts: [
        { title: 'Introduction to Electrodynamics 4th Ed.', author: 'D. J. Griffiths', link: 'https://drive.google.com/file/d/1bFHGMt4lXD7AevxRiq9_4J6J61mUlSwF/view?usp=drive_link' },
        { title: 'Electricity and Magnetism (Berkeley Physics course) 2nd Ed.', author: 'E. M. Purcell', link: 'https://drive.google.com/file/d/1zX0AsI3fE2w4hpnZ66rRmLIvc98zni1p/view?usp=drive_link' },
        { title: 'The Feynman Lectures on Physics Vol 2', author: 'R. P. Feynman, R. B. Leighton and M. Sands', link: 'https://www.feynmanlectures.caltech.edu/II_toc.html' }
    ],
    notesLink: 'https://drive.google.com/drive/folders/1x8nGDSbhgTPttq6c4xu0byOFjwxz0pRX',
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
        { title: 'Mathematical Methods for Physicists, 6th Ed', author: 'B. Arfken and H. J. Weber', link: 'https://drive.google.com/file/d/1i7Y2m5KnTpuPEAI7AsbQY5XzT_98Nb9w/view?usp=drive_link' },
        { title: 'Mathematical Methods in Physical Sciences', author: 'M. L. Boas', link: 'https://drive.google.com/file/d/1HFIkQPSh2l9LO5duZ-IdgLeGo57ANL-v/view?usp=drive_link' }
    ],
    notesLink: 'https://drive.google.com/drive/folders/1zWCWLJ5uG15ynsmKc2xe2EoKbKZ0LBXw?usp=drive_link',
    relevantFields: ['Theoretical Physics', 'Quantum Mechanics', 'Electrodynamics']
  },
  {
  id: 'ecs203',
  code: 'ECS 203/PHY 311',
  title: 'Basic Electronics',
  description: 'Introduces fundamental concepts of analog and digital circuits using simple models. Covers diodes, BJTs, op-amps, logic gates, and sequential circuits, with emphasis on circuit behavior rather than detailed device physics.',
  syllabus: [
    'Thevenin’s theorem, RC circuits (single capacitor).',
    'Diodes and diode circuits: Vo–Vi relation, clipper, peak detector, clamper, voltage doubler.',
    'Zener diodes and voltage limiter circuits.',
    'Half-wave and full-wave rectifier circuits.',
    'BJT: basic functionality and common-emitter amplifier (mid-band region).',
    'Introduction to operational amplifiers (op-amps).',
    'Linear op-amp circuits: inverting, non-inverting, summer, integrator.',
    'Oscillator based on Schmitt trigger, Schmitt trigger circuits.',
    'Boolean logic, basic digital gates and truth tables.',
    'Function minimisation using Karnaugh maps.',
    'Combinatorial circuit blocks: multiplexers, demultiplexers, encoders, decoders.',
    'Introduction to sequential circuits: NAND/NOR latch, flip-flops, shift registers, counters.',
    'Review of DAC and ADC.'
  ],
  labs: [
    'Diode clipper, clamper, voltage doubler.',
    'BJT common-emitter amplifier.',
    'Op-amp circuits: inverting/non-inverting amplifiers, integrator, summer.',
    'Op-amp oscillator based on Schmitt trigger.',
    'Binary counter.',
    'Synchronous counter.'
  ],
  texts: [
    { title: 'Engineering Circuit Analysis', author: 'William H. Hayt and Jack E. Kemmerly', link: 'https://drive.google.com/file/d/1lHNfNNdiUUrFMn8Kdxoqo2Qh_ZXka3xx/view?usp=sharing' },
    { title: 'Electronic Devices and Circuit Theory', author: 'R.L. Boylstead', link: 'https://drive.google.com/file/d/107l2uTLOYAT4er5_tb39PCdLZUDJJ7nX/view?usp=drive_link'},
    { title: 'The Art of Electronics', author: 'Paul Horowitz and Winfield Hill', link: 'https://drive.google.com/file/d/15ELWi6YytSbLmG1nZ9C7YzDA7j-_Uorg/view?usp=drive_link'}
  ],
  notesLink: 'https://drive.google.com/drive/folders/1hJIcgBEsAv2yBsM8DUKyyhEkUsp6yWgp?usp=drive_link',
  relevantFields: ['Communications', 'Embedded Systems', 'Hardware Engineering', 'Semiconductors']
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
      { title: 'Introduction to Quantum Mechanics', author: 'D. J. Griffiths', link: 'https://archive.org/details/griffiths-introduction-to-quantum-mechanics_202503' },
      { title: 'Mastering Quantum Mechanics', author: 'B. Zwiebach', link: 'https://drive.google.com/file/d/169GAQh4EJd-M8RRhTvISs1oLlsyxVBvW/view?usp=drive_link' },
      { title: 'Modern Quantum Mechanics', author: 'J. J. Sakurai', link: 'https://drive.google.com/file/d/1s_-q3FrzFqE1E9e1vgpCRD0PcVgIqiC5/view?usp=drive_link' }
    ],
    notesLink: 'https://drive.google.com/drive/folders/1Dmt6H5iJBesGiHL76hpSHOwTGU117Fj3?usp=drive_link',
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
      { title: 'Classical Mechanics', author: 'H. Goldstein', link: 'https://drive.google.com/file/d/1KUwL5vvOV3t6soUCGV6Og-dUOaQ1FFmq/view?usp=drive_link' },
      { title: 'Variational Principles in Classical Mechanics', author: 'D. Cline', link: 'https://drive.google.com/file/d/1WYMbGXJ4u4PYeuPRpv8mgwjWDKhj5pQ0/view?usp=sharing' },
      { title: 'Classical Dynamics of Particles and Systems', author: 'S. T. Thronton and J. B. Marion', link: 'https://drive.google.com/file/d/1Db4Z6EheqT7biapgSI3lGrwjOpKJo5i0/view?usp=drive_link' },
      { title: 'Classical Mechanics', author: 'D. Morin', link: 'https://irp-cdn.multiscreensite.com/721e955d/files/uploaded/classicaltextbook.pdf' }
    ],
    notesLink: 'https://drive.google.com/drive/folders/1DUqWWZFaowc_n3477wCC_SBgMtGu04Co?usp=drive_link',
    relevantFields: ['High Energy Physics', 'Cosmology', 'Dynamical Systems']
  },
  {
  id: 'phy309',
  code: 'PHY 309',
  title: 'Thermal Physics',
  description: 'Lays the foundations of thermodynamics, kinetic theory, and statistical mechanics, with emphasis on phase transitions, critical phenomena, and applications of entropy in physics and information theory.',
  syllabus: [
    'Kinetic theory of gases: Statistical definition of temperature, Boltzmann function, Maxwell-Boltzmann distribution, molecular distribution, molecular effusion, mean free path, collisions, transport and thermal diffusion, viscosity, thermal conductivity, diffusion, Prandtl number. (8)',
    'Review of basic thermodynamics: Thermodynamic systems, first and second laws, Clausius theorem, entropy (thermodynamic and statistical definitions), entropy of mixing (Gibbs paradox), entropy and probability, internal energy and heat capacity relations with applications. (6)',
    'Thermodynamics in action: Entropy and information theory (Shannon entropy), thermodynamic potential functions and applications, Maxwell relations, Joule-Thomson expansion, liquefaction of gases, adiabatic demagnetization to milli/micro Kelvin temperatures, entropy of elastic rods, third law of thermodynamics and implications, chemical potential, extremum principles, Gibbs-Duhem relation. (10)',
    'Phase transitions: Clausius-Clapeyron equation, stability and metastability, Le Chatelier principles, latent heat, chemical potential and phase changes, classification and order of phase transitions, order parameter, Gibbs phase rule, colligative properties, single and multi-component phase transitions, eutectic point, Landau theory, universality and scaling, renormalization (introductory). (13)',
    'Special topics: Brownian motion and fluctuations, Johnson noise, fluctuations and availability. (3)'
  ],
  texts: [
    { title: 'An Introduction to Thermal Physics', author: 'D. V. Schroeder' , link: 'https://drive.google.com/file/d/1rZ-Hlc_0HVpn47RGw0b_5fwGuqbNg5jy/view?usp=drive_link' },
  ],
  notesLink: 'https://drive.google.com/drive/folders/1s-7SJUlRWoRlJoCU7-zsC9OBC8pN5JIL?usp=drive_link',
  relevantFields: ['Statistical Mechanics', 'Condensed Matter Physics', 'Thermodynamics']
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
    notesLink: 'https://drive.google.com/drive/folders/1AZWWCybjjWw7QrEz4DG9YrFWzh4BwoM5?usp=drive_link',
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
  id: 'phy637',
  code: 'PHY 637',
  title: 'Decoherence and Open Quantum Systems',
  prerequisites: ['PHY 303 QM I', 'PHY 304 QM II'],
  description: 'Provides practical skills in the formalism of open quantum systems (OQS), including density matrices, Master equations, and stochastic methods. Explores canonical models such as decaying atoms, two-level systems in baths, and quantum Brownian motion, with emphasis on decoherence, dissipation, and the quantum-to-classical transition.',
  syllabus: [
    'Motivation, Review and Preparations: context, applicability, decoherence is everywhere, review of single-particle quantum mechanics, statistical physics, and classical stochastic processes.',
    'Basic Formalism and Interpretation of Decoherence: quantum entanglement, density matrices, measurement problem, environmental monitoring, decoherence, dissipation, and classical noise.',
    'Master-Equation Formulation of Decoherence: Born-Markov master equation, Lindblad form, Non-Markovian dynamics, introduction to stochastic methods.',
    'Applications and Canonical Models: two-level systems, spontaneous decay, bath of harmonic oscillators, spin-Boson model, quantum Brownian motion, fluctuation-dissipation theorem.',
    'Interpretations and Quantum-to-Classical Transition: interpretations of quantum mechanics, collapse theories, Bohmian mechanics.'
  ],
  texts: [
    { title: 'Decoherence and the Quantum-to-Classical Transition', author: 'Maximilian Schlosshauer', link: '/#' },
    { title: 'The Theory of Open Quantum Systems', author: 'H.-P. Breuer and F. Petruccione', link: '/#' },
    { title: 'Charge and Energy Transfer Dynamics in Molecular Systems', author: 'Volkhard May and Oliver Kühn', link: '/#' },
    { title: 'Quantum Optics', author: 'G. S. Agarwal', link: '/#' },
    { title: 'Quantum Noise', author: 'C. W. Gardiner and P. Zoller', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Quantum Information', 'Quantum Optics', 'Condensed Matter Theory'],
},
{
  id: 'phy642',
  code: 'PHY 642',
  title: 'Special Topics in Quantum Mechanics',
  prerequisites: ['PHY303', 'PHY304'],
  description: 'Covers advanced non-perturbative aspects of quantum mechanics. Topics include limitations of perturbation theory, WKB and instantons, path integrals, resurgence and resummation, Berry phases, constrained systems, fermionic quantum mechanics, supersymmetric quantum mechanics, geometry of quantum states, and the bootstrap method.',
  syllabus: [
    'Non-perturbative Quantum Mechanics: limitations of perturbation theory, asymptotic expansion, WKB approximation and tunneling, instantons in double-well and periodic potentials, decay of false vacuum and first-order phase transitions.',
    'Path integral approach: derivation of path integrals in phase space and position space, free particle and harmonic oscillator examples, instanton contributions.',
    'Resurgence and resummation: non-convergence of perturbation theory, Borel summability, application to anharmonic oscillators with x^4 potential.',
    'Berry Phase and Topological Phases: Berry phase, Berry connection and curvature.',
    'Quantization of constrained systems: first- and second-class constraints, Dirac bracket quantization, examples such as particles on surfaces.',
    'Fermionic Quantum Mechanics: Majorana quantum mechanics, fermionic parity, Grassmann variables, path integrals, Kitaev’s mod 2 and mod 8 classification.',
    'Supersymmetric Quantum Mechanics: definition, Witten index, topological invariance.',
    'Geometry of Quantum States: projective Hilbert space, complex projective space, Fubini–Study metric.',
    'Bootstrap method in Quantum Mechanics: finding wavefunctions and eigenstates, numerical implementation.'
  ],
  texts: [
    { title: 'Advanced Topics in Quantum Mechanics', author: 'Marcos Marino', link: '/#' },
    { title: 'Geometry of Quantum States', author: 'Ingemar Bengtsson', link: '/#' },
    { title: 'Instantons and Large N', author: 'Marcos Marino', link: '/#' },
    { title: 'Quantum Mechanics and Path Integrals', author: 'R. P. Feynman and A. R. Hibbs', link: '/#' },
    { title: 'Techniques and Applications of Path Integration', author: 'L. S. Schulman', link: '/#' },
    { title: 'Path Integrals in Quantum Mechanics', author: 'Jean Zinn-Justin', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Quantum Mechanics', 'Quantum Field Theory', 'Mathematical Physics'],
},
{
  id: 'phy634',
  code: 'PHY 634',
  title: 'Advanced Statistical Mechanics',
  prerequisites: ['PHY306'],
  description: 'Explores the theoretical understanding of phases of matter and phase transitions using statistical mechanics. Covers phenomenological models, mean field theory, renormalization group, and introduces non-equilibrium statistical mechanics including kinetic theory, transport, and stochastic processes.',
  syllabus: [
    'Revision of statistical mechanics: ensembles, partition function properties, Lee–Yang theorem.',
    'Thermodynamics of phase transitions: metastable states, first- and second-order transitions, phenomenology of liquid–gas and paramagnetic–ferromagnetic transitions, Van der Waals equation and critical exponents.',
    'Classical mean-field theories: Ising model mean-field theory, Landau theory, transfer matrix method, free energy and correlation functions, exact results in 1D and 2D Ising models.',
    'Critical phenomena: fluctuations near second-order transitions, scaling hypothesis, critical exponents, universality classes, Ginzburg–Landau free-energy functional, renormalization group in momentum space.',
    'Non-equilibrium statistical mechanics: kinetic theory of gases, approach to equilibrium, H-theorem, Boltzmann equation and transport, Brownian motion, Langevin equation, fluctuation–dissipation theorem, Einstein relation, Fokker–Planck equation.'
  ],
  texts: [
    { title: 'Statistical Mechanics', author: 'K. Huang', link: '/#' },
    { title: 'Statistical Mechanics', author: 'R. K. Pathria', link: '/#' },
    { title: 'Physical Kinetics', author: 'E. M. Lifshitz and L. P. Pitaevskii', link: '/#' },
    { title: 'Statistical Mechanics', author: 'D. A. McQuarrie', link: '/#' },
    { title: 'Statistical Physics: Statistics, Dynamics and Renormalization', author: 'L. P. Kadanoff', link: '/#' },
    { title: 'Principles of Condensed Matter Physics', author: 'P. M. Chaikin and T. C. Lubensky', link: '/#' },
    { title: 'Introduction to Phase Transitions and Critical Phenomena', author: 'H. E. Stanley', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Condensed Matter Physics', 'Statistical Mechanics', 'Non-Equilibrium Physics'],
},
{
  id: 'phy625',
  code: 'PHY 625',
  title: 'Quantum Information Theory',
  prerequisites: [],
  description: 'Introduces the principles of quantum information theory, covering classical and quantum probabilities, qubits, mixed and multipartite states, entanglement, quantum measurements and dynamics, the circuit model, entropy and correlations, and elements of quantum computing.',
  syllabus: [
    'Probabilities and classical information theory.',
    'Review of quantum mechanics relevant to information theory.',
    'From bits to qubits: quantum states including mixed states, multipartite states, superposition, and entanglement.',
    'Quantum measurements and their role in information processing.',
    'Quantum dynamics: closed and open system evolution.',
    'The quantum circuit model for computation.',
    'Quantum entropy, mutual information, and quantum correlations.',
    'Introduction to elements of quantum computing.'
  ],
  texts: [
    { title: 'Quantum Computation and Quantum Information', author: 'M. A. Nielsen and I. L. Chuang', link: '/#' },
    { title: 'Quantum Information and Quantum Computation', author: 'J. Preskill (Caltech Online Notes)', link: '/#' },
    { title: 'Modern Quantum Mechanics', author: 'J. J. Sakurai', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Quantum Information', 'Quantum Computing', 'Quantum Mechanics'],
},
{
  id: 'phy616',
  code: 'PHY 616',
  title: 'General Theory of Relativity',
  prerequisites: [],
  description: 'Covers the fundamental principles of Einstein’s general theory of relativity, including tensor algebra, equivalence principle, Einstein field equations, black holes, neutron stars, and gravitational waves.',
  syllabus: [
    'Review of special theory of relativity. (3)',
    'Mathematical aspects: tensor algebra, coordinate transformations, Lie derivative, covariant derivative, affine connections, Riemann tensor, curvature tensor. (12)',
    'Inertial frames, gravitational mass and inertial mass, equivalence principle (weak and strong forms), principle of general covariance. (2)',
    'Einstein field equations: geodesic deviation, vacuum Einstein equations. (6)',
    'Action formulation of general relativity. (3)',
    'Solutions of Einstein equations and applications: tests of general relativity, Schwarzschild and Kerr black holes, neutron stars, gravitational waves. (13)'
  ],
  texts: [
    { title: 'A First Course in General Relativity', author: 'Bernard Schutz', link: '/#' },
    { title: 'Spacetime and Geometry: An Introduction to General Relativity', author: 'Sean Carroll', link: '/#' },
    { title: 'Gravity: An Introduction to Einstein’s General Relativity', author: 'James B. Hartle', link: '/#' },
    { title: 'Gravitation and Cosmology', author: 'Steven Weinberg', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Quantum Gravity', 'Astrophysics', 'Gravitational Physics'],
},
{
  id: 'phy615',
  code: 'PHY 615',
  title: 'Quantum Field Theory I',
  prerequisites: [],
  description: 'Introduces the foundations of quantum field theory, covering classical and quantum fields, canonical quantization, interacting fields, Dirac fields, and quantum electrodynamics. Emphasis on Lorentz invariance, Noether’s theorem, Feynman diagrams, and applications to scattering and decay processes.',
  syllabus: [
    'Classical Field Theory: introduction, Lagrangian field theory, Lorentz invariance, Noether’s theorem and conserved currents, Hamiltonian field theory. (8)',
    'Canonical Quantization: Klein-Gordon equation, harmonic oscillator, free quantum fields, vacuum energy, particles, complex scalar fields, Heisenberg picture, causality and propagators, applications, non-relativistic field theory. (8)',
    'Interacting Fields: interaction types, interaction picture, Dyson’s formula, scattering, Wick’s theorem, Feynman diagrams, Feynman rules, amplitudes, decays and cross sections, Green’s functions, connected diagrams and vacuum bubbles, reduction formula. (10)',
    'Quantizing the Dirac Field: spin-statistics theorem, fermionic quantization, Fermi-Dirac statistics, propagators, particles and anti-particles, Dirac’s hole interpretation, Feynman rules. (6)',
    'Quantum Electrodynamics: gauge field and gauge invariance, quantization, inclusion of matter, Lorentz-invariant propagators, Feynman rules, QED processes. (8)'
  ],
  texts: [
    { title: 'Quantum Field Theory', author: 'Markus Schwartz', link: '/#' },
    { title: 'An Introduction to Quantum Field Theory', author: 'Michael E. Peskin and Daniel V. Schroeder', link: '/#' },
    { title: 'Quantum Field Theory', author: 'Lewis H. Ryder', link: '/#' },
    { title: 'Quantum Theory of Fields, Vol. I', author: 'Steven Weinberg', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['High Energy Physics', 'Quantum Field Theory', 'Theoretical Physics'],
},
{
  id: 'phy619',
  code: 'PHY 619',
  title: 'Experimental Techniques',
  prerequisites: [],
  description: 'Introduces the fundamentals of experimental methods in physics, including vacuum systems, cryogenics, diffraction techniques, spectroscopy, particle detection, magnetometry, electrical and thermal transport measurements, and ultrafast spectroscopies.',
  syllabus: [
    'Vacuum technique: vacuum generation and gauging.',
    'Cryogenics: generation of low temperatures and measurement methods.',
    'Structure and composition analysis: X-ray diffraction, energy dispersive X-ray (EDX), transmission electron microscopy (TEM), X-ray fluorescence (XRF).',
    'Electronic structure of solids: X-ray and ultraviolet photoemission spectroscopy, angle-resolved photoemission spectroscopy, Auger electron spectroscopy, X-ray absorption techniques.',
    'Radiation and particle detectors: gas detectors, scintillator detectors, semiconductor detectors.',
    'Sample preparation techniques: thin film, polycrystalline, and single crystal growth.',
    'Magnetometry and electrotransport: AC and DC magnetization techniques, two-probe and four-probe resistivity, magnetoresistance, Hall effect, thermal conductivity, thermopower, heat capacity.',
    'Ultrafast spectroscopy: transient absorption, two-photon absorption, terahertz spectroscopy.',
    'Neutrons and muons in condensed matter research.'
  ],
  texts: [
    { title: 'Scientific Foundations of Vacuum Technique', author: 'S. Dushman', link: '/#' },
    { title: 'Experimental Techniques in Low-Temperature Physics', author: 'G. White and P. J. Meeson', link: '/#' },
    { title: 'Elements of X-Ray Diffraction', author: 'B. D. Cullity', link: '/#' },
    { title: 'Physical Principles of Electron Microscopy: An Introduction to TEM, SEM, and AEM', author: 'R. F. Egerton', link: '/#' },
    { title: 'Handbook of Thin-Film Deposition Processes and Techniques', author: 'K. K. Schuegraf', link: '/#' },
    { title: 'Crystal Growth Technology', author: 'K. Byrappa and T. Ohac', link: '/#' },
    { title: 'Photoelectron Spectroscopy: Principles and Applications', author: 'S. Hüfner', link: '/#' },
    { title: 'Introduction to Magnetic Materials', author: 'B. D. Cullity', link: '/#' },
    { title: 'Terahertz Optoelectronics', author: 'K. Sakai', link: '/#' },
    { title: 'X-Rays, Neutrons and Muons', author: 'W. E. Fischer and R. Morf', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Condensed Matter Physics', 'Experimental Physics', 'Materials Science'],
},
  {
  id: 'phy639',
  code: 'PHY 639',
  title: 'Standard Model of Particle Physics',
  prerequisites: ['PHY415/615: QFT-I', 'PHY421/621: QFT-II'],
  description: 'Introduces the Standard Model of Particle Physics with emphasis on mathematical foundations. Covers weak interactions before gauge theory, unified electroweak theory, spontaneous symmetry breaking and the Higgs mechanism, strong interactions and Quantum Chromodynamics. Ends with limitations of the Standard Model and an introduction to Beyond Standard Model physics.',
  syllabus: [
    'Introduction: Particle content of the Standard Model.',
    'Fermi’s theory of beta decay and weak interactions before gauge theory.',
    'Electroweak unification: SU(2)_L × U(1)_Y gauge theory, Lagrangian, massive vector bosons, charged and neutral currents.',
    'Spontaneous symmetry breaking: Goldstone bosons and Higgs mechanism.',
    'Three generations of matter fields: flavour mixing, GIM mechanism, CP violation, K- and B-meson systems.',
    'Electroweak precision measurements.',
    'Strong interactions: Yukawa interaction, deep inelastic scattering, parton model, chiral Lagrangians, heavy quark effective field theories, Quantum Chromodynamics (QCD).',
    'Beyond Standard Model topics: neutrino mass, dark matter, supersymmetry, grand unified theories.'
  ],
  texts: [],
  referenceBooks: [
    { title: 'Introduction to Elementary Particles', author: 'David Griffiths', link: '/#' },
    { title: 'Quarks and Leptons: An Introductory Course in Modern Particle Physics', author: 'F. Halzen and A. Martin', link: '/#' },
    { title: 'Quantum Field Theory', author: 'Franz Mandl and Graham Shaw', link: '/#' },
    { title: 'Gauge Theory of Weak Interactions', author: 'Walter Greiner and Berndt Müller', link: '/#' },
    { title: 'Quantum Chromodynamics', author: 'Walter Greiner and Andreas Schäfer', link: '/#' },
    { title: 'Gauge Theory of Elementary Particle Physics', author: 'Ta-Pei Cheng and Ling-Fong Li', link: '/#' },
    { title: 'Particle Physics', author: 'Brian R. Martin and Graham Shaw', link: '/#' }
  ],
  notesLink: '/#',
  relevantFields: ['Particle Physics', 'Quantum Field Theory', 'High Energy Physics'],
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
