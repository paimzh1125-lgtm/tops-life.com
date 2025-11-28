import React from 'react';
import { BUSINESS_DATA } from '../constants';
import RevealText from '../components/RevealText';

const Business: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <RevealText text="三大核心业务" tag="h1" className="text-4xl md:text-6xl font-bold text-white mb-20 text-center" />
        
        <div className="space-y-32">
          {BUSINESS_DATA.map((biz, idx) => (
            <div key={biz.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-800 group">
                   <img src={biz.image} alt={biz.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-white">{biz.title}</h2>
                <div className="w-20 h-1 bg-cyan-500"></div>
                <p className="text-xl text-gray-300 leading-relaxed">{biz.description}</p>
                <ul className="grid grid-cols-1 gap-4 pt-4">
                  {biz.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
