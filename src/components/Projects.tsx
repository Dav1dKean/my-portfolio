'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with Next.js, Tailwind CSS, and Framer Motion.',
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'A weather app using React and the OpenWeather API.',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'A task tracking app with CRUD functionality.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#111] text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 text-left shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
