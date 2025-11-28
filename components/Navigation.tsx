import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

// 假设图片在 src/assets 下（根据实际路径调整）
import logo from '../components/logo.png'; // 如果在 public 目录下，可跳过这行

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
          ? 'bg-black/80 backdrop-blur-md border-b-cyan-500/50 shadow-[0_0_15px_rgba(0,163,255,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - 点击返回首页 */}
        <NavLink 
          to="/" 
          className="flex items-center gap-3 group"
          aria-label="Top Life - 回到首页"
        >
          {/* Logo 图片 */}
          <div className="relative">
            <img 
              src={logo} // 如果在 public 目录下，用 "/logo.png"
              alt="Top Life Logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            {/* 可选：发光动画 */}
            <div className="absolute inset-0 w-9 h-9 bg-cyan-400 rounded-sm blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Logo 文字 */}
          <span className="text-2xl font-bold tracking-wider text-white">
            Top Life
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm uppercase tracking-widest transition-colors duration-300 relative group py-2 ${
                  isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-white font-light tracking-widest hover:text-cyan-400 transition-colors"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
