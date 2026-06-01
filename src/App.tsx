import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Clock, 
  PhoneCall, 
  Instagram, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Search, 
  MessageSquare, 
  HelpCircle, 
  ArrowRight, 
  Lock, 
  Microscope, 
  Timer, 
  Sparkles, 
  ChevronDown, 
  Check, 
  Menu, 
  X,
  Volume2
} from 'lucide-react';

// Component Imports
import MicroCircuitSimulator from './components/MicroCircuitSimulator';
import CostEstimatorBooking from './components/CostEstimatorBooking';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import FAQCollapse from './components/FAQCollapse';
import TestimonialSlider from './components/TestimonialSlider';
import FoundersMessage from './components/FoundersMessage';

// Image Assets Imports
const bannerImg = '/src/assets/images/logic_board_banner_1779607601105.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationActive, setConsultationActive] = useState(false);

  // Active navigation anchors scroll
  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 flex flex-col font-sans relative antialiased selection:bg-gold-500/35 selection:text-white overflow-x-hidden">
      
      {/* BACKGROUND GRAPHICS: Glow Spots */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[20%] right-1/4 w-[600px] h-[600px] bg-gold-950/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[450px] h-[450px] bg-red-950/15 rounded-full blur-[100px] pointer-events-none" />

      {/* HEADER & NAV */}
      <header className="sticky top-0 z-50 bg-[#030712]/85 backdrop-blur-md border-b border-slate-900/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll('hero-section')}>
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-gold-600 via-slate-950 to-red-950 border border-gold-400/30 flex items-center justify-center overflow-hidden shadow-md shadow-gold-500/5">
              <span className="font-display font-black text-sm sm:text-base text-red-500">MX</span>
              {/* Javanese abstract silhouette simulation inside logo */}
              <div className="absolute bottom-[-1px] w-full h-2.5 bg-gradient-to-t from-gold-500/20 to-transparent skew-y-3" />
            </div>
            <div>
              <span className="block font-display text-sm sm:text-base font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-300 to-gold-600 uppercase">
                Mobile X Service
              </span>
              <span className="block text-[8px] sm:text-[9px] font-mono leading-none tracking-widest text-[#047857] uppercase">
                MICRO-REPAIR LAB
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { label: 'Analisa Gejala', target: 'masalah-pasar' },
              { label: 'Hasil Reparasi', target: 'reparasi-visual' },
              { label: 'Simulator Lab', target: 'simulator-sirkuit' },
              { label: 'Tentang Kami', target: 'tentang-kami' },
              { label: 'FAQ', target: 'faq-section' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.target)}
                className="text-xs font-mono font-bold uppercase text-gray-400 hover:text-gold-400 transition-colors tracking-widest cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleScroll('booking-section')}
              className="px-4.5 py-2.5 rounded-xl text-xs font-mono font-extrabold uppercase bg-slate-900 border border-gold-500/25 hover:border-gold-400 text-gold-400 hover:bg-slate-850 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Uji Estimasi Biaya
            </button>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noreferrer"
              className="px-4.5 py-2.5 rounded-xl text-xs font-mono font-extrabold uppercase bg-gradient-to-r from-red-750 to-red-650 hover:from-red-650 hover:to-red-550 text-white transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Priority WA</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-900 bg-[#030712] relative z-40"
          >
            <nav className="flex flex-col gap-4 px-6 py-6 border-t border-slate-900">
              {[
                { label: 'Analisa Gejala', target: 'masalah-pasar' },
                { label: 'Hasil Reparasi', target: 'reparasi-visual' },
                { label: 'Simulator Lab', target: 'simulator-sirkuit' },
                { label: 'Tentang Kami', target: 'tentang-kami' },
                { label: 'FAQ', target: 'faq-section' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScroll(link.target)}
                  className="text-left py-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-900">
                <button
                  onClick={() => handleScroll('booking-section')}
                  className="w-full text-center py-3 rounded-lg text-xs font-mono font-bold uppercase bg-slate-900 text-gold-400 border border-gold-400/20"
                >
                  Uji Estimasi
                </button>
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 rounded-lg text-xs font-mono font-bold uppercase bg-red-650 hover:bg-red-550 text-white flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WA Utama</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE WRAPPER */}
      <main className="flex-grow">
        
        {/* 1. HERO SECTION (Attention) */}
        <section id="hero-section" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-900/60 overflow-hidden">
          
          {/* Main Visual Background - Generated luxury logic board illustration */}
          <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[50%] h-full opacity-[0.14] lg:opacity-[0.85] pointer-events-none z-0">
            {/* Dark vignette gradient block mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 lg:via-[#030712]/30 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] z-10" />
            <img 
              src={bannerImg} 
              alt="Logic Board micro circuit gold gilding banner background" 
              className="w-full h-full object-cover object-right"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Block (7 columns) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              
              {/* Mini tag header */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono bg-red-950/80 text-red-400 border border-red-500/20 active:scale-95 transition-transform">
                <Sparkles className="w-3 text-gold-400 animate-pulse shrink-0" />
                <span className="tracking-widest uppercase font-bold text-[9px] sm:text-[10px]">STANDARDISASI MIKRO-ELEKTRONIK AKURAT</span>
              </div>

              {/* Big Display Headline */}
              <div className="space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
                  Reparasi Gadget Premium <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500 italic block mt-1.5 sm:mt-2">
                    Cepat, Murah, Bergaransi
                  </span>
                </h1>
                
                {/* Subheadline description */}
                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light font-sans leading-relaxed">
                  Layanan perbaikan iPhone, Android, MacBook, dan Laptop berstandar mikro-elektronik akurat, khusus untuk profesional dan residen Jakarta Selatan yang dinamis.
                </p>
              </div>

              {/* 3 Core Points Horizontal/Vertical Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-2">
                {[
                  {
                    title: '✦ Diagnosa Presisi',
                    desc: 'Berbasis skema sirkuit analitis, bukan tebak-tebakan.'
                  },
                  {
                    title: '✦ Privasi Terjamin',
                    desc: 'Keamanan data internal 100% aman (SOP ketat).'
                  },
                  {
                    title: '✦ Layanan Eksklusif',
                    desc: 'Pilihan onsite di tempat atau VIP Pick-up Kebayoran Lama.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-950/40 border border-slate-900 rounded-xl space-y-1 hover:border-red-500/20 transition-all">
                    <span className="block text-xs font-bold text-gold-400 font-display uppercase tracking-wide">{item.title}</span>
                    <span className="block text-[11px] text-gray-500 font-sans leading-normal">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Action and pricing check buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <button
                  onClick={() => handleScroll('booking-section')}
                  className="px-8 py-4 bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 hover:from-gold-500 hover:to-amber-400 text-slate-950 font-display font-black text-xs sm:text-sm tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:scale-101 active:scale-99 transition-all shadow-xl shadow-gold-600/10 border border-gold-400/20 uppercase cursor-pointer"
                >
                  <span>🛠️ Reparasi Gadget Saya Sekarang</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <button
                  onClick={() => handleScroll('simulator-sirkuit')}
                  className="px-6 py-4 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-gray-350 hover:text-white font-mono font-bold text-xs tracking-widest rounded-2xl flex items-center justify-center gap-1.5 transition-all uppercase cursor-pointer"
                >
                  <Microscope className="w-4 h-4 text-gold-400" />
                  <span>Eksplor Lab Simulator</span>
                </button>
              </div>

              {/* Quick statistics metric footer */}
              <div className="flex items-center gap-6 pt-2 text-[10px] sm:text-xs font-mono text-gray-500 divide-x divide-slate-900">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  GARANSI 30 HARI FULL
                </span>
                <span className="pl-6 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-red-500" />
                  DIREKTORAT MILI-SOLDER RESMI
                </span>
              </div>

            </div>

            {/* Right side floating badges - mimicking the requested Dribbble style visual design (5 columns) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              
              {/* Dynamic decorative visual prism container mockup */}
              <div className="relative w-full max-w-[320px] aspect-square rounded-3xl bg-slate-950/20 border border-slate-850/40 p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
                
                {/* Visual glass reflection bar */}
                <div className="absolute top-[-50%] left-[-50%] w-200% h-200% bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12 pointer-events-none" />

                {/* Badge 1: 100% Secure badge */}
                <div className="self-end bg-slate-900/80 backdrop-blur-md border border-slate-700/60 px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="text-left font-mono text-[9px] leading-tight">
                    <span className="block font-bold text-white uppercase">100% Secure</span>
                    <span className="block text-gray-500">SOP / Data Protection Compliant</span>
                  </div>
                </div>

                {/* Center Javanese gunungan art wireframe or schematic vector placeholder */}
                <div className="w-full flex justify-center py-4 relative">
                  <div className="absolute w-24 h-24 bg-gradient-to-tr from-gold-500/20 to-red-500/15 filter blur-xl rounded-full" />
                  <svg className="w-36 h-36 text-gold-400/35 drop-shadow-lg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2500/svg" fill="none" stroke="currentColor" strokeWidth="1">
                    {/* Artistic Gunungan representation resembling wireframe */}
                    <path d="M 50,5 L 90,85 L 80,105 L 50,115 L 20,105 L 10,85 Z" strokeDasharray="3 2" />
                    <path d="M 50,5 L 50,115" strokeWidth="1.5" />
                    <path d="M 50,25 L 75,70" />
                    <path d="M 50,25 L 25,70" />
                    <path d="M 50,55 C 70,55 75,85 50,115" />
                    <path d="M 50,55 C 30,55 25,85 50,115" />
                    <circle cx="50" cy="55" r="10" strokeDasharray="1 1" />
                    <path d="M 50,75 L 85,95 M 50,75 L 15,95" />
                  </svg>
                </div>

                {/* Floating Testimonial component inside hero visual card */}
                <div className="bg-slate-950/90 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl relative z-10 scale-98 hover:scale-100 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-indigo-950 border border-slate-700 overflow-hidden shrink-0 flex items-center justify-center text-xs font-mono font-bold text-gold-400 uppercase">
                    AW
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] italic text-gray-300 leading-tight">
                      "Penyelamatan data paling sigap di Jakarta Selatan. MacBook orisinal kembali beroperasi."
                    </p>
                    <span className="block text-[8px] font-mono font-bold text-gold-400 mt-1 uppercase">
                      — Adrian W., Corporate Lawyer
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Golden abstract horizontal line separator */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        </section>


        {/* 2. MASALAH PASAR (Pain Points - Interest) */}
        <section id="masalah-pasar" className="py-20 border-b border-slate-900/40 relative">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header section description */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest">DIAGNOSA REALITA</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Mengapa Masalah Gadget Begitu Melelahkan Bagi Anda?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
                Kami memahami bahwa bagi Anda, gadget bukan sekadar alat komunikasi, melainkan pusat kendali bisnis, investasi, dan produktivitas harian. Ketika perangkat Anda bermasalah, Anda sering kali dihadapkan pada kekacauan:
              </p>
            </div>

            {/* Pain Points 3-Column Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  code: 'HAMBATAN A',
                  label: 'Krisis Kepercayaan & Privasi',
                  desc: 'Khawatir data pribadi, foto pribadi, history chat, dan aplikasi finansial Anda diintip, disalin, atau disalahgunakan oleh teknisi jalanan amatir yang tidak memiliki kode etik SOP formal.'
                },
                {
                  code: 'HAMBATAN B',
                  label: 'Waktu Produktif yang Terbuang',
                  desc: 'Malas terjebak macet ekstrem Jakarta hanya untuk mengantre berjam-jam di service center konvensional, dengan estimasi waktu tunggu berhari-hari tanpa laporan kepastian progres.'
                },
                {
                  code: 'HAMBATAN C',
                  label: 'Trauma Malpraktik & Vonis Palsu',
                  desc: 'Sering ditipu servis murah yang justru merusak sirkuit komponen lain, atau vonis sepihak "mati total dan harus ganti logic board mahal" padahal kerusakan sesungguhnya hanya pada satu IC mikro.'
                }
              ].map((point, index) => (
                <div 
                  key={index}
                  className="bg-slate-950 border border-slate-900 hover:border-gold-500/20 p-6 sm:p-8 rounded-3xl space-y-4 rounded-tr-none transition-all transform hover:-translate-y-1 group relative overflow-hidden"
                >
                  {/* Decorative faint background danger tag symbol */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-red-500 bg-red-950/30 px-2 py-0.5 rounded border border-red-500/10">
                    {point.code}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                  </div>

                  <h3 className="font-display font-bold text-gray-100 text-base sm:text-lg">
                    {point.label}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 3. SOLUSI YANG DITAWARKAN (Product Introduction + Before/After) */}
        <section className="py-20 bg-slate-950/[0.15] border-b border-slate-900/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header Solution intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-slate-900">
              <div className="lg:col-span-8 space-y-3 text-left">
                <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">MEMPERKENALKAN SOLUSI KELAS S-TIER</span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-none">
                  MOBILE X SERVICE
                </h2>
                <span className="font-display text-sm sm:text-base text-gold-400 italic block">
                  The Fine Art of Electronic Micro-Repair.
                </span>
                <p className="text-gray-400 text-sm max-w-2xl font-sans mt-2">
                  Kami bukan tempat servis biasa; kami adalah laboratorium reparasi yang memadukan keahlian teknik sirkuit mikro tingkat lanjut dengan standar pelayanan VIP luhur.
                </p>
              </div>

              {/* Target Segment Citation */}
              <div className="lg:col-span-4 bg-slate-950 rounded-2xl border border-slate-900 p-4 font-sans text-xs space-y-1.5">
                <span className="font-mono text-[10px] text-gray-500 uppercase block">REKOMENDASI USER:</span>
                <p className="text-gray-300">
                  Sangat cocok untuk eksekutif, trader saham, pengusaha, konten kreator, dan residen Kebayoran Lama yang menuntut kecepatan kilat, transparansi mutlak, dan kesempurnaan perbaikan kosmetik.
                </p>
              </div>
            </div>

            {/* Dynamic Slider integration here! */}
            <BeforeAfterSlider />

          </div>
        </section>


        {/* 4. MANFAAT UTAMA (Core Benefits) */}
        <section className="py-20 border-b border-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest">ALUR TRANSFORMASI</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Keunggulan Mutlak Layanan Reparasi Kami
              </h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
                Melangkah dari perangkat lumpuh yang menghambat harian bisnis Anda, kembali ke performa optimal secara instan, aman, dan bergaransi resmi.
              </p>
            </div>

            {/* Benefits Bento-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Reparasi Berbasis Data & Skematik',
                  desc: 'Setiap vonis kerusakan didasarkan pada pengukuran tegangan sirkuit menggunakan mikro-soldering diagnosis sistematis, menghindari trial-error yang berisiko.'
                },
                {
                  title: 'Efisiensi Waktu Mutlak (Jemput VIP)',
                  desc: 'Kurir VIP terasuransi kami menjemput perangkat langsung dari rumah/kantor Anda di Kebayoran Lama/Jaksel dan mengembalikannya segera setelah selesai pengujian.'
                },
                {
                  title: 'Garansi Proteksi Sektor Data',
                  desc: 'Protokol perlindungan enkripsi internal memastikan data Anda dijamin tidak akan disentuh, diakses, diekspor, atau diubah selama pengerjaan motherboard.'
                },
                {
                  title: 'Estetika Orisinal Pabrikan',
                  desc: 'Pemasangan komponen moduler LCD, baterai, port dilakukan dengan kalibrasi presisi pabrikan kelas tinggi, menjaga estetika fisik orisinal gadget tetap berkelas.'
                }
              ].map((benefit, b_idx) => (
                <div key={b_idx} className="bg-slate-950/60 p-6 rounded-2xl border border-slate-900 hover:border-red-500/15 space-y-3 font-sans text-left">
                  <div className="w-8 h-8 rounded-lg bg-red-950 text-red-500 border border-red-500/25 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h4 className="font-display font-extrabold text-white text-sm sm:text-base tracking-tight pt-1 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 5. FITUR & ISI LAYANAN (Includes Circuit Simulator) */}
        <section className="py-20 bg-slate-950/[0.2] border-b border-slate-900/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Features content text */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-900 pb-10">
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest block">DETAIL SPESIFIK AKURASI</span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Layanan Komprehensif Di Lab Mikrosolder Kami
                </h2>
                <p className="text-gray-400 text-sm max-w-2xl font-light">
                  Didukung peralatan canggih seperti thermal camera pencari titik short circuit, oscilloscope penganalisa sinyal clock, thermal paste kualitas industri, hingga mikroskop digital makro berkekuatan tinggi.
                </p>
              </div>

              {/* Service list items quick cards */}
              <div className="lg:col-span-4 grid grid-cols-1 gap-2 text-xs text-left">
                {[
                  '🔧 Advanced Chip-Level Repair (iPhone & Android)',
                  '💻 Laptop Premium Maintenance (Thermal / Upgrade)',
                  '📸 Transparent Diagnostic Macro-Photo Report',
                  '💎 Genuine & High-Tier Spareparts Access Only'
                ].map((serv, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 bg-slate-950 border border-slate-900 rounded-xl text-gray-300">
                    <span className="text-red-500 font-bold font-sans">✓</span>
                    <span className="font-mono text-[10px] sm:text-xs">{serv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Circuit Simulator Component Integration here */}
            <MicroCircuitSimulator />

          </div>
        </section>


        {/* 6. BONUS SPESIAL SECARA TABEL / LISTING MENAWAN */}
        <section className="py-20 border-b border-slate-900/60 relative overflow-hidden">
          {/* Subtle gold glow behind box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-950/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
            
            {/* Header Bonus Special */}
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest">PENILAIAN NILAI TAMBAH</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Paket Proteksi & Perawatan Eksklusif Gratis
              </h2>
              <p className="text-gray-450 text-xs sm:text-sm max-w-lg mx-auto">
                Khusus reservasi slot minggu ini melalui website portofolio, Anda berhak mendapatkan paket proteksi premium gratis untuk menjamin daya tahan gadget Anda.
              </p>
            </div>

            {/* Inclusions detailing list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: '01',
                  tag: 'DEEP CLEANSING',
                  title: 'Deep Cleansing & Thermal Optimization',
                  value: 'Rp 250.000',
                  desc: 'Pembersihan total debu mikroskopis dan penggantian pasta termal performa tinggi di sela kipas laptop / handphone Anda.',
                },
                {
                  id: '02',
                  tag: 'HYDRO COATING',
                  title: 'Premium Oleophobic Coating Treatment',
                  value: 'Rp 150.000',
                  desc: 'Pelapisan anti-sidik jari dan molekul minyak pada permukaan kaca luar layar, mengembalikan kestabilan licin optimal.',
                },
                {
                  id: '03',
                  tag: 'BATTERY SECURE',
                  title: 'Comprehensive Battery Health System Check',
                  value: 'Rp 100.000',
                  desc: 'Pengecekan sirkulasi cycle charge baterai dan kebocoran daya halus menggunakan multitester digital USB terkalibrasi.',
                }
              ].map((bonus) => (
                <div key={bonus.id} className="bg-slate-950 border border-gold-500/10 p-6 rounded-2xl relative flex flex-col justify-between text-left space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-extrabold text-[#047857] uppercase tracking-wider block">
                      🎁 BONUS {bonus.id} : {bonus.tag}
                    </span>
                    <h3 className="font-display font-black text-sm text-gray-100 mt-2 min-h-[40px] leading-tight">
                      {bonus.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">
                      {bonus.desc}
                    </p>
                  </div>
                  <div className="border-t border-slate-900 pt-3 flex justify-between items-center mt-3">
                    <span className="text-[10px] text-gray-500 font-mono">NILAI NORMAL:</span>
                    <span className="text-xs font-mono font-extrabold text-gold-400 line-through">
                      {bonus.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus Footer CTA */}
            <div className="text-center pt-2">
              <button
                onClick={() => handleScroll('booking-section')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-widest cursor-pointer group"
              >
                <span>Amanankan Paket Bonus prioritas Anda</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </section>


        {/* 7. SOCIAL PROOF (Kepercayaan) */}
        <section className="py-20 bg-slate-950/[0.15] border-b border-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">TESTIMONI ASLI</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Dipercaya Profesional & Residen Jakarta Selatan
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Inilah pendapat objektif mereka yang menuntut hasil pengerjaan rapi, transparan, dan berkelas medis.
              </p>
            </div>

            {/* Reviews component */}
            <TestimonialSlider />

          </div>
        </section>


        {/* 8. TENTANG PEMBUAT / AUTHORITIES */}
        <section className="py-20 border-b border-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FoundersMessage />
          </div>
        </section>


        {/* 10. RISK REVERSAL (Garansi Keamanan Tanpa Debat) */}
        <section className="py-20 bg-slate-950/[0.15] border-b border-slate-950 relative">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-6 relative z-10">
            
            {/* Visual seal badge element */}
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-gold-600 via-[#030712] to-amber-500 border-2 border-gold-400 shadow-xl flex items-center justify-center p-2 relative">
              <span className="font-display font-black text-[10px] text-gold-400 tracking-tight leading-none uppercase">
                30 DAYS <br /> WARRANTY
              </span>
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-px border-t border-gold-500/20 pointer-events-none" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-gold-500 font-bold uppercase tracking-widest">RISK REVERSAL GUARANTEE</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Jaminan Kepuasan Tanpa Risiko: Solder 30 Hari
              </h2>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto font-sans">
              Kami memberikan Garansi Penuh hingga 30 Hari untuk setiap komponen sirkuit yang telah kami perbaiki. Jika masalah sirkuit yang sama muncul kembali dalam masa garansi akibat cacat pengerjaan, kami berkomitmen untuk memperbaikinya ulang secara absolut gratis atau uang Anda dikembalikan 100% penuh tanpa perdebatan.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-red-500 font-mono">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>LOGIS, AMAN, DAN 100% TRANSPARAN.</span>
            </div>

          </div>
        </section>


        {/* 11 & 12. ESTIMATOR + BOOKING ENGINE & FINAL CTA (Action) */}
        <section className="py-20 border-b border-slate-900/60 relative">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest">AKANKAH SEKARANG?</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Kembalikan Produktivitas Gadget Anda Hari Ini
              </h2>
              <p className="text-gray-450 text-xs sm:text-sm max-w-lg mx-auto font-sans">
                Jangan biarkan laju bisnis penting Anda terhenti hanya karena sirkuit mati atau layar yang buram. Pesan slot prioritas sekarang di bawah.
              </p>
            </div>

            {/* Pricing CostEstimator and Booking Forms component */}
            <CostEstimatorBooking />

          </div>
        </section>


        {/* 9. FAQ ACCORDIONS */}
        <section className="py-20 border-b border-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQCollapse />
          </div>
        </section>

      </main>

      {/* 13. KONTAK & SUPPORT FOOTER */}
      <footer className="bg-slate-950 text-gray-450 border-t border-slate-900 pt-16 pb-12 relative z-10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info (5 columns) */}
          <div className="md:col-span-5 space-y-6 text-left">
            
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-gold-600 to-slate-950 border border-gold-400/30 flex items-center justify-center">
                <span className="font-display font-black text-sm text-red-500">MX</span>
              </div>
              <div>
                <span className="block font-display text-sm font-extrabold tracking-widest text-white">MOBILE X SERVICE</span>
                <span className="block text-[8px] font-mono tracking-widest text-red-500 uppercase">THE FINE ART OF MICRO-SURGERY</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md font-sans">
              Laboratorium reparasi piranti elektronik mikro modular berstandar akurasi tinggi khusus kalangan eksekutif, profesional bisnis, dan kalangan penuntut kesempurnaan di Jakarta Selatan.
            </p>

            <div className="flex gap-4">
              <a 
                href="https://wa.me/628123456789" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 hover:text-white hover:border-red-500 transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/MobileXService" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 hover:text-white hover:border-amber-500 transition-all shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-gray-500 uppercase">KRITERIA LOKASI:</span>
              <span className="block text-xs text-gray-300 font-sans leading-relaxed">
                Kebayoran Lama, Pondok Indah, Gandaria, Sukabumi Selatan, Sukabumi Utara, Kelapa Dua, Pos Pengumben, Joglo, Kelapa Dua, Kebon Jeruk, Kedoya, Palmerah, Rawabelong, Kemandoran, Slipi, Kompas Gramedia
              </span>
            </div>

          </div>

          {/* Col 2: Operating Hours & Direct Link (3 columns) */}
          <div className="md:col-span-3 space-y-6 text-left font-sans text-xs sm:text-sm">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-widest">
              Jam Operasional Lab
            </h5>
            
            <ul className="space-y-2.5 text-gray-400">
              <li className="flex justify-between border-b border-slate-900 pb-1.5">
                <span>Sabtu - Kamis:</span>
                <span className="text-white font-mono">12.00 - 20.00 WIB</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-amber-500">Jumat:</span>
                <span className="text-amber-500 font-mono">TUTUP / OFF</span>
              </li>
            </ul>

            <div className="bg-slate-900/60 border border-slate-900 p-4 rounded-xl space-y-2">
              <span className="text-[9px] font-mono text-gray-500 uppercase block">Hotline Konsultasi Gratis</span>
              <a 
                href="https://wa.me/628123456789" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-gold-400 hover:text-gold-300 underline font-semibold flex items-center gap-1"
              >
                Tanya Admin via WhatsApp →
              </a>
            </div>
          </div>

          {/* Col 3: Maps Integration Link Check (4 columns) */}
          <div className="md:col-span-4 space-y-4 text-left font-sans text-xs">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-widest">
              Lokasi Lab Utama
            </h5>

            <p className="text-gray-400 leading-relaxed">
              Kawasan Kebayoran Lama, DKI Jakarta, 12240. Silakan ikuti arahan Google Maps petunjuk arah rute di bawah:
            </p>

            {/* Creative Card mimicking real Google Maps linking */}
            <a 
              href="https://maps.app.goo.gl/zWY48eHCRVR2QLyv8?g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="block bg-slate-900 border border-slate-800 hover:border-gold-500/30 p-3.5 rounded-xl space-y-2.5 transition-all group shadow-md"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-gold-400">
                <span>📍 GOOGLE MAPS DIRECTORY</span>
                <span className="text-red-500 uppercase font-bold group-hover:underline">Buka Rute &rarr;</span>
              </div>

              <div className="h-20 bg-slate-950 rounded-lg relative overflow-hidden border border-slate-850 flex items-center justify-center p-2">
                {/* Simulated Javanese style minimalist geographic marker banner */}
                <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#d97706_1px,transparent_1px),linear-gradient(to_bottom,#d97706_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="absolute w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-gold-500 border border-white shadow shadow-gold-500/50" />
                <span className="relative z-10 font-mono text-[9px] text-gray-400 bg-slate-950/80 px-2 py-1.5 rounded-md border border-slate-800">
                  Kebayoran Lama Center View
                </span>
              </div>

              <span className="block text-[10px] text-gray-500 text-center leading-none mt-1">
                Kawasan Istimewa Kebayoran Lama, Jaksel.
              </span>
            </a>
          </div>

        </div>

        {/* Outer credit foot notes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-650">
          <div className="text-center sm:text-left space-y-1">
            <span>© 2026 Mobile X Service Jakarta Selatan. All Rights Reserved.</span>
            <span className="block text-[9px] text-gray-600">Filsafat Mutlak: Kejujuran Dedikatif, Kehalusan Karya Seni Mikro.</span>
          </div>

          <div className="flex gap-6 text-gray-500">
            <span className="hover:text-gold-400 cursor-pointer" onClick={() => handleScroll('faq-section')}>PRIVACY RIGHTS SOP</span>
            <span className="hover:text-gold-400 cursor-pointer" onClick={() => handleScroll('booking-section')}>VIP ACCREDITATION</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
