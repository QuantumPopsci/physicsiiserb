export const faqs = [
  {
    category: "Academics",
    question: "How many Physics electives are required for BS-MS Physics?",
    answer: (
      <>
        To complete a <strong>BS-MS in Physics</strong>, you need:
        <ul className="list-disc ml-5 mt-2">
          <li><strong>6 Physics electives</strong> out of 10 open electives</li>
        </ul>

        For <strong>BS exit</strong>:
        <ul className="list-disc ml-5 mt-2">
          <li><strong>4 Physics electives</strong> out of 6 open electives</li>
        </ul>

        <p className="mt-2">
          Plan your electives early to avoid last-minute issues.
        </p>
      </>
    )
  },

  {
    category: "Research",
    question: "Can I do MS thesis outside IISER Bhopal?",
    answer: (
      <>
        Yes, but only under specific conditions.
        <br /><br />

        <strong>Requirements:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>Must be under an <strong>IISERB faculty collaboration</strong></li>
          <li>External institute must have <strong>MoU or research tie</strong></li>
          <li>Requires <strong>department + institute approval</strong></li>
        </ul>

        <br />
        ❌ Independent external thesis without IISERB link is <strong>not allowed</strong>.

        <br /><br />
        <a
          href="/docs/ms-thesis-outside.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary underline"
        >
          📄 View official circular
        </a>
      </>
    )
  },

  {
    category: "Research",
    question: "How do I apply for MS thesis outside IISERB?",
    answer: (
      <>
        Typical process:
        <ul className="list-disc ml-5 mt-2">
          <li>Find a supervisor at IISERB</li>
          <li>Identify collaborating external lab/group</li>
          <li>Get approval from your supervisor</li>
          <li>Submit formal request to department</li>
        </ul>

        <p className="mt-2">
          Start early (5th year Semester 1) to avoid delays.
        </p>
      </>
    )
  },

  {
    category: "Minor",
    question: "What is the Quantum Technologies minor?",
    answer: (
      <>
        A minor focused on:
        <ul className="list-disc ml-5 mt-2">
          <li>Quantum Computing</li>
          <li>Quantum Information</li>
          <li>Quantum Materials</li>
        </ul>

        <p className="mt-2">
          Open to BS-MS, BS, and BTech students.
        </p>
      </>
    )
  },

  {
    category: "Minor",
    question: "What are the credit requirements for QT minor?",
    answer: (
      <>
        You need <strong>18 credits</strong>.

        <br /><br />
        ⚠️ Rules:
        <ul className="list-disc ml-5 mt-2">
          <li>No double counting with your major</li>
          <li>Same course cannot count for multiple minors</li>
        </ul>
      </>
    )
  },

  {
    category: "Minor",
    question: "Which courses are required for Quantum Technologies minor?",
    answer: (
      <>
        <strong>Core courses:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>PHY303: Quantum Mechanics I</li>
          <li>
            One of:
            <ul className="list-disc ml-5">
              <li>PHY425/625: Quantum Information Theory</li>
              <li>ECS417/617: Intro to Quantum Computer Science</li>
            </ul>
          </li>
          <li>ECS326/676: Digital Circuits</li>
          <li>
            One of:
            <ul className="list-disc ml-5">
              <li>ECS327: EECS Lab I</li>
              <li>ECS330: EECS Lab II</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },

  {
    category: "Minor",
    question: "Which electives can be used for QT minor?",
    answer: (
      <>
        You can choose from:
        <ul className="list-disc ml-5 mt-2">
          <li>Condensed Matter Physics</li>
          <li>Decoherence and Open Quantum Systems</li>
          <li>Classical and Quantum Optics</li>
          <li>Quantum Engineering</li>
          <li>Magnetism and Superconductivity</li>
          <li>Ultrafast Optics</li>
        </ul>
      </>
    )
  },

  {
    category: "Minor",
    question: "Can I use the same course for major and QT minor?",
    answer: (
      <>
        ❌ No.

        <br />
        Courses used for your <strong>major cannot be counted for the minor</strong>.
      </>
    )
  },

  {
    category: "Minor",
    question: "Where can I find Quantum Technologies minor rules?",
    answer: (
      <>
        Official circular:
        <br />
        <a
          href="/docs/qt-minor.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary underline"
        >
          📄 Quantum Technologies Minor PDF
        </a>
      </>
    )
  }
];
