import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/hero-bg-d91cd9a8-1775153699181.webp"
          alt="Corporate Office"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
              Innovative Solutions for Modern Business
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your <span className="text-indigo-400">Business</span> to New Heights
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              We empower industry leaders with strategic insights, transformative technology, and operational excellence to navigate the complexities of today's global market.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/services"
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20"
              >
                Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
              <button className="flex items-center justify-center text-white font-bold text-lg hover:text-indigo-400 transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-white/20 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                  <Play size={20} fill="currentColor" />
                </div>
                Watch Brand Film
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Global Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

export default Hero;