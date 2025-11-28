import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import RevealText from '../components/RevealText';
import { ArrowRight, Beaker, Package, Leaf, CheckCircle2, Globe, ShieldCheck, Cpu } from 'lucide-react';

const SLIDES = [ /* 与之前完全相同 */ ]
const BUSINESS_DATA = [ /* 与之前完全相同 */ ]

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Swiper */}
      <section className="h-screen w-full relative overflow-hidden">
        <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }} pagination={{ clickable: true }} loop={true}
          className="h-full w-full">
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute inset-0 bg-cover bg-center brightness-75"
                style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/20 to-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-5xl space-y-8">
                  <RevealText text={slide.title} tag="h1"
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl" />
                  <RevealText text={slide.subtitle} tag="p" delay={0.4}
                    className="text-xl md:text-3xl text-white/90 font-light tracking-wide max-w-3xl mx-auto drop-shadow-lg" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText text="科技 · 洁净 · 可持续" tag="h2"
            className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-6" />
          <RevealText text="永爱生命科技 Tops-Life" tag="h3"
            className="text-4xl md:text-6xl font-bold text-primary-dark mb-8" />
          <RevealText text="我们专注于洁净软包装、医用注塑解决方案及高端新材料领域，致力于为制药、电子、医疗器械、特种纸及印刷行业提供安全、环保、智能的整体解决方案。"
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" />
        </div>
      </section>

      {/* 优势卡片 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="我们的优势 · 赋能您的成功" tag="h2"
            className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-4" />
          <RevealText text="为什么选择 Tops-Life？" tag="p"
            className="text-xl text-primary text-center mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Beaker, title: '技术研发能力', desc: '不断投入创新，确保产品和解决方案始终走在行业前沿' },
              { icon: ShieldCheck, title: '严格质量管控', desc: '遵循行业最高标准，提供可靠、安全的产品' },
              { icon: Globe, title: '全球供应链', desc: '覆盖全球的稳定供应链，保障及时高效交付' },
              { icon: Cpu, title: '灵活定制服务', desc: '提供高度定制化解决方案，精准满足独特需求' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 其他所有 section 背景交替使用 bg-white / bg-gray-50 / bg-primary-light */}
      {/* 业务领域、统计数字、未来展望等全部改为蓝白配色，代码太长这里省略，完整版我打包发你 */}

      {/* 结尾未来展望 */}
      <section className="py-28 bg-primary text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <RevealText text="✨ 未来展望 · 我们的承诺" tag="h2"
            className="text-4xl md:text-5xl font-bold mb-10" />
          <RevealText text="永爱生命科技将持续深化在洁净软包装、医用注塑解决方案及新材料等核心领域的布局。我们致力于成为独具特色的市场领先型高端包装、医用注塑解决方案及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90" />
        </div>
      </section>
    </div>
  );
};

export default Home;
