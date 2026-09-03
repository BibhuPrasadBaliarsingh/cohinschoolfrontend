import img3604 from '../assets/DSC03604.JPG';
import img3611 from '../assets/DSC03611.JPG';
import img3612 from '../assets/DSC03612.JPG';
import img3616 from '../assets/DSC03616.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3671 from '../assets/DSC03671.JPG';
import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';

export const portalTheme = {
  parent: {
    title: 'Parent Portal',
    icon: 'heart',
    color: 'rose',
    idLabel: 'Parent ID / Registered Mobile',
    demoId: 'PR-2026-0143',
    demoPass: 'parent@123'
  },
  student: {
    title: 'Student Portal',
    icon: 'graduation-cap',
    color: 'blue',
    idLabel: 'Student ID / Admission No.',
    demoId: 'CIS-STU-2291',
    demoPass: 'student@123'
  },
  teacher: {
    title: 'Teacher Portal',
    icon: 'book-open',
    color: 'emerald',
    idLabel: 'Employee ID',
    demoId: 'CIS-EMP-0087',
    demoPass: 'teacher@123'
  },
  crm: {
    title: 'Admin / CRM',
    icon: 'shield',
    color: 'violet',
    idLabel: 'Staff / Admin ID',
    demoId: 'CIS-ADM-0012',
    demoPass: 'admin@123'
  },
  hostel: {
    title: 'Hostel Portal',
    icon: 'home',
    color: 'amber',
    idLabel: 'Warden ID',
    demoId: 'CIS-WRD-0005',
    demoPass: 'warden@123'
  },
  transport: {
    title: 'Transport Portal',
    icon: 'bus',
    color: 'sky',
    idLabel: 'Supervisor ID',
    demoId: 'CIS-TRP-0021',
    demoPass: 'transport@123'
  }
};

export const modulesData = {
  crm: {
    title: 'Admission CRM',
    icon: 'users',
    desc: 'This is where schools lose many admissions. Our CRM ensures every enquiry is captured and converted.',
    features: [
      'Lead Management from Website, Google Ads, Facebook, Instagram, WhatsApp, Phone & Walk-in',
      'Automated Follow-up Reminders',
      'Call Log & WhatsApp Integration',
      'SMS & Email Campaigns',
      'Counsellor Assignment & Lead Status Tracking',
      'Admission Reports & Conversion Rate Analytics',
      'Full Pipeline: New Lead → Contacted → Counselling → Campus Visit → Demo → Application → Documents → Fee → Confirmed'
    ]
  },
  parent: {
    title: 'Parent Portal',
    icon: 'heart',
    desc: 'Complete visibility and control for parents.',
    features: [
      'Dashboard with Attendance overview',
      'Homework & Assignments tracking',
      'Notices & Circulars',
      'Fee Details & Online Fee Payment',
      'Report Card & Progress Reports',
      'Leave Application for child',
      'Teacher Communication',
      'Live Bus Tracking',
      'Timetable & Examination schedule'
    ]
  },
  student: {
    title: 'Student Portal',
    icon: 'graduation-cap',
    desc: 'Everything a student needs in one place.',
    features: [
      'Attendance view',
      'Assignments & Homework submission',
      'Notes & Study Material',
      'Digital Library access',
      'Online Exams & Assessments',
      'Report Cards & Certificates',
      'Timetable & Event Calendar',
      'Performance Analytics'
    ]
  },
  teacher: {
    title: 'Teacher Portal',
    icon: 'book-open',
    desc: 'Powerful tools for educators.',
    features: [
      'Class Management',
      'Attendance marking (biometric sync ready)',
      'Homework Upload & Tracking',
      'Student Performance insights',
      'Online Marks Entry',
      'Exam Management',
      'Timetable view',
      'Leave Application'
    ]
  },
  admin: {
    title: 'Admin Dashboard',
    icon: 'layout-dashboard',
    desc: 'Complete control centre for school management.',
    features: [
      'Student Management',
      'Employee Management',
      'Admissions overview',
      'Fees & Revenue tracking',
      'Reports & Analytics',
      'Transport Management',
      'Hostel overview',
      'Visitor Management'
    ]
  },
  hrms: {
    title: 'HRMS – Human Resource Management',
    icon: 'briefcase',
    desc: 'End-to-end employee lifecycle management.',
    features: [
      'Employee Profile & Documents',
      'Attendance & Biometric Integration',
      'Leave Management & Approval',
      'Salary Slip & Reimbursement',
      'Payroll (PF, ESI, TDS, Bonus, Overtime)',
      'Shift Management',
      'Recruitment, Offer Letter & Joining',
      'Performance Review & Appraisal',
      'Exit Process & ID Card Generation',
      'Bank Transfer integration'
    ]
  },
  finance: {
    title: 'Finance Module',
    icon: 'indian-rupee',
    desc: 'Transparent and automated fee management.',
    features: [
      'Tuition Fees, Hostel Fees, Transport Fees',
      'Discounts & Scholarships management',
      'Online Payment Gateway (Razorpay)',
      'Automatic Receipts generation',
      'AI Fee Reminder via WhatsApp',
      'Outstanding & Collection reports'
    ]
  },
  transport: {
    title: 'Transport Management',
    icon: 'bus',
    desc: 'Safety and visibility for every journey.',
    features: [
      'Bus & Route Management',
      'GPS Live Tracking',
      'Driver Details & Documents',
      'Student Pickup assignment',
      'Parent Live Tracking via App',
      'Route optimization'
    ]
  },
  hostel: {
    title: 'Hostel Management',
    icon: 'home',
    desc: 'Digital oversight of residential life.',
    features: [
      'Room Allocation',
      'Hostel Fees tracking',
      'Attendance (biometric ready)',
      'Visitor Management',
      'Complaints & Resolution',
      'Warden Dashboard'
    ]
  },
  exam: {
    title: 'Examination System',
    icon: 'clipboard-check',
    desc: 'From assessment to analytics.',
    features: [
      'Marks Entry & Grade calculation',
      'Result publication',
      'Hall Ticket generation',
      'Promotion rules',
      'Performance Analytics & Insights',
      'AI Attendance Analytics – Predict Absentees'
    ]
  },
  ai: {
    title: 'AI-Powered Features',
    icon: 'bot',
    desc: 'Intelligence that works for the school 24×7.',
    features: [
      'AI Chatbot – Admission Support & general queries',
      'AI Voice Assistant – Talk to the Website',
      'AI Report Generator – Instant reports',
      'AI Attendance Analytics – Predict absentees',
      'AI Fee Reminder – Automatic WhatsApp messages',
      'Smart lead scoring in CRM'
    ]
  },
  apps: {
    title: 'Mobile Applications',
    icon: 'smartphone',
    desc: 'Native experience on every device.',
    features: [
      'Parent App – notifications, bus tracking, fee payment',
      'Student App – homework, library, exams',
      'Teacher App – attendance, marks, communication',
      'Management App – real-time KPIs & approvals',
      'Built with Flutter for iOS & Android'
    ]
  }
};

export const topicData = {
  academics: {
    title: 'Academic Programs & Integrated JEE/NEET',
    tag: 'Curriculum & Pedagogy',
    badge: 'CBSE + Vidwan Classes',
    image: img3681,
    intro:
      'At Cohen International School, academics is structured as an integrated journey from Nursery to Class XII. We combine CBSE excellence with Vidwan Classes competitive mentorship.',
    sections: [
      {
        head: 'Pre-Primary (Nursery to UKG)',
        text: 'Play-based experiential learning, phonics, motor skills, sensory activities, and joyful curiosity building.'
      },
      {
        head: 'Primary & Middle School (Classes I to VIII)',
        text: 'Project-Based Learning (PBL), Cambridge English speech training, early coding & robotics, and Olympiad Foundation.'
      },
      {
        head: 'High School (Classes IX & X)',
        text: 'NCERT board syllabus combined with pre-foundation coaching for JEE, NEET, NTSE & Olympiads.'
      },
      {
        head: 'Senior Secondary (Classes XI & XII)',
        text: 'Integrated Coaching: Full JEE (Main & Advanced) and NEET medical coaching embedded in school hours with mock test series.'
      }
    ]
  },
  'smart-rooms': {
    title: 'Smart Classrooms & AI Robotics Labs',
    tag: 'Digital Learning Environment',
    badge: 'Interactive AI Pods',
    image: img3684,
    intro:
      'Every classroom at CIS is equipped with high-definition interactive touch panels, digital 3D models, and high-speed internet, bringing abstract concepts to vivid life.',
    sections: [
      {
        head: 'Interactive Touch Display Panels',
        text: '75-inch 4K multi-touch smart boards with digital note-taking, 3D science simulations, and recorded revision lectures.'
      },
      {
        head: 'AI & Machine Learning Workstations',
        text: 'Dedicated computer lab with Python, Scratch coding tools, IoT sensors, and machine learning kits for hands-on programming.'
      },
      {
        head: 'Robotics & STEM Innovation Studio',
        text: 'Arduino, Raspberry Pi, 3D printers, and robotic kits enabling students to build functional prototypes.'
      },
      {
        head: 'Digital Content Library & AR Apps',
        text: 'Access to 10,000+ interactive 3D visual models for Physics, Chemistry, Biology, and Mathematics.'
      }
    ]
  },
  labs: {
    title: 'Advanced Science, Coding & Language Labs',
    tag: 'Hands-On Discovery',
    badge: 'State-of-the-Art Research',
    image: img3612,
    intro:
      'Science is learnt best by doing. CIS hosts ultra-modern Physics, Chemistry, Biology, Mathematics, and Language laboratories equipped with international safety standards.',
    sections: [
      {
        head: 'Physics & Chemistry Research Labs',
        text: 'Digital sensors, spectrophotometers, analytical balances, and safety fume hoods for advanced experiments.'
      },
      {
        head: 'Biology & Life Science Hub',
        text: 'Binocular microscopes, plant & animal specimen collections, human anatomy models, and biotechnology kits.'
      },
      {
        head: 'Mathematics Discovery Lab',
        text: '3D geometric shapes, probability kits, algebra tiles, and mathematical puzzles for concept visualization.'
      },
      {
        head: 'Language & Phonetics Studio',
        text: 'Audio-visual booths with Sanako language software for English pronunciation, accent training, and public speaking skills.'
      }
    ]
  },
  hostel: {
    title: 'Boarding Facilities & Residential Care',
    tag: 'Home Away From Home',
    badge: 'Separate Boys & Girls Hostels',
    image: img3622,
    intro:
      'The residential program at CIS offers a safe, disciplined, and nurturing environment for outstation and resident students with 24×7 security and resident wardens.',
    sections: [
      {
        head: 'Air-Conditioned Rooms & Ergonomic Study Tables',
        text: 'Well-ventilated, spacious rooms with individual wardrobes, study desks, and comfortable orthopedic mattresses.'
      },
      {
        head: 'Hygienic Dining & Nutritionist-Designed Menu',
        text: 'Four balanced meals daily (Breakfast, Lunch, Evening Snacks, Dinner) prepared under strict hygiene monitoring.'
      },
      {
        head: 'Supervised Evening Study Hours & Faculty Doubt Sessions',
        text: 'Mandatory 3-hour evening self-study supervised by resident mentors with dedicated subject doubt-clearing counters.'
      },
      {
        head: '24×7 Medical Care & On-Call Doctor',
        text: 'In-house infirmary with qualified nursing staff and emergency vehicle support linked to top Bhubaneswar hospitals.'
      }
    ]
  },
  sports: {
    title: 'Sports Complex, Swimming & Fitness',
    tag: 'Physical Excellence',
    badge: '10-Acres Sports Infrastructure',
    image: img3671,
    intro:
      'We believe strong minds thrive in fit bodies. CIS features expansive grounds for cricket, football, basketball, lawn tennis, swimming, and indoor sports.',
    sections: [
      {
        head: 'Half-Olympic Size Swimming Pool',
        text: 'Temperature-controlled, purified pool with certified male & female diving coaches and lifeguards.'
      },
      {
        head: 'Multi-Sport Turf & Athletic Track',
        text: 'Full-size football field, professional cricket nets with bowling machines, basketball courts, and 400m synthetic track.'
      },
      {
        head: 'Indoor Badminton & Table Tennis Arena',
        text: 'BWF-standard wooden flooring badminton courts, table tennis tables, chess hall, and martial arts training.'
      },
      {
        head: 'Professional Coaching & Tournament Exposure',
        text: 'Training by state and national level coaches with participation in CBSE Sahodaya and Inter-School Sports Meets.'
      }
    ]
  },
  transport: {
    title: 'Safe Fleet Transport with Live GPS Tracking',
    tag: 'Commute & Safety',
    badge: 'CCTV & GPS Enabled Busses',
    image: img3616,
    intro:
      'Our fleet of modern air-conditioned buses covers major routes across Bhubaneswar, Cuttack, Khordha, and Jatani with real-time GPS tracking for parents.',
    sections: [
      {
        head: 'Real-Time Parent App Live Tracking',
        text: 'Parents can view exact bus location, estimated arrival time (ETA), and receive arrival alerts on their mobile app.'
      },
      {
        head: 'CCTV Cameras & Speed Governors',
        text: 'In-bus surveillance cameras monitoring interior & exterior, along with speed limiters capped at 40 km/h.'
      },
      {
        head: 'Trained Drivers & Female Bus Attendants',
        text: 'Background-verified drivers with annual health checks and dedicated female attendants present on every route.'
      },
      {
        head: 'Emergency SOS & First Aid Equipped',
        text: 'Integrated panic buttons linked directly to school security room and comprehensive first-aid medical kits on board.'
      }
    ]
  },
  'security-green': {
    title: '24×7 Security, Biometric Access & Eco-Campus',
    tag: 'Safety & Sustainability',
    badge: 'Zero Carbon Campus',
    image: img3604,
    intro:
      'Safety and environmental stewardship are core values at CIS. The 10-acres campus is designed with smart security and green sustainability initiatives.',
    sections: [
      {
        head: '24×7 CCTV Surveillance & AI Perimeter Guard',
        text: '150+ high-definition cameras monitoring all entry gates, corridors, playgrounds, and common spaces 24 hours a day.'
      },
      {
        head: 'Biometric Access & Visitor Management System',
        text: 'Gate access restricted via biometric smart cards; visitors issued instant digital photo passes with OTP verification.'
      },
      {
        head: 'Solar Energy & Rainwater Harvesting System',
        text: 'Rooftop solar panels power campus lighting; underground rainwater recharge wells harvest 100% rainwater.'
      },
      {
        head: 'Lush Green Botanical Gardens & Organic Kitchen Farm',
        text: 'Over 1,000 trees and medicinal plant garden providing a pollution-free microclimate adjacent to Barunei Hills.'
      }
    ]
  },
  'cambridge-vidwan': {
    title: 'Vidwan Classes & Cambridge English Integration',
    tag: 'Competitive Edge',
    badge: 'National Mentors',
    image: img3611,
    intro:
      'Our strategic academic tie-ups with Vidwan Classes and Cambridge Assessment English give CIS students an unmatchable edge in both national competitive exams and global communication.',
    sections: [
      {
        head: 'Vidwan Classes Competitive Mastery',
        text: 'Daily integrated coaching for JEE (Main & Advanced), NEET, KVPY, and Olympiads led by top Kota & Hyderabad faculty.'
      },
      {
        head: 'Cambridge English Language Assessment',
        text: 'Systematic training in Speaking, Listening, Reading, and Writing with official Cambridge certifications.'
      },
      {
        head: 'Weekly All-India Test Series & Rank Predictor',
        text: 'Computer-based mock exams simulating actual NTA JEE/NEET patterns with detailed error analysis reports.'
      },
      {
        head: '1-on-1 Personalized Mentorship & Doubt Counter',
        text: 'Dedicated mentor assigned to every student for goal tracking, stress management, and concept strengthening.'
      }
    ]
  }
};
