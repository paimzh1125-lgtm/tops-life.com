// app/contact/page.tsx 或 components/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '@/components/RevealText';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '业务咨询',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // 真实提交示例（支持 Vercel/Netlify/自建后端）
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '业务咨询', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="pt-24 pb-32 min-h-screen bg-black text-white overflow-hidden relative">
      {/* 背景网格 + 流动光点（纯 CSS 神级氛围感） */}
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <RevealText
            text="联系我们"
            tag="h1"
            className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          />
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            无论您是有业务需求、合作意向，还是对我们的技术感兴趣，欢迎随时与我们联系。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* 左侧信息 */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="group p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl border border-neutral-800 rounded-3xl hover:border-cyan-800/50 transition-all duration-500">
                <div className="flex items-center gap-5 mb-4">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors">
                    <MapPin className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold">全球总部</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  苏州工业园区方泾路8号群祥工业坊2
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:contact@novamaterial.com"
                  className="flex items-center gap-5 p-6 bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl hover:border-cyan-700/50 hover:bg-cyan-500/5 transition-all group"
                >
                  <Mail className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-500">邮箱</p>
                    <p className="text-lg font-medium">contact：Topslife@tops-life.com</p>
                  </div>
                </a>

                <a
                  href="tel:+86-051266185798"
                  className="flex items-center gap-5 p-6 bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl hover:border-cyan-700/50 hover:bg-cyan-500/5 transition-all group"
                >
                  <Phone className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-500">电话</p>
                    <p className="text-lg font-medium">+86 21 5555 8888</p>
                  </div>
                </a>
              </div>
            </motion.div>

          {/* 右侧表单 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="p-8 md:p-12 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-2xl rounded-3xl border border-neutral-800 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                在线留言
              </h2>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <InputField
                    label="邮箱"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">主题</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 bg-neutral-950/70 border border-neutral-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option>业务咨询</option>
                    <option>技术合作</option>
                    <option>加入我们</option>
                    <option>媒体采访</option>
                    <option>其他</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">留言内容</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-neutral-950/70 border border-neutral-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="告诉我们您的需求..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="relative w-full py-5 px-8 font-bold text-lg rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'sending' ? (
                      '发送中...'
                    ) : status === 'success' ? (
                      '发送成功！'
                    ) : status === 'error' ? (
                      '发送失败，请重试'
                    ) : (
                      <>
                        发送信息发送
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 复用输入框组件，减少重复代码
function InputField({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full px-5 py-4 bg-neutral-950/70 border border-neutral-700 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
        required
      />
    </div>
  );
}
