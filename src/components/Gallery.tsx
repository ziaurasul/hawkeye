import React, { useState } from 'react';
import { Camera, Play, ExternalLink, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'CCTV Systems',
      title: 'Residential CCTV Installation',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete home security system with 8 HD cameras'
    },
    {
      id: 2,
      category: 'Solar Energy',
      title: 'Rooftop Solar Installation',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '10KW solar system installation in Lahore'
    },
    {
      id: 3,
      category: 'Network Solutions',
      title: 'Office Network Setup',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enterprise network infrastructure for 50+ users'
    },
    {
      id: 4,
      category: 'CCTV Systems',
      title: 'Commercial Security System',
      image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced surveillance for shopping mall'
    },
    {
      id: 5,
      category: 'Solar Energy',
      title: 'Industrial Solar Farm',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '100KW commercial solar installation'
    },
    {
      id: 6,
      category: 'Smart Home',
      title: 'Smart Home Automation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete home automation with voice control'
    },
    {
      id: 7,
      category: 'Access Control',
      title: 'Biometric Access System',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fingerprint access control for corporate office'
    },
    {
      id: 8,
      category: 'Network Solutions',
      title: 'Fiber Optic Installation',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-speed fiber network deployment'
    },
    {
      id: 9,
      category: 'CCTV Systems',
      title: 'Warehouse Security',
      image: 'https://images.pexels.com/photos/2449453/pexels-photo-2449453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '24/7 monitoring system for logistics center'
    },
    {
      id: 10,
      category: 'Solar Energy',
      title: 'Residential Solar Setup',
      image: 'https://images.pexels.com/photos/9875436/pexels-photo-9875436.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '5KW home solar system with battery backup'
    },
    {
      id: 11,
      category: 'Smart Home',
      title: 'Smart Lighting Control',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Automated lighting system with mobile control'
    },
    {
      id: 12,
      category: 'Network Solutions',
      title: 'WiFi Network Deployment',
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enterprise WiFi coverage for hotel chain'
    }
  ];

  const categories = ['all', 'CCTV Systems', 'Solar Energy', 'Network Solutions', 'Smart Home', 'Access Control'];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Project </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our completed projects and installations across Pakistan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-400/50'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-cyan-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us bring your vision to life with our professional installation and support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/923020777054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
              >
                <Camera className="w-5 h-5 mr-2" />
                Request Site Visit
              </a>
              <a 
                href="mailto:info@hawkeyelhr.com"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get Detailed Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;