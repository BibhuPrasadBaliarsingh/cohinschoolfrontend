import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import Modals from '../components/Modals';
import { TopRouteLoader } from '../components/PageLoadingSpinner';

export default function MainLayout() {
  const location = useLocation();
  const [modalState, setModalState] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const isDashboardOrAuthPage =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/teacher') ||
    location.pathname.includes('/dashboard') ||
    location.pathname === '/login' ||
    location.pathname === '/unauthorized';

  useEffect(() => {
    let observer = null;
    let timer = null;
    let mutationObserver = null;

    const setupObserver = () => {
      const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active-reveal');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('active-reveal');
        } else {
          observer.observe(el);
        }
      });
    };

    setupObserver();
    timer = setTimeout(setupObserver, 250);

    mutationObserver = new MutationObserver(() => {
      setupObserver();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (timer) clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
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
    alert(
      'Virtual Campus Tour: In the full production version this opens an immersive 360° / video tour of the 10-acre campus, smart classrooms, labs, hostels and sports facilities. For this demo, please visit the campus or contact admissions.'
    );
  }, []);

  const openChatbot = useCallback(() => {
    setChatbotOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(null);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 font-sans relative flex flex-col justify-between">
      <Preloader />
      <TopRouteLoader />

      {!isDashboardOrAuthPage && (
        <Navbar
          openLoginModal={openLoginModal}
          openAdmissionModal={openAdmissionModal}
          openChairmanModal={openChairmanModal}
          openPrincipalModal={openPrincipalModal}
        />
      )}

      <main className="flex-1">
        <Outlet
          context={{
            openAdmissionModal,
            openVirtualTour,
            openChairmanModal,
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
    </div>
  );
}
