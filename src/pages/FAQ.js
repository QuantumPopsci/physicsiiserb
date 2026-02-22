import React, { useState } from 'react';

const faqs = [
  {
    question: "How many Physics electives are required for BS-MS Physics?",
    answer: `You need 6 Physics electives out of 10 open electives for BS-MS.
If you take BS exit, you need 4 out of 6 open electives to be Physics courses.`
  },
  {
    question: "What is the Quantum Technologies Minor?",
    answer: `A minor program focused on quantum computing, quantum information, and quantum materials. It is open to BS-MS, BS, and BTech students.`
  },
  {
    question: "What are the credit requirements for QT minor?",
    answer: `You need 18 credits. Courses used for your major cannot be reused for the minor, and a course cannot count toward multiple minors.`
  },
  {
    question: "Which courses are compulsory for the QT minor?",
    answer: `PHY303 (Quantum Mechanics I)
One of: PHY425/625 or ECS417/617
ECS326/676 (Digital Circuits)
One of: ECS327 or ECS330 (Labs)`
  },
  {
    question: "Which electives can be used for QT minor?",
    answer: `Condensed Matter Physics
Decoherence and Open Quantum Systems
Classical and Quantum Optics
Quantum Engineering
Magnetism and Superconductivity
Ultrafast Optics`
  },
  {
    question: "Can I use the same course for major and minor?",
    answer: `No. Courses counted toward your major cannot be used for the minor.`
  },
  {
    question: "Can I do MS thesis outside IISER Bhopal?",
    answer: `Yes, but only if there is a formal collaboration between IISERB faculty and the external institute.`
  },
  {
    question: "What are the requirements for doing MS thesis outside?",
    answer: `There must be a MoU or research collaboration, and approval must be obtained through your department and supervisor.`
  },
  {
    question: "Can I do MS thesis independently outside IISERB?",
    answer: `No. It must be linked to an IISERB faculty collaboration.`
  },
  {
    question: "Are inter-department theses allowed?",
    answer: `Yes. Interdisciplinary and inter-department MS theses are encouraged.`
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded-xl p-4 bg-background-secondary">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left font-semibold text-lg"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <p className="mt-3 whitespace-pre-line text-sm text-gray-600 dark:text-gray-300">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
