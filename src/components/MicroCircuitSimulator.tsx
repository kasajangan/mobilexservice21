import React, { useState } from 'react';
import { CIRCUIT_TARGETS } from '../data';
import { DiagnosticTarget } from '../types';
import { Microscope, Cpu, AlertTriangle, Zap, HelpCircle, CheckCircle } from 'lucide-react';

export default function MicroCircuitSimulator() {
  const [selectedTarget, setSelectedTarget] = useState<DiagnosticTarget>(CIRCUIT_TARGETS[0]);
  const [restoredNodeIds, setRestoredNodeIds] = useState<string[]>([]);
  const [simulatingRepaired, setSimulatingRepaired] = useState<boolean>(false);

  const isRestored = (id: string) => restoredNodeIds.includes(id);

  const handleRestoreClick = (id: string) => {
    if (isRestored(id)) return;
    setSimulatingRepaired(true);
    setTimeout(() => {
      setRestoredNodeIds((prev) => [...prev, id]);
      setSimulatingRepaired(false);
    }, 1800);
  };

  const handleResetSimulator = () => {
    setRestoredNodeIds([]);
  };

  return (
    <div className="bg-slate-950 rounded-3xl border border-red-950/40 p-6 sm:p-8 relative overflow-hidden" id="simulator-sirkuit">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-950/20 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-950/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 space-y-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-red-950/80 text-red-500 border border-red-500/25">
            <Microscope className="w-3.5 h-3.5" />
            <span>LABORATORIUM MIKRO-ELEKTRONIK</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Eksplorasi Diagnosa Sirkuit Mikro
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Klik pin sirkuit logic board di bawah untuk menyimulasikan diagnosa di bawah mikroskop 200x lab Kebayoran Lama. Lihat bagaimana tim ahli kami bekerja dengan logika sirkuit nyata.
          </p>
        </div>

        {/* Promotional Banner: LCD and Battery Super Deal */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-gold-500/20 p-5 md:p-6 shadow-2xl relative overflow-hidden my-4">
          {/* Subtle glowing lights */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row gap-6 items-center justify-between">
            {/* Left side: Text and Badges */}
            <div className="space-y-3 max-w-xl text-center xl:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-black tracking-widest bg-gold-950/80 text-gold-400 border border-gold-400/20 uppercase">
                🔥 Hot Promo Spektakuler
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                Promo Servis LCD & Ganti Baterai <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-red-500 font-extrabold">
                  Oppo, Vivo, Redmi, Poco, & Samsung
                </span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Kembalikan kejernihan layar OLED asli & ketahanan penuh daya gadget Anda dengan komponen tier tertinggi. Pemasangan presisi bebas debu bergaransi.
              </p>
              
              {/* Brand badges */}
              <div className="flex flex-wrap gap-2 justify-center xl:justify-start pt-1">
                {['Oppo', 'Vivo', 'Redmi', 'Poco', 'Samsung'].map((brand) => (
                  <span key={brand} className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-900/90 text-slate-300 rounded-lg border border-slate-800 hover:border-gold-500/30 transition-colors">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side: Beautiful visual displays for Battery & LCD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full xl:w-auto">
              
              {/* LCD Card View */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 flex items-center gap-4 hover:border-gold-500/40 transition-colors group">
                {/* SVG Mockup of sleek glowing Smartphone Screen */}
                <div className="w-14 h-24 bg-slate-900 rounded-lg border border-slate-700/80 flex-shrink-0 relative overflow-hidden flex items-center justify-center shadow-lg group-hover:shadow-gold-500/10 transition-shadow">
                  {/* Glowing dynamic colorful screen grid simulated inside */}
                  <div className="absolute inset-[2px] bg-slate-950 rounded-[5px] overflow-hidden flex flex-col justify-between p-1">
                    <div className="w-full h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-sm opacity-90 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="text-[5px] text-white font-mono scale-[0.8] origin-left pl-0.5 pt-0.5">AMOLED</div>
                    </div>
                    <div className="w-full h-3 bg-slate-900 rounded-xs flex items-center gap-1 px-1">
                      <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                      <div className="w-4 h-[2px] bg-slate-700" />
                    </div>
                  </div>
                  {/* Face camera cutout notch */}
                  <div className="absolute top-1 w-2.5 h-1 bg-slate-950 rounded-full z-10" />
                  {/* Specular glare line */}
                  <div className="absolute -inset-y-2 left-1/3 w-1 bg-white/[0.04] rotate-12" />
                </div>
                
                <div className="text-left space-y-1">
                  <span className="text-[10px] font-mono font-extrabold text-[#10b981] tracking-wider uppercase">
                    ULTRA-BRIGHT LCD
                  </span>
                  <h5 className="font-display font-bold text-xs text-white">Original Color Gamut</h5>
                  <p className="text-[11px] text-gray-400 leading-tight">Super AMOLED / IPS Premium</p>
                  <div className="pt-1 flex items-baseline gap-1.5">
                    <span className="text-[10px] text-gray-500">Mulai</span>
                    <span className="font-mono text-sm font-black text-gold-400">Rp250.000</span>
                  </div>
                </div>
              </div>

              {/* Battery Card View */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 flex items-center gap-4 hover:border-red-500/45 transition-colors group">
                {/* SVG Mockup of sleek technical Lithium Battery */}
                <div className="w-14 h-24 bg-slate-900 rounded-md border border-slate-700/80 flex-shrink-0 relative overflow-hidden flex flex-col justify-between p-1 shadow-lg group-hover:shadow-red-500/10 transition-shadow">
                  <div className="w-full h-1 bg-red-500 rounded-xs" />
                  <div className="flex-1 flex flex-col justify-between py-1 px-0.5">
                    <div className="flex justify-between items-center text-[5px] font-mono text-gray-500">
                      <span>Li-ion</span>
                      <span>3.87V</span>
                    </div>
                    {/* Battery progress blocks */}
                    <div className="space-y-0.5">
                      <div className="h-1.5 bg-red-500/20 rounded-xs overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-red-650 to-red-400" />
                      </div>
                      <div className="text-center text-[4.5px] font-mono text-red-500 font-bold scale-[0.8] origin-center">
                        HEALTH 100%
                      </div>
                    </div>
                    <div className="text-center text-[5px] font-mono text-gray-600 scale-[0.9]">
                      CERTIFIED CELL
                    </div>
                  </div>
                  {/* Brass contacts */}
                  <div className="absolute bottom-0.5 right-1.5 w-2 h-1 bg-amber-500 rounded-xs" />
                </div>
                
                <div className="text-left space-y-1">
                  <span className="text-[10px] font-mono font-extrabold text-[#ef4444] tracking-wider uppercase">
                    HIGH-CAPACITY BATTERY
                  </span>
                  <h5 className="font-display font-bold text-xs text-white">Pure Lithium-Ion Cell</h5>
                  <p className="text-[11px] text-gray-400 leading-tight">Zero Cycle & Safe Charge</p>
                  <div className="pt-1 flex items-baseline gap-1.5">
                    <span className="text-[10px] text-gray-500">Mulai</span>
                    <span className="font-mono text-sm font-black text-gold-400">Rp250.000</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Board & Microscope layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Left panel: Circuit Board Interactive Map (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="mb-3 flex justify-between items-center px-1">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-gold-400" />
                Logic Board Diagram
              </span>
              <button 
                onClick={handleResetSimulator}
                className="text-[10px] font-mono text-gold-400 hover:text-gold-300 transition-colors underline"
                title="Restart simulasi reparasi"
              >
                Reset Jalur Sirkuit
              </button>
            </div>

            {/* Board representation */}
            <div className="relative w-full aspect-[5/4] bg-neutral-900 rounded-xl border-2 border-red-950/80 overflow-hidden flex items-center justify-center p-2 group">
              {/* Green/Dark grid network lines background representative of PCB */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#b91c1c_1px,transparent_1px),linear-gradient(to_bottom,#b91c1c_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950 pointer-events-none" />

              {/* Silicon substrate details */}
              <div className="w-[85%] h-[85%] rounded-lg border border-red-900/40 relative bg-red-950/40 p-4">
                {/* Silicon CPU square block */}
                <div className="absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-slate-800 rounded-md border-4 border-slate-700/60 flex flex-col items-center justify-center p-1 font-mono text-[9px] text-gray-400 shadow-xl">
                  <div className="w-8 h-8 rounded bg-gradient-to-tr from-gold-600 to-amber-400 flex items-center justify-center text-slate-950 font-bold text-[10px] mb-1">
                    A17
                  </div>
                  <span>MAIN SoC AP</span>
                  <span className="text-[7px] text-gray-500">MICRO-ARCH</span>
                </div>

                {/* Circuit copper traces */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 60,80 L 120,80 L 120,50" fill="none" stroke="#b45309" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6"/>
                  <path d="M 120,120 L 120,180 L 180,180" fill="none" stroke="#b91c1c" strokeWidth="1" strokeDasharray="3,1" opacity="0.5"/>
                  <path d="M 220,100 L 220,150" fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.4"/>
                  <path d="M 120,140 L 220,140" fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.4"/>
                </svg>

                {/* Interactive coordinate points */}
                {CIRCUIT_TARGETS.map((target) => {
                  const hasRestored = isRestored(target.id);
                  const isCurrentlySelected = selectedTarget.id === target.id;
                  
                  return (
                    <button
                      key={target.id}
                      onClick={() => setSelectedTarget(target)}
                      className="absolute group/pin -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-full"
                      style={{ left: `${target.coordinates.x}%`, top: `${target.coordinates.y}%` }}
                    >
                      {/* Pulse circle rings */}
                      <span className={`absolute inline-flex h-8 w-8 -left-4 -top-4 rounded-full opacity-75 animate-ping duration-1000 ${
                        hasRestored ? 'bg-amber-400/40' : 'bg-red-400/40'
                      }`} />
                      
                      {/* Core interactive status dot */}
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border-2 shadow-lg transition-transform scale-100 group-hover/pin:scale-125 ${
                        isCurrentlySelected 
                          ? 'border-white bg-gold-400 scale-110 z-30' 
                          : hasRestored
                            ? 'border-gold-500 bg-gold-600'
                            : 'border-red-500 bg-red-600'
                      }`}>
                        {hasRestored ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>

                      {/* Floating tooltip label */}
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 border border-slate-700 text-[10px] text-gray-200 px-1.5 py-0.5 rounded shadow-xl opacity-0 group-hover/pin:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {target.name} ({hasRestored ? 'OK' : 'Mati/Bocor'})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Instruction footnote */}
            <p className="text-[11px] font-mono text-gray-500 text-center mt-3">
              *Koordinat di atas adalah visualisasi sirkuit multi-layer orisinal.
            </p>
          </div>

          {/* Right panel: Digital Microscope View and Symptom Report (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-900/30 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
            
            <div>
              {/* Microscope Live Feed Title Bar */}
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase text-gray-300 tracking-wide">
                    Live Feed: USB Microscope v4.1
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 px-2 py-0.5 rounded text-[10px] text-gold-400 font-mono">
                  <span>Zoom: 200X Macro</span>
                </div>
              </div>

              {/* Feed Visual & Diagnostic Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Microscope Simulated Viewbox (5 cols) */}
                <div className="md:col-span-5 relative group">
                  <div className="w-full aspect-square rounded-xl overflow-hidden border border-slate-700 relative bg-slate-950 flex items-center justify-center">
                    {/* Simulated circular lens mask */}
                    <div className="absolute inset-0 rounded-full border-[10px] border-slate-900 z-10 pointer-events-none opacity-80" />
                    
                    {/* Simulated crosshair lines */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-30">
                      <div className="w-full h-px bg-red-500 absolute" />
                      <div className="h-full w-px bg-red-500 absolute" />
                      <div className="w-12 h-12 rounded-full border border-red-500 absolute" />
                    </div>

                    <img 
                      src={selectedTarget.microscopeImage} 
                      alt={selectedTarget.name}
                      className={`w-full h-full object-cover filter transition-all duration-500 ${
                        isRestored(selectedTarget.id) 
                          ? 'grayscale-0 brightness-110 contrast-100' 
                          : 'grayscale-[40%] sepia-[20%] brightness-90 animate-pulse-slow'
                      }`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Lens reflection layer */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

                    {/* Badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className={`w-full text-center px-2 py-1 rounded text-[10px] font-mono leading-none font-bold uppercase tracking-wider ${
                        isRestored(selectedTarget.id)
                          ? 'bg-amber-950/90 text-gold-400 border border-gold-500/30'
                          : 'bg-red-950/90 text-red-400 border border-red-500/30'
                       }`}>
                        STATUS: {isRestored(selectedTarget.id) ? 'OPTIMAL (PASS)' : 'FAULTY (SHORT CIRCUIT)'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical data sheets summary (7 cols) */}
                <div className="md:col-span-7 space-y-3 font-sans text-sm">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-gray-500">Komponen Tersorot</span>
                    <h4 className="font-display text-lg font-bold text-gold-400 flex items-center gap-1.5 leading-tight">
                      {selectedTarget.name}
                    </h4>
                    <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-gray-300 rounded">
                      {selectedTarget.type}
                    </span>
                  </div>

                  <div className="space-y-2 pt-1.5">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-500" />
                        GEJALA RUSAK (SYMPTOM):
                      </span>
                      <p className="text-xs text-gray-300 mt-0.5 leading-relaxed bg-slate-900/40 p-2 rounded border border-slate-800/40 font-sans">
                        {selectedTarget.symptom}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-red-500" />
                        ANALISA TEKNIS SCHEMATIC:
                      </span>
                      <p className="text-xs text-amber-100/90 mt-0.5 leading-relaxed font-mono">
                        {selectedTarget.technicalDetails}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom action bar inside microscopic details */}
            <div className="border-t border-slate-800/80 pt-4 mt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs text-gray-400 font-mono">
                {isRestored(selectedTarget.id) ? (
                  <span className="text-amber-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    Sirkuit pulih. Tegangan stabil 1.8V VCC_MAIN terdeteksi.
                  </span>
                ) : (
                  <span className="text-amber-400/90 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Uji micro-soldering replika diperlukan.
                  </span>
                )}
              </div>

              {isRestored(selectedTarget.id) ? (
                <div className="px-4 py-2 bg-amber-950/45 border border-gold-800/60 text-gold-400 rounded-lg text-xs font-mono select-none">
                  ✓ Selesai Direparasi
                </div>
              ) : (
                <button
                  onClick={() => handleRestoreClick(selectedTarget.id)}
                  disabled={simulatingRepaired}
                  className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-gold-600 to-amber-500 hover:from-gold-500 hover:to-amber-400 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gold-600/10 cursor-pointer"
                >
                  {simulatingRepaired ? (
                    <>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      <span>Menyalin Skema & Mengelas...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>Simulasikan Reparasi Sirkuit Sekarang</span>
                    </>
                  )}
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
