import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function StartYourJourney() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Description & Download Brochure Button */}
          <div className="flex flex-col justify-center">
            <div>
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2d9d4c] block leading-tight">
                Start
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#142347] leading-none mt-1">
                your journey
              </h2>
            </div>

            <div className="mt-6 text-navy-700/85 text-base sm:text-lg leading-relaxed">
              <p>
                Cohen International School (CIS) is the best CBSE School in Bhubaneswar, Odisha. The school believes in providing a comprehensive, inspiring environment for personalized and collaborative education. This climate is conducive to boost academic excellence and creative brilliance. Smart education at Cohen International School is the foundation and basic stage for the development of children.
                {isExpanded && (
                  <span className="inline transition-all duration-300">
                    {" "}All efforts are dedicated to nurturing leadership qualities, ethical values, critical thinking, and career brilliance through state-of-the-art AI labs, Cambridge language modules, and integrated IIT-JEE/NEET foundation prep.
                  </span>
                )}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#2d9d4c] font-semibold ml-1.5 hover:underline inline-flex items-center gap-0.5 focus:outline-none"
                >
                  {isExpanded ? "Read less" : "...Read more"}
                </button>
              </p>
            </div>

            {/* Download Brochure Split Button */}
            <div className="mt-8 flex items-center">
              <a
                href="https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-stretch rounded-xl overflow-hidden shadow-xl border border-emerald-600/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="bg-[#2E7D32] group-hover:bg-[#256628] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 flex items-center transition-colors">
                  Download Brochure
                </div>
                <div className="bg-white text-slate-800 group-hover:text-emerald-700 px-4 py-3.5 border-l border-emerald-700/20 flex items-center justify-center font-bold text-xl transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#2E7D32]" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: CIS Live Video Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#03091B] border border-navy-900 group">
            
            {/* Top Right Logo Overlay */}
            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/40 flex items-center gap-2">
              <img src="/logo.png" alt="Cohen International School Logo" className="h-7 w-auto object-contain" />
            </div>

            {/* HTML5 Video Element */}
            <video
              ref={videoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="/bg.png"
              className="w-full aspect-video object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Overlay Graphic when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-navy-950/70 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer z-10 p-6 text-center transition-opacity"
              >
                {/* Decorative Infographic Circles */}
                <div className="relative w-full max-w-sm flex items-center justify-center mb-4">
                  
                  {/* Left Circle: INNOVATIVE LEARNING */}
                  <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-red-600/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-2 rounded-full border border-white/20 shadow-lg text-center leading-tight">
                    INNOVATIVE<br />LEARNING
                  </div>

                  {/* Top Circle: HASSLE FREE */}
                  <div className="bg-navy-900/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                    HASSLE FREE
                  </div>

                  {/* Right Circle: TIME SAVING */}
                  <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-red-600/90 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-2 rounded-full border border-white/20 shadow-lg text-center leading-tight">
                    TIME<br />SAVING
                  </div>
                </div>

                {/* Big Center Play Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform mb-3">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                </div>

                {/* CIS Live Title */}
                <div className="bg-navy-950/80 px-4 py-1 rounded-full border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
                  CIS Live Campus Overview
                </div>
              </div>
            )}

            {/* Custom Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-3 flex items-center justify-between z-20 text-white/90 text-xs">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="hover:text-gold-400 transition">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <span>0:00 / 1:30</span>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={toggleMute} className="hover:text-gold-400 transition">
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button onClick={handleFullscreen} className="hover:text-gold-400 transition">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
