import React, { useEffect } from 'react';
import HeaderBanner from '../components/HeaderBanner';
import Gallery from '../components/Gallery';
import bannerImg from '../assets/DSC03613.JPG';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 sm:pt-24 selection:bg-rose-500 selection:text-white">
      {/* Header Banner */}
      <HeaderBanner
        title="Campus Photo & Media Gallery"
        subtitle="Explore our vibrant campus life, state-of-the-art infrastructure, high-tech aerospace labs, and memorable events."
        backgroundImage={bannerImg}
        badgeText="OFFICIAL PHOTO ARCHIVE"
      />

      {/* Main Gallery Component */}
      <Gallery />
    </div>
  );
}
