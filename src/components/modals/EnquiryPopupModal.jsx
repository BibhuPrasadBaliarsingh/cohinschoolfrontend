import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, Phone, User, School, MapPin, Calendar, BookOpen, AlertCircle, Maximize2 } from 'lucide-react';
import enquiryImg from '../../assets/enquiry.png';

const TEST_CENTRE_CITIES = [
  'Bhubaneswar',
  'Jatani',
  'Cuttack',
  'Nayagarh',
  'Jajpur',
  'Balasore',
  'Jaleswar',
  'Bhadrak',
  'Dhenkanal',
  'Anugul',
  'Jharsuguda',
  'Rourkela',
  'Sambalpur',
  'Berhampur',
  'Keonjhar',
  'Kendrapara',
  'Paradeep',
  'Jeypore(Koraput)',
  'Rayagada',
  'Bolangir',
  'Bhawanipatna'
];

export default function EnquiryPopupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    currentSchool: '',
    parentName: '',
    phone: '',
    city: '',
    coachingInterest: '',
    testDate: '',
    testCentreCity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email directly via FormSubmit.co AJAX API from frontend
      await fetch('https://formsubmit.co/ajax/info@coheninternationalschool.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New CSAT 2027-28 Online Registration - ${formData.studentName}`,
          _template: 'table',
          _captcha: 'false',
          'Form Type': 'CSAT 2027-28 Online Registration (Grade 10)',
          'Student Name': formData.studentName,
          'Current School': formData.currentSchool,
          'Parent Name': formData.parentName,
          'Mobile / WhatsApp': formData.phone,
          'City': formData.city,
          'Integrated Stream': formData.coachingInterest,
          'Test Date': formData.testDate,
          'Test Centre City': formData.testCentreCity,
          'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      // Also forward to local backend API for future CRM integration
      fetch('/api/webhooks/website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'cohen_website_secret_api_key_2026'
        },
        body: JSON.stringify({
          formType: 'CSAT Online Registration',
          studentName: formData.studentName,
          currentSchool: formData.currentSchool,
          parentName: formData.parentName,
          phone: formData.phone,
          city: formData.city,
          coachingInterest: formData.coachingInterest,
          testDate: formData.testDate,
          testCentreCity: formData.testCentreCity,
          grade: 'Grade 10',
          message: `CSAT Registration submitted: Test Date: ${formData.testDate}, Stream: ${formData.coachingInterest}, Test Centre City: ${formData.testCentreCity}`
        })
      }).catch((err) => console.warn('Backend CRM sync note:', err));

    } catch (err) {
      console.warn('FormSubmit AJAX note:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 sm:p-5 overflow-y-auto bg-navy-950/85 backdrop-blur-md">
        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-navy-900 border border-gold-500/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-navy-950/80 text-white/80 hover:text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/10 shadow-lg cursor-pointer"
            aria-label="Close CSAT Registration Modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Decorative Corner Glows */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Image on Left (Desktop) + Form on Right */}
          <div className="grid md:grid-cols-12 overflow-y-auto">

            {/* LEFT SIDE: Poster / Image */}
            <div className="md:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-4 sm:p-6 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> CSAT 2027-28 Registration Open
                </div>
                <h3 className="font-display text-lg sm:text-2xl font-extrabold text-white leading-tight mb-1">
                  Cohen International <span className="text-gold-400">School</span>
                </h3>
                <p className="text-white/70 text-[11px] sm:text-xs leading-relaxed mb-2 hidden xs:block font-medium">
                  Cohen Scholarship Admission Test (CSAT) — Integrated Schooling &amp; Entrance Coaching Program.
                </p>
              </div>

              {/* Banner Image - Clickable for Full view */}
              <div 
                onClick={() => setIsImageZoomed(true)}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gold-500/40 shadow-xl my-2 bg-navy-950/80 group cursor-pointer p-1 flex items-center justify-center transition-all duration-300 hover:border-gold-400"
                title="Click to expand CSAT flyer poster"
              >
                <img
                  src={enquiryImg}
                  alt="Cohen International School CSAT Registration"
                  className="w-full h-auto max-h-[220px] sm:max-h-[280px] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-bold text-gold-400 backdrop-blur-[2px] rounded-xl">
                  <Maximize2 className="w-4 h-4" /> Expand Flyer Poster
                </div>
              </div>

              <div className="mt-1 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-white/60 gap-1">
                <span>📍 Near IIT Bhubaneswar</span>
                <a href="mailto:info@coheninternationalschool.com" className="text-gold-400 hover:underline">
                  ✉️ info@coheninternationalschool.com
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: CSAT Online Registration Form */}
            <div className="md:col-span-7 p-4 sm:p-7 flex flex-col justify-center bg-navy-900/90 relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8 px-2 sm:px-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">CSAT Registration Submitted!</h4>
                  <p className="text-white/80 text-xs sm:text-sm max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you! Your registration for <span className="text-gold-400 font-semibold">{formData.studentName}</span> (Test Date: <span className="text-gold-400 font-semibold">{formData.testDate}</span>) has been received.
                  </p>
                  <p className="text-white/60 text-xs max-w-md mx-auto mb-6">
                    Our team will contact you shortly on <span className="text-gold-300 font-semibold">{formData.phone}</span> with hall ticket and test center details.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 bg-gold-500 text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition shadow-lg text-xs sm:text-sm cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-3">
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                      CSAT Online <span className="text-gold-400">Registration Form</span>
                    </h4>
                    
                    {/* Important Eligibility Notice Box */}
                    <div className="mt-2 p-2.5 sm:p-3 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-200 text-[11px] sm:text-xs flex items-start gap-2 leading-relaxed">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        This CSAT online registration form for Test dates 4 Oct &amp; 1 Nov is applicable for <strong>current Grade 10 studying students only</strong>.
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                    {/* 1. Students name & 2. Current School (2 Cols) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                          1. Students name <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="studentName"
                            required
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="Enter student's full name"
                            className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                          2. Current School <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <School className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="currentSchool"
                            required
                            value={formData.currentSchool}
                            onChange={handleChange}
                            placeholder="Enter current school name"
                            className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 3. Parents name & 4. Mobile/Whatsapp no (2 Cols) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                          3. Parents name <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="parentName"
                            required
                            value={formData.parentName}
                            onChange={handleChange}
                            placeholder="Enter parent / guardian name"
                            className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                          4. Mobile/Whatsapp no <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit Mobile / WhatsApp"
                            className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 5. City */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                        5. City <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter your city"
                          className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    {/* 6. Interested for integrated schooling & coaching for */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                        6. Interested for integrated schooling &amp; coaching for <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <BookOpen className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          name="coachingInterest"
                          required
                          value={formData.coachingInterest}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition font-medium"
                        >
                          <option value="">-- Select Integrated Option --</option>
                          <option value="IIT JEE">IIT JEE</option>
                          <option value="NEET/Medical">NEET/Medical</option>
                          <option value="Pure Sciences (NISER, IISER, IISC, ISI etc)">Pure Sciences (NISER, IISER, IISC, ISI etc)</option>
                        </select>
                      </div>
                    </div>

                    {/* 7. Test date for & 8. Test Centre City opted */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                          7. Test date for <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            name="testDate"
                            required
                            value={formData.testDate}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition font-medium text-gold-300 font-semibold"
                          >
                            <option value="">-- Select Test Date --</option>
                            <option value="4 Oct’26">4 Oct’26</option>
                            <option value="1 Nov’26">1 Nov’26</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-white/90 mb-1">
                          8. Test Centre City opted <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            name="testCentreCity"
                            required
                            value={formData.testCentreCity}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2 bg-navy-950/80 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-gold-400 transition font-medium text-gold-300 font-semibold"
                          >
                            <option value="">-- Select Test Centre City --</option>
                            {TEST_CENTRE_CITIES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-navy-950 font-extrabold text-xs sm:text-sm rounded-xl hover:brightness-110 transition shadow-xl flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting CSAT Registration...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit CSAT Registration</span>
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

      {/* Lightbox / Fullscreen Image Zoom Modal */}
      {isImageZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[350] bg-navy-950/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
          onClick={() => setIsImageZoomed(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageZoomed(false)}
              className="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-30 p-2 sm:p-2.5 rounded-full bg-navy-900 border border-gold-500/50 text-white hover:bg-gold-500 hover:text-navy-950 transition shadow-2xl"
              aria-label="Close full view"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={enquiryImg}
              alt="Cohen International School CSAT Poster Full View"
              className="w-full h-full max-h-[88vh] object-contain rounded-2xl border border-gold-500/40 shadow-2xl bg-navy-950"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
