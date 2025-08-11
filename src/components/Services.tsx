import React from 'react';
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
  Wrench
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Surveillance Systems',
      description: 'Professional CCTV installations with cutting-edge technology for complete security coverage of your property.',
      features: ['HD/4K Cameras', 'Night Vision Technology', 'Remote Mobile Monitoring', 'Motion Detection Alerts', 'Cloud Storage', 'Professional Installation'],
      price: 'Starting from PKR 25,000',
      popular: false
    },
    {
      icon: Battery,
      title: 'Solar Energy Solutions',
      description: 'Eco-friendly solar power systems designed to reduce electricity bills and provide sustainable energy solutions.',
      features: ['High-Efficiency Panels', 'Pure Sine Wave Inverters', 'Lithium Battery Storage', 'Grid-Tie Systems', 'Net Metering', '25-Year Warranty'],
      price: 'Starting from PKR 150,000',
      popular: true
    },
    {
      icon: Router,
      title: 'Network Solutions',
      description: 'Complete network infrastructure solutions for homes and businesses with enterprise-grade equipment.',
      features: ['LAN/WAN Configuration', 'Enterprise WiFi', 'Network Security', 'Fiber Optic Installation', 'Managed Switches', 'VPN Setup'],
      price: 'Starting from PKR 15,000',
      popular: false
    },
    {
      icon: Globe,
      title: 'Internet Service Provider',
      description: 'Ultra-fast internet connectivity with dedicated bandwidth and unlimited data packages for all your needs.',
      features: ['Fiber Internet up to 100Mbps', 'Dedicated IP Addresses', 'Business Packages', 'Unlimited Data', '99.9% Uptime', '24/7 Technical Support'],
      price: 'Starting from PKR 3,000/month',
      popular: true
    },
    {
      icon: Play,
      title: 'IPTV Subscription Services',
      description: 'Premium IPTV services with thousands of channels, movies, and sports content in crystal clear quality.',
      features: ['1000+ HD/4K Channels', 'Latest Movies & Series', 'Live Sports Coverage', 'Multi-Device Support', 'International Content', 'EPG Guide'],
      price: 'Starting from PKR 2,500/month',
      popular: false
    },
    {
      icon: Fingerprint,
      title: 'Access Control Systems',
      description: 'Advanced access control systems with biometric authentication and smart card technology for maximum security.',
      features: ['Fingerprint Scanners', 'RFID Card Access', 'Face Recognition', 'Time Attendance System', 'Mobile App Control', 'Audit Trail Reports'],
      price: 'Starting from PKR 35,000',
      popular: false
    },
    {
      icon: Home,
      title: 'Smart Home Integration',
      description: 'Transform your home into a smart home with automated lighting, climate control, and security systems.',
      features: ['Smart Lighting Control', 'Climate Automation', 'Voice Assistant Integration', 'Mobile App Control', 'Energy Monitoring', 'Scene Programming'],
      price: 'Starting from PKR 50,000',
      popular: true
    },
    {
      icon: Wrench,
      title: 'Technical Support & Maintenance',
      description: 'Professional maintenance and support services to keep all your systems running at peak performance.',
      features: ['24/7 Emergency Support', 'Preventive Maintenance', 'System Health Monitoring', 'Remote Diagnostics', 'Firmware Updates', 'Performance Optimization'],
      price: 'Starting from PKR 5,000/month',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your security, energy, and connectivity needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm ${
                service.popular 
                  ? 'border-cyan-400/70 shadow-cyan-500/20 shadow-lg' 
                  : 'border-gray-700/50 hover:border-cyan-400/50 hover:shadow-cyan-500/10'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  service.popular 
                    ? 'bg-gradient-to-br from-cyan-400/30 to-blue-500/30' 
                    : 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20'
                }`}>
                  <service.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/923020777054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-500 hover:to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Quote
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We provide tailored technology solutions to meet your specific requirements. 
              Contact us to discuss your project and get a personalized quote.
            </p>
            <a 
              href="https://wa.me/923020777054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;