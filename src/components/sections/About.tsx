import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Market Leaders', icon: Award },
    { label: 'Global Team', icon: Users },
    { label: 'Innovative Tech', icon: Rocket },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/about-us-763b3822-1775153699546.webp"
                alt="Our Team"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-600 rounded-2xl -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">About VantageCorp</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Transforming Visions into Global Reality
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2009, VantageCorp has evolved from a boutique consulting firm to a global leader in strategic
              business solutions.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Strategic Business Intelligence & Analysis',
                'Comprehensive Digital Transformation Roadmap',
                'Sustainable Corporate Governance Models',
                'Innovative Change Management Strategies',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-indigo-600 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-indigo-600">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;