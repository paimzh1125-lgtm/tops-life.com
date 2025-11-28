import React from 'react';
import RevealText from '../components/RevealText';
import { CheckCircle2, Globe, Leaf, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative z-10 overflow-hidden">
      {/* Hero Intro */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText
            text="关于我们"
            tag="h1"
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          />
          <RevealText
            text="托普斯生命科技 · Tops-Life"
            tag="p"
            className="text-2xl md:text-4xl text-cyan-400 font-light mb-16"
            delay={0.3}
          />
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-5xl mx-auto px-6 space-y-12 text-lg leading-relaxed text-gray-300">
          <RevealText
            text="托普斯生命科技（Tops-Life）成立于2011年，总部位于中国·江苏苏州，是一家专注于洁净软包装、医疗器械注塑及新材料供应的创新型高新技术企业。"
            className="text-xl md:text-2xl text-center font-light max-w-4xl mx-auto"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-20">
            <div className="space-y-6">
              <p>
                公司秉持“质量为先，服务市场与应用”的核心理念，重点发展三大核心业务：<span className="text-cyan-400 font-medium">洁净软包装</span>、<span className="text-cyan-400 font-medium">医疗器械注塑</span>及<span className="text-cyan-400 font-medium">新材料供应</span>。
              </p>
              <p>
                我们为制药、电子、医疗器械、特种纸及油墨、纸制品加工与印刷等行业提供洁净、高效、环保的定制化产品与整体解决方案。凭借领先的技术研发能力、严格的质量管控体系、全球化的稳定供应链以及高度灵活的定制服务，公司已在行业内建立起显著的竞争优势。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
                <Globe className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-bold text-white">60+</div>
                <div className="text-gray-500 text-sm">服务国家与地区</div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-bold text-white">ISO</div>
                <div className="text-gray-500 text-sm">9001 & 13485 双认证</div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-bold text-white">EcoVadis</div>
                <div className="text-gray-500 text-sm">可持续发展认证</div>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 text-center backdrop-blur-sm">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-bold text-white">ISO 7</div>
                <div className="text-gray-500 text-sm">洁净室生产标准</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development History Timeline */}
      <section className="py-28 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-6">
          <RevealText
            text="发展历程"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2 hidden md:block" />
            
            {[
              { year: '2025.02', event: '在法国通过 EcoVadis 可持续发展评估', highlight: true },
              { year: '2023.09', event: '成立托普斯生命（香港）科技有限公司，进一步拓展海外业务' },
              { year: '2023.08', event: '对洁净室进行升级扩建，达到 ISO 7 级标准' },
              { year: '2021.08', event: '成立新材料业务事业部，业务拓展至特种环保水性油墨、特种纸等领域' },
              { year: '2019.09', event: '获得 ISO 9001 及 ISO 13485 双体系认证' },
              { year: '2018.04', event: '在苏州工业园区设立新工厂，新增医疗器械 OEM 业务，ISO 8 级洁净室投产' },
              { year: '2014.10', event: '迁址苏州相城区，正式进军医疗健康产业' },
              { year: '2011.08', event: '托普斯生命科技在苏州工业园区成立，定位洁净软包装解决方案提供商', highlight: true },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start mb-16 relative ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:px-16">
                  <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                    <div className={`text-2xl font-bold mb-3 ${
                      item.highlight ? 'text-cyan-400' : 'text-white'
                    }`}>
                      {item.year}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.event}</p>
                  </div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 top-10 w-6 h-6 rounded-full bg-black border-4 border-cyan-500 -translate-x-1/2 z-10 hidden md:block">
                  {item.highlight && (
                    <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75" />
                  )}
                </div>
                
                <div className="md:w-1/2 md:px-16 mt-6 md:mt-0 md:hidden">
                  {/* Mobile spacer */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Commitment */}
      <section className="py-28 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealText
            text="未来，我们将继续深化在洁净软包装、医用注塑解决方案及新材料三大核心领域的布局，致力于成为独具特色的市场领先型高端包装、医用注塑及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            delay={0.2}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
