import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe, Shield, Zap, Briefcase, TrendingUp } from 'lucide-react';

const services = [
  { title: 'Strategic Consulting', description: 'Expert strategic planning and implementation.', icon: Briefcase, color: 'bg-blue-500' },
  { title: 'Market Analysis', description: 'Data-driven insights into market trends.', icon: BarChart3, color: 'bg-indigo-500' },
  { title: 'Digital Transformation', description: 'Modernizing operations through cutting-edge tech.', icon: Zap, color: 'bg-purple-500' },
  { title: 'Global Expansion', description: 'Support for entering international markets.', icon: Globe, color: 'bg-green-500' },
  { title: 'Risk Management', description: 'Proactive mitigation of corporate risks.', icon: Shield, color: 'bg-red-500' },
  { title: 'Growth Acceleration', description: 'Optimizing revenue streams for scale.', icon: TrendingUp, color: 'bg-orange-500' },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tailored Solutions</h3>
          <p className="text-lg text-gray-600">Addressing your business needs from every angle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 ${service.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-8 pt-6 border-t border-gray-50">
                <a href="#" className="text-indigo-600 font-bold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More <TrendingUp className="ml-2" size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;