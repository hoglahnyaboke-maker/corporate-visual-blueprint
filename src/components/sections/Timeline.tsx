import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { year: '2009', title: 'The Foundation', description: 'VantageCorp was founded in San Francisco.' },
  { year: '2012', title: 'Global Expansion', description: 'Opened offices in London and Singapore.' },
  { year: '2015', title: 'Digital Era', description: 'Launched our Digital Transformation wing.' },
  { year: '2018', title: 'Sustainability First', description: 'Pioneered ESG-focused consulting practices.' },
  { year: '2022', title: 'Industry Leader', description: 'Recognized as Corporate Consultant of the Year.' },
  { year: '2024', title: 'The Future', description: 'Expanding into decentralized business models.' },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our History</h2>
          <h3 className="text-4xl font-bold text-gray-900">A Journey of Innovation</h3>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100 hidden md:block"></div>
          <div className="space-y-12 md:space-y-0">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center md:mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 hidden md:block"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white z-10 hidden md:block shadow-lg"></div>
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 md:px-12">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                    <span className="text-4xl font-black text-indigo-600/20 block mb-2">{event.year}</span>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;