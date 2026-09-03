import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const talks = [
  {
    id: 3,
    image: "/images/cohen-talk/talk_3.jpeg",
    day: "27",
    month: "July",
    title: "Cohen Talks on Chess in Education",
  },
  {
    id: 1,
    image: "/images/cohen-talk/talk_1.jpg",
    day: "11",
    month: "September",
    title: "COHEN Talks",
  },
  {
    id: 2,
    image: "/images/cohen-talk/talk_2.jpeg",
    day: "17",
    month: "December",
    title: 'Cohen Talks "Newtons Playground"',
  },
];

export default function CohenTalks() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 text-center mb-10 lg:mb-14 font-bold">
          Cohen-Talks
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {talks.map((talk) => (
            <article
              key={talk.id}
              className="group relative overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.08)] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <Link to="/cohentalk" className="flex flex-col h-full justify-between">
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={talk.image}
                    alt={talk.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/facilities_banner.png";
                    }}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Date & Title Bar */}
                <div className="flex items-stretch bg-white border-t border-slate-100 min-h-[72px]">
                  <div className="bg-[#0b2545] text-white px-4 py-2.5 flex flex-col items-center justify-center min-w-[80px] flex-shrink-0">
                    <span className="font-display text-2xl sm:text-3xl font-bold leading-none">
                      {talk.day}
                    </span>
                    <span className="text-[11px] font-medium mt-1 leading-none text-white/90">
                      {talk.month}
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 flex items-center">
                    <h4 className="font-display font-semibold text-navy-900 text-sm sm:text-base leading-snug group-hover:text-gold-600 transition line-clamp-2">
                      {talk.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/cohentalk"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 font-bold rounded-xl shadow-lg transition-all duration-300 group"
          >
            <span>View All Cohen-Talks</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
