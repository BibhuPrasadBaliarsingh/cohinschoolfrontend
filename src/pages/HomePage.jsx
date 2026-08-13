import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Academics from "../components/Academics";
import Facilities from "../components/Facilities";
import Admissions from "../components/Admissions";
import MediaCarousel from "../components/MediaCarousel";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Careers from "../components/Careers";
import Contact from "../components/Contact";
import NewsAnnouncements from "../components/NewsAnnouncements";
import AdmissionBanner from "../components/AdmissionBanner";

export default function HomePage({
  openAdmissionModal,
  openVirtualTour,
  openChairmanModal,
  openDedicatedTopic,
  openModule,
  openPortalFrame,
  openCareerModal,
  openChatbot,
}) {
  return (
    <PageWrapper>
      <Hero
        openAdmissionModal={openAdmissionModal}
        openVirtualTour={openVirtualTour}
      />
      <AdmissionBanner openAdmissionModal={openAdmissionModal} />
      <NewsAnnouncements openAdmissionModal={openAdmissionModal} />
      <About openChairmanModal={openChairmanModal} />
      <WhyChoose openDedicatedTopic={openDedicatedTopic} />
      <Academics />
      <Facilities openDedicatedTopic={openDedicatedTopic} />
      <Admissions openAdmissionModal={openAdmissionModal} />
      <Gallery />
      <Testimonials />
      <Careers openCareerModal={openCareerModal} />
      <Contact openChatbot={openChatbot} />
    </PageWrapper>
  );
}
