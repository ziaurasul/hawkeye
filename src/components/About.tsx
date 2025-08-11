import React from 'react';
import { Award, Users, Clock, Target, Shield, Zap, CheckCircle, Phone } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Professional Expertise',
      description: 'Years of experience in technology solutions with certified professionals and industry expertise'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Dedicated to providing exceptional customer service with 500+ satisfied clients across Pakistan'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency services for all installations'
    },
    {
      icon: Target,
      title: 'Quality Solutions',
      description: 'Using only premium branded equipment with warranties and following international standards'
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: 'Security Specialist',
      description: 'Expert in CCTV, access control, and comprehensive security solutions'
    },
    {
      icon: Zap,
      title: 'Solar Energy Expert',
      description: 'Certified solar installer with 100+ successful solar projects'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'All installations come with warranty and regular maintenance support'
    },
    {
      icon: Phone,
      title: 'Always Available',
      description: 'Direct access to owner Muhammad Zia for personalized service'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Hawk Eye Technology
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Founded and led by <span className="text-cyan-400 font-semibold">Muhammad Zia Ul Rasool Abbasi</span>, 
                Hawk Eye Technology & Trading has established itself as a premier provider of comprehensive technology solutions 
                across Pakistan with over 8 years of industry experience.
              </p>
              
              <p>
                We specialize in delivering cutting-edge security systems, sustainable solar energy solutions, 
                advanced network infrastructure, and smart home automation to both residential and commercial clients. 
                Our commitment to excellence and innovation drives us to stay at the forefront of technological advancement.
              </p>
              
              <p>
                With over 500 successful installations across Punjab, Sindh, KPK, and Balochistan, we have built lasting 
                relationships with our clients by consistently exceeding expectations. Our solutions include premium brands, 
                comprehensive warranties, and ongoing technical support to ensure maximum satisfaction.
              </p>

              <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 p-4 rounded-lg border-l-4 border-cyan-400">
                <p className="text-cyan-300 font-medium">
                  "Our mission is to provide cutting-edge technology solutions that enhance security, 
                  reduce energy costs, and improve connectivity for homes and businesses across Pakistan."
                </p>
                <p className="text-sm text-gray-400 mt-2">- Muhammad Zia Ul Rasool Abbasi, Founder & CEO</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-400">Website: </span>
                  <a href="https://hawkeyelhr.com" target="_blank" rel="noopener noreferrer" 
                     className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    hawkeyelhr.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Email: </span>
                  <a href="mailto:info@hawkeyelhr.com" 
                     className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    info@hawkeyelhr.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">WhatsApp: </span>
                  <a href="https://wa.me/923020777054" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +92 302 077 7054
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            {/* Main Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
            </div>

            {/* Additional Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-md font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted Brands & <span className="text-cyan-400">Certifications</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Hikvision Certified',
              'Dahua Partner',
              'Canadian Solar',
              'Cisco Networking',
              'Ubiquiti Partner',
              'ZKTeco Authorized'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-cyan-400 font-semibold text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;