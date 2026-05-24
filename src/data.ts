import { DiagnosticTarget, FAQItem, Review, DeviceEstimate } from './types';

export const VIP_DEVICES: DeviceEstimate[] = [
  { id: '1', brand: 'Apple', modelName: 'iPhone 15 Pro / Max', chips: ['A17 Pro SoC', 'PMIC Power IC', '5G Modem Transceiver'] },
  { id: '2', brand: 'Apple', modelName: 'iPhone 14 Pro / Max', chips: ['A16 Bionic AP', 'U2 USB Controller', 'Audio IC Codec'] },
  { id: '3', brand: 'Apple', modelName: 'iPhone 13 Pro / Max', chips: ['A15 Bionic AP', 'NFC Controller', 'Display Driver IC'] },
  { id: '4', brand: 'Apple', modelName: 'MacBook Pro M1/M2/M3', chips: ['M-Series SoC', 'Type-C Controller', 'Backlight Driver IC'] },
  { id: '5', brand: 'Android', modelName: 'Samsung Galaxy S24 Ultra', chips: ['Snapdragon 8 Gen 3', 'Charging IC', 'Wi-Fi 7 Module'] },
  { id: '6', brand: 'Android', modelName: 'Samsung Galaxy Z Fold 5', chips: ['Snapdragon AP', 'Hinge Sensor IC', 'Dual Battery PMIC'] },
  { id: '7', brand: 'Laptop', modelName: 'Asus ROG / Zephyrus High-End', chips: ['Nvidia GPU VRAM Chips', 'CPU VCore Mosfet', 'Super I/O Controller'] },
  { id: '8', brand: 'Laptop', modelName: 'Dell XPS Premium Series', chips: ['Intel Core VRM', 'Thunderbolt Interface', 'BIOS ROM EEPROM'] }
];

export const CIRCUIT_TARGETS: DiagnosticTarget[] = [
  {
    id: 'pmic',
    name: 'IC Power (PMIC)',
    type: 'Sirkuit Manajemen Daya',
    coordinates: { x: 34, y: 41 },
    symptom: 'Mati total, panas berlebih di area logic board saat dicharge, atau arus pengisian mandek di 0.01A.',
    technicalDetails: 'Tegangan sirkuit utama BATT_VCC bocor (short circuit) akibat penurunan resistansi kapasitor decoupling mikro pada jalur buck converter.',
    restorationAction: 'Penggantian IC Power utama menggunakan hot-air rework station berstandar temperatur presisi 340°C dan soldering mikro pad 0.15mm.',
    status: 'faulty',
    microscopeImage: 'https://picsum.photos/seed/pmic/400/300'
  },
  {
    id: 'baseband',
    name: 'Baseband IC / Transceiver',
    type: 'Modulator Sinyal Radio',
    coordinates: { x: 58, y: 25 },
    symptom: 'Sinyal "Searching..." tiada henti, IMEI hilang, atau tidak dapat mengaktifkan data seluler.',
    technicalDetails: 'Jalur komunikasi PCIe antara baseband CPU dan Storage terputus akibat keretakan solder pad timbal solder di bawah chip karena benturan mekanis.',
    restorationAction: 'Bypass jumper kawat mikro tembaga berdiameter 0.02mm pada jalur terputus, diikuti proses reballing chip baseband dengan timbal 183°C premium.',
    status: 'faulty',
    microscopeImage: 'https://picsum.photos/seed/baseband/400/300'
  },
  {
    id: 'nand',
    name: 'NAND Storage Flash',
    type: 'Memori Penyimpanan Internal',
    coordinates: { x: 48, y: 68 },
    symptom: 'Bootloop tersangkut di logo brand (misal logo Apple), error restore 4013, atau kegagalan system update.',
    technicalDetails: 'Korupsi partisi firmware pada sektor penyimpanan NAND akibat gangguan siklus tulis-baca, atau kerusakan fisik chip sirkuit penyimpanan.',
    restorationAction: 'Pengangkatan chip NAND, pembersihan sisa underfill resin, pemrograman ulang partisi serial number internal via programmer PCIE, dan pemasangan ulang.',
    status: 'faulty',
    microscopeImage: 'https://picsum.photos/seed/nand/400/300'
  },
  {
    id: 'cap',
    name: 'Kapasitor Decoupling VDD',
    type: 'Filter Stabilisasi Arus',
    coordinates: { x: 74, y: 55 },
    symptom: 'Baterai sangat boros, perangkat sering restart tiba-tiba, atau mati mendadak saat menjalankan aplikasi berat.',
    technicalDetails: 'Kerusakan dielektrik internal kapasitor keramik mikro (0402 atau 0201) menyebabkan kebocoran arus langsung dari kutub positif ke ground.',
    restorationAction: 'Lokalisasi titik panas menggunakan pencitraan thermal inframerah FLIR, pengangkatan kapasitor yang short, dan instalasi kapasitor pengganti orisinal.',
    status: 'faulty',
    microscopeImage: 'https://picsum.photos/seed/capacitor/400/300'
  }
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Adrian W.',
    role: 'Corporate Lawyer',
    location: 'Residen Pondok Indah, Jakarta Selatan',
    comment: 'Saya tidak punya waktu untuk datang ke counter. Layanan jemput-antar Mobile X Service menyelamatkan data penting perusahaan di MacBook saya hanya dalam hitungan jam. Profesional, rapi, dan data dijamin aman.',
    rating: 5
  },
  {
    id: '2',
    name: 'Vania K.',
    role: 'Content Creator',
    location: 'Kebayoran Lama, Jakarta Selatan',
    comment: 'Sangat transparan! Saya dikirimi foto mikroskopis bagian IC sirkuit yang retak sebelum mereka mengeksekusinya. Untuk wilayah Jaksel, ini benar-benar layanan reparasi gadget paling jujur dan berkelas.',
    rating: 5
  },
  {
    id: '3',
    name: 'Prasetyo B.',
    role: 'Co-Founder & Financial Trader',
    location: 'Sudirman District & Gandaria',
    comment: 'Trauma dengan service center lain yang langsung memvonis logic board mati total dan minta jutaan rupiah. Di Mobile X Service, didiagnosa secara ilmiah dan hanya perlu ganti satu micro-chip filter. Murah, logis, dan kinerjanya kembali sempurna.',
    rating: 5
  }
];

export const SERVICE_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Keamanan Data',
    question: 'Apakah data saya aman dan tidak akan diintip?',
    answer: 'Mutlak aman. Kami menerapkan Standard Operating Procedure (SOP) keamanan data yang sangat ketat. Selama pengerjaan hardware murni (misalnya IC sirkuit atau micro-soldering), data internal Anda sama sekali tidak akan disentuh, diakses, atau disalin. Anda juga tidak diharuskan memberikan passcode layar untuk perbaikan perangkat keras luar.'
  },
  {
    id: 'faq-2',
    category: 'Proses Servis',
    question: 'Apakah bisa diperbaiki atau didiagnosa langsung di rumah saya (onsite)?',
    answer: 'Untuk diagnosa awal, uji baterai, dan penggantian komponen eksternal standar seperti baterai atau LCD modular, tim teknisi bersertifikasi kami dapat langsung berkunjung dan mengerjakannya onsite di rumah atau kantor Anda. Untuk masalah sirkuit mikro tingkat lanjut (level chip / logic board berat) yang memerlukan laboratorium terkontrol dan mikroskop pembesaran tinggi, kurir VIP khusus kami akan mengangkutnya dengan asuransi penuh ke laboratorium utama kami di Kebayoran Lama, dan mengembalikannya setelah selesai diuji kelayakannya.'
  },
  {
    id: 'faq-3',
    category: 'Suku Cadang & Garansi',
    question: 'Bagaimana kualitas suku cadang dan jaminan perlindungannya?',
    answer: 'Kami hanya menggunakan suku cadang dengan tier tertinggi, yaitu Original Equipment Manufacturer (OEM) atau Suku Cadang Copotan Orisinal (Original Pull-out Grade). Setiap reparasi terlindungi oleh Garansi Tertulis 30 Hari Tanpa Debat. Jika terdapat anomali pasca-servis, kami perbaiki ulang tanpa biaya tambahan atau dana Anda dikembalikan 100% penuh.'
  }
];

export const PREMIUM_BONUSES = [
  {
    title: 'Deep Cleansing & Thermal Optimization',
    value: 'Rp 250.000',
    description: 'Pembersihan total debu mikroskopis dan penggantian thermal paste / pad kualitas industri tingkat dewa untuk menjaga ketahanan sirkuit internal gadget Anda.',
    highlight: 'Gratis pekan ini'
  },
  {
    title: 'Premium Oleophobic Coating',
    value: 'Rp 150.000',
    description: 'Pelapisan anti-sidik jari dan molekul minyak pada kaca layar depan, mengembalikan keremajaan tingkat licin layaknya HP baru keluar dari kasir toko.',
    highlight: 'Gratis pekan ini'
  },
  {
    title: 'Battery & System Health Diagnostic',
    value: 'Rp 100.000',
    description: 'Pengecekan siklus baterai (charge cycle), analisa tegangan modul nirkabel, dan cek kebocoran daya halus menggunakan peralatan digital terkalibrasi.',
    highlight: 'Gratis pekan ini'
  }
];
