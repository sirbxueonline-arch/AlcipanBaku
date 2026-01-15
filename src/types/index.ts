export type Language = 'AZ' | 'RU' | 'EN';

export interface LocalizedString {
  AZ: string;
  RU: string;
  EN: string;
}

export interface Product {
  id: string;
  type: 'product';
  image: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  currency: string;
  isActive: boolean;
  isPriceVisible: boolean;
}

export interface Service {
  id: string;
  type: 'service';
  image: string;
  name: LocalizedString;
  description: LocalizedString;
  isActive: boolean;
}

export interface WorkItem {
  id: string;
  type: 'work';
  imageUrl: string; // Thumbnail or main image
  videoUrl?: string; // Optional video link (YouTube, etc.)
  title: LocalizedString;
  description: LocalizedString;
  isActive: boolean;
}

export type Item = Product | Service | WorkItem;
