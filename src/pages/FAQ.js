import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { motion, AnimatePresence } from 'framer-motion';

// Convert /docs/... links to clickable anchors
const renderTextWithLinks = (text) => {
  return text.split(/(\/docs\/[^\s]+)/g).map((part, i) =>
    part.startsWith("/docs/") ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-primary underline font-medium"
      >
        📄 Open PDF
      </a>
    ) : (
      part
    )
  );
};

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["All", "Academics", "Minor", "Research"];

  // Filtering logic
  const filteredFaqs = faqs.filter(faq => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      faq.question.toLowerCase().includes(searchText) ||
      faq.answerText.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || faq.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-4">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6 text-text-primary">
        Frequently Asked Questions
      </h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={async (e) => {
  const value = e.target.value;
  setSearch(value);

  if (value.length > 3) {
    await addDoc(collection(db, "faqSearches"), {
      query: value,
      timestamp: serverTimestamp(),
    });
  }
}}
        className="w-full p-3 mb-6 rounded-lg bg-background-secondary border border-border-color text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary"
      />

      {/* CATEGORY FILTER */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setOpenIndex(null);
            }}
            className={`px-3 py-1 rounded-full border transition ${
              category === cat
                ? "bg-accent-primary text-white"
                : "bg-background-secondary text-text-primary hover:bg-background-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ LIST */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 && (
          <p className="text-text-secondary">No results found.</p>
        )}

        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              className="border border-border-color rounded-lg bg-background-secondary overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={async () => {
  setOpenIndex(isOpen ? null : index);

  if (!isOpen) {
    await addDoc(collection(db, "faqClicks"), {
      question: faq.question,
      category: faq.category,
      timestamp: serverTimestamp(),
    });
  }
}}
                className="w-full text-left p-4 font-semibold text-text-primary flex justify-between items-center"
              >
                <span>{faq.question}</span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-text-secondary"
                  >
                    <div className="whitespace-pre-line leading-relaxed">
                      {renderTextWithLinks(faq.answerText)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
