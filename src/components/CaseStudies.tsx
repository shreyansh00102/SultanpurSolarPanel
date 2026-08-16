import React from 'react';
import { Award, Zap, TrendingDown, Leaf, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/solarData';
import { formatINR } from '../utils/formatters';

interface CaseStudiesProps {
  onOpenQuote: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenQuote }) => {
  return (
    <section id="case-studies" className="py-20 bg-[#0F1117] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
            <Award className="w-4 h-4" />
            Verified Sultanpur Homeowner Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Real Sultanpur Homes. <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Real Financial ROI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how Sultanpur homeowners erased high electricity bills and unlocked massive annual savings (in ₹).
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#151922] border border-white/10 hover:border-orange-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.homeowner}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151922] via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-slate-950 shadow-md">
                    {study.systemKw} kW System ({study.panelsCount} Panels)
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-bold text-amber-300">{study.location}</span>
                    {study.batteryBackup && (
                      <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px] font-semibold">
                        + Battery Backup
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.homeowner}</h3>
                    <p className="text-xs text-slate-400">Sultanpur, UP</p>
                  </div>

                  {/* Financial Comparison Box */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400">Before Solar Bill:</span>
                      <span className="font-semibold text-rose-400 line-through">
                        {formatINR(study.oldMonthlyBillINR)}/mo
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-slate-400">New Solar Utility Bill:</span>
                      <span className="font-bold text-emerald-400">
                        {formatINR(study.newMonthlyBillINR)}/mo
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm pt-1">
                      <span className="font-semibold text-white">Annual Savings:</span>
                      <span className="font-black text-amber-400 text-base">
                        {formatINR(study.annualSavingsINR)}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-4 border-l-2 border-orange-500 space-y-1">
                    <Quote className="w-4 h-4 text-orange-400 opacity-40 absolute -top-1 left-2" />
                    <p className="text-xs italic text-slate-300 leading-relaxed font-normal">
                      "{study.quote}"
                    </p>
                  </div>

                </div>
              </div>

              {/* Card Footer Badges */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-300 pt-4">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{study.paybackYears} Year Payback</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{study.treesPlantedEq} Trees Planted</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
