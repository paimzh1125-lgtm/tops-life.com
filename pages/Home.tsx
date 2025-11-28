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
  const slides = useMemo(() => SLIDES, []);
  const business = useMemo(() => BUSINESS_DATA, []);
  const advantages = useMemo(() => ADVANTAGE_DATA, []);

  React.useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      imgs.push(img);
    });
    return () => {
      imgs.length = 0;
    };
  }, [slides]);

  return (
    <div className="relative overflow-hidden">
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          speed={1200}
          className="h-full"
          slidesPerView={1}
          preloadImages={false}
          lazy={false}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width={1920}
                  height={1080}
                  style={{ transform: "translateZ(0)", willChange: "transform, opacity" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
              </div>

              <div className="relative h-full flex items-center justify-start px-6 lg:px-20">
                <div className="max-w-5xl text-white">
                  <RevealText
                    text={slide.title}
                    tag="h1"
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
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

      <Suspense fallback={<SectionSkeleton title="我们的核心业务领域" />}>
        <BusinessSection data={business} />
      </Suspense>

      <Susp
