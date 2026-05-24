'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ─── Frontend Logos ───────────────────────────────────────────────────────────

const HTML5_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0H22.5L20.09 21.63L12 24L3.909 21.63L1.5 0Z" fill="#E34F26" />
    <path d="M12 2.18V21.75L18.429 19.95L20.09 5.09H12V2.18Z" fill="#EF652A" />
    <path d="M12 9.27H8.541L8.3 6.64H12V3.73H5.27L5.82 9.27H12V9.27ZM12 14.82L11.97 14.83L8.891 14H8.691L8.491 11.82H5.61L6.091 17.27L12 18.91V14.82ZM12 14.82" fill="#EBEBEB" />
    <path d="M12 9.27V6.64H18.73L18.12 13.09L12 14.82V18.91L17.91 17.27L18.41 11.82H12V9.27Z" fill="white" />
  </svg>
);

const CSS3_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0H22.5L20.09 21.63L12 24L3.909 21.63L1.5 0Z" fill="#1572B6" />
    <path d="M12 2.18V21.75L18.429 19.95L20.09 5.09H12V2.18Z" fill="#33A9DC" />
    <path d="M12 9.27H8.541L8.3 6.64H12V3.73H5.27L5.82 9.27H12V9.27ZM12 14.82L11.97 14.83L8.891 14H8.691L8.491 11.82H5.61L6.091 17.27L12 18.91V14.82ZM12 14.82" fill="#EBEBEB" />
    <path d="M12 9.27V6.64H18.73L18.12 13.09L12 14.82V18.91L17.91 17.27L18.41 11.82H12V9.27Z" fill="white" />
  </svg>
);

const Tailwind_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8C9.601 4.8 8.161 6 7.681 8.4C8.641 7.2 9.841 6.9 11.281 7.5C12.103 7.842 12.693 8.441 13.353 9.111C14.43 10.203 15.688 11.48 18.001 11.48C20.401 11.48 21.841 10.28 22.321 7.88C21.361 9.08 20.161 9.38 18.721 8.78C17.899 8.438 17.309 7.839 16.649 7.169C15.572 6.077 14.314 4.8 12.001 4.8ZM7.681 11.48C5.281 11.48 3.841 12.68 3.361 15.08C4.321 13.88 5.521 13.58 6.961 14.18C7.783 14.522 8.373 15.121 9.033 15.791C10.11 16.883 11.368 18.16 13.681 18.16C16.081 18.16 17.521 16.96 18.001 14.56C17.041 15.76 15.841 16.06 14.401 15.46C13.579 15.118 12.989 14.519 12.329 13.849C11.252 12.757 9.994 11.48 7.681 11.48Z" fill="#38BDF8" />
  </svg>
);

const JS_Logo = () => (
  <svg className="w-10 h-10 rounded" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#F7DF1E" />
    <path d="M19.78 18.1c-.24.58-.64.98-1.22 1.22-.52.2-1.26.3-2.18.3-.92 0-1.66-.1-2.14-.3-.54-.22-.96-.64-1.24-1.2l1.9-1.12c.16.32.36.56.6.7.24.12.56.2.98.2.46 0 .8-.08 1.02-.22.2-.14.3-.34.3-.6 0-.2-.08-.36-.26-.46-.16-.1-.5-.22-1.04-.34-.94-.2-1.64-.46-2.08-.78-.44-.32-.66-.82-.66-1.52 0-.66.24-1.18.72-1.56.48-.38 1.18-.58 2.1-.58.82 0 1.5.14 2.02.4.52.26.9.74 1.14 1.44l-1.8 1.04c-.16-.36-.34-.58-.52-.68-.18-.1-.44-.14-.76-.14-.36 0-.64.06-.84.2-.18.12-.28.28-.28.5 0 .16.08.3.24.4.16.08.52.2 1.08.32.96.2 1.66.46 2.1.8.44.32.66.82.66 1.5 0 .66-.22 1.18-.7 1.56zM10.82 12.3v5c0 .64-.08 1.14-.24 1.52-.16.38-.48.66-.94.86-.44.2-.98.3-1.62.3-.7 0-1.24-.12-1.66-.34-.4-.22-.72-.56-.94-1l1.86-1.08c.18.3.36.48.56.56.18.08.4.12.64.12.32 0 .56-.08.72-.22.14-.14.22-.44.22-.9v-4.94h2.4z" fill="black" />
  </svg>
);

const TS_Logo = () => (
  <svg className="w-10 h-10 rounded" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#3178C6" />
    <path d="M16.7 18.25c-.24.58-.64.98-1.22 1.22-.52.2-1.26.3-2.18.3-.92 0-1.66-.1-2.14-.3-.54-.22-.96-.64-1.24-1.2l1.9-1.12c.16.32.36.56.6.7.24.12.56.2.98.2.46 0 .8-.08 1.02-.22.2-.14.3-.34.3-.6 0-.2-.08-.36-.26-.46-.16-.1-.5-.22-1.04-.34-.94-.2-1.64-.46-2.08-.78-.44-.32-.66-.82-.66-1.52 0-.66.24-1.18.72-1.56.48-.38 1.18-.58 2.1-.58.82 0 1.5.14 2.02.4.52.26.9.74 1.14 1.44l-1.8 1.04c-.16-.36-.34-.58-.52-.68-.18-.1-.44-.14-.76-.14-.36 0-.64.06-.84.2-.18.12-.28.28-.28.5 0 .16.08.3.24.4.16.08.52.2 1.08.32.96.2 1.66.46 2.1.8.44.32.66.82.66 1.5 0 .66-.22 1.18-.7 1.56zm-7.6-5.85v1.9H6.13v5.27H3.65v-5.27H.7v-1.9H9.1z" fill="white" />
  </svg>
);

const React_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8.7C10.1775 8.7 8.7 10.1775 8.7 12C8.7 13.8225 10.1775 15.3 12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1775 13.8225 8.7 12 8.7ZM23.1675 10.74C23.685 11.535 24 12.4425 24 13.4025C24 16.7175 20.355 19.335 15.3525 20.4075C14.28 21.4125 13.1175 22.065 12 22.065C10.8825 22.065 9.72 21.4125 8.6475 20.4075C3.645 19.335 0 16.7175 0 13.4025C0 12.4425 0.315 11.535 0.8325 10.74C1.35 9.945 2.145 9.1725 3.195 8.445C4.245 7.7175 5.58 7.0275 7.155 6.4275C8.4225 5.2575 9.8775 4.545 11.4 4.545H12.6C14.1225 4.545 15.5775 5.2575 16.845 6.4275C18.42 7.0275 19.755 7.7175 20.805 8.445C21.855 9.1725 22.65 9.945 23.1675 10.74ZM12 6.045C10.965 6.045 9.9825 6.5475 9.1275 7.3725C10.05 7.71 11.01 8.085 12 8.4975C12.99 8.085 13.95 7.71 14.8725 7.3725C14.0175 6.5475 13.035 6.045 12 6.045ZM4.1175 9.7725C3.33 10.32 2.76 10.875 2.4 11.4C2.04 11.925 1.8 12.4575 1.8 12.9525C1.8 15.0675 4.9575 17.205 9.27 18.2325C8.4825 17.1825 7.8225 16.035 7.305 14.82C6.1875 14.28 5.2275 13.6875 4.4625 13.0725C3.6975 12.4575 3.12 11.82 2.7675 11.1975C3.1275 10.7325 3.5925 10.2525 4.1175 9.7725ZM12 19.9575C13.035 19.9575 14.0175 19.455 14.8725 18.63C13.95 18.2925 12.99 17.9175 12 17.505C11.01 17.9175 10.05 18.2925 9.1275 18.63C9.9825 19.455 10.965 19.9575 12 19.9575ZM19.8825 9.7725C20.4075 10.2525 20.8725 10.7325 21.2325 11.1975C20.88 11.82 20.3025 12.4575 19.5375 13.0725C18.7725 13.6875 17.8125 14.28 16.695 14.82C16.1775 16.035 15.5175 17.1825 14.73 18.2325C19.0425 17.205 22.2 15.0675 22.2 12.9525C22.2 12.4575 21.96 11.925 21.6 11.4C21.24 10.875 20.67 10.32 19.8825 9.7725Z" fill="#61DAFB" />
  </svg>
);

const Nextjs_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM18.36 18.84L12.5473 11.3787L12.5358 17.76H11.0842V8.64H12.4716L18.3582 16.1764V8.64H19.7895V17.76C19.7895 18.1729 19.2897 18.3793 18.9979 18.0875L18.36 18.84ZM12.5458 10.02L11.0842 8.16V10.02H12.5458Z" fill="currentColor" />
  </svg>
);

// ─── Tools Logos ──────────────────────────────────────────────────────────────

const Git_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.546 10.93L13.07 0.453a1.503 1.503 0 0 0-2.126 0L8.71 2.684l3.197 3.197a2.688 2.688 0 0 1 3.528 3.527l3.2 3.201a2.698 2.698 0 1 1-1.063 1.062l-3.19-3.19a2.69 2.69 0 0 1-3.535-3.532L7.65 3.751 0.453 10.947a1.503 1.503 0 0 0 0 2.127l10.477 10.478a1.503 1.503 0 0 0 2.126 0L23.546 13.06a1.505 1.505 0 0 0 0-2.13" fill="#F05032" />
  </svg>
);

const Figma_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0h3c2.485 0 4.5 2.015 4.5 4.5S17.485 9 15 9h-3V0z" fill="#FF7262" />
    <path d="M4.5 9C2.015 9 0 6.985 0 4.5S2.015 0 4.5 0H12v9H4.5z" fill="#F24E1E" />
    <path d="M4.5 18C2.015 18 0 15.985 0 13.5S2.015 9 4.5 9H12v9H4.5z" fill="#A259FF" />
    <path d="M12 18H4.5c-2.485 0-4.5-2.015-4.5-4.5S2.015 9 4.5 9H12v9z" fill="#1ABC9C" />
    <path d="M12 24c-2.485 0-4.5-2.015-4.5-4.5S9.515 15 12 15h4.5v4.5c0 2.485-2.015 4.5-4.5 4.5z" fill="#1ABC9C" />
  </svg>
);

const Netlify_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8 11.4l-7.2-7.2c-.4-.4-1-.4-1.4 0l-3.3 3.3L7.7 4.3c-.4-.4-1-.4-1.4 0L.3 10.2c-.4.4-.4 1 0 1.4l5.9 5.9-2.9 2.9c-.4.4-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0l2.9-2.9 5.9 5.9c.4.4 1 .4 1.4 0l5.9-5.9c.5-.4.5-1.1.1-1.5zM12 13.4l-2.8-2.8 2.8-2.8 2.8 2.8-2.8 2.8z" fill="#00C7B7" />
  </svg>
);

const VSCode_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.909 6.842a.545.545 0 0 0-.258-.337l-4.58-2.617a.545.545 0 0 0-.663.109l-8.625 8.784L4.8 8.654a.545.545 0 0 0-.583-.024l-3.766 2.036a.545.545 0 0 0-.022.946l3.35 2.215L.43 16.03a.545.545 0 0 0 .022.946l3.766 2.037a.545.545 0 0 0 .583-.024l4.983-4.127 8.625 8.784a.545.545 0 0 0 .663.109l4.58-2.617a.545.545 0 0 0 .258-.337V6.842zM16.5 12l-6.177 5.096L4.85 13.23l11.65-1.23z" fill="#007ACC" />
  </svg>
);

// ─── Backend Logos ────────────────────────────────────────────────────────────

const Node_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.998 24a2.008 2.008 0 0 1-1.003-.27l-3.184-1.882c-.476-.267-.244-.36-.087-.415.635-.22.763-.27 1.44-.653.07-.04.163-.025.234.018l2.447 1.452c.088.048.213.048.295 0l9.543-5.51c.088-.05.145-.15.145-.257V7.522c0-.11-.057-.208-.148-.261l-9.54-5.507a.296.296 0 0 0-.294 0L2.308 7.26c-.092.053-.15.153-.15.261v11.017c0 .107.058.206.148.255l2.614 1.51c1.418.709 2.286-.126 2.286-.967V8.394c0-.155.124-.276.28-.276h1.216c.152 0 .279.12.279.276v10.942c0 1.893-1.032 2.98-2.829 2.98-.552 0-.987 0-2.199-.597L1.007 20.14A2.01 2.01 0 0 1 0 18.397V7.381c0-.712.38-1.374 1.003-1.73L10.544.14a2.083 2.083 0 0 1 2.01 0l9.541 5.512A2.008 2.008 0 0 1 23.1 7.38V18.4c0 .71-.382 1.37-1.005 1.727l-9.542 5.51c-.31.176-.655.264-1.004.264h-.551zm2.943-7.578c-4.183 0-5.05-1.92-5.05-3.53 0-.153.125-.276.28-.276h1.24c.139 0 .255.1.277.237.19 1.278.754 1.924 3.257 1.924 2.004 0 2.856-.454 2.856-1.52 0-.613-.243-1.069-3.363-1.374-2.609-.26-4.222-.834-4.222-2.92 0-1.924 1.621-3.07 4.338-3.07 3.052 0 4.561 1.059 4.752 3.332a.28.28 0 0 1-.072.207.283.283 0 0 1-.203.088h-1.245a.278.278 0 0 1-.271-.215c-.298-1.316-1.02-1.738-2.961-1.738-2.18 0-2.433.76-2.433 1.329 0 .69.3.892 3.262 1.282 2.93.386 4.32.932 4.32 2.999-.003 2.08-1.737 3.275-4.762 3.275z" fill="#339933" />
  </svg>
);

const Express_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.816 6.411zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.138-.82zm1.158-.228h9.166c-.128-2.526-1.743-4.216-4.228-4.248-2.733-.033-4.788 1.592-4.938 4.248z" fill="currentColor" />
  </svg>
);

const MongoDB_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248" />
  </svg>
);

const Firebase_Logo = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" fill="#FFA000" />
    <path d="M3.89 15.672l2.366-15.21a.542.542 0 0 1 1.014-.174l2.543 4.771-5.923 10.613z" fill="#F57F17" />
    <path d="M20.684 19.364l-2.25-14a.54.54 0 0 0-.919-.295l-13.2 14.298 7.856 4.427a1.621 1.621 0 0 0 1.588 0z" fill="#FFCA28" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const frontendSkills = [
  { name: 'HTML5',       subtitle: 'Semantic Markup',      logo: HTML5_Logo    },
  { name: 'CSS3',        subtitle: 'Modern Layouts',       logo: CSS3_Logo     },
  { name: 'Tailwind CSS',subtitle: 'Utility-First Styles', logo: Tailwind_Logo },
  { name: 'JavaScript',  subtitle: 'ES6+ Logic',           logo: JS_Logo       },
  { name: 'TypeScript',  subtitle: 'Type Safety',          logo: TS_Logo       },
  { name: 'React',       subtitle: 'UI Components',        logo: React_Logo    },
  { name: 'Next.js',     subtitle: 'App Architecture',     logo: Nextjs_Logo   },
];

const toolsSkills = [
  { name: 'Git',             subtitle: 'Version Control',   logo: Git_Logo     },
  { name: 'Figma',           subtitle: 'Design Handoff',    logo: Figma_Logo   },
  { name: 'Netlify & Vercel',subtitle: 'CI/CD Deployments', logo: Netlify_Logo },
  { name: 'VS Code',         subtitle: 'Dev Environment',   logo: VSCode_Logo  },
];

const backendSkills = [
  { name: 'Node.js',    subtitle: 'JS Runtime',        logo: Node_Logo     },
  { name: 'Express.js', subtitle: 'REST APIs',          logo: Express_Logo  },
  { name: 'MongoDB',    subtitle: 'NoSQL Database',     logo: MongoDB_Logo  },
  { name: 'Firebase',   subtitle: 'BaaS & Realtime DB', logo: Firebase_Logo },
];

// ─── Reusable SkillCard ───────────────────────────────────────────────────────

const SkillCard = ({ skill, idx }) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: idx * 0.05 }}
    whileHover={{ y: -3, scale: 1.02 }}
    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 flex items-center space-x-4 shadow-sm hover:shadow transition-all duration-300"
  >
    <div className="flex-shrink-0">
      <skill.logo />
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
        {skill.name}
      </h4>
      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
        {skill.subtitle}
      </p>
    </div>
  </motion.div>
);

// ─── Reusable Category Section ────────────────────────────────────────────────

const SkillCategory = ({ title, description, skills }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <div className="lg:col-span-4 lg:sticky lg:top-24">
      <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, idx) => (
        <SkillCard key={skill.name} skill={skill} idx={idx} />
      ))}
    </div>
  </div>
);

const Divider = () => (
  <div className="h-px bg-slate-200 dark:bg-slate-800/60" />
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section
      id="skills-sec"
      className="py-24 bg-white dark:bg-[#080d1a] relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-violet-400/10 dark:bg-violet-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-green-400/10 dark:bg-green-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3 block"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base"
          >
            Technologies I&apos;ve been working with recently and have extensive experience
            in building scalable sites.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-16">

          <SkillCategory
            title="Frontend Development"
            description="Creating interactive user interfaces using modern coding standards and responsive frameworks."
            skills={frontendSkills}
          />

          <Divider />

          <SkillCategory
            title="Backend Development"
            description="Building scalable server-side logic, REST APIs, and database integrations for robust applications."
            skills={backendSkills}
          />

          <Divider />

          <SkillCategory
            title="Tools & Platforms"
            description="Utilizing code management systems, design assets, and host platforms to orchestrate rapid deployments."
            skills={toolsSkills}
          />

        </div>
      </div>
    </section>
  );
}
