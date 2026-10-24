import React from 'react';
import { Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenQuote: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenQuote }) => {
  const getWhatsAppUrl = () => {
    return "https://wa.me/917068286755?text=" + encodeURIComponent("Namaste Sultanpur Solar Panel! I am reaching out for a free solar quote.");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070D19]/95 backdrop-blur-xl border-t border-orange-500/30 p-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+917068286755"
          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center shrink-0"
          aria-label="Call Sultanpur Solar Panel"
          title="Call +91 70682 86755"
        >
          <PhoneCall className="w-4 h-4 text-amber-400" />
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center shrink-0"
          aria-label="WhatsApp Chat"
          title="WhatsApp Chat"
        >
          <img src="/whatsapp-logo.png?v=5" alt="WhatsApp" className="w-5 h-5 object-contain rounded-lg drop-shadow" />
        </a>
        <button
          onClick={onOpenQuote}
          className="flex-1 py-2.5 px-3 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-1.5 text-xs active:scale-95 transition-transform whitespace-nowrap"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Get In Touch</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};
