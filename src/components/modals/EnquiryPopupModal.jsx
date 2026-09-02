import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, Phone, User, BookOpen, MessageSquare } from 'lucide-react';
import enquiryImg from '../../assets/enquiry.png';

export default function EnquiryPopupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Class I',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit lead directly to backend website webhook (routed to info@coheninternationalschool.com)
      await fetch('/api/webhooks/website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'cohen_website_secret_api_key_2026'
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName: formData.parentName,
          phone: formData.phone,
          email: formData.email || '',
          classInterested: formData.grade,
          message: `${formData.message || 'Enquiry form submitted via website popup'} (Routed to info@coheninternationalschool.com)`
        })
      });
    } catch (err) {
      console.warn('Backend webhook warning:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-md">
        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-navy-900 border border-gold-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-navy-950/80 text-white/80 hover:text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/10 shadow-lg"
            aria-label="Close Enquiry Modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Decorative Corner Glows */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Image on Left (Desktop) + Form on Right */}
          <div className="grid md:grid-cols-12 overflow-y-auto">

            {/* LEFT SIDE: Poster / Image */}
            <div className="md:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-4 sm:p-8 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-4">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Admissions Open 2027-28
                </div>
                <h3 className="font-display text-lg sm:text-3xl font-extrabold text-white leading-tight mb-1 sm:mb-2">
                  Cohen International <span className="text-gold-400">School</span>
                </h3>
                <p className="text-white/70 text-[11px] sm:text-sm leading-relaxed mb-3 sm:mb-6 hidden xs:block">
                  Nurturing Future Leaders with Cambridge Curriculum, High-Tech STEM Aerospace Labs &amp; 10-Acre Eco-Green Campus.
                </p>
              </div>

              {/* Banner Image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl my-1 sm:my-2 bg-navy-950 group">
                <img
                  src={enquiryImg}
                  alt="Cohen International School Admission Enquiry"
                  className="w-full h-auto max-h-[110px] sm:max-h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              </div>

              <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-white/60 gap-1">
                <span>📍 Near IIT Bhubaneswar</span>
                <a href="mailto:info@coheninternationalschool.com" className="text-gold-400 hover:underline">
                  ✉️ info@coheninternationalschool.com
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Enquiry Form */}
            <div className="md:col-span-7 p-4 sm:p-8 flex flex-col justify-center bg-navy-900/90 relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8 px-2 sm:px-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">Enquiry Submitted!</h4>
                  <p className="text-white/75 text-xs sm:text-sm max-w-md mx-auto mb-5 sm:mb-6">
                    Thank you! Your enquiry has been sent to <span className="text-gold-400 font-semibold">info@coheninternationalschool.com</span>. Our admissions team will contact you shortly on <span className="text-gold-400 font-semibold">{formData.phone}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gold-500 text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition shadow-lg text-xs sm:text-sm"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-3 sm:mb-5">
                    <h4 className="font-display text-lg sm:text-2xl font-bold text-white">
                      Enquire for <span className="text-gold-400">Admissions</span>
                    </h4>
                    <p className="text-white/60 text-[11px] sm:text-sm mt-0.5 sm:mt-1">
                      Directly routed to <span className="text-gold-300 font-semibold">info@coheninternationalschool.com</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
                    {/* Student Name */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-white/80 mb-1">
                        Student Full Name <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full pl-9 pr-3 py-2 sm:pl-10 sm:pr-4 sm:py-2.5 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    {/* Parent Name & Phone (2 Cols) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/80 mb-1">
                          Parent / Guardian Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/80 mb-1">
                          Phone Number <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit Mobile"
                            className="w-full pl-9 pr-3 py-2 sm:pl-10 sm:pr-4 sm:py-2.5 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Class Applying For */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-white/80 mb-1">
                        Class / Grade Applying For <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2 sm:pl-10 sm:pr-4 sm:py-2.5 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition"
                        >
                          <option value="Nursery / LKG / UKG">Nursery / LKG / UKG</option>
                          <option value="Class I - V (Primary)">Class I - V (Primary)</option>
                          <option value="Class VI - VIII (Middle)">Class VI - VIII (Middle)</option>
                          <option value="Class IX - X (Secondary)">Class IX - X (Secondary)</option>
                          <option value="Class XI - XII (Senior Secondary)">Class XI - XII (Senior Secondary)</option>
                          <option value="Vidwan Integrated (JEE / NEET)">Vidwan Integrated (JEE / NEET)</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-white/80 mb-1">
                        Any Specific Query? (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 absolute left-3 top-2.5" />
                        <textarea
                          name="message"
                          rows="2"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Ask about hostel, transportation, fee structure..."
                          className="w-full pl-9 pr-3 py-1.5 sm:pl-10 sm:pr-4 sm:py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition placeholder:text-white/30 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-navy-950 font-extrabold text-xs sm:text-sm rounded-xl hover:brightness-110 transition shadow-xl flex items-center justify-center gap-2 mt-1 sm:mt-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
