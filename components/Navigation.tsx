import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

// 请确保你的 logo 确实放在 src/components/logo.png
import logo from '../components/logo.png';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ==================== Logo ==================== */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Top Life - 回到首页"
        >
          {/* Logo 图片 + 悬浮发光动画 */}
          <div className="relative">
            <img
              src={logo}
              alt="Top Life Logo"
              className="w-10 h-10 object-contain drop-shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl"
            />
            {/* 青色光晕（悬浮时扩散） */}
            <div className="absolute -inset-2 bg-cyan-400 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
          </div>

          {/* 文字：小屏幕隐藏，大屏幕显示 + Life 高亮青色 */}
          <span className="text-2xl font-bold tracking-wider text-white hidden sm:inline-block">
            Top <span className="text-cyan-400">Life</span>
          </span>
        </NavLink>

        {/* ==================== 桌面菜单 ==================== */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* ==================== 移动端菜单按钮 ==================== */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="打开菜单"
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ==================== 移动端全屏菜单 ==================== */}
      <div
        className={`fixed inset-0 bg-black
