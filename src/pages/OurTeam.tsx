import React from 'react';
import { Users, Star, Award, CheckCircle } from 'lucide-react';

export default function OurTeam() {
  const team = [
    { name: "Acharya Gaurav", role: "Founder & Chief Yoga Expert", expertise: "Hatha, Therapeutic Yoga, Naturopathy", bio: "Leading the vision of Dev Aarogyam with 5+ years of experience." },
    { name: "Acharya Neha", role: "Yoga & Wellness Guide", expertise: "Ashtanga, Women's Wellness", bio: "Expert in tailoring sessions for prenatal and postnatal care." },
    { name: "Acharya Sangeeta", role: "Meditation Specialist", expertise: "Dhyana, Mindfulness", bio: "Guides corporate teams through deep relaxation and stress management." },
    { name: "Acharya Rashmi", role: "Hatha Yoga Expert", expertise: "Flexibility, Posture Correction", bio: "Specialized in physical alignment and traditional yogic forms." },
    { name: "Acharya Naveen", role: "Ashtanga Practitioner", expertise: "Vinyasa Flow, Power Yoga", bio: "Focuses on dynamic strength and endurance through yogic flows." },
    { name: "Acharya Jyoti ji", role: "Medical Yoga Expert", expertise: "Therapeutic Yoga, Anatomy", bio: "Deep knowledge in applying yoga for specific medical conditions." },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Excellence Team</h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
             Certified specialists dedicated to your physical and spiritual growth.
           </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group relative">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-50 rounded-[3rem] transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all -z-10"></div>
               <div className="bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                       <Users className="w-8 h-8" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-gray-900">{member.name}</h3>
                       <p className="text-sm text-orange-600 font-bold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                       {member.expertise.split(', ').map((tag, idx) => (
                         <span key={idx} className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold border border-gray-200">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-sm italic">
                    "{member.bio}"
                  </p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-[3rem] p-12 md:p-20 text-white text-center">
           <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-8 h-8 fill-yellow-200 text-yellow-200" />)}
           </div>
           <h2 className="text-3xl md:text-5xl font-black mb-8">Certified Expertise You Can Trust</h2>
           <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl border border-white/20">
                 <CheckCircle className="w-8 h-8 shrink-0" />
                 <p className="font-bold text-sm">Patanjali Certified Masters</p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl border border-white/20">
                 <CheckCircle className="w-8 h-8 shrink-0" />
                 <p className="font-bold text-sm">5+ Years Industry Experience</p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl border border-white/20">
                 <CheckCircle className="w-8 h-8 shrink-0" />
                 <p className="font-bold text-sm">Medical Yoga Specialists</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
