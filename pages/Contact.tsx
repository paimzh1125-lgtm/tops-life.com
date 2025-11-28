import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// 定义明确的表单状态类型
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'network_error';

// 定义用于渲染的状态消息映射
const statusMessage: Record<FormStatus, string> = {
  idle: '',
  sending: '发送中...',
  success: '发送成功！我们将尽快回复您。',
  error: '发送失败，请稍后重试。',
  network_error: '网络错误，请稍后再试。',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>('idle'); // 初始状态为 'idle'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return; // 避免重复提交

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // 服务器响应非 2xx 状态码
        console.error("Submission failed with status:", res.status);
        setStatus("error");
      }
    } catch (error: unknown) {
      // 捕获网络连接或 fetch 错误
      console.error("Network or submission error:", error);
      setStatus("network_error");
    }
  };

  // 渲染中使用的状态文本和布尔值
  const currentStatusMessage = statusMessage[status];
  const isSending = status === 'sending';
  const isError = status === 'error' || status === 'network_error';

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        联系我们
      </motion.h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* 左侧信息 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* 邮箱 */}
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-gray-400">电子邮箱</p>
              <p className="text-lg">contact:Topslife@tops-life.com</p>
            </div>
          </div>

          {/* 电话 */}
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-gray-400">联系电话</p>
              <p className="text-lg">+86 0512 6618 5798</p>
            </div>
          </div>

          {/* 地址 */}
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-gray-400">公司地址</p>
              <p className="text-lg">苏州工业园区方泾路8号群祥工业坊2</p>
            </div>
          </div>
        </motion.div>

        {/* 右侧表单 */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* 姓名输入框 */}
          <input
            type="text"
            name="name"
            placeholder="您的姓名"
            value={formData.name}
            onChange={handleChange}
            required
            // 优化：添加 placeholder-gray-500 以增强可见性
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 placeholder-gray-500 outline-none transition"
          />

          {/* 邮箱输入框 */}
          <input
            type="email"
            name="email"
            placeholder="您的邮箱"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 placeholder-gray-500 outline-none transition"
          />

          {/* 留言文本域 */}
          <textarea
            name="message"
            placeholder="您的留言"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 placeholder-gray-500 outline-none transition"
          />

          {/* 提交按钮 (优化: 禁用状态和动态文本) */}
          <button
            type="submit"
            disabled={isSending} // 状态为 sending 时禁用按钮
            className={`w-full py-3 rounded-xl transition font-semibold 
              ${isSending
                ? "bg-blue-800 cursor-not-allowed" // 发送中样式
                : "bg-blue-600 hover:bg-blue-700" // 正常样式
              }`
            }
          >
            {isSending ? "发送中..." : "发送信息"}
          </button>

          {/* 状态信息展示 (优化: 根据状态改变文本颜色) */}
          {status !== 'idle' && (
            <p 
              className={`text-center ${isError ? 'text-red-400' : 'text-gray-300'}`}
            >
              {currentStatusMessage}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
