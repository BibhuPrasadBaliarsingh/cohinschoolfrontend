import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Bot } from 'lucide-react';

export default function Contact({ openChatbot }) {
  return (
    <section id="contact" className="py-12 lg:py-16 bg-[#06121E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Get in Touch</p>
            <h2 className="font-display text-4xl text-white mb-6">Visit Our Campus</h2>
            <p className="text-white/70 mb-10">
              Situated in the scenic foothills of Barunei Hills, adjacent to IIT Bhubaneswar — a peaceful yet connected location ideal for focused learning.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p className="text-white/60 text-sm mt-1">
                    Plot No. 111(P) & 112(P), Haridamada<br />
                    Adjacent to IIT Bhubaneswar, Jatani – 752050<br />
                    Khordha, Bhubaneswar, Odisha
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone & Admission Enquiry</p>
                  <div className="text-white/60 text-sm mt-1 space-y-1">
                    <div className="flex flex-wrap gap-1.5">
                      <a href="tel:+917077775310" className="hover:text-gold-400 hover:underline transition">+91 7077775310</a> /
                      <a href="tel:+917077775311" className="hover:text-gold-400 hover:underline transition">7077775311</a> /
                      <a href="tel:+917077775312" className="hover:text-gold-400 hover:underline transition">7077775312</a>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <a href="tel:+917077775313" className="hover:text-gold-400 hover:underline transition">+91 7077775313</a> /
                      <a href="tel:+919777706447" className="hover:text-gold-400 hover:underline transition">9777706447</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <div className="text-white/60 text-sm mt-1 space-y-1">
                    <a href="mailto:info@coheninternationalschool.com" className="block hover:text-gold-400 hover:underline transition">
                      info@coheninternationalschool.com
                    </a>
                    <a href="mailto:principal@coheninternationalschool.com" className="block hover:text-gold-400 hover:underline transition">
                      principal@coheninternationalschool.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/917077775310"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-500 transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button
                onClick={openChatbot}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition"
              >
                <Bot className="w-4 h-4" /> AI Chat
              </button>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-3xl overflow-hidden h-96 lg:h-full min-h-[400px] border border-white/10">
              <iframe
                title="Cohen International School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.7237285797105!2d85.64413447553629!3d20.145570281291796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b30c772c4d5%3A0x1e2b07a7e0d0685e!2sCOHEN%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1788344493936!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="grayscale hover:grayscale-0 transition duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
