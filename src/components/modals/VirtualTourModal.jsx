import React, { useEffect } from 'react';
import { X, Video, MapPin, Calendar, Sparkles } from 'lucide-react';
import virtualCampusVideo from '../../assets/virtualcampus.mp4';

export default function VirtualTourModal({ closeModal, openAdmissionModal }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[130] bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-navy-950 text-white rounded-3xl max-w-4xl w-full shadow-2xl border border-gold-500/40 overflow-hidden relative flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900/90 px-5 sm:px-7 py-4 flex items-center justify-between border-b border-gold-500/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
              <Video className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-tight">
                Virtual Campus Tour
              </h3>
              <p className="text-gold-400 text-xs flex items-center gap-1.5 font-medium mt-0.5">
                <MapPin className="w-3.5 h-3.5" /> Cohen International School — 10-Acres Eco-Green Campus, Jatani
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-gold-500 hover:text-navy-950 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/40">
          <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video flex items-center justify-center">
            <video
              src={virtualCampusVideo}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-contain rounded-2xl"
            >
              Your browser does not support HTML5 video playback.
            </video>
          </div>
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="p-4 sm:p-6 bg-navy-900/90 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex flex-wrap items-center gap-2 text-white/80">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 10-Acres Campus
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
              STEM &amp; AI Labs
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
              Sports Complex
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                closeModal();
                openAdmissionModal?.('visit');
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-gold-500 text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition flex items-center justify-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" /> Schedule Physical Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
