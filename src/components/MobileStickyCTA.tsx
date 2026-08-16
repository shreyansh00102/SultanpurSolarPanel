import React from 'react';
import { Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenQuote: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenQuote }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F1117]/95 backdrop-blur-lg border-t border-orange-500/30 p-3 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href="tel:+13035550199"
          className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center shrink-0"
          aria-label="Call Summit Solar"
        >
          <PhoneCall className="w-5 h-5 text-amber-400" />
        </a>
        <button
          onClick={onOpenQuote}
          className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95 transition-transform"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>Get Free Quote (₹0 Down)</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
