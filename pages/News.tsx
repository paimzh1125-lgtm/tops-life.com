import React from 'react';
import { NEWS_DATA } from '../constants';
import RevealText from '../components/RevealText';

const News: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <RevealText text="新闻中心" tag="h1" className="text-4xl md:text-6xl font-bold text-white mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map(item => (
            <article key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                   <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
