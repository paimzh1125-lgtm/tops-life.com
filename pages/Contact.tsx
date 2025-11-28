import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

// 定义明确的表单状态类型
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'network_error';

// 定义用于渲染的状态消息映射
const statusMessage: Record<FormStatus, string> = {
  idle: '',
  sending: '正在发送您的信息...',
  success: '发送成功！我们会尽快与您联系。',
  error: '服务器出了一点小问题，请稍后重试。',
  network_error: '网络连接异常，请检查您的网络。',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // 当用户开始重新输入时，重置错误状态，提升体验
    if (status === 'error' || status === 'network_error') {
        setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus("sending");

    try {
      // 模拟 API 请求 (实际使用时请取消注释下方的 fetch)
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // 模拟网络延迟演示效果
      await new Promise(resolve => setTimeout(resolve, 1500));
      const isSuccess = true; // 模拟成功

      if (isSuccess) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // 3秒后重置状态
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Network or submission error:", error);
      setStatus("network_error");
    }
  };

  // 辅助变量
  const isSending = status === 'sending';
  const isSuccess = status === 'success';
  const isError = status === 'error' || status === 'network_error';

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-20 px-6 lg:px-20 relative overflow-hidden">
      {/* 背景装饰效果 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-2">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold">联系我们</h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            如果您有任何疑问或合作意向，请随时通过以下方式与我们联系，或直接填写右侧表单。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* 左侧：联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* 邮箱 */}
              <div className="flex items-start space-x-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-white/10">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">电子邮箱</h3>
                  <a href="mailto:Topslife@tops-life.com" className="text-gray-300 hover:text-white transition">
                    Topslife@tops-life.com
                  </a>
                </div>
              </div>

              {/* 电话 */}
              <div className="flex items-start space-x-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-white/10">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">联系电话</h3>
                  <a href="tel:+86051266185798" className="text-gray-300 hover:text-white transition">
                    +86 0512 6618 5798
                  </a>
                </div>
              </div>

              {/* 地址 */}
              <div className="flex items-start space-x-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-white/10">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">公司地址</h3>
                  <p className="text-gray-300 leading-relaxed">
                    江苏省苏州市工业园区<br />
                    方泾路8号群祥工业坊2
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧：表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-neutral-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">留言内容</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="请详细描述您的需求..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending || isSuccess}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300
                  ${isSuccess 
                    ? "bg-green-600 cursor-default" 
                    : isSending 
                      ? "bg-blue-800 cursor-wait" 
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                  }`}
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    发送中...
                  </>
                ) : isSuccess ? (
                  "发送成功"
                ) : (
                  <>
                    发送信息
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* 状态消息展示区 */}
              <div className="h-6 text-center text-sm font-medium">
                {status !== 'idle' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${isError ? 'text-red-400' : isSuccess ? 'text-green-400' : 'text-gray-400'}`}
                  >
                    {statusMessage[status]}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
