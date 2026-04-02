import React from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Message sent!"); };
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-indigo-600 p-12 text-white">
            <h3 className="text-4xl font-bold mb-8">Let's build something.</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4"><MapPin size={24} /><div><h4 className="font-bold">Our Office</h4><p>123 Business Avenue, SF</p></div></div>
              <div className="flex items-start space-x-4"><Phone size={24} /><div><h4 className="font-bold">Call Us</h4><p>+1 (555) 123-4567</p></div></div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <input required type="text" className="w-full px-4 py-4 bg-gray-50 border rounded-xl" placeholder="Full Name" />
              <input required type="email" className="w-full px-4 py-4 bg-gray-50 border rounded-xl" placeholder="Email Address" />
              <textarea required rows={4} className="w-full px-4 py-4 bg-gray-50 border rounded-xl" placeholder="Message"></textarea>
              <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center">Send Message <Send className="ml-2" size={20} /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;