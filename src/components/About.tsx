'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Palette, Rocket } from 'lucide-react';

const focusAreas = [
  {
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following design patterns and best industry practices.',
    icon: Code2,
    color: 'text-violet-500 bg-violet-100 dark:bg-violet-900/20',
  },
  {
    title: 'Web Development',
    description: 'Developing high-quality, responsive web and mobile web applications with React, Next.js, and modern frameworks.',
    icon: Laptop,
    color: 'text-cyan-500 bg-cyan-100 dark:bg-cyan-900/20',
  },
  {
    title: 'UI/UX Focus',
    description: 'Creating pixel-perfect, interactive, and accessible user interfaces that engage users and deliver results.',
    icon: Palette,
    color: 'text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/20',
  },
  {
    title: 'Performance',
    description: 'Optimizing resource loading, caching strategies, and rendering pathways for lightning-fast loading speeds.',
    icon: Rocket,
    color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/20',
  },
];

export default function About() {
  return (
    <section
      id="about-sec"
      className="py-24 bg-white dark:bg-[#080d1a] relative overflow-hidden"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyan-400/10 dark:bg-cyan-600/5 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
            >
              Get To Know Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg"
            >
              <p>Iam a passionate Frontend Web Developer dedicated to transforming ideas into creative and functional digital experiences. I specialize in building seamless, intuitive, and visually engaging user interfaces that enhance user satisfaction and interaction.

              </p>
              <p>
              My approach focuses on developing scalable, high-performing web applications tailored to both user needs and business goals. By prioritizing performance, accessibility, and responsive design, I aim to create modern experiences that are not only visually appealing but also efficient and user-friendly.


              </p>
              <p>I enjoy learning new technologies, solving real-world problems through code, and continuously improving my development skills. Outside of programming, I love exploring design inspiration, learning new trends in web development, and working on creative personal projects.</p>
            </motion.div>
          </div>

          {/* About Focus Areas Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {focusAreas.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className={`p-3 rounded-xl w-fit ${item.color} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
