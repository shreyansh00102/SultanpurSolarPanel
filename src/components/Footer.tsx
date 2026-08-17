import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#050A14] border-t border-white/10 text-xs text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 4 Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img src="/official-logo.png?v=3" alt="Sultanpur Solar Panel Official Logo" className="h-12 w-12 object-contain rounded-xl bg-white p-0.5 border border-white/20 shadow-md shrink-0" />
              <div>
                <span className="font-black text-lg block leading-tight uppercase">
                  <span className="text-[#FF9933]">SULTANPUR </span>
                  <span className="text-white">SOLAR </span>
                  <span className="text-[#138808]">PANEL</span>
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Powering Sultanpur, Energizing Future
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Sultanpur's #1 MNRE & UPPCL approved rooftop solar installer. Providing high efficiency Monocrystalline PERC solar panels, battery backups, and PM Surya Ghar government subsidy assistance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Company</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Solar Services</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Panels & Inverters</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Savings Calculator</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Installation Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Solar Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Solar Solutions</h4>
            <ul className="space-y-2 text-slate-300">
              <li><span className="hover:text-white cursor-pointer">3kW PM Surya Ghar System</span></li>
              <li><span className="hover:text-white cursor-pointer">5kW Monocrystalline PERC</span></li>
              <li><span className="hover:text-white cursor-pointer">10kW Hybrid Commercial Solar</span></li>
              <li><span className="hover:text-white cursor-pointer">UPPCL Net Metering Approval</span></li>
              <li><span className="hover:text-white cursor-pointer">₹0 Down EMI Financing</span></li>
              <li><span className="hover:text-white cursor-pointer">25-Year Performance Guarantee</span></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Office & Contact</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mahuwariya, Sultanpur, Uttar Pradesh 228001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+917068286755" className="font-bold text-white hover:text-amber-400">+91 70682 86755</a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Sunday (8:00 AM – 8:00 PM IST)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Approval Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            <p>© 2026 Sultanpur Solar Panel Pvt Ltd. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-500">Mahuwariya, Sultanpur, UP 228001 • UPPCL & MNRE Approved Solar Energy Contractor</p>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-slate-400">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 25-Yr Performance Guarantee
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> ISO 9001:2015 Certified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

