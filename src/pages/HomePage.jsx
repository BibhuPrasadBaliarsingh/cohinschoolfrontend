import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import Admissions from '../components/Admissions';
import DigitalEcosystem from '../components/DigitalEcosystem';
import PortalsPreview from '../components/PortalsPreview';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Careers from '../components/Careers';
import Contact from '../components/Contact';

export default function HomePage({
  openAdmissionModal,
  openVirtualTour,
  openChairmanModal,
  openDedicatedTopic,
  openModule,
  openPortalFrame,
  openCareerModal,
  openChatbot
}) {
  return (
    <PageWrapper>
      <Hero
        openAdmissionModal={openAdmissionModal}
        openVirtualTour={openVirtualTour}
      />
      <About openChairmanModal={openChairmanModal} />
      <WhyChoose openDedicatedTopic={openDedicatedTopic} />
      <Academics />
      <Facilities openDedicatedTopic={openDedicatedTopic} />
      <Admissions openAdmissionModal={openAdmissionModal} />
      <DigitalEcosystem openModule={openModule} />
      <PortalsPreview openPortalFrame={openPortalFrame} />
      <Gallery />
      <Testimonials />
      <Careers openCareerModal={openCareerModal} />
      <Contact openChatbot={openChatbot} />
    </PageWrapper>
  );
}
