import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

const cases = [
  { title: 'Workspace Evolution', client: 'InnoTech Corp', description: 'Transforming an outdated workspace.', before: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/case-before-1-4f84b6ab-1775153699255.webp', after: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/case-after-1-288fc756-1775153699708.webp' },
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Case Studies</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Real Results</h3>
        </div>
        <div className="space-y-24">
          {cases.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                  <motion.div className="absolute inset-0 w-full h-full overflow-hidden border-r-4 border-white z-10" initial={{ width: '50%' }} whileHover={{ width: '10%' }} transition={{ duration: 1.5 }}>
                    <img src={item.before} alt="Before" className="absolute inset-0 w-[800px] h-full object-cover" />
                  </motion.div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-indigo-600 font-bold mb-2 block">{item.client}</span>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h4>
                <p className="text-xl text-gray-600 mb-8">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;