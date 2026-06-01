import React, { useState } from 'react';
import { SERVICE_FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQCollapse() {
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Keamanan Data' | 'Proses Servis' | 'Suku Cadang & Garansi'>('Semua');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = activeCategory === 'Semua' 
    ? SERVICE_FAQS 
    : SERVICE_FAQS.filter(faq => faq.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-slate-950/40 rounded-3xl p-6 sm:p-8 border border-red-950/45" id="faq-section">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header content */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-red-950/80 text-red-500 border border-red-500/25">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SOLUSI KEKHAWATIRAN</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Menjawab Keraguan Anda (FAQ)
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">
            Kami menjunjung tinggi integritas intelektual dan kejujuran pelayanan. Berikut jawaban logis atas pertanyaan tercurah dari calon asisten VIP kami.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-800/60 pb-4">
          {(['Semua', 'Keamanan Data', 'Proses Servis', 'Suku Cadang & Garansi'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-600 to-amber-500 text-slate-950'
                  : 'text-gray-400 bg-slate-900 border border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3 pt-2">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`rounded-2xl transition-all duration-300 border ${
                  isExpanded 
                    ? 'bg-slate-900/60 border-gold-500/30 shadow-md' 
                    : 'bg-transparent border-slate-850/50 hover:bg-slate-900/20'
                }`}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gold-500 font-bold tracking-widest uppercase">
                      [{faq.category}]
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-gray-100 font-sans tracking-tight">
                      {faq.question}
                    </h4>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-800 text-gray-400 shrink-0 transition-transform ${isExpanded ? 'rotate-180 text-gold-400 bg-gold-950/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer block with clean expanding animation */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px] border-t border-slate-800/80' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 py-4 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
