import React, { useEffect, useState } from 'react';
import { ClipboardList, Clock, Mail, User, Phone, CheckCircle, RefreshCcw } from 'lucide-react';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  service: string;
  message: string;
  type: string;
  timestamp: string;
}

export default function Admin() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/enquiries');
      const data = await response.json();
      setInquiries(data.inquiries || []);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 flex items-center gap-3">
              <ClipboardList className="w-8 h-8 text-orange-500" />
              Inquiry Report
            </h1>
            <p className="text-gray-500 mt-2 font-medium">Monitoring all corporate and individual wellness requests.</p>
          </div>
          <button 
            onClick={fetchInquiries}
            className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-2.5 rounded-full font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all shadow-sm"
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl shadow-sm border border-gray-100">
            <RefreshCcw className="w-12 h-12 text-orange-500 animate-spin mb-4" />
            <p className="font-bold text-gray-400">Loading latest inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No Inquiries Found</h3>
            <p className="text-gray-500 mt-2">Any new submissions via the website will appear here instantly.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        inquiry.type === 'Booking' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {inquiry.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs font-medium gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(inquiry.timestamp).toLocaleString()}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mb-2">{inquiry.service}</h3>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-xl leading-relaxed italic border-l-4 border-orange-200">
                      "{inquiry.message}"
                    </p>
                  </div>

                  <div className="md:w-64 flex-shrink-0 space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="bg-orange-50 p-2 rounded-lg">
                        <User className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="font-bold text-sm">{inquiry.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 underline decoration-orange-200">
                      <div className="bg-orange-50 p-2 rounded-lg">
                        <Mail className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="text-sm break-all font-medium">{inquiry.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
