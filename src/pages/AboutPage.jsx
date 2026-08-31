import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import About from '../components/About';
import StartYourJourney from '../components/StartYourJourney';
import { Target, Compass, Award, BookOpen, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ openChairmanModal, openPrincipalModal, openAdmissionModal }) {
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

      {/* Principal's Desk Section */}
      <section id="principal-desk" className="py-14 sm:py-16 lg:py-20 bg-[#f4f6f8] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left Column: Image */}
            <div className="w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-navy-950">
              <img
                src="/images/about_banner.png"
                alt="Principal portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center">
              <p className="text-[#2d7d55] font-medium text-xl sm:text-2xl lg:text-3xl font-display leading-none">
                From
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[4rem] leading-[0.95] text-navy-900 mt-2">
                Principal's Desk
              </h2>

              <p className="mt-6 font-semibold text-navy-900 text-base sm:text-lg">
                Dear Students and Parents,
              </p>

              <p className="mt-3 text-base sm:text-lg leading-relaxed text-navy-700/80 max-w-xl">
                I would like to take this opportunity to warmly welcome you to CIS. We are fully committed to guiding our community of learners towards holistic development. As an international school, CIS develops the whole child as a responsible learner, striving for personal excellence within a thought-provoking academic environment...
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-700/80 max-w-xl">
                At CIS, we believe in the philosophy of imparting holistic education. Education can not be confined only to books. One can learn a lot from nature and the environment around. The best way to educate a kid is to teach him/her to let their imagination grow...
              </p>

              <button
                onClick={openPrincipalModal}
                className="mt-8 inline-flex items-center justify-between gap-4 w-full max-w-[260px] rounded-lg bg-[#2e9e4b] px-6 py-4 text-left text-white shadow-[0_10px_25px_rgba(46,158,75,0.28)] hover:bg-[#288d43] transition-colors duration-200"
              >
                <span className="font-semibold text-lg">Know more</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-xl leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION, MISSION & 4 SALIENT PILLARS SECTION ── */}
      <section className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0B1C2C] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" /> School Motto: Enabling Excellence, Through Harmony
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">
              Our Vision &amp; Mission
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Moulding the future of students by enriching childhood through Knowledge, Insight, Innovation, Technology and Transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Our Vision Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-gold-400/60 transition shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-3">Our Vision</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                  We envisage Cohen International School as a unique international school that gives education a new name by breaking typical characteristics and moulding the future of students by optimising educational opportunities as the cornerstone of learning procedure.
                </p>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Cohen International School also believes in enriching childhood by imparting Knowledge, Insight, Innovation, Technology and Transformation in accordance with global needs.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-gold-400/60 transition shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-3">Our Mission</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                  Cohen International School is committed to motivate, encourage and inculcate every student with the mantra of <strong className="text-gold-400 font-bold">"Know, Learn and Outshine the World"</strong>. Our motto is <strong>'Enabling Excellence, Through Harmony'</strong>.
                </p>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  We believe that each child is special and our mission to help the kids explore the various fields available and choose one of their own interest. Cohen International School in its pursuit for imparting holistic education, empowers students by best in class academics &amp; sports, imbibes &amp; inculcates creative learning with goal oriented, overall development.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Salient Features of Mission */}
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl text-white font-bold mb-2">
              4 Salient Features of Our Mission
            </h3>
            <p className="text-white/60 text-xs sm:text-sm">Foundational pillars supporting holistic student development</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-gold-400 font-bold text-xs uppercase tracking-wider block mb-2">01. Academic Core</span>
              <h4 className="font-display text-lg text-white font-bold mb-2">Holistic Education</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We aim at becoming a world-class teaching institution, one that will lay the foundation stone for intellectual minds and a compassionate heart.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-2">02. Health &amp; Yoga</span>
              <h4 className="font-display text-lg text-white font-bold mb-2">Physical and Mental Wellness</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                A sound mind resides in a sound body. We value the importance of physical fitness and mental wellness. CIS curriculum will include sports, Yoga activities and sessions for catering to the emotional needs of each child.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-purple-400 font-bold text-xs uppercase tracking-wider block mb-2">03. Moral &amp; Values</span>
              <h4 className="font-display text-lg text-white font-bold mb-2">Intellectual Development</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                We aim at imparting knowledge that not only kindles the minds but also touches their heart. Our curriculum will include human values, gender equality, outreach activities, moral education in addition to the formal education.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block mb-2">04. Talent Platform</span>
              <h4 className="font-display text-lg text-white font-bold mb-2">Follow Your Dream</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                CIS offers the right platform to harness the unique talents of each kid, and groom them to be excel in the fields of their choice, be it academics, fine arts, sports.
              </p>
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
