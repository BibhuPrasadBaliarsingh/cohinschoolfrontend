import React from "react";
import PageWrapper from "../components/PageWrapper";
import HeaderBanner from "../components/HeaderBanner";
import { Atom } from "lucide-react";

const advisoryMembers = [
  {
    id: 1,
    name: "Professor Ajit Mohan Srivastava",
    designation: "Professor at Institute of Physics, Bhubaneswar",
    image: "/images/prof_ajit_srivastava.png",
    credentials: [
      "Faculty at Institute of Physics, Bhubaneswar since 1994",
      "Ph.D. in 1989, in Theoretical High Energy Physics from Syracuse University Syracuse, New York, USA",
      "Research Associate at Institute for Theoretical Physics, University of California, Santa Barbara, California, USA (1992 - 94)",
      "Research Associate (1989 – 92) at the Theoretical Physics Institute, University of Minnesota, Minneapolis, Minnesota, USA",
      "M.Sc. in Physics from Indian Institute of Technology (IIT), Kanpur, 1983",
      "B.Sc. from Allahabad University, 1981",
    ],
    researchInterests:
      "Elementary particle physics, cosmology (study of the universe), quark gluon plasma, large hadron collider",
  },
  {
    id: 2,
    name: "Dr. Seema Bahinipati",
    designation:
      "Assistant Professor in School of Basic Sciences, Indian Institute of Technology Bhubaneswar",
    image: "/images/dr_seema_bahinipati.png",
    credentials: [
      "Faculty at Indian Institute of Technology Bhubaneswar since 2012",
      "Ph.D. in 2008 in Experimental High Energy Physics from University of Cincinnati, Ohio, U.S.A.",
      "Postdoctoral Fellow at National Central University, Taiwan (2011-12)",
      "Postdoctoral Fellow at University of Alberta, Alberta, Canada (2008 -2011)",
      "M.S. degree in 2012 from University of Cincinnati, Ohio, U.S.A.",
      "M.Sc. (Physics) in 1999 from Utkal University, Odisha",
    ],
    researchInterests:
      "Experimental High Energy Physics (B Physics, Charm Physics, CP violation, Beyond Standard Model Physics)",
  },
];

export default function ScientificAdvisoryBoardPage() {
  return (
    <PageWrapper>
      {/* Header Banner */}
      <HeaderBanner
        title="Scientific Advisory Board"
        subtitle="Eminent Scientists & Scholars Guiding Research, STEM Innovation & Scientific Inquiry at Cohen International School."
        bgImage="/images/about_banner.png"
        breadcrumb="Scientific Advisory Board"
      />

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3 border border-navy-900/10">
              <Atom className="w-4 h-4 text-gold-600" /> Academic & Scientific Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-bold tracking-tight">
              Scientific Advisory Board
            </h2>
            <div className="w-20 h-1.5 bg-gold-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-16">
            {advisoryMembers.map((member) => (
              <article
                key={member.id}
                className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Photo Frame */}
                  <div className="w-full md:w-64 h-64 sm:h-72 rounded-2xl overflow-hidden bg-navy-950 border-2 border-gold-500/40 shadow-lg flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/about_banner.png";
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                        {member.designation}
                      </p>
                    </div>

                    {/* Qualifications Bullet Points */}
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-700/90 font-sans pt-2">
                      {member.credentials.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-gold-600 font-bold text-lg leading-none select-none">
                            •
                          </span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Research Interests */}
                    <div className="pt-4 border-t border-slate-200/80">
                      <p className="text-sm sm:text-base text-navy-950 font-sans">
                        <strong className="font-semibold text-slate-900">
                          Research Interests:
                        </strong>{" "}
                        <span className="text-slate-700">{member.researchInterests}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
