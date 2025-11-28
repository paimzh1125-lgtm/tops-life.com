import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import RevealText from '../components/RevealText';
import { ArrowRight, Beaker, Package, Leaf, CheckCircle2, Globe, ShieldCheck, Cpu } from 'lucide-react';

const SLIDES = [
  { id: 1, title: '洁净软包装解决方案', subtitle: '为制药 · 电子 · 医疗器械行业打造高洁净、环保、智能包装', image: 'https://picsum.photos/1920/1080?random=10' },
  { id: 2, title: '高标准医用注塑', subtitle: '精密医用部件与配套产品，满足最严苛的医疗级要求', image: 'https://picsum.photos/1920/1080?random=11' },
  { id: 3, title: '可持续新材料供应', subtitle: '特种纸、功能油墨与创新材料，赋能高端纸制品与印刷行业', image: 'https://picsum.photos/1920/1080?random=12' },
];

const BUSINESS_DATA = [
  { id: 1, title: '洁净软包装', description: '专注于为制药、电子及医疗器械行业提供洁净、高效、环保的定制化包装产品与整体解决方案', features: ['百万级洁净车间生产', '防静电 / 防潮 / 无菌屏障', '可降解材料应用', '全流程追溯系统'], image: 'https://picsum.photos/1920/1080?random=20' },
  { id: 2, title: '医疗器械注塑', description: '提供高标准的医用注塑解决方案及各类配套产品，满足医疗行业的严格要求', features: ['ISO 13485 医疗器械质量管理体系', '生物相容性材料', '微米级精度注塑', '洁净室注塑生产'], image: 'https://picsum.photos/1920/1080?random=21' },
  { id: 3, title: '新材料供应', description: '涵盖特种纸、油墨及其他创新材料，为纸制品加工与印刷领域提供高性能、可持续的材料支持', features: ['食品/医药级特种纸', '环保水性油墨', '高阻隔功能涂层', '生物基可降解材料'], image: 'https://picsum.photos/1920/1080?random=22' },
];

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="h-screen w-full relative overflow-hidden">
        <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }} pagination={{ clickable: true }} loop={true}
          className="h-full w-full">
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute inset-0 bg-cover bg-center brightness-[0.65]" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary/30 to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-5xl space-y-8">
                  <RevealText text={slide.title} tag="h1"
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl" />
                  <RevealText text={slide.subtitle} tag="p" delay={0.4}
                    className="text-xl md:text-3xl text-white/95 font-light tracking-wide max-w-3xl mx-auto drop-shadow-lg" />
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

      {/* Advantages */}
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
              <div key={idx} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group hover:-translate-y-2">
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

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="我们服务的行业" tag="h2"
            className="text-4xl font-bold text-primary-dark mb-16 text-center" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['制药行业', '电子行业', '医疗器械行业', '特种纸及油墨行业', '纸制品加工与印刷行业'].map((industry) => (
              <div key={industry} className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-center group">
                <Package className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="核心业务领域" tag="h2"
            className="text-4xl md:text-5xl font-bold text-primary-dark mb-20 text-center" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {BUSINESS_DATA.map((biz) => (
              <div key={biz.id} className="group relative overflow-hidden rounded-3xl h-[560px] bg-white shadow-xl border border-gray-200 hover:border-primary/50 transition-all duration-500">
                <img src={biz.image} alt={biz.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl font-bold text-white mb-4">{biz.title}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{biz.description}</p>
                  <ul className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {biz.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-primary text-sm">
                        <CheckCircle2 size={18} className="text-white" />
                        <span className="text-white/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-3 text-white font-medium hover:gap-5 transition-all duration-300">
                    了解更多 <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-28 bg-primary text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <RevealText text="未来展望 · 我们的承诺" tag="h2"
            className="text-4xl md:text-5xl font-bold mb-10" />
          <RevealText text="永爱生命科技将持续深化在洁净软包装、医用注塑解决方案及新材料等核心领域的布局。我们致力于成为独具特色的市场领先型高端包装、医用注塑解决方案及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90" />
          <Leaf className="w-16 h-16 mx-auto mt-12 text-white/80 animate-pulse" />
        </div>
      </section>
    </div>
  );
};

export default Home;
