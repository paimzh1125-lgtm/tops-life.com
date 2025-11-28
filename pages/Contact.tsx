import React from 'react';
import RevealText from '../components/RevealText';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <RevealText text="联系我们" tag="h1" className="text-4xl md:text-6xl font-bold text-white mb-8" />
            <p className="text-xl text-gray-400 mb-12">
              无论您是有业务需求、合作意向，还是对我们的技术感兴趣，欢迎随时与我们联系。
            </p>
            
            <div className="space-y-8">
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-white font-bold mb-2">全球总部</h3>
                <p className="text-gray-400">中国上海市浦东新区科技大道888号创新园区 A座</p>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="text-white font-bold mb-2">商务合作</h3>
                <p className="text-gray-400 text-lg">contact@novamaterial.com</p>
                <p className="text-gray-400">+86 21 5555 8888</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-white mb-8">在线留言</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">姓名</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">邮箱</label>
                  <input type="email" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">主题</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                  <option>业务咨询</option>
                  <option>技术合作</option>
                  <option>加入我们</option>
                  <option>其他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">留言内容</label>
                <textarea rows={4} className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]">
                发送信息
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
