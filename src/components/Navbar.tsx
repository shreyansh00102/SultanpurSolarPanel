import React, { useState, useEffect } from 'react';
import { Sun, Shield, Calculator, PhoneCall, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (initialBill?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F1117]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0F1117] to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0 shrink"
          >
            <div className="h-9 sm:h-12 w-9 sm:w-12 rounded-xl bg-white p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0 overflow-hidden flex items-center justify-center border border-white/20">
              <img src="/official-logo.png?v=3" alt="Sultanpur Solar Panel Official Logo" className="w-full h-full object-contain rounded-lg bg-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-xl font-extrabold tracking-tight text-white font-sans truncate">
                  SULTANPUR<span className="text-[#3CB043] font-black"> SOLAR PANEL</span>
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-amber-400 font-semibold tracking-wide uppercase truncate">POWERING SULTANPUR, ENERGIZING FUTURE</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 shrink-0">
            <button 
              onClick={() => scrollTo('calculator')}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-orange-400" />
              Savings Calculator
            </button>
            <button 
              onClick={() => scrollTo('services')}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('timeline')}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollTo('case-studies')}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollTo('incentives')}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              Subsidies
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
            <a 
              href="tel:+917068286755" 
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-2.5 py-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">+91 70682 86755</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex relative items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group overflow-hidden shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Quote
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1117] border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollTo('calculator')}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 text-slate-200 font-medium text-sm text-left"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-orange-400" />
                Savings Calculator (in ₹)
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="p-3 rounded-lg bg-white/5 text-slate-200 font-medium text-sm text-left"
            >
              Services & Products
            </button>
            <button
              onClick={() => scrollTo('timeline')}
              className="p-3 rounded-lg bg-white/5 text-slate-200 font-medium text-sm text-left"
            >
              4-Step Installation Process
            </button>
            <button
              onClick={() => scrollTo('case-studies')}
              className="p-3 rounded-lg bg-white/5 text-slate-200 font-medium text-sm text-left"
            >
              Customer Case Studies & ROI
            </button>
            <button
              onClick={() => scrollTo('incentives')}
              className="p-3 rounded-lg bg-white/5 text-slate-200 font-medium text-sm text-left flex items-center justify-between"
            >
              <span>PM Surya Ghar & Subsidies</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">Up to ₹78,000</span>
            </button>
            
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 px-4 text-center font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 rounded-xl shadow-lg shadow-orange-500/20 text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get Free Instant Quote (₹0 Down)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
