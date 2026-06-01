import React, { useState, useEffect } from 'react';
import { VIP_DEVICES, PREMIUM_BONUSES } from '../data';
import { Booking } from '../types';
import { 
  Calculator, 
  MapPin, 
  PhoneCall, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  ClipboardCheck,
  Smartphone
} from 'lucide-react';

export default function CostEstimatorBooking() {
  const [selectedBrand, setSelectedBrand] = useState<'Apple' | 'Android' | 'MacBook' | 'Laptop'>('Apple');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedIssue, setSelectedIssue] = useState<string>('logic-board');
  const [serviceType, setServiceType] = useState<'onsite' | 'vip_pickup'>('onsite');

  // Booking Form State
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('09:00');
  const [issueDescription, setIssueDescription] = useState<string>('');
  
  // Submission Outcomes
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);
  const [formError, setFormError] = useState<string>('');
  const [slotsLeft, setSlotsLeft] = useState<number>(3);
  const [countdownMinutes, setCountdownMinutes] = useState<number>(45);
  const [countdownSeconds, setCountdownSeconds] = useState<number>(30);

  // Filter models based on brand
  const filteredModels = VIP_DEVICES.filter(d => d.brand === selectedBrand);

  useEffect(() => {
    if (filteredModels.length > 0 && !selectedModel) {
      setSelectedModel(filteredModels[0].modelName);
    }
  }, [selectedBrand, filteredModels, selectedModel]);

  // Scarcity simulation timers
  useEffect(() => {
    const slotTimer = setInterval(() => {
      setSlotsLeft((prev) => (prev > 1 ? prev - 1 : 2));
    }, 120000); // Reduce or cycle slot every 2 minutes

    const countdownTimer = setInterval(() => {
      setCountdownSeconds((sec) => {
        if (sec > 0) return sec - 1;
        setCountdownMinutes((min) => {
          if (min > 0) return min - 1;
          return 45; // Reset countdown
        });
        return 59;
      });
    }, 1000);

    return () => {
      clearInterval(slotTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  // Compute estimate dynamically
  const getEstimate = () => {
    let basePriceMin = 100000;
    let basePriceMax = 150000;
    let timeEstimate = "2 - 4 Jam";

    // Modifiers based on brand
    if (selectedBrand === 'Apple') {
      basePriceMin = 100000;
      basePriceMax = 180000;
    } else if (selectedBrand === 'MacBook') {
      basePriceMin = 200000;
      basePriceMax = 350000;
      timeEstimate = "1 - 2 Hari (Pemeriksaan Lab)";
    } else if (selectedBrand === 'Laptop') {
      basePriceMin = 150000;
      basePriceMax = 250000;
      timeEstimate = "5 - 8 Jam";
    }

    // Modifiers based on issue
    switch (selectedIssue) {
      case 'logic-board':
        basePriceMin += 0;
        basePriceMax += 220000; // 180,000 + 220,000 = 400,000
        timeEstimate = selectedBrand === 'MacBook' ? "2 - 3 Hari (Sirkuit Mikro)" : "3 - 6 Jam";
        break;
      case 'network':
        basePriceMin += 0;
        basePriceMax += 120000;
        timeEstimate = "3 - 5 Jam";
        break;
      case 'screen':
        basePriceMin += 50000;
        basePriceMax += 150000;
        timeEstimate = "1 - 2 Jam (Presisi LCD)";
        break;
      case 'battery':
        basePriceMin += 20000;
        basePriceMax += 80000;
        timeEstimate = "45 Menit (Onsite Ready)";
        break;
      case 'thermal':
        basePriceMin += 0;
        basePriceMax += 50000;
        timeEstimate = '1 - 2 Jam';
        break;
    }

    return {
      min: basePriceMin.toLocaleString('id-ID'),
      max: basePriceMax.toLocaleString('id-ID'),
      time: timeEstimate
    };
  };

  const estimate = getEstimate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      setFormError("Mohon lengkapi nama dan nomor WhatsApp Anda.");
      return;
    }
    setFormError('');

    const randomCode = 'MX-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking: Booking = {
      id: Math.random().toString(),
      bookingCode: randomCode,
      clientName,
      clientPhone,
      deviceBrand: selectedBrand,
      deviceModel: selectedModel,
      issueDescription: issueDescription || `Diagnosa ${selectedIssue} pada ${selectedModel}`,
      serviceType,
      address: address || "Laboratorium Kebayoran Lama",
      scheduledDate: bookingDate || new Date().toISOString().split('T')[0],
      scheduledTime: bookingTime,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    setSubmittedBooking(newBooking);
    
    // Save to localstorage for proof of local persistence
    try {
      localStorage.setItem('active_booking_mobile_x', JSON.stringify(newBooking));
    } catch (err) {
      console.warn("Storage error", err);
    }
  };

  const handleWhatsAppRedirect = () => {
    if (!submittedBooking) return;
    
    const tokenMessage = 
`Halo Admin Mobile X Service,%0A
Saya ingin mengaktifkan Akses Layanan Prioritas VIP.%0A
%0A
*DATA KLIEN:*
* Kode Booking: ${submittedBooking.bookingCode}
* Nama: ${submittedBooking.clientName}
* WA: ${submittedBooking.clientPhone}
* Layanan: ${submittedBooking.serviceType === 'onsite' ? 'Dikerjakan di Tempat (Onsite)' : 'VIP Pick-up (Kebayoran Lama Lab)'}
%0A
*SPESIFIKASI GADGET:*
* Brand: ${submittedBooking.deviceBrand}
* Model: ${submittedBooking.deviceModel}
* Deskripsi Kerusakan: ${submittedBooking.issueDescription}
%0A
*AGENDA JADWAL:*
* Tanggal: ${submittedBooking.scheduledDate}
* Jam: ${submittedBooking.scheduledTime}
* Estimasi Alamat: ${submittedBooking.address}%0A
%0A
Mohon konfirmasi slot prioritas saya hari ini. Terima kasih!`;

    const whatsappLink = `https://wa.me/628123456789?text=${tokenMessage}`;
    window.location.href = whatsappLink;
  };

  return (
    <div id="booking-section" className="space-y-12">
      
      {/* High impact Scarcity Panel */}
      <div className="bg-gradient-to-r from-amber-950/40 via-neutral-950 to-red-950/40 rounded-3xl border border-gold-600/25 p-5 md:p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/[0.01] pointer-events-none" />
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gold-500/10 rounded-2xl border border-gold-500/30 text-gold-400 shrink-0 animate-bounce">
            <Flame className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold-400 tracking-wider uppercase">VIP SLOTS SEDANG BERJALAN</span>
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            <h4 className="font-display text-lg md:text-xl font-bold text-white">
              Hanya Tersisa <span className="text-gold-400 font-mono font-extrabold text-2xl">{slotsLeft} Slot</span> Diagnosa VIP Hari Ini
            </h4>
            <p className="text-gray-400 text-xs mt-1">
              Khusus kawasan Kebayoran Lama, Pondok Indah & Jaksel sekitar. Penanganan logic board dibatasi demi kepatuhan SOP presisi.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end shrink-0">
          <span className="text-[10px] font-mono text-gray-400 uppercase">Masa Berlaku Bonus Proteksi:</span>
          <div className="flex gap-2 items-center mt-1">
            <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-mono text-lg font-bold text-gold-400 min-w-[50px] text-center">
              00
              <span className="block text-[8px] uppercase text-gray-500 font-sans tracking-wide">Jam</span>
            </div>
            <span className="text-gold-500 font-bold">:</span>
            <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-mono text-lg font-bold text-gold-400 min-w-[50px] text-center">
              {countdownMinutes.toString().padStart(2, '0')}
              <span className="block text-[8px] uppercase text-gray-500 font-sans tracking-wide">Menit</span>
            </div>
            <span className="text-gold-500 font-bold">:</span>
            <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-mono text-lg font-bold text-gold-400 min-w-[50px] text-center">
              {countdownSeconds.toString().padStart(2, '0')}
              <span className="block text-[8px] uppercase text-gray-500 font-sans tracking-wide">Detik</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Price Estimator & Booking Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Cost Estimator Card */}
        <div className="bg-slate-950 border border-red-950/40 rounded-3xl p-6 sm:p-8 space-y-6 glow-card">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 bg-red-500/10 rounded-xl border border-red-500/30 text-red-500">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Estimator Biaya Transparan</h4>
              <p className="text-xs text-gray-400 font-sans">Simulasi instan berdasarkan standarisasi mikro-elektronika</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Brand Select Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Kategori Perangkat:</label>
              <div className="grid grid-cols-4 gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
                {(['Apple', 'Android', 'MacBook', 'Laptop'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => { setSelectedBrand(b); setSelectedModel(''); }}
                    className={`py-2 text-[10px] sm:text-xs font-mono font-bold rounded-lg transition-all ${
                      selectedBrand === b 
                        ? 'bg-gradient-to-r from-gold-600 to-amber-500 text-slate-950 shadow-md' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-gray-400 uppercase">Tipe Spesifik Gadget:</label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                >
                  <option value="" disabled>-- Pilih Model --</option>
                  {filteredModels.map((m) => (
                    <option key={m.id} value={m.modelName}>
                      {m.modelName}
                    </option>
                  ))}
                  <option value="Tipe Premium Lainnya">Tipe Premium Lainnya (Lain-lain)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
              </div>
            </div>

            {/* Issue Category Radio Group */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Analisa Gejala Kerusakan:</label>
              <div className="space-y-2">
                {[
                  { id: 'logic-board', label: 'Advanced Logic Board / Mati Total / IC Power', details: 'Kerusakan sirkuit mikro tingkat lanjut (reballing)' },
                  { id: 'network', label: 'Sinyal Hilang / Baseband IC / No Service', details: 'Bypass jumper kawat mikro & solder pad sinyal' },
                  { id: 'screen', label: 'Ganti Layar LCD / Retina Display Presisi', details: 'Pemasangan presisi tanpa cacat estetika pabrikan' },
                  { id: 'battery', label: 'Ganti Baterai Orisinal & Kalibrasi Siklus Daya', details: 'Pengembalian sel modul daya orisinal 100%' },
                  { id: 'thermal', label: 'Modifikasi Termal & Deep Laptop Cleansing', details: 'Upgrade RAM, pasta termal premium berkinerja stabil' }
                ].map((issue) => (
                  <label 
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedIssue === issue.id 
                        ? 'bg-slate-900 border-gold-500/50 shadow-inner' 
                        : 'border-slate-800 hover:bg-slate-900/30'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="issue" 
                      checked={selectedIssue === issue.id}
                      onChange={() => setSelectedIssue(issue.id)}
                      className="mt-1 accent-gold-500 cursor-pointer"
                    />
                    <div>
                      <span className="block text-xs font-bold text-gray-200">{issue.label}</span>
                      <span className="block text-[10px] text-gray-500 mt-0.5">{issue.details}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Calculator Output Display Box */}
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span>ESTIMASI BIAYA RESTRUKTURISASI:</span>
              <span className="text-gold-400">IDR</span>
            </div>

            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight flex items-baseline gap-1.5">
              <span className="text-sm font-sans font-normal text-gray-400">Rp</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500 font-mono">
                {estimate.min} - {estimate.max}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px] font-mono border-t border-slate-800/80 pt-3">
              <div>
                <span className="text-gray-500 uppercase">Estimasi Waktu:</span>
                <span className="block text-white font-bold mt-0.5">{estimate.time}</span>
              </div>
              <div>
                <span className="text-gray-500 uppercase">Protokol Keamanan:</span>
                <span className="block text-red-500 font-bold mt-0.5">SOP Privasi 100%</span>
              </div>
            </div>
            
            <div className="text-[10px] text-gray-500 font-sans leading-relaxed pt-1 flex items-start gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
              <span>Biaya pasti ditentukan setelah inspeksi mikroskopis logis. Kebijakan "No Repair, No Fee".</span>
            </div>
          </div>

          {/* Inclusions of the service */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase block">Bonus Terlampir (Khusus Reservasi Online):</span>
            <div className="grid grid-cols-3 gap-2">
              {PREMIUM_BONUSES.map((bonus, idx) => (
                <div key={idx} className="bg-slate-900/40 p-2 rounded-xl text-center border border-slate-800/50">
                  <span className="block text-[8px] text-gold-400 font-bold tracking-wider uppercase">🎉 FREE</span>
                  <span className="block text-[9px] font-bold text-white mt-0.5 truncate">{bonus.title}</span>
                  <span className="text-[8px] text-gray-500 line-through">Value {bonus.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: VIP Reservation Engine Form */}
        <div className="bg-slate-950 border border-red-950/40 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden" id="booking-form-card">
          
          {!submittedBooking ? (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 bg-gold-500/10 rounded-xl border border-gold-500/30 text-gold-400">
                  <Smartphone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">Reservasi Layanan Prioritas VIP</h4>
                  <p className="text-xs text-gray-400">Dapatkan layanan kasta tertinggi bebas hambatan macet</p>
                </div>
              </div>

              {/* Service Method choice */}
              <div className="grid grid-cols-2 gap-4 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setServiceType('onsite')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    serviceType === 'onsite' 
                      ? 'bg-slate-800 text-gold-400 border border-gold-500/10' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Onsite (Di tempat Anda)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('vip_pickup')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    serviceType === 'vip_pickup' 
                      ? 'bg-slate-800 text-gold-400 border border-red-500/15' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>VIP Jemput-Kirim</span>
                </button>
              </div>

              {/* Full name input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-400 uppercase block">Nama Lengkap Klien:</label>
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Adrian Wijaya, S.H."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500"
                  required
                />
              </div>

              {/* Whatsapp Phone input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-400 uppercase block">Nomor WhatsApp VIP:</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-500 bg-slate-850 px-1 rounded">+62</span>
                  <input 
                    type="tel" 
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="812-xxxx-xxxx"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-14 pr-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 font-mono"
                    required
                  />
                </div>
              </div>

              {/* Address input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-400 uppercase block">
                  {serviceType === 'onsite' ? 'Alamat Onsite Pengerjaan:' : 'Alamat Penjemputan VIP (Jaksel & Kebayoran Lm):'}
                </label>
                <textarea 
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Contoh: Gandaria Heights Apt, Tower B Lantai 12 / Residen Kebayoran Lama No. 4"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 font-sans leading-relaxed"
                />
              </div>

              {/* Date & Time selection Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400 uppercase block">Tanggal Kunjungan:</label>
                  <div className="relative">
                    <input 
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400 uppercase block">Jam Pilihan (WIB):</label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="09:00">09.00 WIB (Pagi)</option>
                    <option value="11:00">11.00 WIB (Siang)</option>
                    <option value="13:00">13.00 WIB (Siang)</option>
                    <option value="15:00">15.00 WIB (Sore)</option>
                    <option value="17:00">17.00 WIB (Sore)</option>
                  </select>
                </div>
              </div>

              {/* Issue detail description */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-400 uppercase block">Catatan Tambahan Gejala Perangkat (Opsional):</label>
                <textarea 
                  rows={2}
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="Misalnya: layar kadang berkedip garis hijau setelah jatuh, habis kena cipratan air hujan semalam."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 font-sans leading-relaxed"
                />
              </div>

              {/* Inline Form Error */}
              {formError && (
                <div className="p-3 bg-red-950/30 border border-red-500/25 text-red-400 text-xs rounded-xl text-center font-sans">
                  ⚠️ {formError}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4.5 bg-gradient-to-r from-gold-600 to-amber-500 hover:from-gold-500 hover:to-amber-400 text-slate-950 font-display font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gold-600/20 cursor-pointer border border-gold-400/20"
              >
                <span>🛠️ REPARASI GADGET SAYA SEKARANG</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
            </form>
          ) : (
            /* Booking Success Receipt Card */
            <div className="space-y-6 animate-fadeIn py-4">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white uppercase tracking-tight">KODE BOOKING AKTIF</h4>
                <div className="inline-block bg-slate-900 px-4 py-2 rounded-2xl border-2 border-red-500/30 text-gold-400 font-mono text-xl font-bold tracking-widest">
                  {submittedBooking.bookingCode}
                </div>
                <p className="text-gray-400 text-xs max-w-sm mx-auto">
                  Selamat, antrean prioritas VIP Anda telah dilock di laboratorium Kebayoran Lama. Amankan slot reservasi Anda sekarang di WhatsApp admin.
                </p>
              </div>

              {/* Receipt Details Sheet */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-3 text-xs font-mono">
                <div className="flex justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-gray-500">NAMA KLIEN:</span>
                  <span className="text-gray-250 font-bold">{submittedBooking.clientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-gray-500">HANDPHONE / WA:</span>
                  <span className="text-gray-250 font-bold">+62 {submittedBooking.clientPhone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-gray-500">TIPE GADGET:</span>
                  <span className="text-gold-400 font-bold">{submittedBooking.deviceBrand} {submittedBooking.deviceModel}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-gray-500">FAKULTAS KERUSAKAN:</span>
                  <span className="text-gray-250 font-bold truncate max-w-[180px]">{submittedBooking.issueDescription}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-gray-500">AGEN JADWAL:</span>
                  <span className="text-gray-200 font-bold">{submittedBooking.scheduledDate} | {submittedBooking.scheduledTime} WIB</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-2">
                  <span className="text-gray-500">METODE LAYANAN:</span>
                  <span className="text-red-500 font-bold uppercase">{submittedBooking.serviceType === 'onsite' ? '📍 ONSITE' : '🚗 VIP PICKUP'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ALAMAT TERLOKASI:</span>
                  <span className="text-gray-250 text-right font-sans leading-tight max-w-[160px] truncate">{submittedBooking.address}</span>
                </div>
              </div>

              {/* VIP Benefits inclusions checklist in receipt */}
              <div className="border border-red-925 bg-red-950/20 p-4 rounded-xl space-y-2">
                <span className="text-[10px] font-mono text-red-500 block font-bold tracking-wider uppercase">💎 COMPLIMENTARY BONUSES UNLOCKED:</span>
                <ul className="text-[11px] text-gray-300 space-y-1.5 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Deep Cleansing & Thermal Optimization (Worth Rp250.000)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Premium Oleophobic Coating Treatment (Worth Rp150.000)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Diagnostic Comprehensive Report & Battery check (Worth Rp100.000)
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-display font-extrabold text-[13px] rounded-xl flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-red-950/50 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 fill-current shrink-0" />
                  <span>KIRIM KODE & SLOT KE WHATSAPP (AKTIFKAN)</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setSubmittedBooking(null)}
                  className="w-full text-center text-xs font-mono text-gray-500 hover:text-gray-400 transition-colors underline py-1"
                >
                  Reset & Buat Reservasi Lainnya
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
