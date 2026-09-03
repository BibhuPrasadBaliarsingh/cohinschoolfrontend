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

      <EnquiryPopupModal
        isOpen={showAutoEnquiry}
        onClose={handleCloseAutoEnquiry}
      />
    </div>
  );
}
