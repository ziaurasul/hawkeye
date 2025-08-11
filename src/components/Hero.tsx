import React from 'react';
import { ArrowRight, Shield, Zap, Network, Star, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900"></div>
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tech Icons Animation */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="animate-bounce" style={{ animationDelay: '0s' }}>
            <Shield className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Zap className="w-12 h-12 text-green-400" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '1s' }}>
            <Network className="w-12 h-12 text-blue-400" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Hawk Eye
          </span>
          <br />
          <span className="text-white">Technology & Trading</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Your Premier Partner in Advanced Security Solutions, Solar Energy, Network Infrastructure & Digital Innovation
        </p>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['CCTV Systems', 'Solar Energy', 'Network Solutions', 'IPTV Services', 'Access Control', 'Smart Homes'].map((tag, index) => (
            <span 
              key={tag}
              className="px-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-full text-cyan-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-400" />
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-blue-400" />
            <span>8+ Years Experience</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
          >
            Get Started Today
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="https://wa.me/923020777054"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            WhatsApp Chat
          </a>
        </div>

        {/* Owner Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Founded & Led by <span className="text-cyan-400 font-semibold">Muhammad Zia Ul Rasool Abbasi</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Professional Technology Solutions Provider
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;