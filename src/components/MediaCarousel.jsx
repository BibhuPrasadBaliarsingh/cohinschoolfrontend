import React, { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import img3604 from "../assets/DSC03604.JPG";
import img3612 from "../assets/DSC03612.JPG";
import img3624 from "../assets/DSC03624.JPG";

const defaultSlides = [
  {
    id: 1,
    title: "Campus Life Tour",
    subtitle: "A glimpse into smart classrooms, labs and green spaces.",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: img3612,
  },
  {
    id: 2,
    title: "STEM and Robotics",
    subtitle: "Hands-on learning with AI, robotics and labs.",
    type: "image",
    src: img3624,
  },
  {
    id: 3,
    title: "Sports & Wellness",
    subtitle: "Balanced growth through sports, yoga and outdoor learning.",
    type: "image",
    src: img3604,
  },
];

export default function MediaCarousel({ slides = defaultSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">
              Media Showcase
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white">
              Explore Our Campus Stories
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Swipe through highlights from our campus, classrooms, and student
              experiences. Each slide supports both video and image content for
              richer presentation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-navy-950 hover:bg-gold-300 transition"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_90px_rgba(0,0,0,0.95)]">
          <div className="absolute inset-x-0 top-0 flex justify-center gap-2 pt-5 z-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-gold-400" : "bg-white/30"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.75fr_1fr] p-8 items-center">
            <div className="rounded-3xl overflow-hidden bg-black shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              {slides[activeIndex].type === "video" ? (
                <div className="relative">
                  <video
                    key={slides[activeIndex].src}
                    src={slides[activeIndex].src}
                    poster={slides[activeIndex].poster}
                    controls
                    className="w-full h-full max-h-[440px] object-cover"
                    playsInline
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                </div>
              ) : (
                <img
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].title}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                  className="w-full h-full max-h-[440px] object-cover"
                />
              )}
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-4 py-2 text-gold-300 text-sm font-medium">
                <PlayCircle className="w-4 h-4" />
                {slides[activeIndex].type === "video"
                  ? "Video Slide"
                  : "Image Slide"}
              </div>
              <div>
                <h3 className="font-display text-3xl text-white">
                  {slides[activeIndex].title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {slides[activeIndex].subtitle}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-3xl border px-4 py-4 text-left transition ${index === activeIndex
                      ? "border-gold-400 bg-gold-500/10 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                  >
                    <p className="font-semibold">{slide.title}</p>
                    <p className="text-sm mt-1 text-white/60">{slide.type}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
