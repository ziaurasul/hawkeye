import React, { useState } from 'react';
import { 
  Shield, 
  Sun, 
  Wifi, 
  Monitor, 
  Tv, 
  Lock, 
  Smartphone,
  Settings,
  Camera,
  Battery,
  Router,
  Globe,
  Play,
  Fingerprint,
  Home,
  Wrench,
  Zap,
  Eye,
  Server,
  Satellite
} from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Camera,
      title: 'CCTV Surveillance Systems',
      description: 'Professional CCTV installations with cutting-edge technology for complete security coverage of your property.',
      features: ['4K Ultra HD Cameras', 'AI Motion Detection', 'Night Vision Technology', 'Remote Mobile Monitoring', 'Cloud Storage & Backup', 'Professional Installation'],
      price: 'Starting from PKR 25,000',
      popular: false,
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Sun,
      title: 'Solar Energy Solutions',
      description: 'Eco-friendly solar power systems designed to reduce electricity bills and provide sustainable energy solutions.',
      features: ['High-Efficiency Panels', 'Pure Sine Wave Inverters', 'Lithium Battery Storage', 'Grid-Tie Systems', 'Net Metering Support', '25-Year Warranty'],
      price: 'Starting from PKR 150,000',
      popular: true,
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Network,
      title: 'Network Solutions',
      description: 'Complete network infrastructure solutions for homes and businesses with enterprise-grade equipment.',
      features: ['LAN/WAN Configuration', 'Enterprise WiFi Setup', 'Network Security', 'Fiber Optic Installation', 'Managed Switches', 'VPN Configuration'],
      price: 'Starting from PKR 15,000',
      popular: false,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Satellite,
      title: 'Internet Service Provider',
      description: 'Ultra-fast internet connectivity with dedicated bandwidth and unlimited data packages for all your needs.',
      features: ['Fiber Internet up to 100Mbps', 'Dedicated IP Addresses', 'Business Packages', 'Unlimited Data Plans', '99.9% Uptime Guarantee', '24/7 Technical Support'],
      price: 'Starting from PKR 3,000/month',
      popular: true,
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Play,
      title: 'IPTV Subscription Services',
      description: 'Premium IPTV services with thousands of channels, movies, and sports content in crystal clear quality.',
      features: ['1000+ HD/4K Channels', 'Latest Movies & Series', 'Live Sports Coverage', 'Multi-Device Support', 'International Content', 'Electronic Program Guide'],
      price: 'Starting from PKR 2,500/month',
      popular: false,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Fingerprint,
      title: 'Access Control Systems',
      description: 'Advanced access control systems with biometric authentication and smart card technology for maximum security.',
      features: ['Fingerprint Scanners', 'RFID Card Access', 'Face Recognition', 'Time Attendance System', 'Mobile App Control', 'Detailed Audit Reports'],
      price: 'Starting from PKR 35,000',
      popular: false,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Home,
      title: 'Smart Home Integration',
      description: 'Transform your home into a smart home with automated lighting, climate control, and security systems.',
      features: ['Smart Lighting Control', 'Climate Automation', 'Voice Assistant Integration', 'Mobile App Control', 'Energy Monitoring', 'Custom Scene Programming'],
      price: 'Starting from PKR 50,000',
      popular: true,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Technical Support & Maintenance',
      description: 'Professional maintenance and support services to keep all your systems running at peak performance.',
      features: ['24/7 Emergency Support', 'Preventive Maintenance', 'System Health Monitoring', 'Remote Diagnostics', 'Firmware Updates', 'Performance Optimization'],
      price: 'Starting from PKR 5,000/month',
      popular: false,
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gray-500 to-slate-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center animate-pulse-glow">
                <Settings className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold gradient-text animate-neon-flicker">
                Our Services
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center animate-pulse-glow">
                <Zap className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive technology solutions tailored to meet your security, energy, and connectivity needs across Pakistan
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative card-hover futuristic-border rounded-3xl overflow-hidden transition-all duration-500 ${
                service.popular 
                  ? 'ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/25' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-glow">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 bg-gradient-to-br ${service.gradient} bg-opacity-20 backdrop-blur-sm border border-white/10 neon-glow`}>
                    <service.icon className={`w-10 h-10 text-white group-hover:animate-pulse transition-all duration-300`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${service.gradient} bg-opacity-20 rounded-full border border-white/20`}>
                    <span className="text-white font-bold text-sm">{service.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0 animate-pulse`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a
                    href="https://wa.me/923020777054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white text-sm font-bold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2 energy-pulse`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>Get Quote</span>
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-20 animate-pulse-glow`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20">
          <div className="relative holographic rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse-glow"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full flex items-center justify-center animate-rotate-3d neon-glow">
                  <Server className="w-10 h-10 text-cyan-400 animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 gradient-text">
                Need a Custom Solution?
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                We provide tailored technology solutions to meet your specific requirements. 
                Contact us to discuss your project and get a personalized quote with free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://wa.me/923020777054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/50 energy-pulse overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Eye className="w-6 h-6 mr-3" />
                    Get Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                
                <a 
                  href="mailto:info@hawkeyelhr.com"
                  className="group relative px-10 py-5 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Monitor className="w-6 h-6 mr-3" />
                    Email Quote
                  </span>
                  <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-float"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 left-8 w-10 h-10 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-8 right-4 w-4 h-4 bg-pink-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;