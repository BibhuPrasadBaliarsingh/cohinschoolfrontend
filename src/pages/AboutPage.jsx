import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import About from '../components/About';
import StartYourJourney from '../components/StartYourJourney';
import { Target, Compass, Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ openChairmanModal, openAdmissionModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="About Cohen International School"
        subtitle="A 10-Acre Green Campus Next to IIT Bhubaneswar — Where Academic Rigor Meets Holistic Growth & Future-Ready Skills."

        breadcrumb="About Us"
        bgImage="/images/about_banner.png"
      />

      <StartYourJourney />

      <About openChairmanModal={openChairmanModal} />

      {/* Chairman's Desk Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#efefef]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center">
            <div className="w-full h-[340px] sm:h-[420px] lg:h-[460px] bg-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/chairman.jpg"
                alt="Chairman portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[#2d7d55] font-medium text-xl sm:text-2xl lg:text-3xl font-display leading-none">
                From
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] leading-[0.95] text-navy-900 mt-2">
                Chairman's Desk
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-navy-700/80 max-w-xl">
                CIS is a unique school, which is a temple of learning and a stepping stone to every kid's dreams. Our first step paves the road to our destination and hence, beginnings do matter a lot. My humble beginning with a passion to learn, courage to face obstacles, “never say never” attitude laid the foundation for my life’s principles and my vision.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-700/80 max-w-xl">
                As a kid, I always felt that the need to have an educational institution that not only offers world-class academics, but also helps students pursue their dreams, whether it is in academics or art or sports or management. CIS is the brainchild of my vision and the relentless efforts of like-minded people. I urge you all to pay a visit to our lovely campus...
              </p>

              <button
                onClick={openChairmanModal}
                className="mt-8 inline-flex items-center justify-between gap-4 w-full max-w-[260px] rounded-lg bg-[#2e9e4b] px-6 py-4 text-left text-white shadow-[0_10px_25px_rgba(46,158,75,0.28)] hover:bg-[#288d43] transition-colors duration-200"
              >
                <span className="font-semibold text-lg">Know more</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-xl leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vice Chairman's Desk Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <p className="text-[#2d7d55] font-medium text-xl sm:text-2xl lg:text-3xl font-display leading-none">
                From
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] leading-[0.95] text-navy-900 mt-2">
                Vice Chairman's Desk
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-navy-700/80 max-w-xl">
                At Cohen International School, we believe that true education goes beyond textbooks—it is about inspiring young minds to discover their unique potential, cultivate character, and build resilience for tomorrow's global challenges.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-700/80 max-w-xl">
                Our state-of-the-art campus, innovative STEM curriculum, and holistic sports programs are thoughtfully designed to nurture well-rounded leaders. We are committed to fostering an environment where every child feels valued, supported, and motivated to achieve academic excellence.
              </p>

              <button
                onClick={openChairmanModal}
                className="mt-8 inline-flex items-center justify-between gap-4 w-full max-w-[260px] rounded-lg bg-[#2e9e4b] px-6 py-4 text-left text-white shadow-[0_10px_25px_rgba(46,158,75,0.28)] hover:bg-[#288d43] transition-colors duration-200"
              >
                <span className="font-semibold text-lg">Know more</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-xl leading-none">→</span>
              </button>
            </div>

            {/* Right Column: Vice Chairman Image */}
            <div className="w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 order-1 lg:order-2 bg-[#0B1C2C]">
              <img
                src="/images/about_vc.jpg"
                alt="Vice Chairman portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pedagogy Section */}
      <section className="py-20 bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-2 block">
              Our Core Pedagogy
            </span>
            <h2 className="font-display text-4xl text-navy-900 font-bold mb-4">
              The CIS Learning Framework
            </h2>
            <p className="text-navy-700/70 max-w-2xl mx-auto">
              Our unique educational methodology empowers students to become independent thinkers, innovators, and compassionate leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-xl mb-6">
                C
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-semibold mb-3">
                Collaborative Learning
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Classroom group projects, peer discussions, and team problem-solving foster communication, teamwork, and global perspective.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-900 flex items-center justify-center font-bold text-xl mb-6">
                I
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-semibold mb-3">
                Instrumental Knowledge
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Practical application through AI Robotics labs, STEM experiments, Cambridge speech labs, and competitive coaching modules.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-xl mb-6">
                S
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-semibold mb-3">
                Self-Paced Growth
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed">
                Customized academic mentorship, personalized doubt-clearing sessions, and digital portal access tailored to each child's learning speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Experience the CIS Campus Difference
          </h2>
          <p className="text-white/70 text-base mb-8">
            Book a personal campus tour or speak directly with our admissions desk to learn more about the AY 2027-2028 batch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openAdmissionModal('apply')}
              className="btn-premium px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-full shadow-lg hover:bg-gold-400 transition"
            >
              Apply Online Now
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
