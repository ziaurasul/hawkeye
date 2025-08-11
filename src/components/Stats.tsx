import React, { useState, useEffect } from 'react';

const Stats: React.FC = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0
  });

  const targetCounts = {
    projects: 750,
    clients: 500,
    years: 8,
    cities: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetCounts).map(key => {
      const target = targetCounts[key as keyof typeof targetCounts];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(interval => interval === this));
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      number: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful installations across Pakistan'
    },
    {
      number: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers nationwide'
    },
    {
      number: counts.years,
      suffix: '+',
      label: 'Years Experience',
      description: 'Professional industry experience'
    },
    {
      number: counts.cities,
      suffix: '+',
      label: 'Cities Covered',
      description: 'Service locations nationwide'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  <span className="text-2xl font-semibold text-cyan-400">
                    {stat.suffix}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            '✓ ISO Certified Company',
            '✓ Premium Brand Partners',
            '✓ 2-Year Warranty',
            '✓ 24/7 Emergency Support',
            '✓ Free Site Survey',
            '✓ Professional Installation'
          ].map((badge, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-400/30 rounded-full backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 text-sm"
            >
              <span className="text-cyan-300 font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;