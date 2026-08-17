import React, { useState, useEffect } from 'react';
import { Sun, Zap, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, TrendingUp, DollarSign, Award, Star } from 'lucide-react';
import { HERO_STATS } from '../data/solarData';
import { formatINR } from '../utils/formatters';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  // Counter animation state
  const [homesCount, setHomesCount] = useState(0);
  const [savingsCount, setSavingsCount] = useState(0);

  useEffect(() => {
    // Animate homes count up to 412
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setHomesCount(Math.floor(progress * 412));
      setSavingsCount(Math.floor(progress * 18500000));

      if (step >= steps) {
        setHomesCount(412);
        setSavingsCount(18500000);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#0F1117]">
      
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/20 via-amber-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-md mb-6 shadow-lg shadow-orange-500/5">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-semibold text-orange-400 tracking-wide uppercase">Sultanpur, UP Solar Leader</span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            PM Surya Ghar Subsidy Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Go Solar. <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Save Money.
                </span> <br />
                Own Your Energy.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                Sultanpur's top-rated solar installer. <strong className="text-amber-400 font-semibold">₹0 down</strong>, 1-day precision installation, and a guaranteed 15-year warranty.
              </p>
            </div>

            {/* Feature Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">₹0 Down Option</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">1-Day Install</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">15-Yr Warranty</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">UPPCL Approved</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                Get Free Instant Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onScrollToCalculator}
                className="px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-orange-400" />
                Calculate My Savings (in ₹)
              </button>
            </div>

            {/* Social Trust Ratings */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex -space-x-2">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0F1117]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0F1117]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0F1117]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Customer" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9/5.0</span>
                </div>
                <p className="text-xs text-slate-400">Trusted by over 400+ Sultanpur homeowners</p>
              </div>
            </div>

          </div>

          {/* Right Visual Card - Solar Array Showcase & Counter Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Image Preview with overlay */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                <img 
                  src="/residential_install.jpg" 
                  alt="Sultanpur Solar Installation Mahuwariya UP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-80" />

                {/* Floating Weather & Solar Output Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1117]/80 backdrop-blur-md border border-white/20 text-xs text-white">
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span>Sultanpur Sun Index: <strong className="text-amber-300">300+ Sunny Days</strong></span>
                </div>

                {/* Official Logo Brand Stamp */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-white/40 shadow-md">
                  <img src="/logo.png" className="h-5 w-5 object-contain rounded bg-white" alt="Official Logo" />
                  <span className="text-[10px] font-black text-slate-950">Verified Brand</span>
                </div>

                {/* Floating Live Generation Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#0F1117]/90 backdrop-blur-md border border-orange-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Live Active Array</p>
                      <p className="text-xs font-bold text-white">8.4 kW Premium Monocrystalline</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    +92% Offset
                  </span>
                </div>
              </div>

              {/* Animated Stats Grid inside Hero Box */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Counter 1: Homes Powered */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-400">Homes Powered</span>
                    <Award className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white tracking-tight">
                    {homesCount}<span className="text-orange-500">+</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">In Sultanpur Region</p>
                </div>

                {/* Counter 2: Total Client Savings in ₹ */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-400">Client Savings</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                    {formatINR(savingsCount, true)}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Lifetime Savings (₹)</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
