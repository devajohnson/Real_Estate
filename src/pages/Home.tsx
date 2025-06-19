import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home as HomeIcon, Building, MapPin, Sprout } from 'lucide-react';
import { properties } from '../data/properties';
import PropertyCard from '../components/property/PropertyCard';

const Home: React.FC = () => {
  const featuredProperties = properties.filter(property => property.featured);

  const propertyTypes = [
    {
      type: 'house',
      icon: HomeIcon,
      title: 'Houses',
      description: 'Find your dream home',
      count: properties.filter(p => p.type === 'house').length,
    },
    {
      type: 'flat',
      icon: Building,
      title: 'Apartments',
      description: 'Modern urban living',
      count: properties.filter(p => p.type === 'flat').length,
    },
    {
      type: 'land',
      icon: MapPin,
      title: 'Land',
      description: 'Investment opportunities',
      count: properties.filter(p => p.type === 'land').length,
    },
    {
      type: 'farmland',
      icon: Sprout,
      title: 'Farmland',
      description: 'Agricultural properties',
      count: properties.filter(p => p.type === 'farmland').length,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover premium real estate opportunities from luxury homes to investment properties
          </p>
          <Link
            to="/properties"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Search className="h-5 w-5 mr-2" />
            Explore Properties
          </Link>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Property Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of properties tailored to meet your specific needs and investment goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.type}
                  to={`/properties?type=${category.type}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-2">{category.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{category.count} Properties</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked premium properties that offer exceptional value and unique opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrimeRealty?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you make the best real estate decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Knowledge',
                description: 'Our team has deep market knowledge and years of experience in real estate.',
                icon: '🎯'
              },
              {
                title: 'Personalized Service',
                description: 'We tailor our approach to meet your specific needs and preferences.',
                icon: '👥'
              },
              {
                title: 'Market Insights',
                description: 'Get access to exclusive market data and trends to make informed decisions.',
                icon: '📊'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;