'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: '智能客服系统',
    description: '基于人工智能的客服系统，能够自动回答用户问题，提高客服效率。',
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    image: '/projects/project1.jpg', // 替换为实际图片路径
  },
  {
    title: '电商平台',
    description: '全功能电商平台，支持商品管理、订单处理、支付集成等功能。',
    technologies: ['Vue.js', 'Spring Boot', 'MySQL', 'Redis'],
    image: '/projects/project2.jpg',
  },
  {
    title: '社交媒体应用',
    description: '类似 Instagram 的社交媒体应用，支持图片分享、评论和私信功能。',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
    image: '/projects/project3.jpg',
  },
  {
    title: '数据可视化平台',
    description: '企业级数据分析和可视化平台，支持多种图表类型和实时数据更新。',
    technologies: ['D3.js', 'TypeScript', 'Express', 'PostgreSQL'],
    image: '/projects/project4.jpg',
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
        <h1 className="text-4xl font-bold mb-8 text-center">作品集</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="h-48 bg-purple-500/20 relative">
                {/* 这里可以添加项目截图 */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-green-500/20" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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