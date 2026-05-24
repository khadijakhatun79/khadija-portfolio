'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const roles = ['Frontend Developer', 'Web Developer', 'MERN Stack Developer', 'UI/UX Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-[#030712]"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-cyan-400/20 dark:bg-cyan-600/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-6"
            >
              <span>Hello 👋</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-4"
            >
              I&apos;m <span className="theme-gradient-light dark:theme-gradient">Khadija Khatun</span>
            </motion.h1>

            {/* Typewriter Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center mb-6"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                A{' '}
                <span className="text-violet-600 dark:text-cyan-400">
                  {displayText}
                </span>
                <span className="inline-block w-1 h-6 ml-1 bg-violet-600 dark:bg-cyan-400 animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed"
            >
              Frontend Developer specializing in scalable ecosystems, performance optimization, and pixel-perfect UI execution. Dedicated to turning ideas into modern web solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto"
            >
              <a
                href="#project-sec"
                className="w-full sm:w-auto text-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white theme-gradient-bg theme-gradient-bg-hover rounded-full shadow-lg shadow-violet-500/25 transition-all"
              >
                View Portfolio
              </a>
              <a
                href="#contact-sec"
                className="w-full sm:w-auto text-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-850 bg-slate-100 hover:bg-slate-200 dark:text-white dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-6 text-slate-500 dark:text-slate-400"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-550">
                Connect
              </span>
              <a
                href="https://github.com/khadijakhatun79"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-250 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-350 dark:hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/khadija-khatun79/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-250 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-350 dark:hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Spinning/pulsing background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-20 blur-xl animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-violet-400/30 dark:border-violet-500/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/20 dark:border-cyan-500/10 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Central Avatar Frame */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-white dark:border-[#0f172a] shadow-2xl bg-white dark:bg-slate-900 flex items-center justify-center animate-float">
               <div className="relative w-82 h-82 overflow-hidden rounded-2xl">
                <Image
                  src="/assets/avatar.png"
                  alt="Khadija Khatun Profile Picture"
                  fill
                  priority
                  sizes="(max-width: 868px) 100vw, 484px"
                  className="object-cover scale-105"
                />
              </div>
              </div>
            </motion.div> 
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#about-sec"
          className="flex flex-col items-center text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors uppercase"
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-violet-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
