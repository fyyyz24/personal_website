'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">联系我</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 联系信息 */}
          <div className="bg-white/5 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">电子邮件</h3>
                <p className="text-purple-400">your.email@example.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">社交媒体</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">地址</h3>
                <p className="text-gray-300">城市, 省份</p>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="bg-white/5 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">发送消息</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  电子邮件
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  消息
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 