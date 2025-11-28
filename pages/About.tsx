import React from 'react';
import RevealText from '../components/RevealText';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative z-10">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <RevealText text="公司概况" tag="h1" className="text-4xl md:text-6xl font-bold text-white mb-12" />
        
        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <p>
            NovaMaterial 成立于 2005 年，总部位于中国上海。作为一家专注于生命科学与可持续发展领域的材料科技企业，我们始终秉持"科技守护生命"的使命。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img src="https://picsum.photos/600/400?random=20" alt="Office" className="rounded-xl border border-neutral-800" />
            <img src="https://picsum.photos/600/400?random=21" alt="Lab" className="rounded-xl border border-neutral-800" />
          </div>
          <p>
            历经二十年的发展，公司已构建起医用软包装、精密注塑、生物基材料三大核心业务板块。我们在全球拥有 5 个生产基地和 3 个研发中心，产品销往全球 60 多个国家和地区，是众多世界 500 强医疗器械企业的战略合作伙伴。
          </p>
        </div>

        <div className="mt-24">
          <RevealText text="发展历程" tag="h2" className="text-3xl font-bold text-white mb-10" />
          <div className="border-l-2 border-neutral-800 pl-8 space-y-12">
            {[
              { year: '2025', text: '荣获国家级制造业单项冠军示范企业，大豆蛋白项目全面投产。' },
              { year: '2020', text: '完成 D 轮融资，启动全球化战略布局，设立欧洲研发中心。' },
              { year: '2015', text: '进军医用精密注塑领域，建成首个 10 万级洁净车间。' },
              { year: '2005', text: 'NovaMaterial 成立，专注于医用包装材料研发。' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-neutral-900 border-2 border-cyan-500"></span>
                <span className="text-2xl font-bold text-cyan-400 block mb-2">{item.year}</span>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
