import React from 'react';
import { 
  Users, Heart, Palette, Activity, Shield, Briefcase, 
  Sparkles, Award, MapPin, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookingModal } from '../context/BookingModalContext';

export default function Services() {
  const { openBookingModal } = useBookingModal();
  const services = [
    { title: "Yoga Professional", Icon: Users, desc: "Mastering Hatha, Ashtanga, and Therapeutic Yoga for deep internal balance and physical flexibility.", category: "Core Wellness" },
    { title: "Zumba Professional", Icon: Heart, desc: "High-energy cardiovascular workouts combining latin dance and fitness for weight loss and joy.", category: "Fitness" },
    { title: "Dance Professional", Icon: Palette, desc: "Professional training in Bollywood, Freestyle, and structured Choreography for all ages.", category: "Expression" },
    { title: "Gym Professional", Icon: Activity, desc: "Scientific approach to Gym training, strength conditioning, and personalized muscle management.", category: "Fitness" },
    { title: "Self-Defense Training", Icon: Shield, desc: "Practical safety techniques and awareness training for kids, women, and adults in the city.", category: "Safety" },
    { title: "Corporate Wellness", Icon: Briefcase, desc: "Specialized desk yoga, mindfulness sessions, and ergonomic workshops for high-stress workspaces.", category: "Corporate" },
    { title: "Personalized Diet & Nutrition", Icon: Sparkles, desc: "Satvik and modern nutritional planning for weight management and therapeutic support.", category: "Nutrition" },
    { title: "Kids & School Programs", Icon: Award, desc: "Physical education, concentration yoga, and posture correction programs for growing children.", category: "Educational" },
    { title: "Senior Citizen Wellness", Icon: Heart, desc: "Light mobility exercises, joint care, and breathing techniques tailored for the elderly.", category: "Community" },
    { title: "Prenatal & Postnatal Care", Icon: Activity, desc: "Gentle and specialized support for mothers-to-be and new mothers for recovery and health.", category: "Special Support" },
    { title: "Home & Online Coaching", Icon: MapPin, desc: "The convenience of 1-on-1 personal training available both physically and virtually.", category: "Flexible" },
  ];

  return (
    <div className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Service Portal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive wellness solutions designed for the modern lifestyle in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                  <service.Icon className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-50 px-3 py-1 rounded-full">{service.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <button 
                onClick={openBookingModal}
                className="inline-flex items-center text-orange-600 font-bold group-hover:gap-2 transition-all cursor-pointer"
              >
                Book This Service <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6">How We Deliver</h2>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                We understand the constraints of time and distance. Our specialists reach you exactly where you are most comfortable.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 {["Home Sessions", "Corporate Offices", "Virtual Classrooms"].map((mode, i) => (
                   <div key={i} className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-2xl font-bold text-sm">
                     {mode}
                   </div>
                 ))}
              </div>
           </div>
           <div className="flex-1 w-full lg:w-auto relative z-10">
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                    <h4 className="text-4xl font-black mb-2 italic">Delhi</h4>
                    <p className="text-xs uppercase tracking-widest text-orange-100">Regional Core</p>
                 </div>
                 <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                    <h4 className="text-4xl font-black mb-2 italic">NCR</h4>
                    <p className="text-xs uppercase tracking-widest text-orange-100">Gurgaon • Noida</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
