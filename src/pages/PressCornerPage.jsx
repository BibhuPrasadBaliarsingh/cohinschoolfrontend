import React, { useEffect } from 'react';
import HeaderBanner from '../components/HeaderBanner';
import PressCorner from '../components/PressCorner';
import bannerImg from '../assets/presscorner/cohen_official_img_6.jpg';

export default function PressCornerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 sm:pt-24 selection:bg-rose-500 selection:text-white">
      {/* Header Banner */}
      <HeaderBanner
        title="Official Press & Media Corner"
        subtitle="Newspaper features, state rank achievements, and media publications showcasing Cohen International School."
        backgroundImage={bannerImg}
        badgeText="OFFICIAL MEDIA ARCHIVE"
      />

      {/* Main Press Corner Component */}
      <PressCorner />
    </div>
  );
}
