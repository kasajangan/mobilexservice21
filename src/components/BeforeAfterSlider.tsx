import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left click held down
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-slate-950/60 rounded-3xl p-6 sm:p-8 border border-emerald-950/40 backdrop-blur-xl" id="reparasi-visual">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left column - Info */}
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>ESTETIKA PRESTISE</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gold-50">
            Komparasi Presisi: Bukti Nyata Hasil Reparasi
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Geser slider untuk melihat perbedaan sebelum dan sesudah perangkat melalui lab mikro-elektronika kami. Dari tumpukan korosi air yang mematikan sirkuit, kembali ke kebersihan dan presisi pabrikan kelas VIP.
          </p>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pembersihan sisa fluks & korosi dengan gel ultrasonik khusus</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Solder kawat tembaga mikro setipis helai rambut (0.02mm)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Proteksi lapisan anti-lembab & anti-oksidasi sirkuit</span>
            </div>
          </div>
        </div>

        {/* Right column - Interactive Compare Slider */}
        <div className="w-full md:w-[420px] shrink-0">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleMove(e.clientX)}
          >
            {/* Before element (Left Side - Corroded) */}
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/seed/corrosion/800/600?blur=1" 
                alt="Sebelum Perbaikan - Korosi sirkuit parah" 
                className="w-full h-full object-cover filter grayscale-30 brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-red-950/80 border border-red-500/30 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-red-400">
                SEBELUM: Korosi Hidro-Eksploitatif parah
              </div>
            </div>

            {/* After element (Right Side - Restored, clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
            >
              <img 
                src="https://picsum.photos/seed/circuitoriginal/800/600" 
                alt="Sesudah Perbaikan - Kilau emas baru" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-emerald-400">
                SESUDAH: Reparasi Emas Orisinal Pabrikan
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-emerald-400 to-gold-600 cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-gold-400 flex items-center justify-center shadow-lg shadow-gold-500/20 active:scale-110 transition-transform">
                <div className="flex gap-0.5 text-gold-400">
                  <div className="w-0.5 h-3 bg-current rounded-full" />
                  <div className="w-0.5 h-3 bg-current rounded-full" />
                </div>
              </div>
            </div>

            {/* Prompt Helper Overlay */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur border border-slate-800 rounded-full px-3 py-1 flex items-center gap-1.5 text-[10px] text-gray-400 pointer-events-none">
              <span>Seret batang slider di atas</span>
              <ArrowRight className="w-3 h-3 text-gold-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
