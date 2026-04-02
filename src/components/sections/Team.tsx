import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const team = [
  { name: 'Sarah Jenkins', role: 'Chief Executive Officer', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/team-1-651e3719-1775153705595.webp' },
  { name: 'Marcus Thorne', role: 'Chief Strategy Officer', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/team-2-35f3b28c-1775153699346.webp' },
  { name: 'David Chen', role: 'Creative Director', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/team-3-ecfa897b-1775153698959.webp' },
  { name: 'Elena Rodriguez', role: 'Chief Operations Officer', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/team-4-49a33e84-1775153699433.webp' },
];

const Team = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Our Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">The Minds Behind VantageCorp</h3>
          </div>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">Join Our Team</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <Globe size={18} />
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <Mail size={18} />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-indigo-400 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;