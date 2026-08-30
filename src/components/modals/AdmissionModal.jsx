import React, { useState } from 'react';
import { X } from 'lucide-react';
import img3671 from '../../assets/DSC03671.JPG';

export default function AdmissionModal({ closeModal, mode = 'apply' }) {
  const [submitting, setSubmitting] = useState(false);
  const isRegister = mode === 'register';
  const title = isRegister ? 'Student Registration Form for AY 2027-2028' : 'Online Admission Application';
  const subtitle = isRegister
    ? 'Register your seat early for the upcoming AY 2027-2028 academic batch.'
    : 'Complete application form for nursery to Class XI admissions.';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const targetEmail = 'info@coheninternationalschool.com';
      const subject = `New Online Admission Application: ${data.studentName || 'Student'} (AY ${data.academicYear || '2027-2028'})`;
      const bodyLines = [
        'ONLINE ADMISSION APPLICATION DETAILS',
        '================================================',
        '1. STUDENT DETAILS:',
        `• Name of the Student: ${data.studentName || ''}`,
        `• Date of Birth: ${data.dob || ''}`,
        `• Gender: ${data.gender || ''}`,
        `• Nationality: ${data.nationality || ''}`,
        `• Country: ${data.country || ''}`,
        `• State: ${data.state || ''}`,
        `• City: ${data.city || ''}`,
        '',
        '2. PARENT DETAILS:',
        `• Father's Name: ${data.fatherName || ''}`,
        `• Father's Mobile Number: ${data.fatherMobile || ''}`,
        `• Father's E-mail ID: ${data.fatherEmail || ''}`,
        `• Father's Profession: ${data.fatherProfession || ''}`,
        `• Mother's Name: ${data.motherName || ''}`,
        `• Mother's Mobile Number: ${data.motherMobile || ''}`,
        `• Mother's E-mail ID: ${data.motherEmail || ''}`,
        `• Mother's Profession: ${data.motherProfession || ''}`,
        `• Correspondence Address: ${data.address || ''}`,
        '',
        '3. GUARDIAN DETAILS:',
        `• Guardian's Name: ${data.guardianName || ''}`,
        `• Guardian's Mobile Number: ${data.guardianMobile || ''}`,
        `• Guardian's E-mail ID: ${data.guardianEmail || ''}`,
        '',
        '4. STUDENT CURRENT ACADEMIC DETAILS:',
        `• School Currently Studying: ${data.currentSchool || ''}`,
        `• State: ${data.currentState || ''}`,
        `• City: ${data.currentCity || ''}`,
        `• Curriculum Currently Studying In: ${data.curriculum || ''}`,
        `• Grade Currently Studying In: ${data.currentGrade || ''}`,
        '',
        '5. STUDENT ENROLLMENT DETAILS:',
        `• Grade Applying For: ${data.applyingGrade || ''}`,
        `• Applying for Academic Year: ${data.academicYear || ''}`,
        `• Preferred Day of visiting Campus: ${data.preferredDate || ''}`,
        '================================================',
        'Sent automatically from Cohen International School Online Portal'
      ];

      try {
        await fetch('/api/webhooks/website', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'cohen_website_secret_api_key_2026'
          },
          body: JSON.stringify({
            studentName: data.studentName,
            parentName: data.fatherName || data.motherName || data.guardianName || 'Parent',
            phone: data.fatherMobile || data.motherMobile || data.guardianMobile || '',
            email: data.fatherEmail || data.motherEmail || data.guardianEmail || '',
            classInterested: data.applyingGrade || 'Class 1',
            academicYear: data.academicYear || '2027-2028'
          })
        });
      } catch (err) {
        console.log('CRM ingest notification:', err);
      }

      const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailtoLink;

      alert(`Thank you! Your application details for ${data.studentName || 'the student'} have been submitted.`);
      closeModal();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        style={{ border: '1.5px solid rgba(201,162,39,0.25)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-44 sm:h-52 rounded-t-3xl overflow-hidden">
          <img
            src={img3671}
            alt="Cohen International School Campus"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(7,15,26,0.95) 0%, rgba(7,15,26,0.55) 55%, rgba(7,15,26,0.25) 100%)'
            }}
          />
          <div className="absolute top-4 left-4">
            <div className="bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
              <img src="/logo.png" alt="Cohen Logo" className="h-7 w-auto object-contain" />
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur flex items-center justify-center text-white transition focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <span
              style={{
                background: 'linear-gradient(135deg,#C9A227,#E8C547)',
                color: '#0B1C2C',
                padding: '4px 16px',
                borderRadius: '999px',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.09em',
                textTransform: 'uppercase'
              }}
            >
              Admissions for AY 2027-2028
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
            <h3 id="admission-modal-title" className="font-display text-xl sm:text-2xl text-white font-bold leading-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">{subtitle}</p>
          </div>
        </div>

        <form className="p-6 md:p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between">
            <span>Note: * indicates mandatory information to be filled</span>
            <span className="text-[10px] text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-md font-bold">REQUIRED</span>
          </div>

          {/* 1. Student Details */}
          <div className="border border-cream-200 rounded-2xl p-5 bg-white shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider border-b border-cream-200 pb-2">
              1. Student Details
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="adm-student-name" className="text-xs font-semibold text-navy-800 block mb-1">
                  Name of the Student *
                </label>
                <input
                  id="adm-student-name"
                  required
                  name="studentName"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Please enter the name in full"
                />
              </div>
              <div>
                <label htmlFor="adm-dob" className="text-xs font-semibold text-navy-800 block mb-1">
                  Date of Birth *
                </label>
                <input
                  id="adm-dob"
                  required
                  name="dob"
                  type="date"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                />
              </div>
              <div>
                <label htmlFor="adm-gender" className="text-xs font-semibold text-navy-800 block mb-1">
                  Gender *
                </label>
                <select
                  id="adm-gender"
                  required
                  name="gender"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="adm-nationality" className="text-xs font-semibold text-navy-800 block mb-1">
                  Nationality * (As per passport status)
                </label>
                <select
                  id="adm-nationality"
                  required
                  name="nationality"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select</option>
                  <option>Indian</option>
                  <option>NRI</option>
                  <option>Foreign National</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="adm-country" className="text-xs font-semibold text-navy-800 block mb-1">
                  Country *
                </label>
                <input
                  id="adm-country"
                  required
                  name="country"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Country"
                />
              </div>
              <div>
                <label htmlFor="adm-state" className="text-xs font-semibold text-navy-800 block mb-1">
                  State *
                </label>
                <input
                  id="adm-state"
                  required
                  name="state"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter State"
                />
              </div>
              <div>
                <label htmlFor="adm-city" className="text-xs font-semibold text-navy-800 block mb-1">
                  City *
                </label>
                <input
                  id="adm-city"
                  required
                  name="city"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter City"
                />
              </div>
            </div>
          </div>

          {/* 2. Parent Details */}
          <div className="border border-cream-200 rounded-2xl p-5 bg-white shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider border-b border-cream-200 pb-2">
              2. Parent Details
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="adm-father-name" className="text-xs font-semibold text-navy-800 block mb-1">
                  Father's Name *
                </label>
                <input
                  id="adm-father-name"
                  required
                  name="fatherName"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Please enter the name in full"
                />
              </div>
              <div>
                <label htmlFor="adm-father-mobile" className="text-xs font-semibold text-navy-800 block mb-1">
                  Father’s Mobile Number *
                </label>
                <input
                  id="adm-father-mobile"
                  required
                  name="fatherMobile"
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label htmlFor="adm-father-email" className="text-xs font-semibold text-navy-800 block mb-1">
                  Father’s E-mail ID *
                </label>
                <input
                  id="adm-father-email"
                  required
                  name="fatherEmail"
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Email Id"
                />
              </div>
              <div>
                <label htmlFor="adm-father-profession" className="text-xs font-semibold text-navy-800 block mb-1">
                  Father's Profession *
                </label>
                <input
                  id="adm-father-profession"
                  required
                  name="fatherProfession"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Profession"
                />
              </div>
              <div>
                <label htmlFor="adm-mother-name" className="text-xs font-semibold text-navy-800 block mb-1">
                  Mother's Name *
                </label>
                <input
                  id="adm-mother-name"
                  required
                  name="motherName"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Please enter the name in full"
                />
              </div>
              <div>
                <label htmlFor="adm-mother-mobile" className="text-xs font-semibold text-navy-800 block mb-1">
                  Mother’s Mobile Number *
                </label>
                <input
                  id="adm-mother-mobile"
                  required
                  name="motherMobile"
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label htmlFor="adm-mother-email" className="text-xs font-semibold text-navy-800 block mb-1">
                  Mother’s E-mail ID *
                </label>
                <input
                  id="adm-mother-email"
                  required
                  name="motherEmail"
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Email Id"
                />
              </div>
              <div>
                <label htmlFor="adm-mother-profession" className="text-xs font-semibold text-navy-800 block mb-1">
                  Mother's Profession *
                </label>
                <input
                  id="adm-mother-profession"
                  required
                  name="motherProfession"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Profession"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="adm-address" className="text-xs font-semibold text-navy-800 block mb-1">
                  Correspondence Address *
                </label>
                <textarea
                  id="adm-address"
                  required
                  name="address"
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Full Postal Address"
                />
              </div>
            </div>
          </div>

          {/* 3. Guardian Details */}
          <div className="border border-cream-200 rounded-2xl p-5 bg-white shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider border-b border-cream-200 pb-2">
              3. Guardian Details (Optional)
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="adm-guardian-name" className="text-xs font-semibold text-navy-800 block mb-1">
                  Guardian's Name
                </label>
                <input
                  id="adm-guardian-name"
                  name="guardianName"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Guardian's Name"
                />
              </div>
              <div>
                <label htmlFor="adm-guardian-mobile" className="text-xs font-semibold text-navy-800 block mb-1">
                  Guardian's Mobile Number
                </label>
                <input
                  id="adm-guardian-mobile"
                  name="guardianMobile"
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label htmlFor="adm-guardian-email" className="text-xs font-semibold text-navy-800 block mb-1">
                  Guardian's E-mail ID
                </label>
                <input
                  id="adm-guardian-email"
                  name="guardianEmail"
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Email Id"
                />
              </div>
            </div>
          </div>

          {/* 4. Student Current Academic Details */}
          <div className="border border-cream-200 rounded-2xl p-5 bg-white shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider border-b border-cream-200 pb-2">
              4. Student Current Academic Details
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="adm-current-school" className="text-xs font-semibold text-navy-800 block mb-1">
                  School Currently Studying *
                </label>
                <input
                  id="adm-current-school"
                  required
                  name="currentSchool"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="Enter Current School Name"
                />
              </div>
              <div>
                <label htmlFor="adm-current-state" className="text-xs font-semibold text-navy-800 block mb-1">
                  State *
                </label>
                <input
                  id="adm-current-state"
                  required
                  name="currentState"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="State"
                />
              </div>
              <div>
                <label htmlFor="adm-current-city" className="text-xs font-semibold text-navy-800 block mb-1">
                  City *
                </label>
                <input
                  id="adm-current-city"
                  required
                  name="currentCity"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="adm-curriculum" className="text-xs font-semibold text-navy-800 block mb-1">
                  Curriculum Currently Studying In *
                </label>
                <select
                  id="adm-curriculum"
                  required
                  name="curriculum"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select Curriculum</option>
                  <option>CBSE</option>
                  <option>ICSE / ISC</option>
                  <option>State Board (Odisha/Other)</option>
                  <option>IB / Cambridge / International</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="adm-current-grade" className="text-xs font-semibold text-navy-800 block mb-1">
                  Grade Currently Studying In *
                </label>
                <select
                  id="adm-current-grade"
                  required
                  name="currentGrade"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select Grade</option>
                  <option>Nursery / LKG / UKG</option>
                  <option>Class 1 to 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                </select>
              </div>
            </div>
          </div>

          {/* 5. Student Enrollment Details */}
          <div className="border border-cream-200 rounded-2xl p-5 bg-white shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider border-b border-cream-200 pb-2">
              5. Student Enrollment Details
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="adm-applying-grade" className="text-xs font-semibold text-navy-800 block mb-1">
                  Grade Applying For *
                </label>
                <select
                  id="adm-applying-grade"
                  required
                  name="applyingGrade"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="">Select Grade</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11 (Science - JEE/NEET Integrated)</option>
                  <option>Class 11 (Commerce)</option>
                  <option>Class 11 (Humanities/Arts)</option>
                  <option>Class 12</option>
                </select>
              </div>
              <div>
                <label htmlFor="adm-academic-year" className="text-xs font-semibold text-navy-800 block mb-1">
                  Applying for Academic Year *
                </label>
                <select
                  id="adm-academic-year"
                  required
                  name="academicYear"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="2027-2028">2027 - 2028 (Upcoming Session)</option>
                  <option value="2026-2027">2026 - 2027 (Mid-session / Immediate)</option>
                </select>
              </div>
              <div>
                <label htmlFor="adm-preferred-date" className="text-xs font-semibold text-navy-800 block mb-1">
                  Preferred Day of Visiting Campus *
                </label>
                <input
                  id="adm-preferred-date"
                  required
                  name="preferredDate"
                  type="date"
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 rounded-xl border border-cream-300 text-navy-700 text-sm font-semibold hover:bg-cream-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-bold shadow-lg transition disabled:opacity-50"
            >
              {submitting ? 'Submitting Application...' : 'Submit Application Form'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
