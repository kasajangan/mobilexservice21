import React, { useState } from 'react';
import { CLIENT_REVIEWS } from '../data';
import { Quote, Star, Award, Shield, Check } from 'lucide-react';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="space-y-8" id="testimoni-section">
      
      {/* Logos and trust triggers bar */}
      <div className="border-t border-b border-slate-900 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center md:text-left">
            AKREDITASI & STANDARDISASI TEKNIS:
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-60">
            <div className="flex items-center gap-1.5 font-display text-sm font-bold text-gray-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>SOP PRIVACY SECURITY</span>
            </div>
            <div className="flex items-center gap-1.5 font-display text-sm font-bold text-gray-400">
              <Award className="w-4 h-4 text-gold-400" />
              <span>MEMBER OF IPM SOLDER</span>
            </div>
            <div className="flex items-center gap-1.5 font-display text-sm font-bold text-gray-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>ESD SAFE ENVIRONMENT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reviews Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CLIENT_REVIEWS.map((review, idx) => (
          <div 
            key={review.id}
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              idx === 1 
                ? 'bg-slate-950 border-gold-400/20 shadow-lg shadow-gold-500/[0.02] scale-102 z-10' 
                : 'bg-slate-950/40 border-slate-900/60'
            }`}
          >
            {/* Visual glow on central card */}
            {idx === 1 && (
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/[0.03] blur-xl rounded-full pointer-events-none" />
            )}

            <div className="space-y-4">
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans italic relative">
                "{review.comment}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-6 border-t border-slate-900 mt-6 flex items-center justify-between gap-4">
              <div>
                <span className="block font-display text-xs sm:text-sm font-extrabold text-white">
                  {review.name}
                </span>
                <span className="block text-[10px] text-gold-500 font-mono tracking-wider mt-0.5">
                  {review.role}
                </span>
                <span className="block text-[9px] text-gray-500 font-sans mt-0.5">
                  {review.location}
                </span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                <Check className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verified stamp citation */}
      <p className="text-center text-[10px] font-mono text-gray-600">
        *Seluruh testimoni di atas merupakan klien terverifikasi dari kuesioner layanan paska-servis kami di Jakarta Selatan.
      </p>

    </div>
  );
}
