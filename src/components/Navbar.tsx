import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (initialBill?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppUrl = () => {
    return "https://wa.me/917068286755?text=" + encodeURIComponent("Namaste Sultanpur Solar Panel! I am reaching out for a free solar quote.");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070D19]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-[#070D19] to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Logo & Tiranga Indian Flag Company Name */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0 min-w-0"
          >
            <div className="h-9 sm:h-12 w-9 sm:w-12 rounded-xl bg-white/5 p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0 overflow-hidden flex items-center justify-center border border-white/20">
              <img src="/official-logo.png?v=4" alt="Sultanpur Solar Panel Official Logo" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs xs:text-sm sm:text-xl font-black tracking-tight uppercase whitespace-nowrap">
                  <span className="text-[#FF9933]">SULTANPUR </span>
                  <span className="text-white">SOLAR </span>
                  <span className="text-[#138808]">PANEL</span>
                </span>
              </div>
              <p className="text-[8px] xs:text-[9px] sm:text-[10px] text-amber-400 font-semibold tracking-wide uppercase truncate hidden xs:block">POWERING SULTANPUR, ENERGIZING FUTURE</p>
            </div>
          </div>

          {/* Minimal Clean Action Items: Mobile Number, WhatsApp Connect Icon, Get In Touch Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Clickable Mobile Phone Number */}
            <a 
              href="tel:+917068286755" 
              className="flex items-center gap-1.5 text-xs font-bold text-slate-200 p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all shrink-0"
              title="Call Us (+91 70682 86755)"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden md:inline font-bold">+91 70682 86755</span>
            </a>

            {/* WhatsApp Connect Icon */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-3 sm:py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-1.5 font-bold text-xs shrink-0"
              title="WhatsApp Connect"
            >
              <img src="/whatsapp-logo.png?v=5" alt="WhatsApp" className="w-5 h-5 object-contain shrink-0 rounded-lg drop-shadow" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Get In Touch Button */}
            <button
              onClick={() => onOpenQuote()}
              className="px-2.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 rounded-xl shadow-lg shadow-orange-500/25 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 hidden sm:inline" />
              <span>Get In Touch</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

