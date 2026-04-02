import React from 'react';
import { Check, X } from 'lucide-react';

const tiers = [
  { name: 'Foundation', price: '$2,500', description: 'Perfect for startups.', features: [{ name: 'Market Analysis', included: true }, { name: 'Strategic Roadmap', included: true }, { name: 'Dedicated Consultant', included: false }] },
  { name: 'Growth', price: '$7,500', description: 'Designed for scaling companies.', popular: true, features: [{ name: 'Market Analysis', included: true }, { name: 'Strategic Roadmap', included: true }, { name: 'Dedicated Consultant', included: true }] },
  { name: 'Enterprise', price: 'Custom', description: 'Full-service global solutions.', features: [{ name: 'Market Analysis', included: true }, { name: 'Strategic Roadmap', included: true }, { name: 'Implementation Support', included: true }] },
];

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Pricing & Plans</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-16">Choose the Right Partnership</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border ${tier.popular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-gray-200'} flex flex-col`}>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-black text-gray-900">{tier.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-8">{tier.description}</p>
              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((f, idx) => (
                  <div key={idx} className="flex items-center">
                    {f.included ? <Check size={18} className="text-green-500 mr-3" /> : <X size={18} className="text-gray-300 mr-3" />}
                    <span className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-400'}`}>{f.name}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-xl font-bold ${tier.popular ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-900'}`}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;