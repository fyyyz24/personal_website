'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
            {/* 替换为您的头像图片 */}
            <Image
              src="/selfie.jpg"  // 使用新的图片名称
              alt="个人头像"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            YunzhanFu  {/* 修改为您的名字 */}
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            Full Stack Developer | Frontend Expert
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Crafting elegant digital experiences with cutting-edge web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <Link href="/portfolio" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors">
            portfolio
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/10 rounded-lg text-white font-medium transition-colors">
            contact me
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
