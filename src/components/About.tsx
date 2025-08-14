import React from 'react';
import { Award, Users, Clock, Target, Shield, Zap, CheckCircle, Phone, Eye, Star, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Professional Expertise',
      description: 'Years of experience in technology solutions with certified professionals and industry expertise',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Dedicated to providing exceptional customer service with 500+ satisfied clients across Pakistan',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency services for all installations',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Quality Solutions',
      description: 'Using only premium branded equipment with warranties and following international standards',
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: 'Security Specialist',
      description: 'Expert in CCTV, access control, and comprehensive security solutions',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Solar Energy Expert',
      description: 'Certified solar installer with 100+ successful solar projects',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'All installations come with warranty and regular maintenance support',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Phone,
      title: 'Always Available',
      description: 'Direct access to owner Muhammad Zia for personalized service',
      gradient: 'from-blue-500 to-cyan-600'
    }
  ];

  const certifications = [
    { name: 'Hikvision Certified', icon: Shield },
    { name: 'Dahua Partner', icon: Eye },
    { name: 'Canadian Solar', icon: Zap },
    { name: 'Cisco Networking', icon: Globe },
    { name: 'Ubiquiti Partner', icon: Cpu },
    { name: 'ZKTeco Authorized', icon: Star }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <Eye className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    <span className="text-white">About </span>
                    <span className="gradient-text animate-neon-flicker">Hawk Eye Technology</span>
                  </h2>
                </div>
              </div>
              
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
            </div>
            
            {/* Story Content */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="holographic rounded-2xl p-6">
                <p className="text-lg">
                  Founded and led by <span className="text-cyan-400 font-bold gradient-text">Muhammad Zia Ul Rasool Abbasi</span>, 
                  Hawk Eye Technology & Trading has established itself as a premier provider of comprehensive technology solutions 
                  across Pakistan with over <span className="text-green-400 font-semibold">8 years of industry experience</span>.
                </p>
              </div>
              
              <p className="text-lg">
                We specialize in delivering cutting-edge security systems, sustainable solar energy solutions, 
                advanced network infrastructure, and smart home automation to both residential and commercial clients. 
                Our commitment to excellence and innovation drives us to stay at the forefront of technological advancement.
              </p>
              
              <p>
                With over <span className="text-cyan-400 font-semibold">750 successful installations</span> across Punjab, Sindh, KPK, and Balochistan, we have built lasting 
                relationships with our clients by consistently exceeding expectations. Our solutions include premium brands, 
                comprehensive warranties, and ongoing technical support to ensure maximum satisfaction.
              </p>

              {/* Mission Statement */}
              <div className="relative bg-gradient-to-r from-cyan-400/10 to-blue-400/10 p-6 rounded-2xl border border-cyan-400/30 backdrop-blur-sm energy-pulse">
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                <blockquote className="text-cyan-300 font-medium text-lg italic">
                  "Our mission is to provide cutting-edge technology solutions that enhance security, 
                  reduce energy costs, and improve connectivity for homes and businesses across Pakistan."
                </blockquote>
                <footer className="text-sm text-gray-400 mt-3">
                  - Muhammad Zia Ul Rasool Abbasi, <span className="text-cyan-400">Founder & CEO</span>
                </footer>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="holographic rounded-3xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Phone className="w-6 h-6 text-cyan-400 mr-3 animate-pulse" />
                Get in Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <a href="https://hawkeyelhr.com" target="_blank" rel="noopener noreferrer" 
                       className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      hawkeyelhr.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-400" />
                    <a href="https://wa.me/923020777054" target="_blank" rel="noopener noreferrer"
                       className="text-green-400 hover:text-green-300 transition-colors font-medium">
                      +92 302 077 7054
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    <span className="text-blue-400 font-medium">@hawkeyelhr</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href="mailto:info@hawkeyelhr.com" 
                       className="text-red-400 hover:text-red-300 transition-colors font-medium">
                      info@hawkeyelhr.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Achievements Grid */}
          <div className="space-y-8">
            {/* Main Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group card-hover futuristic-border rounded-2xl p-6 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group card-hover futuristic-border rounded-xl p-5 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <div className="mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.gradient} bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-md font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Trusted Brands & <span className="gradient-text">Certifications</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We partner with industry-leading brands to deliver the highest quality solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group card-hover holographic rounded-2xl p-6 text-center backdrop-blur-sm border border-cyan-400/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 neon-glow">
                    <cert.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="text-cyan-400 font-semibold text-sm group-hover:text-white transition-colors">
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="holographic rounded-3xl p-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse-glow"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 gradient-text">
                Ready to Transform Your Property?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 500+ satisfied customers across Pakistan and experience the difference of professional technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://wa.me/923020777054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-400 hover:via-green-500 hover:to-emerald-500 text-white font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-green-500/50 energy-pulse overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Phone className="w-6 h-6 mr-3" />
                    Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                
                <a 
                  href="mailto:info@hawkeyelhr.com"
                  className="group relative px-10 py-5 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Email Quote
                  </span>
                  <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-cyan-400/20 rounded-full animate-float"></div>
            <div className="absolute top-12 right-12 w-6 h-6 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-6 left-12 w-10 h-10 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-12 right-6 w-4 h-4 bg-pink-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;