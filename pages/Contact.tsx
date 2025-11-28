import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("发送中...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("发送成功！我们将尽快回复您。");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("发送失败，请稍后重试。");
      }
    } catch (_) {
      setStatus("网络错误，请稍后再试。");
    }
  };

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
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-gray-400">电子邮箱</p>
              <p className="text-lg">contact:Topslife@tops-life.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-gray-400">联系电话</p>
              <p className="text-lg">+86 0512 6618 5798</p>
            </div>
          </div>

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
          <input
            type="text"
            name="name"
            placeholder="您的姓名"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="您的邮箱"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="您的留言"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            发送信息
          </button>

          {status && <p className="text-center text-gray-300">{status}</p>}
        </motion.form>
      </div>
    </div>
  );
}
