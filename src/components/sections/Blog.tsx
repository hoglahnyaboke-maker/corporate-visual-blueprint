import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  { title: 'The Future of AI in Corporate Strategy', excerpt: 'How AI is reshaping decision making.', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fbaced68-0046-4479-bea7-9c1fb394d1e9/blog-1-f0b1bf10-1775153706906.webp', date: 'Oct 12, 2023', author: 'Sarah Jenkins', category: 'Technology' },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = blogPosts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 mb-4 uppercase tracking-widest">Insights</h2>
            <h3 className="text-4xl font-bold text-gray-900">Thought Leadership</h3>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search..." className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <motion.article key={i} className="border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h4>
                <p className="text-gray-600 mb-8">{post.excerpt}</p>
                <a href="#" className="flex items-center font-bold text-indigo-600">Read More <ArrowRight size={18} className="ml-2" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;