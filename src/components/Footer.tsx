import React from 'react';
import { Eye, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'CCTV Systems',
    'Solar Energy',
    'Network Solutions',
    'High-Speed Internet',
    'IPTV Subscriptions',
    'Access Control',
    'Smart Home Automation',
    'Technical Support'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Eye className="w-10 h-10 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Hawk Eye</span>
                <span className="text-sm block text-cyan-400 -mt-1">Technology & Trading</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Pakistan's trusted technology solutions provider with 8+ years of experience. 
              Specializing in security systems, solar energy, network infrastructure, and smart home automation. 
              Founded and led by Muhammad Zia Ul Rasool Abbasi with 500+ successful installations nationwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="https://wa.me/923020777054" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +92 302 077 7054
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:info@hawkeyelhr.com" 
                   className="text-gray-300 hover:text-cyan-400 transition-colors">
                  info@hawkeyelhr.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <a href="https://hawkeyelhr.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-cyan-400 transition-colors">
                  hawkeyelhr.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mb-12 border border-gray-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transform Your Property Today!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ satisfied customers across Pakistan. Get a free site survey and personalized quote 
              for your security, solar, or network requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923020777054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Free WhatsApp Consultation
              </a>
              <a
                href="mailto:info@hawkeyelhr.com"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Detailed Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Hawk Eye Technology & Trading. All rights reserved. | Serving Pakistan Since 2016
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-xs">
                Founded & Led by Muhammad Zia Ul Rasool Abbasi
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800/50">
            <p className="text-center text-gray-500 text-xs">
              Professional Technology Solutions Provider | CCTV Security Systems | Solar Energy Solutions | 
              Network Infrastructure | Smart Home Automation | Serving Lahore, Karachi, Islamabad & All Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;