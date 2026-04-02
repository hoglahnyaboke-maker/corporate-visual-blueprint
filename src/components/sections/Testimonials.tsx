import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Robert Wilson', company: 'Global Tech', role: 'CEO', content: 'VantageCorp transformed our digital infrastructure. Their strategic insight is unmatched.', stars: 5 },
  { name: 'Amanda Brooks', company: 'Lumina Creative', role: 'Director', content: 'Working with them was a game-changer for our market expansion.', stars: 5 },
  { name: 'Jonathan Miller', company: 'Evergreen Logistics', role: 'Head of Ops', content: 'The efficiency gains were immediate and significant.', stars: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-100 uppercase tracking-widest mb-4">Success Stories</h2>
          <h3 className="text-4xl font-bold text-white">Trusted by Industry Leaders</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="bg-white p-10 rounded-3xl shadow-xl relative">
              <Quote className="absolute top-8 right-8 text-indigo-100" size={40} />
              <div className="flex mb-6">
                {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={18} fill="#4F46E5" className="text-indigo-600" />)}
              </div>
              <p className="text-gray-700 text-lg italic mb-8">"{t.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-indigo-600">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;