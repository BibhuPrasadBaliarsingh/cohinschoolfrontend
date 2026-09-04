import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Filter,
  Grid,
  Sparkles,
  Rocket,
  GraduationCap,
  Camera,
  Star,
  BookOpen,
  Atom
} from 'lucide-react';

import img3604 from '../assets/DSC03604.JPG';
import img3605 from '../assets/DSC03605.JPG';
import img3611 from '../assets/DSC03611.JPG';
import img3612 from '../assets/DSC03612.JPG';
import img3613 from '../assets/DSC03613.JPG';
import img3616 from '../assets/DSC03616.JPG';
import img3620 from '../assets/DSC03620.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3624 from '../assets/DSC03624.JPG';
import img3625 from '../assets/DSC03625.JPG';
import img3653 from '../assets/DSC03653.JPG';
import img3660 from '../assets/DSC03660.JPG';
import img3671 from '../assets/DSC03671.JPG';
import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';

// Imports from galary assets folder (All 23 images)
import gImg1 from '../assets/galary/image.png';
import gImg2 from '../assets/galary/image copy.png';
import gImg3 from '../assets/galary/image copy 2.png';
import gImg4 from '../assets/galary/image copy 3.png';
import gImg5 from '../assets/galary/image copy 4.png';
import gImg6 from '../assets/galary/image copy 5.png';
import gImg7 from '../assets/galary/image copy 6.png';
import gImg8 from '../assets/galary/image copy 7.png';
import gImg9 from '../assets/galary/image copy 8.png';
import gImg10 from '../assets/galary/image copy 9.png';
import gImg11 from '../assets/galary/image copy 10.png';
import gImg12 from '../assets/galary/image copy 11.png';
import gImg13 from '../assets/galary/image copy 12.png';
import gImg14 from '../assets/galary/image copy 13.png';
import gImg15 from '../assets/galary/image copy 14.png';
import gImg16 from '../assets/galary/image copy 15.png';
import gImg17 from '../assets/galary/image copy 16.png';
import gImg18 from '../assets/galary/image copy 17.png';
import gImg19 from '../assets/galary/image copy 18.png';
import gImg20 from '../assets/galary/image copy 19.png';
import gImg21 from '../assets/galary/image copy 20.png';
import gImg22 from '../assets/galary/image copy 21.png';
import gImg23 from '../assets/galary/image copy 22.png';
import gImg24 from '../assets/galary/image copy 23.png';
import gImg25 from '../assets/galary/image copy 24.png';
import gImg26 from '../assets/galary/image copy 25.png';
import gImg27 from '../assets/galary/image copy 26.png';
import gImg28 from '../assets/galary/image copy 27.png';
import gImg29 from '../assets/galary/image copy 28.png';
import gImg30 from '../assets/galary/image copy 29.png';
import gImg31 from '../assets/galary/image copy 30.png';
import gImg32 from '../assets/galary/image copy 31.png';

const galleryItems = [
  {
    id: 1,
    title: "Panoramic Aerial View of Cohen Campus & Grounds",
    category: "Campus Infrastructure",
    src: img3613,
    location: "Central Campus Quad",
    tag: "CAPTAIN SQUAD",
    stat: "10-Acres Sanctuary",
    resolution: "4K UHD",
    description: "Expansive 10-acres eco-conscious architectural landscape with lush green lawns, modern academic wings, and state-of-the-art security entrances."
  },
  {
    id: 2,
    title: "15th August Independence Day March-Past & Drill Parade",
    category: "Events & Celebrations",
    src: gImg1,
    location: "Central Parade Ground",
    tag: "INDEPENDENCE DAY",
    stat: "15th August Parade",
    resolution: "4K UHD",
    description: "Annual 15th August Independence Day celebration featuring student scout & guide march-past parade, drill formations, and national flag salute."
  },
  {
    id: 3,
    title: "Main Entrance Gate & Cambridge Academic Partner Wall",
    category: "Campus Infrastructure",
    src: img3616,
    location: "Front Entrance",
    tag: "GLOBAL PARTNER",
    stat: "Cambridge UK Partner",
    resolution: "4K UHD",
    description: "Main campus security gate entrance with Cambridge English Assessment partner wall and surrounding greenery."
  },
  {
    id: 4,
    title: "Cohen International School Main Campus Signboard & Front Lawn",
    category: "Campus Infrastructure",
    src: img3605,
    location: "Main Entrance",
    tag: "CAMPUS SIGNBOARD",
    stat: "Eco Infrastructure",
    resolution: "4K UHD",
    description: "Architectural black stone signboard of Cohen International School surrounded by manicured botanical lawns."
  },
  {
    id: 5,
    title: "Football & Outdoor Athletic Playgrounds",
    category: "Sports & Athletics",
    src: img3653,
    location: "Athletics Complex",
    tag: "CHAMPION TURF",
    stat: "Grass Football Field",
    resolution: "4K UHD",
    description: "Lush green grass football field and athletic playground supporting soccer matches, athletic training, and physical conditioning."
  },
  {
    id: 6,
    title: "Interactive Smart Tech Studio",
    category: "Innovation & Tech",
    src: img3611,
    location: "Academic Block A",
    tag: "SMART CLASS",
    stat: "Dual 4K Displays",
    resolution: "HD 1080p",
    description: "Technology-enabled classrooms fitted with interactive smart boards, dual display setups, and ergonomic modular seating."
  },
  {
    id: 7,
    title: "Advanced Physics & Science Research Lab",
    category: "Innovation & Tech",
    src: img3612,
    location: "Science Complex",
    tag: "RESEARCH WING",
    stat: "National Olympiad",
    resolution: "HD 1080p",
    description: "Precision-calibrated lab equipment fostering scientific inquiry, practical experiments, and national research olympiads."
  },
  {
    id: 8,
    title: "Cohen Talks Grand Auditorium",
    category: "Events & Celebrations",
    src: img3660,
    location: "Cultural Pavilion",
    tag: "CENTER STAGE",
    stat: "1,000 Capacity",
    resolution: "4K UHD",
    description: "State-of-the-art 1,000-seater acoustic theater hosting TEDx-style summits, theatrical plays, and annual galas."
  },
  {
    id: 9,
    title: "Primary School Outdoor Activity & Athletic Playground",
    category: "Sports & Athletics",
    src: img3625,
    location: "Junior Sports Ground",
    tag: "JUNIOR SQUAD",
    stat: "Outdoor Fun",
    resolution: "4K UHD",
    description: "Young primary scholars engaging in outdoor athletic drills, team-building fun, and physical conditioning."
  },
  {
    id: 10,
    title: "Cambridge Phonetics & Speech Lab",
    category: "Innovation & Tech",
    src: img3624,
    location: "Language Center",
    tag: "GLOBAL ACCENT",
    stat: "Phonetic Studio",
    resolution: "HD 1080p",
    description: "Audio-assisted linguistic training suite enhancing public speaking, global accent mastery, and elocution."
  },
  {
    id: 11,
    title: "Indoor Badminton & Sports Arena",
    category: "Sports & Athletics",
    src: img3620,
    location: "Indoor Sports Center",
    tag: "SMASH COURT",
    stat: "Wooden Floor",
    resolution: "HD 1080p",
    description: "Indoor wooden courts for badminton, table tennis, and yoga sessions supervised by certified athletic coaches."
  },
  {
    id: 12,
    title: "Luxury Boarding Residence & Lounge",
    category: "Campus Infrastructure",
    src: img3604,
    location: "Hostel Zone",
    tag: "HOSTEL LUXE",
    stat: "Nutritious Dining",
    resolution: "4K UHD",
    description: "Hygienic, climate-controlled residential quarters with chef-curated nutritious dining for resident scholars."
  },
  {
    id: 13,
    title: "Collaborative Learning Studio Space",
    category: "Innovation & Tech",
    src: img3671,
    location: "Innovation Hall",
    tag: "PEER BRAINSTORM",
    stat: "Modular Pods",
    resolution: "HD 1080p",
    description: "Flexible, modern study pods designed to encourage peer brainstorming, group projects, and creative workshops."
  },
  {
    id: 14,
    title: "STEAM & Space Model Innovation Lab",
    category: "Innovation & Tech",
    src: img3681,
    location: "AeroSpace Lab",
    tag: "SPACE INNOVATION",
    stat: "Hands-on Building",
    resolution: "4K UHD",
    description: "Students collaborating in the aerospace innovation lab, designing and assembling rocket propulsion and satellite prototypes."
  },
  {
    id: 15,
    title: "Archway Walkway & Botanical Lawn",
    category: "Campus Infrastructure",
    src: img3622,
    location: "North Garden",
    tag: "GREEN CAMPUS",
    stat: "Native Flora",
    resolution: "HD 1080p",
    description: "Serene shaded pathways connecting academic blocks, surrounded by native flora and peaceful seating nooks."
  },
  {
    id: 16,
    title: "Aerospace Drone & RC Aircraft Engineering Lab",
    category: "Innovation & Tech",
    src: img3684,
    location: "Aero Innovation Hub",
    tag: "DRONE LAB",
    stat: "RC & Flight Control",
    resolution: "4K UHD",
    description: "Students testing radio controllers, propellers, and electronic flight systems for autonomous RC airplanes and drones."
  },
  {
    id: 17,
    title: "15th August Independence Day House March-Past Parade",
    category: "Events & Celebrations",
    src: gImg2,
    location: "Central Sports Ground",
    tag: "INDEPENDENCE DAY",
    stat: "15th August Drill",
    resolution: "4K UHD",
    description: "Independence Day house captain march-past parade, drill squad salute, and sports ground assembly."
  },
  {
    id: 18,
    title: "High-Tech 3D Printing & Prototyping Workbench",
    category: "Innovation & Tech",
    src: gImg3,
    location: "Aerobay Lab",
    tag: "3D PRINTING",
    stat: "Rapid Prototyping",
    resolution: "4K UHD",
    description: "Precision 3D printing equipment enabling students to design, slice, and manufacture custom aerodynamic components and prototypes."
  },
  {
    id: 19,
    title: "Aero Flying & Drone Banner Demonstration",
    category: "Events & Celebrations",
    src: gImg4,
    location: "Central Sports Ground",
    tag: "AERO FLYING",
    stat: "Live Demonstration",
    resolution: "4K UHD",
    description: "Live outdoor flying demonstration of custom-built radio-controlled airplanes and banner-towing drones on the campus sports field."
  },
  {
    id: 20,
    title: "15th August Freedom Fighters Fancy Dress & Role Play Competition",
    category: "Events & Celebrations",
    src: gImg5,
    location: "Main Auditorium Stage",
    tag: "FANCY DRESS",
    stat: "15th August Role Play",
    resolution: "4K UHD",
    description: "Young primary scholars portraying national freedom fighters including Mahatma Gandhi, Netaji Subhas Chandra Bose, and Mother Teresa in the 15th August Fancy Dress Competition."
  },
  {
    id: 21,
    title: "Fixed-Wing Aircraft Prototyping & Assembly",
    category: "Innovation & Tech",
    src: gImg6,
    location: "Aerobay Workbench",
    tag: "AERODYNAMICS",
    stat: "RC Aircraft Kits",
    resolution: "4K UHD",
    description: "Hands-on assembly of fixed-wing radio-controlled aircraft models, instilling core principles of aerodynamics, lift, and thrust."
  },
  {
    id: 22,
    title: "Dignitaries Keynote & Inaugural Address",
    category: "Inauguration & VIP Dignitaries",
    src: gImg7,
    location: "Auditorium Main Stage",
    tag: "KEYNOTE ADDRESS",
    stat: "Eminent Guests",
    resolution: "4K UHD",
    description: "Eminent guest speaker and school leadership delivering inspiring inaugural address to students and parents."
  },
  {
    id: 23,
    title: "Leadership & VIP Felicitation Ceremony",
    category: "Inauguration & VIP Dignitaries",
    src: gImg8,
    location: "Central Stage",
    tag: "FELICITATION",
    stat: "VIP Guests",
    resolution: "4K UHD",
    description: "Felicitation of distinguished educationists and chief guests with traditional honors and mementos."
  },
  {
    id: 24,
    title: "Grand Stage Inauguration & Lamp Lighting",
    category: "Inauguration & VIP Dignitaries",
    src: gImg9,
    location: "Grand Auditorium Stage",
    tag: "LAMP LIGHTING",
    stat: "Auspicious Start",
    resolution: "4K UHD",
    description: "Auspicious lamp lighting ceremony marking the formal inauguration of new academic and innovation wings."
  },
  {
    id: 25,
    title: "Executive Director & Founders Honor Tributes",
    category: "Inauguration & VIP Dignitaries",
    src: gImg10,
    location: "Auditorium Podium",
    tag: "FOUNDERS SPEECH",
    stat: "School Vision",
    resolution: "4K UHD",
    description: "Founders and managing director sharing the strategic roadmap and future academic milestones for Cohen International School."
  },
  {
    id: 26,
    title: "Grand Inauguration Arch Welcome & Procession",
    category: "Inauguration & VIP Dignitaries",
    src: gImg11,
    location: "Front Entrance Arch",
    tag: "WELCOME PROCESSION",
    stat: "Red Carpet",
    resolution: "4K UHD",
    description: "Grand welcome arch decorated for the arrival of chief guests, parents, and education dignitaries."
  },
  {
    id: 27,
    title: "Interactive Press & Media Conclave",
    category: "Inauguration & VIP Dignitaries",
    src: gImg12,
    location: "Press Room",
    tag: "MEDIA CORNER",
    stat: "Press Briefing",
    resolution: "4K UHD",
    description: "Press conference and media interaction session showcasing school academic achievements and infrastructure."
  },
  {
    id: 28,
    title: "Modern Architectural Academic Block",
    category: "Campus Infrastructure",
    src: gImg13,
    location: "Academic Quadrangle",
    tag: "SMART INFRA",
    stat: "Modern Block",
    resolution: "4K UHD",
    description: "Architectural view of modern multi-story academic wings featuring climate-controlled classrooms."
  },
  {
    id: 29,
    title: "Campus Main Gate & Security Plaza",
    category: "Campus Infrastructure",
    src: gImg14,
    location: "Main Gate Plaza",
    tag: "SECURITY HUB",
    stat: "CCTV Monitored",
    resolution: "4K UHD",
    description: "Spacious campus security gate plaza managed by 24/7 security personnel and app-linked access control."
  },
  {
    id: 30,
    title: "VIP Memento Presentation Ceremony",
    category: "Inauguration & VIP Dignitaries",
    src: gImg15,
    location: "Main Stage",
    tag: "HONOR & AWARD",
    stat: "Guest Honor",
    resolution: "4K UHD",
    description: "Presentation of ceremonial honors and mementos to distinguished guest speakers."
  },
  {
    id: 31,
    title: "Dignitary Guest Honor Tributes",
    category: "Inauguration & VIP Dignitaries",
    src: gImg16,
    location: "Auditorium Stage",
    tag: "GUEST FELICITATION",
    stat: "Eminent Guests",
    resolution: "4K UHD",
    description: "Felicitation of government officers, university professors, and distinguished educationists."
  },
  {
    id: 32,
    title: "Felicitation of Chief Guest & Advisory Board",
    category: "Inauguration & VIP Dignitaries",
    src: gImg17,
    location: "Stage Front",
    tag: "ADVISORY HONOR",
    stat: "Scientific Board",
    resolution: "4K UHD",
    description: "Chairman honoring scientific advisory board members and distinguished keynote dignitaries."
  },
  {
    id: 33,
    title: "Stage Address by Renowned Academician",
    category: "Inauguration & VIP Dignitaries",
    src: gImg18,
    location: "Keynote Podium",
    tag: "ACADEMIC SUMMIT",
    stat: "Keynote Talk",
    resolution: "4K UHD",
    description: "Inspiring keynote presentation on future tech, AI integration, and holistic schooling."
  },
  {
    id: 34,
    title: "Foundation Stone & Plaque Ceremony",
    category: "Inauguration & VIP Dignitaries",
    src: gImg19,
    location: "Plaza Lawn",
    tag: "FOUNDATION PLAQUE",
    stat: "Historic Moment",
    resolution: "4K UHD",
    description: "Unveiling of the foundation plaque commemorating the inauguration of Cohen International School."
  },
  {
    id: 35,
    title: "Auditorium Inauguration Ribbon Cutting",
    category: "Inauguration & VIP Dignitaries",
    src: gImg20,
    location: "Auditorium Entrance",
    tag: "RIBBON CUTTING",
    stat: "Grand Opening",
    resolution: "4K UHD",
    description: "Formal ribbon cutting ceremony inaugurating the grand 1,000-seater acoustic theater."
  },
  {
    id: 36,
    title: "Student Cultural Dance Performance",
    category: "Events & Celebrations",
    src: gImg21,
    location: "Stage Arena",
    tag: "CULTURAL DANCE",
    stat: "Student Talent",
    resolution: "4K UHD",
    description: "Vibrant traditional and contemporary dance performance by student cultural troupe."
  },
  {
    id: 37,
    title: "Annual Day Sports & Athletic Prize Distribution",
    category: "Events & Celebrations",
    src: gImg22,
    location: "Sports Ground Podium",
    tag: "PRIZE DISTRIBUTION",
    stat: "Champion Medals",
    resolution: "4K UHD",
    description: "Distribution of athletic trophies, championship shields, and medals at the annual sports meet."
  },
  {
    id: 38,
    title: "Leadership & Faculty Group Portrait",
    category: "Inauguration & VIP Dignitaries",
    src: gImg23,
    location: "Central Pavilion Lawn",
    tag: "LEADERSHIP TEAM",
    stat: "CIS Mentors",
    resolution: "4K UHD",
    description: "Commemorative group portrait of school management, executive directors, and senior academic faculty."
  },
  {
    id: 39,
    title: "Campus Cultural Program & Student Celebrations",
    category: "Events & Celebrations",
    src: gImg24,
    location: "Auditorium Main Stage",
    tag: "CULTURAL CELEBRATIONS",
    stat: "Student Showcase",
    resolution: "4K UHD",
    description: "Vibrant cultural performance and festive celebrations by Cohen International School scholars."
  },
  {
    id: 40,
    title: "Academic Conclave & Guest Dignitary Felicitation",
    category: "Inauguration & VIP Dignitaries",
    src: gImg25,
    location: "Main Stage Arena",
    tag: "GUEST FELICITATION",
    stat: "Eminent Guests",
    resolution: "4K UHD",
    description: "Felicitation ceremony of distinguished educationists and chief guests at Cohen International School."
  },
  {
    id: 41,
    title: "Sports Meet & Athletic Championship Showcase",
    category: "Sports & Athletics",
    src: gImg26,
    location: "Central Sports Turf",
    tag: "ATHLETIC MEET",
    stat: "Sports Excellence",
    resolution: "4K UHD",
    description: "Scholars participating in annual sports meet athletic events and inter-house competitions."
  },
  {
    id: 42,
    title: "Science & STEAM Innovation Exhibition",
    category: "Innovation & Tech",
    src: gImg27,
    location: "Science Complex",
    tag: "STEAM EXHIBITION",
    stat: "Hands-on Science",
    resolution: "4K UHD",
    description: "Interactive science conclave and STEAM project demonstrations built by young student innovators."
  },
  {
    id: 43,
    title: "Campus Infrastructure & Lush Green Lawns",
    category: "Campus Infrastructure",
    src: gImg28,
    location: "Central Quadrangle",
    tag: "GREEN CAMPUS",
    stat: "10-Acres Sanctuary",
    resolution: "4K UHD",
    description: "Panoramic view of modern academic blocks surrounded by manicured green lawns and botanical gardens."
  },
  {
    id: 44,
    title: "Student Leadership & Award Ceremony",
    category: "Events & Celebrations",
    src: gImg29,
    location: "Grand Auditorium",
    tag: "STUDENT LEADERSHIP",
    stat: "Merit Awards",
    resolution: "4K UHD",
    description: "Honoring academic toppers, house captains, and student council members during the annual award ceremony."
  },
  {
    id: 45,
    title: "Special Celebrations & Interactive Campus Activity",
    category: "Events & Celebrations",
    src: gImg30,
    location: "Auditorium Complex",
    tag: "CAMPUS LIFE",
    stat: "Interactive Fun",
    resolution: "4K UHD",
    description: "Memorable moments from student activities, club workshops, and co-curricular celebrations."
  },
  {
    id: 46,
    title: "Chief Guest Keynote & Dignitary Welcome",
    category: "Inauguration & VIP Dignitaries",
    src: gImg31,
    location: "Podium Arena",
    tag: "VIP WELCOME",
    stat: "Keynote Address",
    resolution: "4K UHD",
    description: "Chief guest delivering an inspiring inaugural speech to parents, faculty, and scholars."
  },
  {
    id: 47,
    title: "Cohen Campus Life & Academic Quad",
    category: "Campus Infrastructure",
    src: gImg32,
    location: "Academic Block",
    tag: "SMART CAMPUS",
    stat: "Modern Facilities",
    resolution: "4K UHD",
    description: "High-tech smart campus facilities fostering academic excellence and holistic development."
  }
];

const categories = [
  "All Photos",
  "Campus Infrastructure",
  "Events & Celebrations",
  "Inauguration & VIP Dignitaries",
  "Innovation & Tech",
  "Sports & Athletics"
];

export default function Gallery({ isHomePage = false }) {
  const [squadIdx, setSquadIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [likes, setLikes] = useState({});
  const [copied, setCopied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Filter & Pagination State for Photo Gallery Grid
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Check window width for mobile responsive 3D card spacing
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter items based on selected category
  const filteredItems = activeCategory === "All Photos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Pagination calculation
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGridItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to page 1 on category change
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  // Automatic Smooth Carousel Scroll (Autoplay every 3.5s)
  useEffect(() => {
    if (selectedIdx !== null || isPaused) return;

    const timer = setInterval(() => {
      setSquadIdx((prev) => (prev + 1) % galleryItems.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [selectedIdx, isPaused]);

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleNextSquad = useCallback(() => {
    setSquadIdx((prev) => (prev + 1) % galleryItems.length);
  }, []);

  const handlePrevSquad = useCallback(() => {
    setSquadIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  const handleNextLightbox = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev + 1) % galleryItems.length);
    }
  }, [selectedIdx]);

  const handlePrevLightbox = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    }
  }, [selectedIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx !== null) {
        if (e.key === "ArrowRight") handleNextLightbox();
        if (e.key === "ArrowLeft") handlePrevLightbox();
        if (e.key === "Escape") setSelectedIdx(null);
      } else {
        if (e.key === "ArrowRight") handleNextSquad();
        if (e.key === "ArrowLeft") handlePrevSquad();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleNextLightbox, handlePrevLightbox, handleNextSquad, handlePrevSquad]);

  const copyShareLink = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectedImg = selectedIdx !== null ? galleryItems[selectedIdx] : null;

  // Compute 3D stage positions (Left, Center, Right)
  const getSquadPositionIndex = (index) => {
    const total = galleryItems.length;
    const diff = (index - squadIdx + total) % total;
    if (diff === 0) return 0; // Center
    if (diff === 1 || diff === -(total - 1)) return 1; // Right 1
    if (diff === total - 1 || diff === -1) return -1; // Left 1
    return 99; // Hidden offstage
  };

  return (
    <section className="py-12 lg:py-16 bg-white text-navy-950 border-t border-cream-200 relative overflow-hidden selection:bg-rose-500 selection:text-white">

      {/* Floating Icon + Rocket CSS Animations */}
      <style>{`
        @keyframes galFloat1 {
          0%   { transform: translateY(0px)   translateX(0px)  rotate(-6deg); opacity: 0.55; }
          50%  { transform: translateY(-28px) translateX(10px) rotate(8deg);  opacity: 1; }
          100% { transform: translateY(0px)   translateX(0px)  rotate(-6deg); opacity: 0.55; }
        }
        @keyframes galFloat2 {
          0%   { transform: translateY(0px)  translateX(0px)   rotate(4deg);  opacity: 0.5; }
          50%  { transform: translateY(24px) translateX(-12px) rotate(-8deg); opacity: 0.95; }
          100% { transform: translateY(0px)  translateX(0px)   rotate(4deg);  opacity: 0.5; }
        }
        @keyframes galFloat3 {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 0.45; }
          50%  { transform: translateY(18px)  rotate(12deg);  opacity: 1; }
          100% { transform: translateY(-10px) rotate(0deg);   opacity: 0.45; }
        }
        @keyframes galFloat4 {
          0%   { transform: scale(0.88) translateY(0px);   opacity: 0.4; }
          50%  { transform: scale(1.12) translateY(-22px);  opacity: 0.95; }
          100% { transform: scale(0.88) translateY(0px);   opacity: 0.4; }
        }
        @keyframes galFloat5 {
          0%   { transform: translateX(0px) translateY(0px)  rotate(-10deg); opacity: 0.5; }
          50%  { transform: translateX(18px) translateY(20px) rotate(10deg); opacity: 1; }
          100% { transform: translateX(0px) translateY(0px)  rotate(-10deg); opacity: 0.5; }
        }
        @keyframes galFloat6 {
          0%   { transform: translateY(12px) rotate(3deg);  opacity: 0.45; }
          50%  { transform: translateY(-20px) rotate(-5deg); opacity: 0.9; }
          100% { transform: translateY(12px) rotate(3deg);  opacity: 0.45; }
        }
        .gal-icon-1 { animation: galFloat1 7s ease-in-out infinite; }
        .gal-icon-2 { animation: galFloat2 9s ease-in-out infinite; }
        .gal-icon-3 { animation: galFloat3 6.5s ease-in-out infinite; }
        .gal-icon-4 { animation: galFloat4 8s ease-in-out infinite; }
        .gal-icon-5 { animation: galFloat5 10s ease-in-out infinite; }
        .gal-icon-6 { animation: galFloat6 7.5s ease-in-out infinite; }

        /* Rocket A wrapper: animates position bottom-left → top-right */
        @keyframes rocketApos {
          0%   { top: 108%; left: -8%;  opacity: 0; }
          6%   { opacity: 1; }
          94%  { opacity: 1; }
          100% { top: -15%; left: 108%; opacity: 0; }
        }
        /* Rocket B wrapper: animates position bottom-right → top-left */
        @keyframes rocketBpos {
          0%   { top: 108%; left: 108%; opacity: 0; }
          6%   { opacity: 1; }
          94%  { opacity: 1; }
          100% { top: -15%; left: -8%;  opacity: 0; }
        }
        .gal-rocket-a {
          position: absolute;
          animation: rocketApos 12s linear infinite;
          filter: drop-shadow(0 0 16px rgba(251,191,36,1));
          z-index: 20;
        }
        .gal-rocket-b {
          position: absolute;
          animation: rocketBpos 12s linear infinite;
          animation-delay: 6s;
          filter: drop-shadow(0 0 16px rgba(251,113,133,1));
          z-index: 20;
        }
      `}</style>

      {/* Floating Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[35rem] bg-gradient-to-b from-rose-500/5 via-gold-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Floating Decorative Icons Layer */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">

        {/* 🚀 Rocket A – flies from bottom-left corner → top-right corner */}
        <div className="gal-rocket-a">
          <div style={{ transform: 'rotate(45deg)' }}>
            <Rocket className="w-20 h-20 text-gold-400" />
          </div>
        </div>

        {/* 🚀 Rocket B – flies from bottom-right corner → top-left corner (delayed 3s) */}
        <div className="gal-rocket-b">
          <div style={{ transform: 'rotate(-45deg)' }}>
            <Rocket className="w-20 h-20 text-rose-400" />
          </div>
        </div>

        {/* 2. Graduation Cap – top-right */}
        <div className="absolute top-[8%] right-[2%] p-3 rounded-2xl bg-white/95 shadow-lg border border-gold-400/40 gal-icon-2" style={{ animationDelay: '1.2s' }}>
          <GraduationCap className="w-7 h-7 text-gold-600" />
        </div>

        {/* 3. Camera – mid-left */}
        <div className="absolute top-[42%] left-[1.5%] p-3 rounded-2xl bg-white/95 shadow-lg border border-rose-400/40 gal-icon-3" style={{ animationDelay: '0.7s' }}>
          <Camera className="w-7 h-7 text-rose-500" />
        </div>

        {/* 4. Star – mid-right */}
        <div className="absolute top-[40%] right-[2%] p-3 rounded-2xl bg-navy-900 shadow-lg border border-gold-400/40 gal-icon-4" style={{ animationDelay: '2s' }}>
          <Star className="w-7 h-7 text-gold-400" />
        </div>

        {/* 5. BookOpen – bottom-left */}
        <div className="absolute top-[75%] left-[2%] p-3 rounded-2xl bg-white/95 shadow-lg border border-indigo-400/40 gal-icon-5" style={{ animationDelay: '1.8s' }}>
          <BookOpen className="w-7 h-7 text-indigo-500" />
        </div>

        {/* 6. Atom – bottom-right */}
        <div className="absolute top-[72%] right-[1.8%] p-3 rounded-2xl bg-white/95 shadow-lg border border-emerald-400/40 gal-icon-6" style={{ animationDelay: '3s' }}>
          <Atom className="w-7 h-7 text-emerald-600" />
        </div>

        {/* 7. Math pill – left lower (π • E=mc²) */}
        <div className="absolute top-[58%] left-[1.5%] px-3 py-2 rounded-xl bg-navy-900 text-gold-400 font-serif text-xs font-bold shadow-lg border border-gold-400/30 gal-icon-2 flex items-center gap-1.5" style={{ animationDelay: '0.4s' }}>
          <span className="text-sm font-extrabold text-gold-300">π</span>
          <span>•</span>
          <span className="text-xs font-mono bg-white/10 px-1.5 py-0.5 rounded">E=mc²</span>
        </div>

        {/* 8. Sparkles – right lower */}
        <div className="absolute top-[60%] right-[2%] p-3 rounded-2xl bg-white/95 shadow-lg border border-amber-400/40 gal-icon-1" style={{ animationDelay: '2.5s' }}>
          <Sparkles className="w-7 h-7 text-amber-500" />
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Centered Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-navy-950 tracking-wider uppercase leading-none"
          >
            CAMPUS <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 bg-clip-text text-transparent italic">GALLERY</span>
          </motion.h2>
        </div>

        {/* 3D STAGE CAROUSEL */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[280px] sm:min-h-[520px] flex flex-col justify-center items-center py-2 sm:py-4"
        >

          <div className="relative w-full max-w-5xl h-[230px] sm:h-[460px] flex items-center justify-center">

            {/* Navigation Chevrons */}
            <button
              onClick={handlePrevSquad}
              className="absolute left-1 sm:left-6 z-40 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-700 to-rose-600 text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-[0_10px_30px_rgba(225,29,72,0.6)] border border-white/20 active:scale-95 group"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7 stroke-[3] group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleNextSquad}
              className="absolute right-1 sm:right-6 z-40 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-700 to-rose-600 text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-[0_10px_30px_rgba(225,29,72,0.6)] border border-white/20 active:scale-95 group"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 3D Rendered Cards */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {galleryItems.map((item, idx) => {
                const pos = getSquadPositionIndex(idx);
                if (pos === 99) return null; // Hidden offstage

                const isCenter = pos === 0;
                const isLeft = pos === -1;
                const isRight = pos === 1;

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      x: isCenter ? 0 : isLeft ? (isMobile ? -120 : -260) : (isMobile ? 120 : 260),
                      scale: isCenter ? 1.05 : 0.75,
                      rotateY: isCenter ? 0 : isLeft ? 15 : -15,
                      opacity: isCenter ? 1 : 0.5,
                      zIndex: isCenter ? 30 : 10,
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    onClick={() => {
                      if (isLeft) handlePrevSquad();
                      else if (isRight) handleNextSquad();
                      else setSelectedIdx(idx);
                    }}
                    className={`absolute w-[220px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl border-2 transition-all ${isCenter
                        ? "border-gold-500 shadow-[0_25px_70px_rgba(201,162,39,0.35)]"
                        : "border-cream-300 shadow-xl"
                      }`}
                  >
                    <img
                      src={item.src}
                      alt="Campus Photo"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------------------- */}
        {/* NEW PHOTO GALLERY GRID SECTION WITH CATEGORIES & PAGINATION     */}
        {/* ---------------------------------------------------------------- */}
        {!isHomePage && (
          <div id="photo-gallery-grid" className="mt-16 pt-12 border-t border-gray-200">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" /> Photo &amp; Event Archive
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display">
                  Campus Events &amp; Celebrations Gallery
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Explore memories, inauguration ceremonies, sports matches, and student achievements.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? "bg-navy-950 text-gold-400 shadow-md scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentGridItems.map((item) => {
                const globalIdx = galleryItems.findIndex(g => g.id === item.id);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedIdx(globalIdx >= 0 ? globalIdx : 0)}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-3 rounded-full bg-white/90 text-navy-950 shadow-xl group-hover:scale-110 transition-transform">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Clean Pagination Bar (Matching User Screenshot 1, 2, 3, >) */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-end gap-1.5 font-sans">
                {/* Prev Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition text-xs font-semibold"
                  aria-label="Previous Page"
                >
                  ‹
                </button>

                {/* Page Number Pills */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? "bg-[#007BFF] text-white shadow-md"
                        : "border border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition text-xs font-semibold"
                  aria-label="Next Page"
                >
                  ›
                </button>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Lightbox Cinema Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-navy-950/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-black/90 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl flex flex-col items-center justify-center p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/20 shadow-xl"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full flex items-center justify-center min-h-[300px] max-h-[85vh]">
                <img src={selectedImg.src} alt="Campus Photo" className="w-full h-full object-contain max-h-[82vh] rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
