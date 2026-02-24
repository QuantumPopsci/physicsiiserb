import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["All", "Academics", "Minor", "Research"];

  const filteredFaqs = faqs.filter(faq => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      faq.question.toLowerCase().includes(searchText) ||
      (faq.answerText && faq.answerText.toLowerCase().includes(searchText));

    const matchesCategory =
      category === "All" || faq.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg bg-background-secondary border border-border-color text-text-primary"
      />

      {/* CATEGORY FILTER */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-full border ${
              category === cat
                ? "bg-accent-primary text-white"
                : "bg-background-secondary text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ LIST */}
      {filteredFaqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 border rounded-lg p-4 bg-background-secondary"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left font-semibold text-text-primary"
          >
            {faq.question}
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-3 text-text-secondary"
              >
                {/* ✅ IMPORTANT: render JSX directly */}
                <div>{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
