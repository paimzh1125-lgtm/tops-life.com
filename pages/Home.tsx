import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import RevealText from '../components/RevealText';
import { BUSINESS_DATA } from '../constants';
import { ArrowRight, Microscope, Factory, Leaf, CheckCircle2 } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: '医用软包装',
    subtitle: '无菌。可靠。为医疗安全匠心打造。',
    image: 'https://picsum.photos/1920/1080?random=1',
  },
  {
    id: 2,
    title: '精密注塑成型',
    subtitle: '面向关键医用部件的先进注塑成型技术',
    image: 'https://picsum.photos/1920/1080?random=2',
  },
  {
    id: 3,
    title: '大豆蛋白创新',
    subtitle: '助力未来生物材料发展的可持续大豆蛋白',
    image: 'https://picsum.photos/1920/1080?random=3',
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
              <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl space-y-6">
                  <RevealText
                    text={slide.title}
                    tag="h1"
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4"
                  />
                  <RevealText
                    text={slide.subtitle}
                    tag="p"
                    className="text-xl md:text-3xl text-gray-200 font-light tracking-wide"
                    delay={0.3}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Intro Section */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText
             text="科技赋能 · 守护健康"
             tag="h2"
             className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4"
          />
          <RevealText
            text="NovaMaterial 是一家全球领先的材料科学公司"
            tag="h3"
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          />
          <RevealText
            text="我们致力于通过创新材料技术，解决医疗、包装及可持续发展领域的关键挑战。从无菌屏障系统到高精度医疗器械组件，再到革命性的大豆蛋白生物基材料，我们始终走在行业前沿。"
            tag="p"
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            delay={0.2}
          />
        </div>
      </section>

      {/* Values Cards */}
      <section className="py-20 bg-neutral-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Microscope, title: '技术创新', desc: '持续研发投入，突破材料性能极限' },
            { icon: Factory, title: '精密制造', desc: '工业4.0智能工厂，确保零缺陷交付' },
            { icon: Leaf, title: '绿色可持续', desc: '致力于开发环境友好的生物基解决方案' }
          ].map((item, idx) => (
            <div key={idx} className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-cyan-900/30 transition-colors">
                <item.icon className="text-cyan-400" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Grid */}
      <section className="py-24 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
           <RevealText
             text="核心业务领域"
             tag="h2"
             className="text-4xl font-bold text-white mb-16 text-center"
           />
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {BUSINESS_DATA.map((biz) => (
               <div key={biz.id} className="group relative overflow-hidden rounded-3xl h-[500px] border border-neutral-800">
                 <img src={biz.image} alt={biz.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                 
                 <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <h3 className="text-2xl font-bold text-white mb-3">{biz.title}</h3>
                   <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{biz.description}</p>
                   <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                     {biz.features.map((f, i) => (
                       <li key={i} className="flex items-center gap-2 text-sm text-cyan-400">
                         <CheckCircle2 size={14} /> <span>{f}</span>
                       </li>
                     ))}
                   </ul>
                   <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                     了解更多 <ArrowRight size={18} />
                   </button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Tech Stats (Grid) */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: '研发专利', val: '200+' },
              { label: '全球客户', val: '500+' },
              { label: '生产基地', val: '5' },
              { label: '年产能 (吨)', val: '100k' }
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {stat.val}
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
