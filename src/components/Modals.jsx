import React from 'react';
import LoginModal from './modals/LoginModal';
import AdmissionModal from './modals/AdmissionModal';
import ModuleModal from './modals/ModuleModal';
import PortalFrameModal from './modals/PortalFrameModal';
import ChairmanModal from './modals/ChairmanModal';
import PrincipalModal from './modals/PrincipalModal';
import CareerModal from './modals/CareerModal';
import TopicModal from './modals/TopicModal';

export default function Modals({ modalState, closeModal, openLoginModal, openPortalFrame, openAdmissionModal }) {
  if (!modalState) return null;

  const { type, data } = modalState;

  if (type === 'login') {
    return (
      <LoginModal
        closeModal={closeModal}
        openLoginModal={openLoginModal}
        openPortalFrame={openPortalFrame}
        activeKey={data?.activeKey}
      />
    );
  }

  if (type === 'admission') {
    return <AdmissionModal closeModal={closeModal} mode={data?.mode} />;
  }

  if (type === 'module') {
    return <ModuleModal closeModal={closeModal} openLoginModal={openLoginModal} moduleKey={data?.moduleKey} />;
  }

  if (type === 'portalFrame') {
    return (
      <PortalFrameModal
        closeModal={closeModal}
        openLoginModal={openLoginModal}
        openPortalFrame={openPortalFrame}
        portalKey={data?.portalKey}
      />
    );
  }

  if (type === 'chairman') {
    return <ChairmanModal closeModal={closeModal} />;
  }

  if (type === 'principal') {
    return <PrincipalModal closeModal={closeModal} />;
  }

  if (type === 'career') {
    return <CareerModal closeModal={closeModal} role={data?.role} />;
  }

  if (type === 'topic') {
    return <TopicModal closeModal={closeModal} openAdmissionModal={openAdmissionModal} topicKey={data?.topicKey} />;
  }

  return null;
}
