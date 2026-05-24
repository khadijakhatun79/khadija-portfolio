'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Safe GitHub Icon
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.82 1.32 3.5 1 .1-.8.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1.02-.33 3.34 1.24.97-.27 2.02-.4 3.06-.4s2.09.13 3.06.4c2.32-1.57 3.34-1.24 3.34-1.24.66 1.66.24 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const projects = [
  {
    title: 'DocAppoint',
    description: 'Doctor appointment booking system with authentication and scheduling.',
    live: 'https://docappoint-liard.vercel.app/',
    github: 'https://github.com/khadijakhatun79/docappoint',
    slug: 'docappoint',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    type: 'Full Stack',
  },
  {
    title: 'Wanderlust',
    description: 'Travel booking platform with destination browsing and UI experience.',
    live: '#',
    github: '#',
    slug: 'wanderlust',
    tags: ['React', 'Tailwind', 'API'],
    type: 'Travel App',
  },
  {
    title: 'SunCart',
    description: 'E-commerce system with cart, products, and checkout flow.',
    live: 'https://assignment-8-rho-two.vercel.app/',
    github: 'https://github.com/khadijakhatun79/Assignment-8',
    slug: 'suncart',
    tags: ['React', 'Redux', 'MongoDB'],
    type: 'E-commerce',
  },
  {
    title: 'KeenKeeper',
    description: 'Task management app to organize daily productivity.',
    live: 'https://assignment-7-one-chi.vercel.app/',
    github: 'https://github.com/khadijakhatun79/Assignment-7',
    slug: 'keenkeeper',
    tags: ['Next.js', 'Tailwind'],
    type: 'Productivity',
  },
];

export default function Projects() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#030712] dark:via-[#020617] dark:to-[#020617] overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Real-world applications built with modern full-stack technologies and clean UI/UX principles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-3xl border border-slate-200/70 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
            >

              {/* glow hover layer */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-xl" />

              <div className="relative">

                {/* badge */}
                <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 font-medium">
                  {project.type}
                </span>

                {/* title */}
                <h3 className="text-2xl font-bold mt-4 text-slate-900 dark:text-white group-hover:text-violet-600 transition">
                  {project.title}
                </h3>

                {/* description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* buttons */}
                <div className="flex flex-wrap gap-3 mt-7">

                  {/* live */}
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium hover:scale-105 transition flex items-center gap-2 shadow-md"
                  >
                    Live <ExternalLink size={14} />
                  </a>

                  {/* github */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2"
                  >
                    <GitHubIcon /> Code
                  </a>

                  {/* details */}
                  <a
                    href={`/projects/${project.slug}`}
                    className="text-sm text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
                  >
                    View Details <ExternalLink size={14} />
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}