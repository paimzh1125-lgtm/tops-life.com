好的，我将根据之前的讨论，为您提供一个经过 **TypeScript 类型增强**、**用户体验 (UX) 优化** 和 **代码健壮性改进** 后的完整 `Contact` 组件代码。

主要修改点包括：

1.  **明确的表单状态类型** (`FormStatus`)。
2.  **根据状态禁用提交按钮**，防止重复提交。
3.  **动态显示提交按钮文本** 和 **状态信息**。
4.  **优化了 `catch` 块** 以更好地处理错误。
5.  **改进了输入框的 `placeholder` 样式**。

-----

## 完整的优化后的 `Contact.tsx` 组件

```tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// 1. 定义明确的表单状态类型
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'network_error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>('idle'); // 初始状态设为 'idle'

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
        // 尝试记录服务器返回的非成功状态码
        console.error("Submission failed with status:", res.status);
        setStatus("error");
      }
    } catch (error: unknown) {
      // 捕获网络错误等，并记录以便调试
      console.error("Network or submission error:", error);
      setStatus("network_error");
    }
  };

  // 根据状态显示不同的中文信息
  const statusMessage: Record<FormStatus, string> = {
    idle: '',
    sending: '发送中...',
    success: '发送成功！我们将尽快回复您。',
    error: '发送失败，请稍后重试。',
    network_error: '网络错误，请稍后再试。',
  };

  // 渲染中使用的状态文本
  const currentStatusMessage = statusMessage[status];
  const isSending = status === 'sending';

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
            // 改进：添加 placeholder-gray-500 样式
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

          {/* 状态信息展示 */}
          {status !== 'idle' && (
            <p 
              className={`text-center ${status === 'error' || status === 'network_error' ? 'text-red-400' : 'text-gray-300'}`}
            >
              {currentStatusMessage}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
```
