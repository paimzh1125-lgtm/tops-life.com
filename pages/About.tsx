import React from 'react';
import RevealText from '../components/RevealText';
import { Globe, Leaf, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealText text="关于我们" className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" />
          <RevealText text="托普斯生命科技 · Tops-Life" className="text-3xl md:text-5xl text-blue-600" />
        </div>
      </section>

      {/* 公司概况 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-lg text-gray-700 leading-relaxed space-y-12">
          <p className="text-xl text-center text-gray-800">
            永爱生命科技（Tops-Life）成立于2011年，总部位于中国·江苏苏州，是一家专注于洁净软包装、医疗器械注塑及新材料供应的创新型高新技术企业。
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p>公司秉持“质量为先，服务市场与应用”的核心理念，重点发展三大核心业务：洁净软包装、医疗器械注塑及新材料供应。</p>
              <p>我们为制药、电子、医疗器械、特种纸及油墨、纸制品加工与印刷等行业提供洁净、高效、环保的定制化产品与整体解决方案。</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-600">服务国家与地区</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <ShieldCheck className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900">ISO 9001 & 13485</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <Leaf className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900">EcoVadis</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900">ISO 7 洁净室</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <RevealText text="发展历程" className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20" />
          <div className="space-y-16">
            {[
              { y: '2025.02', e: '在法国通过 EcoVadis 可持续发展评估', h: true },
              { y: '2023.09', e: '成立淘爱材料（香港）技术有限公司' },
              { y: '2023.08', e: '洁净室升级至 ISO 7 级标准' },
              { y: '2021.08', e: '成立新材料业务事业部' },
              { y: '2019.09', e: '获得 ISO 9001 & ISO 13485 双认证' },
              { y: '2018.04', e: '苏州工业园区新工厂投产，开展医疗器械 OEM' },
              { y: '2014.10', e: '迁址苏州相城区，进军医疗健康产业' },
              { y: '2011.08', e: '永爱生命科技在苏州工业园区成立', h: true },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className={`text-2xl font-bold min-w-32 ${item.h ? 'text-blue-600' : 'text-gray-900'}`}>
                  {item.y}
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-8">
                  <p className="text-gray-700 leading-relaxed">{item.e}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 结语 */}
      <section className="py-28 bg-gray-50 text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <RevealText text="未来，我们将继续深化在洁净软包装、医用注塑解决方案及新材料三大核心领域的布局，致力于成为独具特色的市场领先型高端包装、医用注塑及新材料供应商，持续为全球客户创造更高价值，赋能行业高质量发展。"
            className="text-xl md:text-2xl text-gray-700 leading-relaxed" />
        </div>
      </section>
    </div>
  );
};
export default About;
