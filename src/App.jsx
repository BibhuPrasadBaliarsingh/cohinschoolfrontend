import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import Modals from './components/Modals';

import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const SmartCampusPage = lazy(() => import('./pages/SmartCampusPage'));
const PortalsPage = lazy(() => import('./pages/PortalsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

const LoginPage = lazy(() => import('./pages/LoginPage'));
const UnauthorizedPage = lazy(() => import('./pages/UnauthorizedPage'));
const AdminDashboard = lazy(() => import('./pages/dashboards/AdminDashboard'));
const PrincipalDashboard = lazy(() => import('./pages/dashboards/PrincipalDashboard'));
const TeacherDashboard = lazy(() => import('./pages/dashboards/TeacherDashboard'));
const StudentDashboard = lazy(() => import('./pages/dashboards/StudentDashboard'));
const ParentDashboard = lazy(() => import('./pages/dashboards/ParentDashboard'));

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
    // Scroll reveal observer (triggers distinct slide-in as user scrolls cards into viewport view)
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    revealEls.forEach((el) => {
      // Only immediately reveal top elements inside initial hero/header fold
      if (el.getBoundingClientRect().top < window.innerHeight - 300) {
        el.classList.add('active-reveal');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950 flex items-center justify-center text-gold-400 font-bold text-sm">Loading...</div>}>
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
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/terms-and-conditions" element={<TermsPage />} />

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
  </Suspense>
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
