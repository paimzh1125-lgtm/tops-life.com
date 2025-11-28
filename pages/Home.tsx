// src/pages/Home.tsx
import React, { Suspense, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import RevealText from "../components/RevealText"; // 保留你原有的 RevealText（建议优化内部用 useMemo）
import { ArrowRight, CheckCircle2, Beaker, ShieldCheck, Cpu, Globe } from "lucide-react";

// 懒加载非首屏段落（示例，文件可拆分到独立文件）
const BusinessSection = React.lazy(() => import("../sections/BusinessSection").catch(() => ({ default: InlineBusinessSection })));
const AdvantageSection = React.lazy(() => import("../sections/AdvantageSection").catch(() => ({ default: InlineAdvantageSection })));

// ==================== 数据区（useMemo 缓存以避免重复重计算） ====================
const SLIDES = [
  {
    id: 1,
    image: "https://picsum.photos/1920/1080?random=1",
    title: "引领生命科技，赋能洁净未来",
    subtitle: "我们专注于高端软包装与精密注塑，为生命科学领域保驾护航。",
  },
  {
    id: 2,
    image: "https://picsum.photos/1920/1080?random=2",
    title: "合规、创新、可持续",
    subtitle: "提供通过严格认证的整体解决方案，保障产品安全与质量。",
  },
  {
    id: 3,
    image: "https://picsum.photos/1920/1080?random=3",
    title: "创新材料驱动行业升级",
    subtitle: "从特种纸到高分子材料，我们是您可靠的材料技术伙伴。",
  },
];

const BUSINESS_DATA = [
  {
    id: 1,
    title: "洁净软包装解决方案",
    description: "为药品、医疗器械及高精电子产品提供定制化、高洁净度、灭菌级的软包装材料和成品。",
    image: "https://picsum.photos/800/600?random=101",
    features: ["医用级材料认证", "无尘车间生产", "高阻隔与防潮技术", "定制化灭菌兼容性"],
  },
  {
    id: 2,
    title: "医疗器械精密注塑",
    description: "专注于 I/II 类医疗器械部件的精密注塑成型，提供从模具设计到无尘制造的整体服务。",
    image: "https://picsum.photos/800/600?random=102",
    features: ["ISO 13485 质量体系", "高精度公差控制", "生物相容性材料应用", "自动化检测与追溯"],
  },
  {
    id: 3,
    title: "高端新材料供应",
    description: "提供高性能特种纸、环保油墨及其他创新高分子材料，支持印刷包装与工业应用的可持续发展。",
    image: "https://picsum.photos/800/600?random=103",
    features: ["特种功能纸基材料", "环保与水性油墨技术", "可降解/循环利用方案", "高性能高分子复配"],
  },
];

const ADVANTAGE_DATA = [
  { icon: Beaker, title: "行业领先研发", desc: "持续的科技创新投入，确保产品和解决方案始终走在行业前沿。" },
  { icon: ShieldCheck, title: "严格合规保障", desc: "遵循 ISO、GMP 等行业最高标准，提供可靠、合规的产品。" },
  { icon: Cpu, title: "精密智造能力", desc: "采用先进的自动化与数字化制造，确保产品精度和生产效率。" },
  { icon: Globe, title: "全球稳定供应链", desc: "覆盖全球的供应链网络，保障关键物料的稳定供给与及时交付。" },
];

// ==================== 动画配置（复用） ====================
const cardHover = { y: -8, scale: 1.02 };
const cardTransition = { duration: 0.4, ease: "easeOut" };

// ==================== 主组件 ====================
const Home: React.FC = () => {
  // 缓存数据，避免每次渲染都重建数组
  const slides = useMemo(() => SLIDES, []);
  const business = useMemo(() => BUSINESS_DATA, []);
  const advantages = useMemo(() => ADVANTAGE_DATA, []);

  // 预加载下一张图（提升轮播切图体验）
  React.useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      imgs.push(img);
    });
    return () => {
      // 清理引用
      imgs.length = 0;
    };
  }, [slides]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero 轮播 — 首屏重点：保持简洁、快速 */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          speed={1200}
          className="h-full"
          slidesPerView={1}
          preloadImages={false} // 不预加载所有图片，交给浏览器与自定义预加载策略
          lazy={false}
          // accessibility & performance tweaks
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* 使用 <img> 替代 background-image 来获得 loading + width/height */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  loading="eager" // 首屏图片设置 eager，其他可 lazy
                  width={1920}
                  height={1080}
                  style={{ transform: "translateZ(0)", willChange: "transform, opacity" }}
                />
                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
              </div>

              <div className="relative h-full flex items-center justify-start px-6 lg:px-20">
                <div className="max-w-5xl text-white">
                  <RevealText
                    text={slide.title}
                    tag="h1"
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
                    // 建议 RevealText 内部用 IntersectionObserver 并只播放一次
                  />
                  <RevealText
                    text={slide.subtitle}
                    tag="p"
                    delay={0.5}
                    className="text-xl md:text-3xl font-light mb-10 opacity-95 max-w-3xl"
                  />
                  <motion.button
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:shadow-cyan-500/25"
                    style={{ willChange: "transform" }}
                    aria-label="探索我们的解决方案"
                  >
                    探索我们的解决方案
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 公司简介（首屏下方 — 轻量） */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RevealText text="专注于生命科学与高精制造" className="text-lg font-semibold tracking-widest text-cyan-600 uppercase mb-6" />
          <RevealText text="永爱生命科技 Tops-Life：您的专业与创新伙伴" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" />
          <RevealText
            text="我们致力于为制药、高端医疗器械、电子及印刷行业提供安全、环保、智能的整体解决方案，涵盖洁净软包装、医用注塑和高端新材料三大核心领域。"
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          />
        </div>
      </section>

      {/* 懒加载：核心业务（非首屏） */}
      <Suspense fallback={<SectionSkeleton title="我们的核心业务领域" />}>
        <BusinessSection data={business} />
      </Suspense>

      {/* 懒加载：核心优势（非首屏） */}
      <Suspense fallback={<SectionSkeleton title="为什么选择 Tops-Life？" />}>
        <AdvantageSection data={advantages} />
      </Suspense>

      {/* 最终 CTA — 保持简单、视觉冲击 */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold mb-6">
            与我们共同探索洁净科技的无限可能
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.12, duration: 0.6 }} className="text-lg md:text-xl mb-8 opacity-95">
            无论是定制化的洁净包装，还是高精度的医用注塑，我们都为您提供最可靠的解决方案。
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-4 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold bg-white text-cyan-600 rounded-full hover:bg-gray-100 shadow-2xl transition-all"
          >
            立即联系专家团队
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;

/* ===========================
   内联 / 占位 组件与示例（可拆出文件）
   - SectionSkeleton：Suspense fallback
   - InlineBusinessSection / InlineAdvantageSection：当懒加载的文件不存在时回退使用（保证替换后也能工作）
   =========================== */

function SectionSkeleton({ title = "加载中..." }: { title?: string }) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-6 animate-pulse" />
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}

/* InlineBusinessSection：轻量替代（用于未拆分文件时使用） */
function InlineBusinessSection({ data }: { data: typeof BUSINESS_DATA }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-6">
          我们的核心业务领域
        </motion.h3>
        <p className="text-center text-gray-600 mb-10">为关键行业提供高附加值、高可靠性的产品与服务</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((biz) => (
            <motion.article key={biz.id} whileHover={cardHover} transition={cardTransition} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-56 bg-gray-100 overflow-hidden">
                <img
                  src={biz.image}
                  alt={biz.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 will-change-transform"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3">{biz.title}</h4>
                <p className="text-gray-600 mb-4">{biz.description}</p>
                <ul className="space-y-2 mb-4">
                  {biz.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-cyan-600 font-semibold inline-flex items-center gap-2">了解更多 <ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* InlineAdvantageSection：轻量替代 */
function InlineAdvantageSection({ data }: { data: typeof ADVANTAGE_DATA }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-6">
          为什么选择 Tops-Life？
        </motion.h3>
        <p className="text-center text-cyan-600 mb-10">我们以专业、可靠和创新为您创造价值</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }} key={i} className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50">
                <Icon className="w-12 h-12 mx-auto mb-3 text-cyan-600" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
