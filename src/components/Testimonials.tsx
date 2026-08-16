import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/solarData';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#0F1117] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
            <MessageSquare className="w-4 h-4" />
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved By <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">400+ Denver Homeowners</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Read what your Denver neighbors have to say about going solar with Summit Solar.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#151922] border border-white/10 hover:border-orange-500/40 rounded-3xl p-6 space-y-6 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & System Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                    {item.systemKw}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-500/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">{item.location} • {item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-white/10 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h3 className="text-2xl font-extrabold text-white">Got Questions About Going Solar?</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#141822] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-orange-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-2 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
