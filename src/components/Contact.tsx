import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi, I'm ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested in: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/923020777054?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'CCTV Surveillance Systems',
    'Solar Energy Solutions',
    'Network Solutions',
    'High-Speed Internet Services',
    'IPTV Subscription Services',
    'Access Control Systems',
    'Smart Home Integration',
    'Technical Support & Maintenance',
    'Custom Technology Solution',
    'Site Survey & Consultation'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      content: '+92 302 077 7054',
      link: 'https://wa.me/923020777054',
      description: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@hawkeyelhr.com',
      link: 'mailto:info@hawkeyelhr.com',
      description: 'Quick response guaranteed'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'hawkeyelhr.com',
      link: 'https://hawkeyelhr.com',
      description: 'Visit our official website'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '24/7 Available',
      link: null,
      description: 'Emergency support included'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your property or upgrade your technology? Contact us today for a free consultation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 text-cyan-400 mr-3" />
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {info.title}
                      </h4>
                      
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <span className="text-cyan-400 font-medium">{info.content}</span>
                      )}
                      
                      <p className="text-gray-400 text-sm mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/923020777054"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                WhatsApp Chat
              </a>
              
              <a
                href="mailto:info@hawkeyelhr.com"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                Send Email
              </a>
            </div>

            {/* Owner Information */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-3">
                Meet the Owner
              </h4>
              <p className="text-cyan-400 font-semibold mb-2">
                Muhammad Zia Ul Rasool Abbasi
              </p>
              <p className="text-gray-400 text-sm">
                Founder & CEO - Hawk Eye Technology & Trading<br/>
                8+ Years Industry Experience
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Certified professional specializing in security systems, solar energy, and network solutions. 
                Direct customer service and quality assurance for every project.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Security Expert', 'Solar Specialist', 'Network Engineer'].map((skill, index) => (
                  <span key={index} className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;