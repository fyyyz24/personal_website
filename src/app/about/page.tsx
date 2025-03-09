'use client';

import { motion } from 'framer-motion';

const skills = [
  { 
    category: 'Frontend Development', 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Webpack', 'Vite'] 
  },
  { 
    category: 'Backend Development', 
    items: ['Node.js', 'Express', 'NestJS', 'MySQL', 'MongoDB', 'Redis'] 
  },
  { 
    category: 'Development Tools', 
    items: ['Git', 'Docker', 'VS Code', 'Postman', 'Jenkins', 'Linux'] 
  },
  { 
    category: 'Additional Skills', 
    items: ['Frontend Optimization', 'Responsive Design', 'UI/UX', 'Technical Writing', 'Team Collaboration'] 
  },
];

const experiences = [
  {
    company: 'Hangzhou Dianzi University',
    position: 'Student Union Technical Department',
    period: '2023 - 2027',
    description: 'Leading the development of university event management platform using Vue.js and Node.js. Implementing responsive design and optimizing performance.',
  },
  {
    company: 'Open Source Contributions',
    position: 'Frontend Developer',
    period: '2023 - Present',
    description: 'Contributing to various open-source projects, focusing on React and Next.js ecosystem. Implementing new features and fixing bugs.',
  }
];

const education = [
  {
    school: 'Hangzhou Dianzi University',
    degree: 'Bachelor of Computer Science and Technology',
    period: '2023 - 2027',
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white/5 rounded-lg p-6"
              >
                <h3 className="text-xl font-medium mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="bg-white/5 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{exp.company}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-purple-400 mb-2">{exp.position}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-white/5 rounded-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">{edu.school}</h3>
                    <p className="text-purple-400">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-gray-400">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
} 