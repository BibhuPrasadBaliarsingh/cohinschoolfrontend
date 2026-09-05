import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import Modals from '../components/Modals';
import ScrollToTop from '../components/ScrollToTop';
import { TopRouteLoader } from '../components/PageLoadingSpinner';
import EnquiryPopupModal from '../components/modals/EnquiryPopupModal';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function MainLayout() {
  const location = useLocation();
  const [modalState, setModalState] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [showAutoEnquiry, setShowAutoEnquiry] = useState(false);

  const isDashboardOrAuthPage =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/teacher') ||
    location.pathname.includes('/dashboard') ||
    location.pathname === '/login' ||
    location.pathname === '/unauthorized';

  // CSAT Enquiry Popup Modal Handler (Opens on CSAT Navbar button click)
  const openCsatModal = useCallback(() => {
    setShowAutoEnquiry(true);
  }, []);

  const handleCloseAutoEnquiry = useCallback(() => {
    setShowAutoEnquiry(false);
  }, []);

  useEffect(() => {
    const activate = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        el.classList.add('active-reveal');
      });
    };

    activate();
    const t = setTimeout(activate, 200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const openAdmissionModal = useCallback((mode = 'apply') => {
    setModalState({ type: 'admission', data: { mode } });
  }, []);

  const openLoginModal = useCallback((activeKey = 'parent') => {
    setModalState({ type: 'login', data: { activeKey } });
  }, []);

  const openModule = useCallback((moduleKey) => {
    setModalState({ type: 'module', data: { moduleKey } });
  }, []);

  const openPortalFrame = useCallback((portalKey) => {
    setModalState({ type: 'portalFrame', data: { portalKey } });
  }, []);

  const openChairmanModal = useCallback(() => {
    setModalState({ type: 'chairman', data: {} });
  }, []);

  const openViceChairmanModal = useCallback(() => {
    setModalState({ type: 'viceChairman', data: {} });
  }, []);

  const openSecretaryModal = useCallback(() => {
    setModalState({ type: 'secretary', data: {} });
  }, []);

  const openPrincipalModal = useCallback(() => {
    setModalState({ type: 'principal', data: {} });
  }, []);

  const openCareerModal = useCallback((role) => {
    setModalState({ type: 'career', data: { role } });
  }, []);

  const openDedicatedTopic = useCallback((topicKey) => {
    setModalState({ type: 'topic', data: { topicKey } });
  }, []);

  const openVirtualTour = useCallback(() => {
    setModalState({ type: 'virtualTour' });
  }, []);

  const openChatbot = useCallback(() => {
    setChatbotOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(null);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 font-sans relative flex flex-col justify-between">
      <ScrollToTop />
      <Preloader />
      <TopRouteLoader />

      {!isDashboardOrAuthPage && (
        <Navbar
          openLoginModal={openLoginModal}
          openAdmissionModal={openAdmissionModal}
          openChairmanModal={openChairmanModal}
          openViceChairmanModal={openViceChairmanModal}
          openSecretaryModal={openSecretaryModal}
          openPrincipalModal={openPrincipalModal}
          openCsatModal={openCsatModal}
        />
      )}

      <main className="flex-1">
        <Outlet
          context={{
            openAdmissionModal,
            openCsatModal,
            openVirtualTour,
            openChairmanModal,
            openViceChairmanModal,
            openSecretaryModal,
            openPrincipalModal,
            openDedicatedTopic,
            openModule,
            openPortalFrame,
            openCareerModal,
            openChatbot,
            openLoginModal
          }}
        />
      </main>

      {!isDashboardOrAuthPage && <Footer />}

      {!isDashboardOrAuthPage && <AIChatbot isOpen={chatbotOpen} setIsOpen={setChatbotOpen} />}

      <Modals
        modalState={modalState}
        closeModal={closeModal}
        openLoginModal={openLoginModal}
        openPortalFrame={openPortalFrame}
        openAdmissionModal={openAdmissionModal}
      />

      {!isDashboardOrAuthPage && new Date() < new Date('2026-11-02T00:00:00') && (
        <div className="fixed bottom-20 left-3 sm:bottom-6 sm:left-6 z-40 block">
          <button
            type="button"
            onClick={openCsatModal}
            className="group flex items-center gap-2.5 p-2.5 sm:p-3 pr-3.5 sm:pr-4 rounded-2xl bg-gradient-to-r from-[#06121E] via-[#0B1C2C] to-[#06121E] text-white border border-gold-500/50 shadow-2xl hover:border-gold-400 hover:scale-105 transition-all duration-300 cursor-pointer text-left backdrop-blur-md max-w-[calc(100vw-5rem)] sm:max-w-none"
            title="Register for CSAT 2026 (Cohen Scholarship Admission Test)"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-500 text-navy-950 flex items-center justify-center flex-shrink-0 font-extrabold shadow-md animate-pulse">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-navy-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-gold-400 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider">CSAT 2026</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold border border-emerald-500/30 whitespace-nowrap">Open</span>
              </div>
              <p className="text-white font-bold text-[11px] sm:text-xs leading-tight sm:leading-snug mt-0.5 flex items-center gap-1 group-hover:text-gold-300 transition-colors">
                <span className="hidden sm:inline">Cohen Scholarship Admission Test</span>
                <span className="sm:hidden">Scholarship Test</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </p>
            </div>
          </button>
        </div>
      )}

      <EnquiryPopupModal
        isOpen={showAutoEnquiry}
        onClose={handleCloseAutoEnquiry}
      />
    </div>
  );
}
