import React from 'react';
import RevealText from '../components/RevealText';
import { CheckCircle2, Globe, Leaf, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-[#f8faff] via-white to-[#e6f3ff]">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText text="关于我们" tag="h1"
            className="text-5xl md:text-7xl font-bold text-primary-dark mb-8 tracking-tight" />
          <RevealText text="永爱生命科技" · Tops-Life" tag="p"
            className="text-2xl md:text-4xl text-primary font-light" delay={0.3} />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12 text-lg leading-relaxed text-gray-700">
          <RevealText text="永爱生命科技（Tops-Life）成立于2011年，总部位于中国·江苏苏州，是一家专注于洁净软包装、医疗器械注塑及新材料供应的创新型高新技术企业。"
            className="text-xl md:text-2xl text-center font-light text-gray-800 max-w-4xl mx-auto" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-20">
            <div className="space-y-6">
              <p>公司秉持“质量为先，服务市场与应用”的核心理念，重点发展三大核心业务：<span className="text-primary font-semibold">洁净软包装</span>、<span className="text-primary font-semibold">医疗器械注塑</span>及<span className="text-primary font-semibold">新材料供应</span>。</p>
              <p>我们为制药、电子、医疗器械、特种纸及油墨、纸制品加工与印刷等行业提供洁净、高效、环保的定制化产品与整体解决方案。凭借领先的技术研发能力、严格的质量管控体系、全球化的稳定供应链以及高度灵活的定制服务，公司已在行业内建立起显著的竞争优势。</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary-dark">60+</div>
                <div className="text-gray-600 text-sm">服务国家与地区</div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary-dark">ISO</div>
                <div className="text-gray-600 text-sm">9001 & 13485</div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary-dark">EcoVadis</div>
                <div className="text-gray-600 text-sm">可持续发展认证</div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary-dark">ISO 7</div>
                <div className="text-gray-600 text-sm">洁净室标准</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <RevealText text="发展历程" tag="h2"
            className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-20" />

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            {[
              { year: '2025.02', event: '在法国通过 EcoVadis 可持续发展评估', highlight: true },
              { year: '2023.09', event: '成立托普斯生命（香港）科技有限公司，进一步拓展海外业务' },
              { year: '2023.08', event: '对洁净室进行升级扩建，达到 ISO 7 级标准' },
              { year: '2021.08', event: '成立新材料业务事业部，业务拓展至特种环保水性油墨、特种纸等领域' },
              { year: '2019.09', event: '获得 ISO 9001 及 ISO 13485 双体系认证' },
              { year: '2018.04', event: '在苏州工业园区设立新工厂，新增医疗器械 OEM 业务' },
              { year: '2014.10', event: '迁址苏州相城区，正式进军医疗健康产业' },
              { year: '2011.08', event: '托普斯生命科技在苏州工业园区成立，定位洁净软包装解决方案提供商', highlight: true },
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:px-16">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all">
                    <div className={`text-2xl font-bold mb-3 ${item.highlight ? 'text-primary' : 'text-primary-dark'}`}>
                      {item.year}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 top-10 w-6 h-6 rounded-full bg-white border-4 border-primary shadow-md hidden md:block">
                  {item.highlight && <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-28 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealText text="未来，我们将继续深化在洁净软包装、医用注塑解决方案及新材料三大核心领域的布局，致力于成为独具特色的市场领先型高端包装、医用注塑及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            className="text-xl md:text-2xl leading-relaxed opacity-90" />
        </div>
      </section>
    </div>
  );
};

export default About;
