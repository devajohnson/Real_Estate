export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'land' | 'flat' | 'house' | 'farmland';
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  images: string[];
  amenities: string[];
  featured: boolean;
  status: 'available' | 'sold' | 'pending';
  coordinates?: {
    lat: number;
    lng: number;
  };
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}