import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import RevealText from '../components/RevealText';
import { ArrowRight, Package, CheckCircle2, Beaker, ShieldCheck, Globe, Cpu } from 'lucide-react';

const SLIDES = [/* 保持不变 */];
const BUSINESS_DATA = [/* 保持不变 */];

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative h-screen">
        <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" speed={2000}
          autoplay={{ delay: 6000 }} pagination={{ clickable: true }} loop>
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-white/75" /> {/* 浅白遮罩 */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-5xl">
                  <RevealText text={slide.title} tag="h1"
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" />
                  <RevealText text={slide.subtitle} tag="p" delay={0.4}
                    className="text-xl md:text-3xl text-gray-700" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText text="科技 · 洁净 · 可持续" className="text-sm font-bold tracking-[0.4em] text-blue-600 uppercase mb-6" />
          <RevealText text="永爱生命科技 Tops-Life" className="text-4xl md:text-6xl font-bold text-gray-900 mb-8" />
          <RevealText text="我们专注于洁净软包装、医用注塑解决方案及高端新材料领域，致力于为制药、电子、医疗器械、特种纸及印刷行业提供安全、环保、智能的整体解决方案。"
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" />
        </div>
      </section>

      {/* 优势 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="我们的优势 · 赋能您的成功" className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4" />
          <RevealText text="为什么选择 Tops-Life？" className="text-xl text-blue-600 text-center mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: Beaker, title: '技术研发能力', desc: '不断投入创新，确保产品和解决方案始终走在行业前沿' },
              { icon: ShieldCheck, title: '严格质量管控', desc: '遵循行业最高标准，提供可靠、安全的产品' },
              { icon: Globe, title: '全球供应链', desc: '覆盖全球的稳定供应链，保障及时高效交付' },
              { icon: Cpu, title: '灵活定制服务', desc: '提供高度定制化解决方案，精准满足独特需求' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <item.icon className="w-9 h-9 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务行业 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RevealText text="我们服务的行业" className="text-4xl font-bold text-gray-900 mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['制药行业','电子行业','医疗器械行业','特种纸及油墨行业',].map((v) => (
              <div key={v} className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-blue-400 transition">
                <Package className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <p className="text-gray-800 font-medium">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心业务 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="核心业务领域" className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {BUSINESS_DATA.map((biz) => (
              <div key={biz.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 transition">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${biz.image})` }} />
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{biz.title}</h3>
                  <p className="text-gray-600 mb-6">{biz.description}</p>
                  <ul className="space-y-3">
                    {biz.features.map((f,i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 flex items-center gap-2 text-blue-600 font-medium hover:gap-4 transition">
                    了解更多 <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 未来展望 */}
      <section className="py-28 bg-white text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <RevealText text="未来展望 · 我们的承诺" className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" />
          <RevealText text="永爱生命科技将持续深化在洁净软包装、医用注塑解决方案及新材料等核心领域的布局。我们致力于成为独具特色的市场领先型高端包装、医用注塑解决方案及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            className="text-xl text-gray-600 leading-relaxed" />
        </div>
      </section>
    </div>
  );
};
export default Home;
