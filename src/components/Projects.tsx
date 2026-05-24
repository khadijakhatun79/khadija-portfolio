'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Safe GitHub Icon (SVG)
const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.82 1.32 3.5 1 .1-.8.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1.02-.33 3.34 1.24.97-.27 2.02-.4 3.06-.4s2.09.13 3.06.4c2.32-1.57 3.34-1.24 3.34-1.24.66 1.66.24 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const projects = [
  {
    title: 'DocAppoint',
    description:
      'Doctor appointment booking system with authentication and scheduling.',
    live: 'https://docappoint-liard.vercel.app/',
    github: 'https://github.com/khadijakhatun79/docappoint',
    slug: 'docappoint',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    type: 'Full Stack',
  },
  {
    title: 'Wanderlust',
    description:
      'Travel booking platform with destination browsing and UI experience.',
    live: '#',
    github: '#',
    slug: 'wanderlust',
    tags: ['React', 'Tailwind', 'API'],
    type: 'Travel App',
  },
  {
    title: 'SunCart',
    description:
      'E-commerce system with cart, products, and checkout flow.',
    live: 'https://assignment-8-rho-two.vercel.app/',
    github: 'https://github.com/khadijakhatun79/Assignment-8',
    slug: 'suncart',
    tags: ['React', 'Redux', 'MongoDB'],
    type: 'E-commerce',
  },
  {
    title: 'KeenKeeper',
    description:
      'Task management app to organize daily productivity.',
    live: 'https://assignment-7-one-chi.vercel.app/',
    github: 'https://github.com/khadijakhatun79/Assignment-7',
    slug: 'keenkeeper',
    tags: ['Next.js', 'Tailwind'],
    type: 'Productivity',
  },
];

export default function Projects() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white dark:from-[#030712] dark:to-[#020617]">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            A collection of real-world applications showcasing my development skills and creativity.
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
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-xl" />

              <div className="relative">

                {/* Type badge */}
                <span className="text-xs px-3 py-1 rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
                  {project.type}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-3 text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-7 flex-wrap">

                  {/* Live */}
                  <a
                    href={project.live}
                    className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-700 transition flex items-center gap-1"
                  >
                    Live <ExternalLink size={14} />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
                  >
                    <GitHubIcon /> Code
                  </a>

                  {/* Details */}
                  <a
                    href={`/projects/${project.slug}`}
                    className="text-sm text-violet-600 hover:underline flex items-center gap-1"
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