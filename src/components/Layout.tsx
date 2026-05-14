import React, { useState } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Send, Loader2, CheckCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useBookingModal } from '../context/BookingModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isBookingModalOpen, openBookingModal, closeBookingModal } = useBookingModal();
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Yoga Professional',
    message: ''
  });

  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('loading');
    console.log("Attempting to submit booking:", formData);
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Booking' })
      });
      
      console.log("Server response status:", response.status);
      
      const data = await response.json();
      console.log("Server response data:", data);

      if (data.success) {
        setBookingStatus('success');
        setErrorMsg('');
        setTimeout(() => {
          closeBookingModal();
          setBookingStatus('idle');
          setFormData({ name: '', email: '', service: 'Yoga Professional', message: '' });
        }, 5000);
      } else {
        console.error("Booking failed:", data.message);
        setErrorMsg(data.message || 'Server rejected the request');
        setBookingStatus('error');
      }
    } catch (error: any) {
      console.error("Critical booking submission error:", error);
      setErrorMsg(error.message || 'Network error occurred');
      setBookingStatus('error');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Diet & Nutrition', path: '/nutrition' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-orange-50/30 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-50 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  DA
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-900 leading-tight">Dev Aarogyam</h1>
                  <p className="text-xs text-orange-600 font-semibold tracking-wider uppercase">Yoga & Wellness</p>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`font-medium transition-colors ${location.pathname === link.path ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={openBookingModal}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2.5 rounded-full font-medium hover:from-orange-600 hover:to-yellow-600 transition-all shadow-sm"
              >
                Book Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={toggleMenu}
                className={`block font-medium py-2 ${location.pathname === link.path ? 'text-orange-600' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => { openBookingModal(); toggleMenu(); }}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center px-4 py-3 rounded-md font-medium mt-4 shadow-sm"
            >
              Book a Session
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Booking Modal (Shared) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={closeBookingModal}>
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
          </div>

          <div className="bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 align-middle sm:max-w-lg sm:w-full border border-orange-100 z-[10000] mx-4">
            <div className="bg-white px-6 pt-6 pb-4 sm:p-8 sm:pb-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Enquire for Wellness</h3>
                <button onClick={closeBookingModal} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

                {bookingStatus === 'success' ? (
                  <div className="py-12 text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h4>
                    <p className="text-gray-600">Details have been sent to devarogyamyoga@gmail.com and recorded in our system. Acharya Gaurav will get back to you shortly.</p>
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
                        <option>Yoga Professional</option>
                        <option>Corporate Wellness</option>
                        <option>Zumba & Dance</option>
                        <option>Diet & Nutrition</option>
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
                        placeholder="Tell us more about your goals..."
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
                       <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                         <p className="text-red-600 text-center text-sm font-bold">Error: {errorMsg}</p>
                         <p className="text-red-400 text-center text-[10px] mt-1 font-medium italic">Please contact +91 97737 34200 directly if this persists.</p>
                       </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                DA
              </div>
              <span className="text-white font-bold text-xl">Dev Aarogyam</span>
            </div>
            <p className="text-sm leading-relaxed">
              5 Years of Excellence. Empowering individuals towards holistic wellness through Ancient Geeta Gyan and Modern Science.
            </p>
            <p className="mt-6 text-xs text-orange-500 uppercase tracking-widest font-bold">Shuddh Aahar • Shuddh Vichar</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Our Service Portal</h4>
            <ul className="space-y-3 text-sm">
              <li>Yoga Classes at Home</li>
              <li>Corporate Wellness Programs</li>
              <li>Personalized Diet Coaching</li>
              <li>Gym & Personal Training</li>
              <li>Kids & Senior Wellness</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 97737 34200</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>devarogyamyoga@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Delhi NCR (Gurgaon & Noida)</span>
              </li>
              <li className="pt-2">
                <Link to="/admin" className="text-[10px] text-gray-800 hover:text-orange-500 transition-colors uppercase tracking-widest font-bold">Admin Portal</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-2xl text-white font-black">5 YEARS</div>
              <div className="text-[10px] uppercase tracking-widest text-orange-500">Experience Excellence</div>
            </div>
            <p className="text-xs mt-6">© {new Date().getFullYear()} devAarogyamYoga.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
