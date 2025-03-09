'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: '前端开发', items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { category: '后端开发', items: ['Node.js', 'Python', 'Java', 'SQL'] },
  { category: '开发工具', items: ['Git', 'Docker', 'VS Code', 'Webpack'] },
  { category: '设计工具', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
];

const experiences = [
  {
    company: '某科技公司',
    position: '高级前端开发工程师',
    period: '2020 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。',
  },
  {
    company: '某互联网公司',
    position: '全栈开发工程师',
    period: '2018 - 2020',
    description: '参与开发企业级应用，负责前后端开发工作。',
  },
];

const education = [
  {
    school: '某知名大学',
    degree: '计算机科学与技术 硕士',
    period: '2015 - 2018',
  },
  {
    school: '某大学',
    degree: '软件工程 学士',
    period: '2011 - 2015',
  },
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
        <h1 className="text-4xl font-bold mb-8 text-center">关于我</h1>

        {/* 技能部分 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">技能专长</h2>
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

        {/* 工作经验 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">工作经验</h2>
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

        {/* 教育背景 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">教育背景</h2>
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