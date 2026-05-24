export interface DiagnosticTarget {
  id: string;
  name: string;
  type: string;
  coordinates: { x: number; y: number };
  symptom: string;
  technicalDetails: string;
  restorationAction: string;
  status: 'faulty' | 'restoring' | 'optimal';
  microscopeImage: string;
}

export interface DeviceEstimate {
  id: string;
  brand: 'Apple' | 'Android' | 'MacBook' | 'Laptop';
  modelName: string;
  chips: string[];
}

export interface RepairEstimateRequest {
  deviceBrand: string;
  deviceModel: string;
  issueType: string;
  onsiteService: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  avatarUrl?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Keamanan Data' | 'Proses Servis' | 'Suku Cadang & Garansi';
}

export interface Booking {
  id: string;
  bookingCode: string;
  clientName: string;
  clientPhone: string;
  deviceBrand: string;
  deviceModel: string;
  issueDescription: string;
  serviceType: 'onsite' | 'vip_pickup';
  address: string;
  scheduledDate: string;
  scheduledTime: string;
  status: 'pending' | 'confirmed' | 'ready';
  createdAt: string;
}
