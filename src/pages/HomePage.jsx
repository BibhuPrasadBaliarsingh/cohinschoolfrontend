import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import About from "../components/About";
import NewsAnnouncements from "../components/NewsAnnouncements";
import WhyChoose from "../components/WhyChoose";
import CvapSection from "../components/CvapSection";
import CohenTalks from "../components/CohenTalks";
import ClubsShortcut from "../components/ClubsShortcut";
import StartYourJourney from "../components/StartYourJourney";
import Admissions from "../components/Admissions";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Careers from "../components/Careers";
import AdmissionBanner from "../components/AdmissionBanner";
import Contact from "../components/Contact";

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
      {/* 1. Carousel / Hero */}
      <Hero
        openAdmissionModal={openAdmissionModal}
        openVirtualTour={openVirtualTour}
      />
    <AdmissionBanner openAdmissionModal={openAdmissionModal} />
      {/* 2. About & Chairman Message */}
      <About openChairmanModal={openChairmanModal} />

      {/* 3. Latest News & Events */}
      <NewsAnnouncements openAdmissionModal={openAdmissionModal} />

      {/* 4. What Makes Us Different (Why Choose CIS) */}
      <WhyChoose openDedicatedTopic={openDedicatedTopic} />

      {/* 4b. CVAP - Cohen Value Addition Programs */}
      <CvapSection />

      {/* 5. Clubs & Co-Curricular Activities Shortcut */}
      <ClubsShortcut />

      {/* 6. Cohen Talks */}
      <CohenTalks />

      {/* 6. Begin Your Journey */}
      {/* <StartYourJourney /> */}
      <Admissions openAdmissionModal={openAdmissionModal} />

      {/* 7. Campus Gallery */}
      <Gallery isHomePage={true} />

      {/* 8. Trusted By Educators / Testimonials */}
      <Testimonials />

      {/* 9. Careers at Cohen */}
      <Careers openCareerModal={openCareerModal} isHomePage={true} />

      {/* 10. Visit Our Campus */}
      
      <Contact openChatbot={openChatbot} />
    </PageWrapper>
  );
}
