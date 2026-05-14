import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Ready to start your wellness journey? We are here to guide you every step of the way.
           </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
               <div>
                  <h3 className="text-orange-600 font-black uppercase tracking-widest text-xs mb-8">Contact Info</h3>
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 mb-1 italic">Phone Inquiries</h4>
                           <p className="text-gray-500 font-medium tracking-wide">+91 XXXXX XXXXX</p>
                           <p className="text-xs text-orange-500 mt-1 uppercase font-bold">Call or WhatsApp</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 mb-1 italic">Email Support</h4>
                           <p className="text-gray-500 font-medium">hello@devaarogyam.com</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 mb-1 italic">Serving Regions</h4>
                           <p className="text-gray-500 font-medium italic">Delhi, Gurugram, Noida, Faridabad, Ghaziabad</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                  <div className="flex items-center gap-3 mb-4 text-orange-600">
                     <Clock className="w-5 h-5" />
                     <h4 className="font-black uppercase text-xs tracking-widest">Office Hours</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-600 font-medium">
                     <li className="flex justify-between"><span>Mon - Sat:</span> <span>06:00 AM - 08:00 PM</span></li>
                     <li className="flex justify-between"><span>Sunday:</span> <span className="text-orange-500 font-bold uppercase">Rest & Recovery</span></li>
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-2">
               <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-orange-100 border border-orange-50">
                  <h3 className="text-3xl font-black text-gray-900 mb-8">Send a Message</h3>
                  <form className="space-y-8">
                     <div className="grid md:grid-cols-2 gap-8">
                        <div>
                           <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Full Name</label>
                           <input type="text" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-300" placeholder="e.g. Acharya Neha" />
                        </div>
                        <div>
                           <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Email Address</label>
                           <input type="email" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-300" placeholder="your@email.com" />
                        </div>
                     </div>
                     <div>
                         <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Inquiry Type</label>
                         <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none text-gray-500 font-medium">
                            <option>Corporate Wellness</option>
                            <option>Home Yoga Sessions</option>
                            <option>Diet & Nutrition Coaching</option>
                            <option>Online Classes</option>
                            <option>Other / General Inquiry</option>
                         </select>
                     </div>
                     <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Your Message</label>
                        <textarea rows={5} className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-300" placeholder="How can we help you achieve your goals?"></textarea>
                     </div>
                     <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-6 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 hover:shadow-orange-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        Transmit Inquiry <Send className="w-6 h-6" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
         <div className="max-w-7xl mx-auto bg-gray-100 h-96 rounded-[3rem] overflow-hidden relative shadow-inner border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-black uppercase tracking-tighter text-4xl opacity-20 transform -rotate-12 select-none">
               Serving Delhi NCR • Gurgaon • Noida
            </div>
            <div className="absolute bottom-10 left-10 p-8 bg-white rounded-3xl shadow-2xl border border-orange-50 max-w-sm">
               <h4 className="font-black text-gray-900 text-xl mb-2 italic">Regional Activity Zone</h4>
               <p className="text-gray-500 text-sm italic">Our specialists are active across the entire National Capital Region, offering services directly at your doorstep or office.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
