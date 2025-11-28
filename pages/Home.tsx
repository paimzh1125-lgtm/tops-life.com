import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 移除了 EffectFade，因为我们倾向于使用更简洁的滑动或淡入淡出，但保留了 Autoplay 和 Pagination
import { Autoplay, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
// 导入自定义组件（假设已存在）
import RevealText from '../components/RevealText'; 
// 导入 Icons
import { ArrowRight, Package, CheckCircle2, Beaker, ShieldCheck, Globe, Cpu, Atom } from 'lucide-react';

// --- 示例数据填充 START ---
// 实际使用时请替换 image URL
const SLIDES = [
  { id: 1, image: 'https://picsum.photos/1920/1080?random=1', title: '引领生命科技，赋能洁净未来', subtitle: '我们专注于高端软包装与精密注塑，为生命科学领域保驾护航。' },
  { id: 2, image: 'https://picsum.photos/1920/1080?random=2', title: '合规、创新、可持续', subtitle: '提供通过严格认证的整体解决方案，保障产品安全与质量。' },
  { id: 3, image: 'https://picsum.photos/1920/1080?random=3', title: '创新材料驱动行业升级', subtitle: '从特种纸到高分子材料，我们是您可靠的材料技术伙伴。' },
];

const BUSINESS_DATA = [
  {
    id: 1,
    title: '洁净软包装解决方案',
    description: '为药品、医疗器械及高精电子产品提供定制化、高洁净度、灭菌级的软包装材料和成品。',
    image: 'https://picsum.photos/800/600?random=101', // 洁净车间或包装线图片
    features: ['医用级材料认证', '无尘车间生产', '高阻隔与防潮技术', '定制化灭菌兼容性'],
  },
  {
    id: 2,
    title: '医疗器械精密注塑',
    description: '专注于 I/II 类医疗器械部件的精密注塑成型，提供从模具设计到无尘制造的整体服务。',
    image: 'https://picsum.photos/800/600?random=102', // 精密注塑机或医疗产品部件图片
    features: ['ISO 13485 质量体系', '高精度公差控制', '生物相容性材料应用', '自动化检测与追溯'],
  },
  {
    id: 3,
    title: '高端新材料供应',
    description: '提供高性能特种纸、环保油墨及其他创新高分子材料，支持印刷包装与工业应用的可持续发展。',
    image: 'https://picsum.photos/800/600?random=103', // 创新材料或特种纸图片
    features: ['特种功能纸基材料', '环保与水性油墨技术', '可降解/循环利用方案', '高性能高分子复配'],
  },
];
// --- 示例数据填充 END ---

// 优势列表优化：增加行业专业度
const ADVANTAGE_DATA = [
  { icon: Beaker, title: '行业领先研发', desc: '持续的科技创新投入，确保产品和解决方案始终走在行业前沿。' },
  { icon: ShieldCheck, title: '严格合规保障', desc: '遵循 ISO、GMP 等行业最高标准，提供可靠、合规的产品。' },
  { icon: Cpu, title: '精密智造能力', desc: '采用先进的自动化与数字化制造，确保产品精度和生产效率。' },
  { icon: Globe, title: '全球稳定供应链', desc: '覆盖全球的供应链网络，保障关键物料的稳定供给与及时交付。' },
];


const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero 模块 - 视觉冲击与专业感 */}
      <section className="relative h-screen">
        <Swiper modules={[Autoplay, Pagination]} speed={1500} 
          autoplay={{ delay: 6000, disableOnInteraction: false }} 
          pagination={{ clickable: true }} loop className="h-full">
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* 背景图，略微变暗，罗氏风格更倾向于高对比度、沉稳的视觉 */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-black/50" /> {/* 深色遮罩 */}
              
              <div className="relative h-full flex items-center justify-start text-left px-6 lg:px-20">
                <div className="max-w-4xl text-white">
                  <RevealText text={slide.title} tag="h1"
                    className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight" />
                  <RevealText text={slide.subtitle} tag="p" delay={0.4}
                    className="text-xl md:text-3xl font-light opacity-90" />
                  {/* 新增 CTA 按钮，引导用户进入核心业务 */}
                  <button className="mt-10 inline-flex items-center px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition duration-300">
                    探索我们的解决方案 <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Intro - 公司的使命与愿景 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RevealText text="专注于生命科学与高精制造" className="text-lg font-semibold tracking-widest text-blue-600 uppercase mb-4" />
          <RevealText text="永爱生命科技 Tops-Life：您的专业与创新伙伴" className="text-4xl md:text-6xl font-bold text-gray-900 mb-8" />
          <RevealText text="我们致力于为制药、高端医疗器械、电子及印刷行业提供安全、环保、智能的整体解决方案，涵盖洁净软包装、医用注塑和高端新材料三大核心领域。"
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed" />
        </div>
      </section>

      {/* 核心业务 - 突出展示三大支柱业务 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="我们的核心业务领域" className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6" />
          <RevealText text="为关键行业提供高附加值、高可靠性的产品与服务" className="text-xl text-gray-600 text-center mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {BUSINESS_DATA.map((biz) => (
              <div key={biz.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                {/* 图片与信息分离，更专业的布局 */}
                <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${biz.image})` }} />
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{biz.title}</h3>
                  <p className="text-gray-600 mb-6 min-h-[60px]">{biz.description}</p>
                  
                  {/* 特点列表简洁化 */}
                  <ul className="space-y-3">
                    {biz.features.slice(0, 3).map((f,i) => ( // 只展示前3个特点
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* 增加 CTA */}
                  <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold border-b-2 border-transparent hover:border-blue-600 transition">
                    了解 {biz.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 优势 - 强调专业与可靠性 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RevealText text="为什么选择 Tops-Life？" className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4" />
          <RevealText text="我们以专业、可靠和创新为您创造价值" className="text-xl text-blue-600 text-center mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGE_DATA.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border-l-4 border-blue-600 bg-gray-50 hover:bg-blue-50 transition-all">
                <item.icon className="w-10 h-10 text-blue-600 mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block - 最后的行动召唤 */}
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="className="text-4xl md:text-5xl font-bold mb-6">与我们共同探索洁净科技的无限可能</h2>
          <p className="text-xl mb-10 opacity-90"">无论是定制化的洁净包装，还是高精度的医用注塑，我们都为您提供最可靠的解决方案。</p>
          <button className="button className="inline-flex items-center px-10 py-4 text-xl font-semibold bg-white text-blue-600 rounded-full hover:bg-sky-100 transition duration-300 shadow-xl"">
            联系专家团队 <ArrowRight className="w-6 h-6 ml-2">
          </button>
        </div>
      </section>
    </div>
  );
};
export default Home;
