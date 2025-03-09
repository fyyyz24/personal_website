'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Personal Website',
    description: 'A modern personal website built with Next.js and Tailwind CSS, featuring a dynamic gradient background, responsive design, and smooth animations.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/home.jpg',
    link: 'https://github.com/fyyyz24/personal_website'
  },
  {
    title: 'Elec_risk Analysis Platform',
    description: 'A data visualization platform developed with Next.js and D3.js, providing real-time monitoring, sales trend analysis, and user behavior insights.',
    technologies: ['Next.js', 'D3.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    image: '/projects/electric1.jpg',
    link: 'https://github.com/fyyyz24/analytics'
  },
  {
    title: 'Online Learning Platform',
    description: 'A Vue.js-based online learning platform supporting video playback, course management, and assignment submission using a micro-frontend architecture.',
    technologies: ['Vue.js', 'Vite', 'Express', 'MongoDB', 'Docker'],
    image: '/projects/learn.jpg',
    link: 'https://github.com/fyyyz24/education'
  },
  {
    title: 'Community Forum',
    description: 'A mobile community application developed with React Native, supporting posts, comments, and private messaging with Firebase real-time communication.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    image: '/projects/forum.jpg',
    link: 'https://github.com/fyyyz24/forum'
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 