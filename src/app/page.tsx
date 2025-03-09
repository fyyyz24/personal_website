'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-8">
            {/* 这里替换为您的头像图片 */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            您的名字
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            全栈开发工程师 | UI/UX 设计师
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            欢迎来到我的个人网站。我专注于创建美观且用户友好的web应用程序，
            热衷于将创意想法转化为现实。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <Link href="/portfolio" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors">
            查看作品集
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/10 rounded-lg text-white font-medium transition-colors">
            联系我
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
