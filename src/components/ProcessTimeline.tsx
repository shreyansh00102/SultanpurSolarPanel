import React from 'react';
import { Search, FileText, Wrench, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { PROCESS_TIMELINE } from '../data/solarData';

interface ProcessTimelineProps {
  onOpenQuote: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-orange-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-yellow-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-[#0F1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
            <Clock className="w-4 h-4" />
            Seamless 4-Step Installation Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Assessment to Activation in <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Record Time</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We handle all engineering, city permits, Xcel Energy utility approvals, and installation in 1 day.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-orange-500/40 via-amber-500/30 to-emerald-500/40 -translate-y-6 z-0" />

          {PROCESS_TIMELINE.map((item, index) => (
            <div
              key={index}
              className="relative z-10 bg-[#151922] border border-white/10 hover:border-orange-500/50 rounded-3xl p-6 space-y-4 shadow-xl hover:shadow-orange-500/10 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-3xl font-black text-white/20 group-hover:text-orange-400/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                    Est. {item.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                <span>Phase {index + 1} of 4</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-orange-950/60 via-slate-900 to-amber-950/40 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-2xl font-bold text-white">Ready to Start Step 1 Today?</h4>
            <p className="text-sm text-slate-300">Get your free custom CAD roof analysis and financial forecast in 24 hours.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-lg shadow-orange-500/25 flex items-center gap-2 shrink-0 text-sm"
          >
            Start Free Assessment
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
