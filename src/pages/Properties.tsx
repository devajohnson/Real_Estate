import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyGrid from '../components/property/PropertyGrid';
import SearchFilters from '../components/property/SearchFilters';

const Properties: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || '');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    let filtered = properties;

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (selectedType) {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    // Filter by location
    if (location.trim()) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by price range
    if (minPrice) {
      filtered = filtered.filter(property => property.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(property => property.price <= parseInt(maxPrice));
    }

    setFilteredProperties(filtered);
  }, [searchTerm, selectedType, location, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Properties for Sale
          </h1>
          <p className="text-lg text-gray-600">
            Discover {properties.length} premium properties available for sale
          </p>
        </div>

        {/* Search Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          location={location}
          setLocation={setLocation}
        />

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {properties.length} properties
            {selectedType && (
              <span className="ml-1">
                in <span className="font-semibold capitalize">{selectedType}</span> category
              </span>
            )}
          </p>
        </div>

        {/* Property Grid */}
        <PropertyGrid properties={filteredProperties} />
      </div>
    </div>
  );
};

export default Properties;