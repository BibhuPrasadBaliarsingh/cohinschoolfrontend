import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import Modals from './components/Modals';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import SmartCampusPage from './pages/SmartCampusPage';
import PortalsPage from './pages/PortalsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

import LoginPage from './pages/LoginPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import PrincipalDashboard from './pages/dashboards/PrincipalDashboard';
import TeacherDashboard from './pages/dashboards/TeacherDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import ParentDashboard from './pages/dashboards/ParentDashboard';

function AnimatedRoutes({
  openAdmissionModal,
  openVirtualTour,
  openChairmanModal,
  openDedicatedTopic,
  openModule,
  openPortalFrame,
  openCareerModal,
  openChatbot,
  openLoginModal
}) {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none'
          },
          delay: (i % 4) * 0.03
        }
      );
    });
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      {/* Public Site Pages */}
      <Route
        path="/"
        element={
          <HomePage
            openAdmissionModal={openAdmissionModal}
            openVirtualTour={openVirtualTour}
            openChairmanModal={openChairmanModal}
            openDedicatedTopic={openDedicatedTopic}
            openModule={openModule}
            openPortalFrame={openPortalFrame}
            openCareerModal={openCareerModal}
            openChatbot={openChatbot}
          />
        }
      />
      <Route
        path="/about"
        element={
          <AboutPage
            openChairmanModal={openChairmanModal}
            openAdmissionModal={openAdmissionModal}
          />
        }
      />
      <Route
        path="/academics"
        element={<AcademicsPage openAdmissionModal={openAdmissionModal} />}
      />
      <Route
        path="/facilities"
        element={
          <FacilitiesPage
            openDedicatedTopic={openDedicatedTopic}
            openAdmissionModal={openAdmissionModal}
          />
        }
      />
      <Route
        path="/admissions"
        element={<AdmissionsPage openAdmissionModal={openAdmissionModal} />}
      />
      <Route
        path="/smart-campus"
        element={
          <SmartCampusPage
            openModule={openModule}
            openPortalFrame={openPortalFrame}
          />
        }
      />
      <Route
        path="/portals"
        element={
          <PortalsPage
            openPortalFrame={openPortalFrame}
            openLoginModal={openLoginModal}
          />
        }
      />
      <Route
        path="/careers"
        element={<CareersPage openCareerModal={openCareerModal} />}
      />
      <Route
        path="/contact"
        element={<ContactPage openChatbot={openChatbot} />}
      />

      {/* Authentication & Authorization Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Protected Private Role-Based Dashboards */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/principal/dashboard"
        element={
          <PrivateRoute allowedRoles={['admin', 'principal']}>
            <PrincipalDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/teacher/dashboard"
        element={
          <PrivateRoute allowedRoles={['admin', 'principal', 'teacher']}>
            <TeacherDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/student/dashboard"
        element={
          <PrivateRoute allowedRoles={['admin', 'principal', 'teacher', 'student']}>
            <StudentDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/parent/dashboard"
        element={
          <PrivateRoute allowedRoles={['admin', 'principal', 'parent']}>
            <ParentDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

function MainLayout() {
  const location = useLocation();
  const [modalState, setModalState] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Check if current route is a private dashboard or login page
  const isDashboardOrAuthPage =
    location.pathname.includes('/dashboard') ||
    location.pathname === '/login' ||
    location.pathname === '/unauthorized';

  const openAdmissionModal = (mode = 'apply') => {
    setModalState({ type: 'admission', data: { mode } });
  };

  const openLoginModal = (activeKey = 'parent') => {
    setModalState({ type: 'login', data: { activeKey } });
  };

  const openModule = (moduleKey) => {
    setModalState({ type: 'module', data: { moduleKey } });
  };

  const openPortalFrame = (portalKey) => {
    setModalState({ type: 'portalFrame', data: { portalKey } });
  };

  const openChairmanModal = () => {
    setModalState({ type: 'chairman', data: {} });
  };

  const openCareerModal = (role) => {
    setModalState({ type: 'career', data: { role } });
  };

  const openDedicatedTopic = (topicKey) => {
    setModalState({ type: 'topic', data: { topicKey } });
  };

  const openVirtualTour = () => {
    alert(
      'Virtual Campus Tour: In the full production version this opens an immersive 360° / video tour of the 10-acre campus, smart classrooms, labs, hostels and sports facilities. For this demo, please visit the campus or contact admissions.'
    );
  };

  const closeModal = () => {
    setModalState(null);
  };

  return (
    <div className="min-h-screen bg-cream-50 font-sans relative flex flex-col justify-between">
      <Preloader />

      {!isDashboardOrAuthPage && (
        <Navbar
          openLoginModal={openLoginModal}
          openAdmissionModal={openAdmissionModal}
        />
      )}

      <main className="flex-1">
        <AnimatedRoutes
          openAdmissionModal={openAdmissionModal}
          openVirtualTour={openVirtualTour}
          openChairmanModal={openChairmanModal}
          openDedicatedTopic={openDedicatedTopic}
          openModule={openModule}
          openPortalFrame={openPortalFrame}
          openCareerModal={openCareerModal}
          openChatbot={() => setChatbotOpen(true)}
          openLoginModal={openLoginModal}
        />
      </main>

      {!isDashboardOrAuthPage && <Footer />}

      {!isDashboardOrAuthPage && (
        <AIChatbot isOpen={chatbotOpen} setIsOpen={setChatbotOpen} />
      )}

      <Modals
        modalState={modalState}
        closeModal={closeModal}
        openLoginModal={openLoginModal}
        openPortalFrame={openPortalFrame}
        openAdmissionModal={openAdmissionModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <MainLayout />
      </Router>
    </AuthProvider>
  );
}
