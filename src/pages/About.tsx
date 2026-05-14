import React from 'react';
import { CheckCircle, Award, Briefcase, Heart, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About Dev Aarogyam</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
              "Shuddh Aahar • Shuddh Vichar"
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform -rotate-2 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Acharya Gaurav" 
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-orange-50">
                <div className="bg-orange-500 p-4 rounded-full text-white">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Founder & Chief Guide</p>
                   <p className="text-xl font-black text-gray-900">Acharya Gaurav</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Dedicated to Wellness</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Meet Acharya Gaurav</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Acharya Gaurav is a holistic wellness expert with over 5 years of dedicated experience in yoga instruction and alternative healing practices. His journey into yoga began with a profound desire to understand the intersection of ancient wisdom and modern physical health.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0 border border-orange-100">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h4>
                    <p className="text-gray-600">Master's Degree from the prestigious University of Patanjali, specializing in Yogic Sciences and Holistic Health.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0 border border-orange-100">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Multifaceted Specialist</h4>
                    <p className="text-gray-600">Extensive certification in Acupressure, Pranic Healing, Panchkarma, and Naturopathy from Patanjali Wellness.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0 border border-orange-100">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Vast Experience</h4>
                    <p className="text-gray-600">Formerly associated with Patanjali Yogpeeth, Dharmshala Kendra, providing hands-on instruction to thousands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-orange-400">Authenticity</h4>
              <p className="text-gray-400 leading-relaxed italic">
                We bridge the gap between traditional yogic scriptures and contemporary fitness needs, ensuring every session is rooted in genuine wisdom.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-orange-400">Personalization</h4>
              <p className="text-gray-400 leading-relaxed italic">
                Every body is different. We believe in tailored wellness plans that respect individual limits while pushing towards meaningful growth.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-orange-400">Integrity</h4>
              <p className="text-gray-400 leading-relaxed italic">
                Our practices are evidence-based and holistic, focusing on long-term sustainability rather than quick temporary fixes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
