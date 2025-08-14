import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Zap, Network, Star, Users, Award, Eye, Cpu, Wifi, Camera, Sun } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 animate-pulse-glow"></div>
        
        {/* Cyber Grid Pattern */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Floating Particles System */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent animate-matrix-rain"
              style={{
                left: `${i * 5}%`,
                height: '100px',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Scan Line Effect */}
        <div className="scan-line opacity-30"></div>

        {/* Interactive Mouse Glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Tech Icons with 3D Animation */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="animate-float animate-rotate-3d" style={{ animationDelay: '0s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 neon-glow">
              <Shield className="w-10 h-10 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div className="animate-float animate-rotate-3d" style={{ animationDelay: '0.5s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-400/30 neon-glow">
              <Sun className="w-10 h-10 text-green-400 animate-pulse" />
            </div>
          </div>
          <div className="animate-float animate-rotate-3d" style={{ animationDelay: '1s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 neon-glow">
              <Network className="w-10 h-10 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Main Heading with Glitch Effect */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
            <span className="glitch gradient-text animate-neon-flicker" data-text="Hawk Eye">
              Hawk Eye
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            <span className="text-white">Technology & </span>
            <span className="gradient-text">Trading</span>
          </h2>
        </div>

        {/* Enhanced Subtitle with Typing Effect */}
        <div className="mb-12">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Your Premier Partner in Advanced Security Solutions, Solar Energy, Network Infrastructure & Digital Innovation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full animate-pulse-glow"></div>
        </div>

        {/* Animated Service Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { name: 'CCTV Systems', icon: Camera, color: 'from-red-500 to-pink-500' },
            { name: 'Solar Energy', icon: Sun, color: 'from-yellow-500 to-orange-500' },
            { name: 'Network Solutions', icon: Network, color: 'from-blue-500 to-cyan-500' },
            { name: 'IPTV Services', icon: Cpu, color: 'from-purple-500 to-indigo-500' },
            { name: 'Access Control', icon: Shield, color: 'from-green-500 to-emerald-500' },
            { name: 'Smart Homes', icon: Wifi, color: 'from-teal-500 to-cyan-500' }
          ].map((tag, index) => (
            <div 
              key={tag.name}
              className={`group px-6 py-3 bg-gradient-to-r ${tag.color} bg-opacity-10 border border-opacity-30 rounded-full backdrop-blur-sm hover:bg-opacity-20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-fadeInUp energy-pulse`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-2">
                <tag.icon className="w-4 h-4 text-cyan-300 group-hover:text-white transition-colors" />
                <span className="text-cyan-300 group-hover:text-white text-sm font-medium transition-colors">
                  {tag.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
              <Star className="w-6 h-6 text-yellow-400 fill-current animate-pulse" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-gray-400">Customer Rating</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
              <Users className="w-6 h-6 text-green-400 animate-pulse" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
              <Award className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
          <button 
            onClick={scrollToContact}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 rounded-2xl font-bold text-white text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/50 energy-pulse overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get Started Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          <a 
            href="https://wa.me/923020777054"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/50 overflow-hidden"
          >
            <span className="relative z-10">WhatsApp Chat</span>
            <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>

        {/* Enhanced Owner Info with Holographic Effect */}
        <div className="holographic rounded-3xl p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full flex items-center justify-center animate-pulse-glow">
              <Eye className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-gray-300 text-lg">
                Founded & Led by
              </p>
              <p className="text-2xl font-bold gradient-text">
                Muhammad Zia Ul Rasool Abbasi
              </p>
              <p className="text-cyan-400 text-sm font-medium">
                Professional Technology Solutions Provider
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-xl font-bold text-cyan-400">750+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">25+</div>
              <div className="text-xs text-gray-400">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-8 h-12 border-2 border-cyan-400 rounded-full p-1 mb-2 neon-glow">
            <div className="w-2 h-4 bg-cyan-400 rounded-full mx-auto animate-pulse"></div>
          </div>
          <span className="text-cyan-400 text-xs font-medium">Scroll Down</span>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        <a
          href="https://wa.me/923020777054"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;