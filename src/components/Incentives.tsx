import React from 'react';
import { Sparkles, PiggyBank, ArrowRightLeft, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { INCENTIVES } from '../data/solarData';

interface IncentivesProps {
  onOpenQuote: () => void;
}

export const Incentives: React.FC<IncentivesProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-orange-400" />;
      case 'PiggyBank':
        return <PiggyBank className="w-6 h-6 text-amber-400" />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="incentives" className="py-20 bg-[#0F1117] relative">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-4 h-4" />
            2026 Solar Subsidies & Tax Discounts
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Claim Up to <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">30% Federal Tax Credits</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Leverage federal tax incentives, Colorado state rebates, and net metering to slash your system cost by thousands.
          </p>
        </div>

        {/* Big Federal Highlight Banner */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 p-[2px] shadow-2xl">
          <div className="bg-[#121620] rounded-[22px] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/30">
                <Sparkles className="w-3.5 h-3.5" /> High Priority Tax Relief
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                30% Federal Investment Tax Credit (ITC)
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                Every dollar you spend on solar panels and Tesla Powerwall storage reduces your federal income tax dollar-for-dollar by 30%.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-amber-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Applies to 100% of Equipment & Labor
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  No Maximum Limit on Savings
                </span>
              </div>
            </div>

            <div className="text-center shrink-0 space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10 w-full sm:w-auto">
              <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Tax Savings Example</span>
              <div className="text-4xl font-black text-amber-400">
                30% OFF
              </div>
              <p className="text-xs text-slate-300">Direct Tax Deduction</p>
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-md text-xs flex items-center justify-center gap-2"
              >
                Calculate My 30% Rebate
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Incentive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INCENTIVES.map((inc) => (
            <div
              key={inc.id}
              className="bg-[#151922] border border-white/10 hover:border-orange-500/40 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {getIcon(inc.icon)}
                  </div>
                  <span className="text-xl font-black text-amber-400 bg-amber-400/10 px-3 py-1 rounded-xl border border-amber-400/20">
                    {inc.percentageOrValue}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 block">{inc.authority}</span>
                  <h4 className="text-xl font-bold text-white">{inc.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{inc.description}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{inc.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
