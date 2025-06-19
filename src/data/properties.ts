import { Property } from '../types/Property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Stunning 4-bedroom villa with panoramic city views, featuring contemporary design, spacious living areas, and premium finishes throughout. Perfect for families seeking luxury and comfort.',
    price: 850000,
    location: 'Beverly Hills, CA',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Swimming Pool', 'Garage', 'Garden', 'Security System', 'Modern Kitchen'],
    featured: true,
    status: 'available',
    coordinates: { lat: 34.0901, lng: -118.4065 },
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah@realestate.com'
    }
  },
  {
    id: '2',
    title: 'Downtown Luxury Apartment',
    description: 'Elegant 2-bedroom apartment in the heart of downtown, featuring floor-to-ceiling windows, modern amenities, and breathtaking city skyline views.',
    price: 425000,
    location: 'Manhattan, NY',
    type: 'flat',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['City View', 'Gym Access', 'Concierge', 'Balcony', 'High-Speed Internet'],
    featured: true,
    status: 'available',
    coordinates: { lat: 40.7589, lng: -73.9851 },
    agent: {
      name: 'Michael Chen',
      phone: '+1 (555) 234-5678',
      email: 'michael@realestate.com'
    }
  },
  {
    id: '3',
    title: 'Fertile Agricultural Land',
    description: '50-acre prime agricultural land with rich soil, excellent drainage, and access to irrigation. Perfect for farming operations or investment opportunities.',
    price: 320000,
    location: 'Central Valley, CA',
    type: 'farmland',
    area: 217800,
    images: [
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Irrigation Access', 'Fertile Soil', 'Road Access', 'Water Rights', 'Equipment Storage'],
    featured: false,
    status: 'available',
    coordinates: { lat: 36.7378, lng: -119.7871 },
    agent: {
      name: 'David Rodriguez',
      phone: '+1 (555) 345-6789',
      email: 'david@realestate.com'
    }
  },
  {
    id: '4',
    title: 'Prime Development Land',
    description: '15-acre plot of land in a rapidly developing area, perfect for residential or commercial development. Excellent investment opportunity with high growth potential.',
    price: 750000,
    location: 'Austin, TX',
    type: 'land',
    area: 653400,
    images: [
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Development Ready', 'Utilities Available', 'Highway Access', 'Zoning Approved', 'Survey Complete'],
    featured: true,
    status: 'available',
    coordinates: { lat: 30.2672, lng: -97.7431 },
    agent: {
      name: 'Lisa Thompson',
      phone: '+1 (555) 456-7890',
      email: 'lisa@realestate.com'
    }
  },
  {
    id: '5',
    title: 'Cozy Family Home',
    description: 'Charming 3-bedroom family home in a quiet neighborhood, featuring a large backyard, updated kitchen, and plenty of natural light throughout.',
    price: 385000,
    location: 'Portland, OR',
    type: 'house',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Large Backyard', 'Updated Kitchen', 'Hardwood Floors', 'Garage', 'Near Schools'],
    featured: false,
    status: 'available',
    coordinates: { lat: 45.5152, lng: -122.6784 },
    agent: {
      name: 'Robert Wilson',
      phone: '+1 (555) 567-8901',
      email: 'robert@realestate.com'
    }
  },
  {
    id: '6',
    title: 'Penthouse Suite',
    description: 'Luxurious penthouse with 360-degree city views, featuring 3 bedrooms, premium finishes, private terrace, and exclusive building amenities.',
    price: 1200000,
    location: 'Miami, FL',
    type: 'flat',
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
    images: [
      'https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Ocean View', 'Private Terrace', 'Concierge', 'Valet Parking', 'Rooftop Pool'],
    featured: true,
    status: 'available',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    agent: {
      name: 'Amanda Davis',
      phone: '+1 (555) 678-9012',
      email: 'amanda@realestate.com'
    }
  }
];