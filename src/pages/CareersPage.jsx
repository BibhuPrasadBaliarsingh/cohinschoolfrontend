import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import Careers from '../components/Careers';

export default function CareersPage({ openCareerModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Careers & Faculty Recruitment at CIS"
        subtitle="We empower our educators with competitive remuneration, PF & ESI social security, continuous CPD training, and a state-of-the-art tech workspace."
        breadcrumb="Careers"
        bgImage="/images/academics_banner.png"
      />

      <Careers openCareerModal={openCareerModal} />
    </PageWrapper>
  );
}
