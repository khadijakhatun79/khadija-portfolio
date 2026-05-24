'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Flower2, Cpu, Compass, Home } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  gradient: string;
  iconColor: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'DocAppoint',
    description: 'Doctor appointment booking system with authentication and dashboard.',
    link: '#',
    icon: Flower2,
    gradient: 'from-rose-100 to-pink-200 dark:from-rose-950/30 dark:to-pink-950/20',
    iconColor: 'text-rose-500 bg-rose-100 dark:bg-rose-900/30',
    tags: ['Next.js', 'MongoDB', 'Express', 'Tailwind'],
  },
  {
    title: 'WanderLust',
    description: 'Travel listing platform with search and booking features.',
    link: '#',
    icon: Compass,
    gradient: 'from-emerald-100 to-teal-200 dark:from-emerald-950/30 dark:to-teal-950/20',
    iconColor: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
    tags: ['React', 'Node.js', 'API'],
  },
  {
    title: 'SunCart',
    description: 'E-commerce shopping cart system with payment flow.',
    link: '#',
    icon: Cpu,
    gradient: 'from-cyan-100 to-indigo-200 dark:from-cyan-950/30 dark:to-indigo-950/20',
    iconColor: 'text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30',
    tags: ['Next.js', 'Stripe', 'Redux'],
  },
  {
    title: 'KeenKeeper',
    description: 'Task & productivity tracker app with clean UI.',
    link: '#',
    icon: Home,
    gradient: 'from-slate-100 to-indigo-200 dark:from-slate-900/40 dark:to-indigo-900/20',
    iconColor: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border bg-gradient-to-br ${project.gradient} shadow-sm`}
            >
              <div className="flex justify-between items-center mb-5">
                <div className={`p-3 rounded-xl ${project.iconColor}`}>
                  <project.icon size={22} />
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="p-2 rounded-full bg-white dark:bg-slate-900"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-md bg-white/70 dark:bg-slate-950/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}