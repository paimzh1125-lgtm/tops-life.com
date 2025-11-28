// components/BusinessSection.tsx

import { motion } from "framer-motion";
import { BUSINESS_DATA } from "@/constants/business-data";

export default function BusinessSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题区 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-6">
            核心业务领域
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们专注三大高技术壁垒赛道，为全球客户提供从原料到成品的一站式解决方案
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {BUSINESS_DATA.map((business) => (
            <motion.article
              key={business.id}
              variants={item}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden overflow-hidden border border-gray-100"
            >
              {/* 图片区 */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold drop-shadow-lg">
                    {business.title}
                  </h3>
                </div>
              </div>

              {/* 内容区 */}
              <div className="p-8 lg:p-10">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {business.description
                </p>

                {/* 特性列表 */}
                <ul className="space-y-4">
                  {business.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-500 mt-1.5 mr-3 text-lg">✓</span>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* 可选：加一个“了解更多”按钮 */}
                <div className="mt-10">
                  <button className="text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors flex items-center">
                    了解更多
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
