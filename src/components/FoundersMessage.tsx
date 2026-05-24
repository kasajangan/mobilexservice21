import React from 'react';
import { Award, Compass, HeartHandshake, Microscope } from 'lucide-react';

const founderImg = '/src/assets/images/regenerated_image_1779616490438.png';

export default function FoundersMessage() {
  return (
    <div className="bg-slate-950/40 rounded-3xl p-6 sm:p-8 border border-emerald-950/40" id="tentang-kami">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Founder Portrait with aesthetic borders and badges (5 columns) */}
        <div className="lg:col-span-5 relative group">
          {/* Decorative glowing background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/10 to-transparent blur-2xl rounded-3xl pointer-events-none" />
          
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 aspect-[4/5] sm:aspect-[3/4]">
            <img 
              src={founderImg} 
              alt="Teknisi Utama Mobile X Service" 
              className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark glass cover mask at the bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 pt-12 text-center">
              <span className="block font-display text-white text-lg font-bold">Andhika P., M.T.</span>
              <span className="block text-xs text-gold-400 font-mono mt-1">Founder / Kepala Lab Mikro-Solder</span>
              <span className="inline-block mt-2 bg-emerald-950/80 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full">
                Sircuit Specialist (Ex-OEM Lab Tech)
              </span>
            </div>
          </div>

          {/* Floaters */}
          <div className="absolute top-4 -right-4 bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-2xl skew-y-1 select-none pointer-events-none hidden sm:block">
            <span className="block text-[9px] font-mono text-gray-500 uppercase">Akurasi Mikrosolder</span>
            <span className="block text-sm font-bold text-emerald-400 font-mono">99.7% Success</span>
          </div>

          <div className="absolute bottom-1/3 -left-4 bg-slate-900 border border-slate-705 p-3 rounded-xl shadow-2xl -skew-y-1 select-none pointer-events-none hidden sm:block">
            <div className="flex gap-1 text-gold-400 mb-0.5">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="block text-[10px] font-mono text-white">Trust of Kebayoran Lama</span>
          </div>
        </div>

        {/* Brand narrative (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-950/80 text-amber-400 border border-amber-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>DEDIKASI KEJUJURAN BUDAYA</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Dibalik Presisi & Budaya Kerja Mobile X Service
            </h3>
          </div>

          <div className="text-gray-300 text-sm sm:text-base space-y-4 font-sans leading-relaxed">
            <p>
              Sistem elektronik modern seperti sirkuit iPhone, Samsung, dan MacBook adalah karya seni mini yang memuat jutaan transistor dalam penampang sekecil ujung kuku. Kami percaya, perbaikan terhadap sistem berkelas seperti ini tidak bisa dilakukan dengan metode asal tabrak atau coba-coba murahan.
            </p>
            <p className="border-l-2 border-gold-500/50 pl-4 italic text-gray-400 text-xs sm:text-sm">
              "Kami mengkombinasikan ketelitian logika analitis komputer dengan filsafat dedikasi budaya yang menjunjung tinggi kejujuran diri dan kehormatan karya asli (craftsmanship). Setiap pengerjaan diselesaikan dengan sepenuh kehormatan."
            </p>
            <p>
              Berbekal pemahaman mendalam terhadap arsitektur sirkuit gadget modern (iOS & Android) serta kebutuhan eksekutif premium di Jakarta Selatan, kami mendirikan Mobile X Service sebagai oase solusi yang andal, jujur, transparan, dan berbudaya luhur. Kami menyingkirkan paradigma service center kabur yang menakut-nakuti konsumen dengan vonis kerusakan palsu.
            </p>
          </div>

          {/* Three pillars of the brand */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-900">
            <div className="space-y-1">
              <span className="text-gold-400 flex items-center gap-1">
                <Microscope className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-bold text-xs uppercase tracking-wider font-display">Analisa Ilmiah</span>
              </span>
              <p className="text-[11px] text-gray-400 leading-normal">
                Bukan menebak-nebak. Diagnosa berbasis pengukuran tegangan sirkuit dan diagram skema sirkuit resmi.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-gold-400 flex items-center gap-1">
                <HeartHandshake className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-bold text-xs uppercase tracking-wider font-display">Kehormatan Janji</span>
              </span>
              <p className="text-[11px] text-gray-400 leading-normal">
                Transparansi harga total di muka. Tidak ada biaya tambahan klandestin paska pengerjaan.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-gold-400 flex items-center gap-1">
                <Award className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-bold text-xs uppercase tracking-wider font-display">SOP Kerahasiaan</span>
              </span>
              <p className="text-[11px] text-gray-400 leading-normal">
                Data internal klien dilindungi sistem enkripsi ketat. Tidak ada teknisi iseng mengintip galeri album.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
