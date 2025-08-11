import React, { useState } from 'react';
import { Star, Quote, MapPin, Calendar, ThumbsUp } from 'lucide-react';

const Reviews: React.FC = () => {
  const [selectedService, setSelectedService] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      location: 'Lahore, Punjab',
      service: 'CCTV Systems',
      rating: 5,
      date: '2024-01-15',
      review: 'Excellent CCTV installation by Hawk Eye Technology! The cameras are crystal clear and the mobile app works perfectly. Muhammad Zia and his team were very professional.',
      verified: true
    },
    {
      id: 2,
      name: 'Fatima Khan',
      location: 'Karachi, Sindh',
      service: 'Solar Energy',
      rating: 5,
      date: '2024-01-10',
      review: 'Amazing solar system installation! My electricity bill has reduced by 80%. The team was punctual and the quality of panels is excellent. Highly recommended!',
      verified: true
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      location: 'Islamabad, ICT',
      service: 'Network Solutions',
      rating: 5,
      date: '2024-01-08',
      review: 'Professional network setup for our office. Fast internet speeds and reliable connection. The fiber installation was done perfectly without any issues.',
      verified: true
    },
    {
      id: 4,
      name: 'Ayesha Malik',
      location: 'Faisalabad, Punjab',
      service: 'IPTV Services',
      rating: 4,
      date: '2024-01-05',
      review: 'Great IPTV service with lots of channels. Picture quality is excellent and customer support is responsive. Good value for money.',
      verified: true
    },
    {
      id: 5,
      name: 'Usman Sheikh',
      location: 'Rawalpindi, Punjab',
      service: 'Access Control',
      rating: 5,
      date: '2024-01-03',
      review: 'Fingerprint access control system works flawlessly. Installation was quick and the system is very user-friendly. Great security solution!',
      verified: true
    },
    {
      id: 6,
      name: 'Zainab Ahmed',
      location: 'Multan, Punjab',
      service: 'Smart Home',
      rating: 5,
      date: '2023-12-28',
      review: 'Love my smart home setup! Voice control and mobile app make everything so convenient. The automation features are amazing.',
      verified: true
    },
    {
      id: 7,
      name: 'Hassan Raza',
      location: 'Peshawar, KPK',
      service: 'CCTV Systems',
      rating: 5,
      date: '2023-12-25',
      review: 'Top-notch security cameras installed at our warehouse. Night vision is incredible and motion alerts work perfectly. Excellent service!',
      verified: true
    },
    {
      id: 8,
      name: 'Sadia Iqbal',
      location: 'Sialkot, Punjab',
      service: 'Solar Energy',
      rating: 5,
      date: '2023-12-20',
      review: 'Best investment ever! Solar panels are generating more power than expected. Professional installation and great after-sales support.',
      verified: true
    },
    {
      id: 9,
      name: 'Tariq Mahmood',
      location: 'Gujranwala, Punjab',
      service: 'Internet Services',
      rating: 4,
      date: '2023-12-18',
      review: 'Reliable internet connection with good speeds. Customer service is helpful and technical issues are resolved quickly.',
      verified: true
    },
    {
      id: 10,
      name: 'Nadia Butt',
      location: 'Hyderabad, Sindh',
      service: 'CCTV Systems',
      rating: 5,
      date: '2023-12-15',
      review: 'Fantastic CCTV system for our home. Easy to monitor from anywhere and the recording quality is superb. Highly satisfied!',
      verified: true
    },
    {
      id: 11,
      name: 'Imran Qureshi',
      location: 'Quetta, Balochistan',
      service: 'Network Solutions',
      rating: 5,
      date: '2023-12-12',
      review: 'Professional network infrastructure setup for our business. Improved our productivity significantly. Great technical expertise!',
      verified: true
    },
    {
      id: 12,
      name: 'Rubina Shah',
      location: 'Sargodha, Punjab',
      service: 'Solar Energy',
      rating: 5,
      date: '2023-12-10',
      review: 'Excellent solar installation! The team explained everything clearly and the system is working perfectly. Saving lots on electricity bills.',
      verified: true
    },
    {
      id: 13,
      name: 'Kashif Nadeem',
      location: 'Bahawalpur, Punjab',
      service: 'IPTV Services',
      rating: 4,
      date: '2023-12-08',
      review: 'Good IPTV package with international channels. Streaming quality is stable and setup was hassle-free.',
      verified: true
    },
    {
      id: 14,
      name: 'Farah Noor',
      location: 'Sahiwal, Punjab',
      service: 'Access Control',
      rating: 5,
      date: '2023-12-05',
      review: 'Biometric system is working excellently. Very secure and convenient for our office. Professional installation and training provided.',
      verified: true
    },
    {
      id: 15,
      name: 'Bilal Ahmad',
      location: 'Jhang, Punjab',
      service: 'Smart Home',
      rating: 5,
      date: '2023-12-03',
      review: 'Amazing smart home automation! Lights, fans, and AC all controlled from phone. The convenience is incredible.',
      verified: true
    },
    {
      id: 16,
      name: 'Samina Khatoon',
      location: 'Okara, Punjab',
      service: 'CCTV Systems',
      rating: 5,
      date: '2023-12-01',
      review: 'Very happy with the security camera installation. Clear footage day and night. Professional team and fair pricing.',
      verified: true
    },
    {
      id: 17,
      name: 'Adnan Malik',
      location: 'Sheikhupura, Punjab',
      service: 'Solar Energy',
      rating: 5,
      date: '2023-11-28',
      review: 'Outstanding solar system performance! Generating clean energy and reducing bills significantly. Excellent investment!',
      verified: true
    },
    {
      id: 18,
      name: 'Hina Riaz',
      location: 'Kasur, Punjab',
      service: 'Internet Services',
      rating: 4,
      date: '2023-11-25',
      review: 'Fast and reliable internet service. Good customer support and competitive pricing. Satisfied with the service quality.',
      verified: true
    },
    {
      id: 19,
      name: 'Waqas Ali',
      location: 'Jhelum, Punjab',
      service: 'Network Solutions',
      rating: 5,
      date: '2023-11-22',
      review: 'Excellent network setup for our office. WiFi coverage is perfect throughout the building. Professional and efficient service.',
      verified: true
    },
    {
      id: 20,
      name: 'Saira Batool',
      location: 'Mandi Bahauddin, Punjab',
      service: 'IPTV Services',
      rating: 5,
      date: '2023-11-20',
      review: 'Great IPTV service with HD channels and movies. Easy to use interface and good customer support. Recommended!',
      verified: true
    },
    {
      id: 21,
      name: 'Rizwan Ahmed',
      location: 'Gujrat, Punjab',
      service: 'Access Control',
      rating: 5,
      date: '2023-11-18',
      review: 'Fingerprint access system is working perfectly. Enhanced our office security significantly. Great product and service!',
      verified: true
    },
    {
      id: 22,
      name: 'Kiran Shahzad',
      location: 'Chiniot, Punjab',
      service: 'Smart Home',
      rating: 5,
      date: '2023-11-15',
      review: 'Love the smart home features! Automated lighting and climate control make life so much easier. Excellent installation!',
      verified: true
    }
  ];

  const services = [
    'all',
    'CCTV Systems',
    'Solar Energy',
    'Network Solutions',
    'Internet Services',
    'IPTV Services',
    'Access Control',
    'Smart Home'
  ];

  const filteredReviews = selectedService === 'all' 
    ? reviews 
    : reviews.filter(review => review.service === selectedService);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Customer </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See what our satisfied customers across Pakistan are saying about our services
          </p>
          
          {/* Overall Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-cyan-400 mr-2">
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-400">Based on {totalReviews} reviews</p>
            </div>
            
            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((count, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400 w-8">{5 - index}★</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full"
                      style={{ width: `${(count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-gray-400 w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedService === service
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {service === 'all' ? 'All Services' : service}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.slice(0, 12).map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-cyan-400/50 mb-4" />
              
              {/* Review Content */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                "{review.review}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-500'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-400">({review.rating}/5)</span>
              </div>
              
              {/* Customer Info */}
              <div className="border-t border-gray-700/50 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  {review.verified && (
                    <div className="flex items-center text-xs text-green-400">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="flex items-center text-xs text-gray-400 mb-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {review.location}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                  <span className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredReviews.length > 12 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Load More Reviews
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Happy Customers!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the same quality service that has earned us 500+ satisfied customers across Pakistan.
            </p>
            <a 
              href="https://wa.me/923020777054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/25"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;