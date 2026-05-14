import React from 'react';
import { Apple, Leaf, Utensils, Heart, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';

export default function Nutrition() {
  const { openBookingModal } = useBookingModal();
  const categories = [
    { 
      title: "Weight Management Diet", 
      desc: "Customized meal plans for sustainable weight loss or muscle gain focusing on metabolic health.",
      icon: Zap
    },
    { 
      title: "Therapeutic Nutrition", 
      desc: "Diets specifically designed for Diabetes, Thyroid, and Hypertension (High BP) management.",
      icon: Heart
    },
    { 
      title: "Satvik & Natural Diet", 
      desc: "Shuddh and prakritik aahar featuring natural proteins, seeds, sprouts, and traditional grains.",
      icon: Leaf
    },
    { 
      title: "Corporate Meal Planning", 
      desc: "Quick and healthy tiffin options and nutritious snack ideas for busy office professionals.",
      icon: Utensils
    },
    { 
      title: "Kids & Sports Nutrition", 
      desc: "High-energy nutrition for growing children and athletes to fuel performance and development.",
      icon: Apple
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover" 
            alt="Healthy Food"
          />
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
           <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Yogic Diet & Nutrition</h1>
           <p className="text-xl md:text-2xl text-orange-200 font-serif italic max-w-2xl mx-auto font-medium">
             "As is the food, so is the mind."
           </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Shuddh Aahar</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Bridging Ancient Wisdom with Modern Nutrition</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                At Dev Aarogyam, we believe that nutrition is 70% of your wellness journey. Our diet experts combine the principles of 'Swasthavritta' (natural living) with modern nutritional science to help you achieve your goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-2">Natural Proteins</h4>
                    <p className="text-xs text-gray-500">Sprouts, seeds, and pulses for sustainable energy.</p>
                 </div>
                 <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                    <h4 className="font-bold text-gray-900 mb-2">Customized Plans</h4>
                    <p className="text-xs text-gray-500">Tailored to your specific body type (Doshas).</p>
                 </div>
              </div>
              <button 
                onClick={openBookingModal}
                className="mt-10 inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-orange-200/50 transition-all hover:-translate-y-1"
               >
                 Get Your Diet Plan <ArrowRight className="ml-2 w-5 h-5" />
               </button>
           </div>
           <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
              <h4 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">Our Methodology</h4>
              <ul className="space-y-6">
                 {[
                   "Thorough Body Assessment",
                   "Metabolic Rate Tracking",
                   "Satvik Meal Substitutions",
                   "Weekly Review & Adjustments",
                   "Mindful Eating Guidance"
                 ].map((step, i) => (
                   <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 font-bold shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all border border-orange-100">
                        {i + 1}
                      </div>
                      <span className="font-bold text-gray-700">{step}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h3 className="text-3xl font-extrabold text-gray-900">Dietary Categories</h3>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {categories.map((cat, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-500 group-hover:text-white transition-all">
                     <cat.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{cat.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{cat.desc}</p>
               </div>
             ))}
             <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-10 rounded-[3rem] text-white flex flex-col justify-center items-center text-center">
                <CheckCircle className="w-12 h-12 mb-6" />
                <h4 className="text-2xl font-bold mb-4 italic">Geeta Gyan Integration</h4>
                <p className="text-sm text-orange-100">Spiritual wisdom applied to physical nourishment.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
