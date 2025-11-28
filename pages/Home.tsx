import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import RevealText from '../components/RevealText';
import { ArrowRight, Beaker, Package, Leaf, CheckCircle2, Globe, ShieldCheck, Cpu } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: '洁净软包装解决方案',
    subtitle: '为制药 · 电子 · 医疗器械行业打造高洁净、环保、智能包装',
    image: 'https://picsum.photos/1920/1080?random=10',
  },
  {
    id: 2,
    title: '高标准医用注塑',
    subtitle: '精密医用部件与配套产品，满足最严苛的医疗级要求',
    image: 'https://picsum.photos/1920/1080?random=11',
  },
  {
    id: 3,
    title: '可持续新材料供应',
    subtitle: '特种纸、功能油墨与创新材料，赋能高端纸制品与印刷行业',
    image: 'https://picsum.photos/1920/1080?random=12',
  },
];

const BUSINESS_DATA = [
  {
    id: 1,
    title: '洁净软包装',
    description: '专注于为制药、电子及医疗器械行业提供洁净、高效、环保的定制化包装产品与整体解决方案',
    features: [
      '百万级洁净车间生产',
      '防静电 / 防潮 / 无菌屏障',
      '可降解材料应用',
      '全流程追溯系统',
    ],
    image: 'https://picsum.photos/1920/1080?random=20',
  },
  {
    id: 2,
    title: '医疗器械注塑',
    description: '提供高标准的医用注塑解决方案及各类配套产品，满足医疗行业的严格要求',
    features: [
      'ISO 13485 医疗器械质量管理体系',
      '生物相容性材料',
      '微米级精度注塑',
      '洁净室注塑生产',
    ],
    image: 'https://picsum.photos/1920/1080?random=21',
  },
  {
    id: 3,
    title: '新材料供应',
    description: '涵盖特种纸、油墨及其他创新材料，为纸制品加工与印刷领域提供高性能、可持续的材料支持',
    features: [
      '食品/医药级特种纸',
      '环保水性油墨',
      '高阻隔功能涂层',
      '生物基可降解材料',
    ],
    image: 'https://picsum.photos/1920/1080?random=22',
  },
];

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Swiper */}
      <section className="h-screen w-full relative overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full"
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-5xl space-y-8">
                  <RevealText
                    text={slide.title}
                    tag="h1"
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300"
                  />
                  <RevealText
                    text={slide.subtitle}
                    tag="p"
                    className="text-xl md:text-3xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto"
                    delay={0.4}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText
            text="科技 · 洁净 · 可持续"
            tag="h2"
            className="text-sm font-bold tracking-[0.4em] text-cyan-400 uppercase mb-6"
          />
          <RevealText
            text="永爱生命科技 Tops-Life"
            tag="h3"
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          />
          <RevealText
            text="我们专注于洁净软包装、医用注塑解决方案及高端新材料领域，致力于为制药、电子、医疗器械、特种纸及印刷行业提供安全、环保、智能的整体解决方案。"
            tag="p"
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            delay={0.3}
          />
        </div>
      </section>

      {/* Why Choose Us - Advantages */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText
            text="我们的优势 · 赋能您的成功"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          />
          <RevealText
            text="为什么选择 Tops-Life？"
            tag="p"
            className="text-xl text-cyan-400 text-center mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Beaker, title: '技术研发能力', desc: '不断投入创新，确保产品和解决方案始终走在行业前沿' },
              { icon: ShieldCheck, title: '严格质量管控', desc: '遵循行业最高标准，提供可靠、安全的产品' },
              { icon: Globe, title: '全球供应链', desc: '覆盖全球的稳定供应链，保障及时高效交付' },
              { icon: Cpu, title: '灵活定制服务', desc: '提供高度定制化解决方案，精准满足独特需求' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 p-8 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 group hover:-translate-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-900/20 flex items-center justify-center mb-6 group-hover:bg-cyan-900/40 transition-colors">
                  <item.icon className="text-cyan-400" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText
            text="我们服务的行业"
            tag="h2"
            className="text-4xl font-bold text-white mb-16 text-center"
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {['制药行业', '医疗软包装行业', '医疗器械行业', '特种纸及油墨行业',].map((industry) => (
              <div
                key={industry}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-neutral-900"
              >
                <Package className="w-10 h-10 mx-auto mb-3 text-cyan-400" />
                <p className="text-sm md:text-base text-gray-300 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business Grid */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText
            text="核心业务领域"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {BUSINESS_DATA.map((biz) => (
              <div
                key={biz.id}
                className="group relative overflow-hidden rounded-3xl h-[560px] border border-neutral-800 hover:border-cyan-500/40 transition-all duration-500"
              >
                <img
                  src={biz.image}
                  alt={biz.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl font-bold text-white mb-4">{biz.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {biz.description}
                  </p>
                  <ul className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {biz.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-cyan-400 text-sm">
                        <CheckCircle2 size={18} />
                        <span className="text-gray-200">{f}</span>
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
      <section className="py-28 bg-gradient-to-b from-neutral-900 to-black text-center">
        <div className="max-w-5xl mx-auto px-6">
          <RevealText
            text="✨ 未来展望 · 我们的承诺"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-white mb-10"
          />
          <RevealText
            text="永爱生命科技将持续深化在洁净软包装、医用注塑解决方案及新材料等核心领域的布局。我们致力于成为独具特色的市场领先型高端包装、医用注塑解决方案及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            tag="p"
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            delay={0.3}
          />
          <div className="mt-12">
            <Leaf className="w-16 h-16 mx-auto text-cyan-400 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
