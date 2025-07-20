'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', level: 'Framework - Core structure of the site', color: 'bg-indigo-600' },
  { name: 'React', level: 'Library - Component logic & UI', color: 'bg-blue-600' },
  { name: 'Tailwind CSS', level: 'Utility-first CSS styling', color: 'bg-cyan-500' },
  { name: 'Framer Motion', level: 'Library - Animations and transitions', color: 'bg-pink-500' },
  { name: 'Gemini for chatbox', level: 'API - Chatbot integration with Gemnini', color: 'bg-purple-600' },
  { name: 'TypeScript', level: 'Language - Type safety and development tooling', color: 'bg-yellow-600' },
  { name: 'HTML & CSS', level: 'Markup & style for legacy and embedded projects', color: 'bg-green-600' },
  { name: 'Vercel', level: 'Deployment platform for Next.js apps', color: 'bg-gray-800' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#111] text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        💻 Skills Used to Build This Portfolio
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`rounded-lg shadow-md p-6 ${skill.color} text-white`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="mt-2 text-sm">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
