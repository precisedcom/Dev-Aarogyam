import React, { useState, useEffect } from 'react';
import { 
  Heart, Activity, Users, Shield, Palette, 
  Quote,
  CheckCircle, ArrowRight, Award, Briefcase, ChevronRight, Sparkles, Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWellnessTip } from '../services/geminiService';
import { useBookingModal } from '../context/BookingModalContext';

export default function Home() {
  const { openBookingModal } = useBookingModal();
  const [dailyTip, setDailyTip] = useState<string>('');
  const [isTipLoading, setIsTipLoading] = useState(true);

  useEffect(() => {
    async function fetchTip() {
      setIsTipLoading(true);
      const tip = await getWellnessTip();
      setDailyTip(tip);
      setIsTipLoading(false);
    }
    fetchTip();
  }, []);

  const services = [
    { title: "Yoga Professional", Icon: Users, desc: "Hatha, Ashtanga, and Therapeutic Yoga for holistic healing." },
    { title: "Zumba Professional", Icon: Heart, desc: "High-energy cardio and dance fitness sessions." },
    { title: "Dance Professional", Icon: Palette, desc: "Bollywood, Freestyle, and professional Choreography." },
    { title: "Gym & Fitness", Icon: Activity, desc: "Strength, Conditioning, and Weight Management with personal training." },
  ];

  const team = [
    { name: "Acharya Gaurav", role: "Founder & Yoga Expert" },
    { name: "Acharya Neha", role: "Yoga & Wellness Guide" },
    { name: "Acharya Sangeeta", role: "Meditation Specialist" },
    { name: "Acharya Rashmi", role: "Hatha Yoga Expert" },
    { name: "Acharya Naveen", role: "Ashtanga Practitioner" },
    { name: "Acharya Jyoti ji", role: "Medical Yoga Expert" },
  ];

  const clients = [
    "Tech Mahindra Pvt. Ltd., Noida Sector 62",
    "Amu Leasing Pvt. Ltd., Gurgaon",
    "Infosys, Gurgaon (Admiral Group Building 6B)",
    "Coorohealth Infotech Pvt. Ltd.",
    "Rexxam Dixon Electronics Pvt. Ltd., B18 Phase 2, Noida",
    "Mozaiq Automation",
    "Apertum Online Pvt. Ltd."
  ];

  const testimonials = [
    {
      name: "Neha Sharma",
      company: "HR Manager, Tech Mahindra",
      quote: "The corporate yoga sessions have significantly improved our team's productivity and mental focus. The trainers are exceptionally professional.",
    },
    {
      name: "Rajesh Gupta",
      company: "Director, Coorohealth",
      quote: "Dev Aarogyam's personalized meditation techniques are life-changing. Highly recommended for busy executives dealing with high-stress environments.",
    },
    {
      name: "Anjali Verma",
      company: "Principal, Little Angels School",
      quote: "Our students are more disciplined and calm since we started the kids' wellness program with Acharya Gaurav. The posture correction tips are great.",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4 border border-orange-100">
                  5 Years of Holistic Excellence in Delhi NCR
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                  <span className="block xl:inline">Elevate your</span>{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Wellness Journey</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Professional Yoga, Zumba, and Diet Coaching serving Gurgaon, Noida, and South Delhi. Experience 5 years of certified expertise at your home or corporate office.
                  Experience 5 years of certified expertise at your home or corporate office.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <button 
                      onClick={openBookingModal}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 md:py-4 md:text-lg md:px-10 transition-all shadow-md hover:shadow-lg"
                    >
                      Book a Session
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 rounded-md">
                    <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-orange-50 hover:border-orange-200 md:py-4 md:text-lg md:px-10 transition-all">
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Wellness Journey"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent lg:via-white/20"></div>
        </div>
      </section>

      {/* Daily Wellness Tip (AI Powered) */}
      <section className="bg-white py-12 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-orange-100 shadow-sm">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-orange-500 shrink-0">
              <Lightbulb className="w-10 h-10 animate-pulse" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">AI Wellness Wisdom</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              {isTipLoading ? (
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto md:mx-0"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2 mx-auto md:mx-0"></div>
                </div>
              ) : (
                <h4 className="text-2xl font-serif italic text-gray-800 leading-relaxed">
                  "{dailyTip}"
                </h4>
              )}
            </div>
            <button 
              onClick={() => {
                setIsTipLoading(true);
                getWellnessTip().then(setDailyTip).finally(() => setIsTipLoading(false));
              }}
              className="px-6 py-2 bg-white border border-orange-200 text-orange-600 rounded-full font-medium text-sm hover:bg-orange-100 transition-all shadow-sm shrink-0"
            >
              Get New Tip
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/30">
            <div className="md:pr-8">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Sparkles className="w-6 h-6 text-yellow-100"/> Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower individuals towards holistic wellness and inner peace through yoga and complementary therapies.
              </p>
            </div>
            <div className="md:pl-8 pt-8 md:pt-0">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Heart className="w-6 h-6 text-yellow-100"/> Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To provide transformative experiences, fostering a community that cultivates physical, mental, and spiritual well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Service Portal</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-12">Holistic Health Solutions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left hover:shadow-md transition-all">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                  <service.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="inline-flex items-center text-orange-600 font-bold hover:gap-2 transition-all">
            View All Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Team Preview */}
      <section id="team" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Our Guides</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 italic">Acharya Excellence Team</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            {team.map((member, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-orange-50/50 border border-orange-100 hover:bg-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-orange-500 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">{member.name}</h4>
                <p className="text-[10px] text-orange-600 font-semibold uppercase">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
             <Link to="/team" className="text-gray-600 font-medium hover:text-orange-600 transition-colors">Meet the full team →</Link>
          </div>
        </div>
      </section>

      {/* Corporate Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl lg:flex">
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-4">
                <Briefcase className="w-5 h-5" />
                <span>Corporate Wellness Programs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We have successfully designed and delivered yoga programs tailored specifically to corporate settings in Delhi NCR.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {clients.map((client, idx) => (
                  <li key={idx} className="flex items-center text-gray-200 text-sm">
                    <ChevronRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate Yoga" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent lg:bg-gradient-to-l lg:from-gray-900"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl font-extrabold text-gray-900">Stories of Transformation</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-orange-50/30 p-8 rounded-[2.5rem] border border-orange-100 relative flex flex-col h-full">
                <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-sm text-orange-500 border border-orange-100">
                  <Quote className="w-6 h-6 fill-orange-500" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-8 grow">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 border border-orange-100 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Start Your Wellness Transformation</h2>
           <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
             Whether at home, office, or online — get certified expert guidance.
           </p>
           <button 
            onClick={openBookingModal}
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-orange-200/50 transition-all hover:-translate-y-1"
           >
             Book Session Now <ArrowRight className="ml-2 w-5 h-5" />
           </button>
        </div>
      </section>
    </>
  );
}
