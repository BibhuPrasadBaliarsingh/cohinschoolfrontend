import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import Contact from '../components/Contact';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ openChatbot }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // 1. Send email directly via FormSubmit.co AJAX API from frontend
      await fetch('https://formsubmit.co/ajax/info@coheninternationalschool.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Contact Website Enquiry - ${data.fullName || 'Visitor'}`,
          _template: 'table',
          _captcha: 'false',
          'Form Type': 'Contact Page Direct Message',
          'Full Name': data.fullName,
          'Mobile Number': data.phone,
          'Email Address': data.email,
          'Query Topic': data.topic,
          'Message': data.message,
          'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      // 2. Forward lead to backend API
      fetch('/api/webhooks/website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'cohen_website_secret_api_key_2026'
        },
        body: JSON.stringify({
          studentName: data.fullName,
          parentName: data.fullName,
          phone: data.phone,
          email: data.email,
          classInterested: data.topic || 'General Enquiry',
          message: data.message
        })
      }).catch((err) => console.warn('Backend sync note:', err));
    } catch (err) {
      console.warn('FormSubmit AJAX note:', err);
    } finally {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <PageWrapper>
      <HeaderBanner
        title="Contact & Visit Our Campus"
        subtitle="Located in the peaceful foothills of Barunei Hills, adjacent to IIT Bhubaneswar — easy access from Bhubaneswar, Cuttack & Khordha."
        
        breadcrumb="Contact Us"
        bgImage="/images/about_banner.png"
      />

      {/* Interactive Quick Enquiry Form (Direct Message - TOP) */}
      <section className="py-20 bg-cream-100 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-cream-200 shadow-xl">
            <div className="text-center mb-8">
              <span className="text-gold-600 font-medium uppercase text-xs tracking-wider block mb-1">Direct Message</span>
              <h3 className="font-display text-3xl text-navy-900 font-bold">Send an Instant Enquiry</h3>
              <p className="text-navy-700/70 text-sm mt-1">Our admission desk responds within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-center font-medium">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                Thank you! Your message has been received. Our admission counsellor will contact you shortly.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-navy-800 block mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy-800 block mb-1">Mobile Number (WhatsApp) *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-navy-800 block mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                      placeholder="name@domain.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy-800 block mb-1">Subject / Query Topic *</label>
                    <select required name="topic" className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50">
                      <option value="">Select Topic</option>
                      <option value="Admission Enquiry AY 2027-2028">Admission Enquiry AY 2027-2028</option>
                      <option value="Fee Structure & Scholarships">Fee Structure &amp; Scholarships</option>
                      <option value="Hostel & Residential Boarding">Hostel &amp; Residential Boarding</option>
                      <option value="Integrated JEE / NEET Coaching">Integrated JEE / NEET Coaching</option>
                      <option value="Transport & Route Info">Transport &amp; Route Info</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-navy-800 block mb-1">Your Message / Questions *</label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    placeholder="Type your questions here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy-900 text-white font-semibold rounded-2xl hover:bg-navy-800 transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-gold-400" /> Send Instant Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Get in Touch & Campus Location Map (BELOW) */}
      <Contact openChatbot={openChatbot} />
    </PageWrapper>
  );
}
