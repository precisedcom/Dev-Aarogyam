import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Corporate Wellness',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    console.log("Attempting to submit contact form:", formData);
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Contact' })
      });
      
      console.log("Server response status:", response.status);
      
      const data = await response.json();
      console.log("Server response data:", data);

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Corporate Wellness', message: '' });
      } else {
        console.error("Submission failed:", data.message);
        setStatus('error');
      }
    } catch (error) {
      console.error("Critical submission error:", error);
      setStatus('error');
    }
  };

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
                           <p className="text-gray-500 font-medium tracking-wide">+91 97737 34200</p>
                           <p className="text-xs text-orange-500 mt-1 uppercase font-bold text-center sm:text-left">Call or WhatsApp</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 mb-1 italic">Email Support</h4>
                           <p className="text-gray-500 font-medium tracking-wide">devarogyamyoga@gmail.com</p>
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
                  
                  {status === 'success' ? (
                    <div className="py-12 text-center">
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Transmitted!</h4>
                      <p className="text-gray-600 mb-8">The details have been sent to devarogyamyoga@gmail.com and saved in our admin report. Acharya Gaurav will respond shortly.</p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="px-8 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                          <div>
                             <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Full Name</label>
                             <input 
                                required
                                type="text" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-300 shadow-inner" 
                                placeholder="e.g. Acharya Neha" 
                             />
                          </div>
                          <div>
                             <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Email Address</label>
                             <input 
                                required
                                type="email" 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-300 shadow-inner" 
                                placeholder="your@email.com" 
                             />
                          </div>
                       </div>
                       <div>
                           <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Inquiry Type</label>
                           <select 
                              value={formData.service}
                              onChange={(e) => setFormData({...formData, service: e.target.value})}
                              className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none text-gray-500 font-medium shadow-inner"
                           >
                              <option>Corporate Wellness</option>
                              <option>Home Yoga Sessions</option>
                              <option>Diet & Nutrition Coaching</option>
                              <option>Online Classes</option>
                              <option>Other / General Inquiry</option>
                           </select>
                       </div>
                       <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Your Message</label>
                          <textarea 
                             required
                             rows={5} 
                             value={formData.message}
                             onChange={(e) => setFormData({...formData, message: e.target.value})}
                             className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-300 shadow-inner" 
                             placeholder="How can we help you achieve your goals?"
                          />
                       </div>
                       
                       <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-6 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 hover:shadow-orange-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70"
                       >
                          {status === 'loading' ? (
                            <>
                              <Loader2 className="w-6 h-6 animate-spin" />
                              Transmitting...
                            </>
                          ) : (
                            <>
                              Transmit Inquiry <Send className="w-6 h-6" />
                            </>
                          )}
                       </button>
                       {status === 'error' && (
                         <p className="text-red-500 text-center font-bold">Failed to send. Please try again later.</p>
                       )}
                    </form>
                  )}
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
