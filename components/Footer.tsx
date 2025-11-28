import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-gray-400 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-sm transform rotate-45"></div>
                <span className="text-xl font-bold tracking-wider text-white">
                  NOVA<span className="text-cyan-400">MATERIAL</span>
                </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              致力于为医疗、生物科技领域提供最先进的材料解决方案。创新科技，守护生命。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">快速链接</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                   <NavLink to={item.path} className="hover:text-cyan-400 transition-colors text-sm">{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">联系方式</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-1 shrink-0" />
                <span>中国上海市浦东新区<br/>科技大道888号创新园区 A座</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <span>+86 21 5555 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <span>contact@novamaterial.com</span>
              </li>
            </ul>
          </div>

          {/* Certs */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">认证资质</h3>
            <div className="grid grid-cols-3 gap-4">
               {/* Placeholders for Cert logos */}
               <div className="bg-neutral-800 h-12 rounded flex items-center justify-center text-xs font-bold text-gray-600 border border-neutral-700">ISO</div>
               <div className="bg-neutral-800 h-12 rounded flex items-center justify-center text-xs font-bold text-gray-600 border border-neutral-700">CE</div>
               <div className="bg-neutral-800 h-12 rounded flex items-center justify-center text-xs font-bold text-gray-600 border border-neutral-700">FDA</div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              通过 ISO 13485, ISO 11607, ISO 9001 等多项国际认证。
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2025 NovaMaterial Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">使用条款</a>
            <a href="#" className="hover:text-white transition-colors">站点地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
