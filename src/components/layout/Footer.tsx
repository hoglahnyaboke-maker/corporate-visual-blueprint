import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">VantageCorp</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading the way in innovative corporate solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Share2 size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-400" />
                <span>123 Business Avenue, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>© 2024 VantageCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;