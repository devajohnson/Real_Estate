import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Tag } from 'lucide-react';
import { Property } from '../../types/Property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      house: 'House',
      flat: 'Apartment',
      land: 'Land',
      farmland: 'Farmland'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      house: 'bg-blue-100 text-blue-800',
      flat: 'bg-green-100 text-green-800',
      land: 'bg-orange-100 text-orange-800',
      farmland: 'bg-emerald-100 text-emerald-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/property/${property.id}`}>
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          {property.featured && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
              Featured
            </div>
          )}
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-semibold ${getTypeColor(property.type)}`}>
            {getTypeLabel(property.type)}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/property/${property.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            {property.bedrooms && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </div>
          <Link
            to={`/property/${property.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;