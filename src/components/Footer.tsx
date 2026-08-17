import React from 'react';
import { Sun, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#090B0F] border-t border-white/10 text-slate-400 text-xs pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img src="/official-logo.png?v=3" alt="Sultanpur Solar Panel Official Logo" className="h-12 w-12 object-contain rounded-xl bg-white p-0.5 border border-white/20 shadow-md shrink-0" />
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block leading-tight">
                  SULTANPUR<span className="text-[#3CB043] font-black"> SOLAR PANEL</span>
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  POWERING SULTANPUR, ENERGIZING FUTURE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Sultanpur's premier residential & commercial solar energy installer. Empowering Uttar Pradesh homeowners with high-efficiency monocrystalline solar panels, battery storage, and EV charging solutions.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-semibold text-white">Mahuwariya, Sultanpur, UP 228001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+917068286755" className="hover:text-white transition-colors">+91 70682 86755</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="mailto:info@sultanpursolar.in" className="hover:text-white transition-colors">info@sultanpursolar.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-orange-400 transition-colors">
                  Savings Calculator (₹)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-orange-400 transition-colors">
                  Solar & Battery Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('timeline')} className="hover:text-orange-400 transition-colors">
                  4-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('case-studies')} className="hover:text-orange-400 transition-colors">
                  Sultanpur Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('incentives')} className="hover:text-orange-400 transition-colors">
                  PM Surya Ghar Subsidies
                </button>
              </li>
            </ul>
          </div>

          {/* Solar Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Solutions & Equipment</h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer">400W Monocrystalline Panels</span></li>
              <li><span className="hover:text-white cursor-pointer">Smart Lithium Battery Backup</span></li>
              <li><span className="hover:text-white cursor-pointer">Enphase Microinverters</span></li>
              <li><span className="hover:text-white cursor-pointer">Level 2 EV Solar Chargers</span></li>
              <li><span className="hover:text-white cursor-pointer">UPPCL Net Metering</span></li>
            </ul>
          </div>

          {/* Guarantee Badge */}
          <div className="space-y-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              15-Year Performance Guarantee
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Every Sultanpur Solar installation comes backed by our 15-year craftsmanship warranty, 25-year panel performance guarantee, and free annual system inspection.
            </p>
            <button
              onClick={onOpenQuote}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-md flex items-center justify-center gap-1"
            >
              Get Free Instant Quote
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Sultanpur Solar Pvt Ltd. All Rights Reserved. Mahuwariya, Sultanpur, UP 228001.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Govt Subsidies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
