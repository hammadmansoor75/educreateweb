import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        aria-expanded={isOpen}
        onClick={toggleFAQ}
      >
        <span className="flex-1 text-base-content text-black dark:text-white">{question}</span>
        <svg
          className={`flex-shrink-0 text-black dark:text-white w-4 h-4 ml-auto fill-current transform transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : ''}` }
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1"></rect>
          <rect y="7" width="16" height="2" rx="1" className="rotate-90 text-black dark:text-white"></rect>
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.3s ease-in-out' }}
      >
        <div className="pb-5 leading-relaxed">
          <div className="space-y-2 leading-relaxed text-black dark:text-white">{answer}</div>
        </div>
      </div>
    </li>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "What is EduCreate?",
      answer: "EduCreate is an innovative online platform designed for educators and learners to create, share, and manage customized courses. Our user-friendly tools empower instructors to design engaging educational content, making learning more interactive and effective.",
    },
    {
      question: "How do I create a course on EduCreate?",
      answer: "Creating a course on EduCreate is easy! Simply sign up for an account, navigate to the course creation section, and follow the guided prompts. You can add multimedia elements, quizzes, and interactive features to enrich your course and engage your students.",
    },
    {
      question: "Can I collaborate with other educators on EduCreate?",
      answer: " Yes! EduCreate encourages collaboration among educators. You can invite colleagues to co-create courses, share resources, and provide feedback on each other’s work. This collaborative environment enhances the learning experience for both instructors and students.",
    },
  ];

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        {/* <p className="inline-block font-semibold text-primary mb-4">Insurance FAQ</p> */}
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content text-black dark:text-white">Frequently Asked <span className='text-blue-900'>Questions</span></p>
      </div>
      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
    </div>
  );
};

export default Faq;
