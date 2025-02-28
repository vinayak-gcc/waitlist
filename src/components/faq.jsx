"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./ui/Footer";
import ContactCard from "./ui/ContactCard";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is the Waitlst?",
      answer:
        "The Waitlst is a powerful tool for managing and organizing your waiting list efficiently.",
    },
    {
      question: "How can I customize?",
      answer:
        "You can customize various aspects of the Waitlst to match your brand and requirements.",
    },
    {
      question: "Which platforms can the Waitlst template integrate?",
      answer:
        "The Waitlst template can integrate with various platforms and services.",
    },
    {
      question: "How about updates?",
      answer:
        "We regularly provide updates to improve functionality and add new features.",
    },
    {
      question: "Collecting Information?",
      answer:
        "Information collection is secure and compliant with privacy standards.",
    },
    {
      question: "Is the Waitlst template mobile-friendly?",
      answer:
        "Yes, the Waitlst template is fully responsive and mobile-friendly.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow scale-90 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <span className="inline-block scale-105 shadow-[0_0_20px_rgba(255,255,255,0.55)] px-6 py-2 text-sm text-white rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
            <span className="text-white">Frequently </span>
            <span className="text-zinc-400 space-y-10">Asked </span>
            <br />
            <span className="text-white block mt-4">
              Quest<span className="text-zinc-400">ions</span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[680px] mx-auto px-0 ">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border border-white/25 relative bg-black rounded-xl text-white cursor-pointer p-6  ${
                  index % 3 === 2 ? "md:col-span-2" : "md:col-span-1"
                }`}
                onClick={() => toggleFAQ(index)}
              >
              <div className="flex justify-between items-center">
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center ">
                  <span className="text-lg">{item.question}</span>
                </div>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-400"
                  >
                    {item.answer}
                  </motion.p>
                )}
                </div>
                <div>
                <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 px-4 flex items-center justify-center rounded-full bg-black border border-white/25 text-white text-xl"
                  >
                    +
                  </motion.span>
                </div>

                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
}
