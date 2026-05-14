import React, { useState } from 'react';
import { 
  Heart, Activity, Users, Shield, Palette, 
  CheckCircle, Mail, Phone, MapPin, Menu, X, 
  ArrowRight, Award, Briefcase, ChevronRight, Sparkles, Send, Loader2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Corporate Yoga',
    message: ''
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('loading');
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setBookingStatus('success');
        setTimeout(() => {
          setIsBookingModalOpen(false);
          setBookingStatus('idle');
          setFormData({ name: '', email: '', service: 'Corporate Yoga', message: '' });
        }, 3000);
      } else {
        setBookingStatus('error');
      }
    } catch (error) {
      console.error("Booking error:", error);
      setBookingStatus('error');
    }
  };

  const services = [
    { title: "Corporate Yoga", Icon: Users, desc: "Tailored sessions to improve posture, reduce workplace stress, and boost employee productivity." },
    { title: "Panchkarma Therapy", Icon: Activity, desc: "Traditional detox and rejuvenation therapies for deep healing and relaxation." },
    { title: "Zumba & Dance", Icon: Heart, desc: "High-energy, fun fitness sessions perfect for team building and physical health." },
    { title: "Self-Defense", Icon: Shield, desc: "Empowering workshops focused on personal safety, awareness, and confidence." },
    { title: "Creative Expression", Icon: Palette, desc: "Sketch art and creative classes to stimulate the right brain and relieve mental fatigue." },
    { title: "Holistic Healing", Icon: Award, desc: "Acupressure, Pranic Healing, and Naturopathy for comprehensive well-being." },
  ];

  const clients = [
    "Tech Mahindra Pvt. Ltd.",
    "Infosys, Gurgaon",
    "Amu Leasing Pvt. Ltd.",
    "Coorohealth Infotech",
    "Rexxam Dixon Electronics",
    "Mozaiq Automation",
    "Apertum Online Pvt. Ltd."
  ];

  return (
    <div className="font-sans text-gray-800 bg-orange-50/30 min-h-screen">
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              {/* Replace with actual logo image */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  DA
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-900 leading-tight">Dev Aarogyam</h1>
                  <p className="text-xs text-orange-600 font-semibold tracking-wider uppercase">Yoga & Wellness</p>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Services</a>
              <a href="#corporate" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Corporate Portfolio</a>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2.5 rounded-full font-medium hover:from-orange-600 hover:to-yellow-600 transition-all shadow-sm"
              >
                Book a Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
            <a href="#about" onClick={toggleMenu} className="block text-gray-600 font-medium py-2">About Us</a>
            <a href="#services" onClick={toggleMenu} className="block text-gray-600 font-medium py-2">Services</a>
            <a href="#corporate" onClick={toggleMenu} className="block text-gray-600 font-medium py-2">Corporate Portfolio</a>
            <button 
              onClick={() => { setIsBookingModalOpen(true); toggleMenu(); }}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center px-4 py-3 rounded-md font-medium mt-4"
            >
              Book a Session
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4 border border-orange-100">
                  Holistic Wellness & Creative Expression
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                  <span className="block xl:inline">Elevate your team's</span>{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">health & productivity</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Evidence-based yoga, mindfulness, and alternative healing practices customized for corporate environments. Empowering individuals towards holistic wellness and inner peace.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <button 
                      onClick={() => setIsBookingModalOpen(true)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 md:py-4 md:text-lg md:px-10 transition-all shadow-md hover:shadow-lg"
                    >
                      Transform Your Workplace
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 rounded-md">
                    <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-orange-50 hover:border-orange-200 md:py-4 md:text-lg md:px-10 transition-all">
                      Explore Services
                    </a>
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
            alt="Corporate Yoga Session"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent lg:via-white/20"></div>
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

      {/* About Founder Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-yellow-100 rounded-3xl transform -rotate-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Acharya Gaurav - Founder" 
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Certified</p>
                  <p className="font-bold text-gray-900">Yoga Professional</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">The Expert Behind The Brand</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Acharya Gaurav
              </h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Founder of Dev Aarogyam Yoga, Acharya Gaurav is a holistic wellness expert with over 4 years of experience in yoga instruction and alternative healing practices. Dedicated to promoting well-being through personalized, evidence-based solutions.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Academic Excellence</h4>
                    <p className="mt-1 text-gray-600">Master's Degree from the prestigious University of Patanjali.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Extensive Certifications</h4>
                    <p className="mt-1 text-gray-600">Certified in Acupressure, Pranic Healing, Panchkarma, and Naturopathy Therapist Training (Patanjali Wellness).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Rich Experience</h4>
                    <p className="mt-1 text-gray-600">Formerly associated with Patanjali Yogpeeth, Dharmshala Kendra, providing hands-on instruction in holistic wellness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Our Offerings</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Wellness Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              A unique blend of traditional practices and modern wellness customized for homes, corporates, and schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-50 transition-all">
                  <service.Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Experience Section */}
      <section id="corporate" className="py-20 bg-white">
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
                We have successfully designed and delivered yoga programs tailored specifically to corporate settings, significantly promoting employee well-being, focus, and productivity.
              </p>
              <ul className="space-y-4">
                {clients.map((client, idx) => (
                  <li key={idx} className="flex items-center text-gray-200">
                    <ChevronRight className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
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
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
                  <p className="italic text-lg font-medium">"Engage glutes, stabilize pelvis. Enhance balance, sharpen focus."</p>
                  <p className="mt-2 text-yellow-400 text-sm font-semibold">- Session Core Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-16 text-center max-w-4xl mx-auto border border-orange-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Prioritize Wellness?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Contact us today to tailor a wellness program for your corporate team, school, or personal journey.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600 mt-1">+91 XXXXX XXXXX</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 mt-1">hello@devaarogyam.com</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600 mt-1">Delhi NCR / Gurgaon / Noida</p>
              </div>
            </div>

            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-md transition-all hover:-translate-y-1"
            >
              Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => setIsBookingModalOpen(false)}>
              <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-orange-100">
              <div className="bg-white px-6 pt-6 pb-4 sm:p-8 sm:pb-4">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Enquire for Wellness</h3>
                  <button onClick={() => setIsBookingModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {bookingStatus === 'success' ? (
                  <div className="py-12 text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h4>
                    <p className="text-gray-600">Acharya Gaurav will get back to you shortly to discuss your wellness journey.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Official Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Interested Service</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-no-repeat bg-[right_1rem_center]"
                      >
                        {services.map((s, i) => <option key={i}>{s.title}</option>)}
                        <option>Other / Personalized Session</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Specific Requirements</label>
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="Tell us more about your team or goals..."
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={bookingStatus === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-200/50 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-70"
                    >
                      {bookingStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Callback <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    {bookingStatus === 'error' && (
                       <p className="text-red-500 text-center text-sm font-medium">Something went wrong. Please try again or contact us directly.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                DA
              </div>
              <span className="text-white font-bold text-xl">Dev Aarogyam</span>
            </div>
            <p className="text-sm">Empowering individuals towards holistic wellness and inner peace through evidence-based yoga and complementary therapies.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Acharya Gaurav</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Wellness Services</a></li>
              <li><a href="#corporate" className="hover:text-yellow-400 transition-colors">Corporate Clients</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Business</h4>
            <p className="text-sm mb-2">Providing programs across homes, corporates, and schools.</p>
            <p className="text-sm">© {new Date().getFullYear()} Dev Aarogyam Yoga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}