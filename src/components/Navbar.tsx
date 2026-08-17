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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-xl bg-white p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0 overflow-hidden flex items-center justify-center border border-white/20">
              <img src="/official-logo.png?v=3" alt="Sultanpur Solar Panel Official Logo" className="w-full h-full object-contain rounded-lg bg-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-sans">
                  SULTANPUR<span className="text-orange-500"> SOLAR PANEL</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider">
                  #1 IN SULTANPUR
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">MAHUWARIYA, SULTANPUR, UP 228001</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
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
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+917068286755" 
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              +91 70682 86755
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Quote
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

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
