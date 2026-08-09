import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function HeaderBanner({ title, subtitle, badge, breadcrumb, bgImage }) {
  const imageSrc = bgImage || '/bg.png';
  return (
    <section className="relative pt-36 pb-24 bg-navy-900 overflow-hidden border-b border-gold-500/20">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title || 'Campus Banner'}
          className="w-full h-full object-cover opacity-45 brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-900/65 to-navy-950/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white/80 mb-6">
          <Link to="/" className="hover:text-gold-400 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-gold-400 font-medium">{breadcrumb || title}</span>
        </div>

        {badge && (
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </span>
          </div>
        )}

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
