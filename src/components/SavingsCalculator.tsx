import React, { useState } from 'react';
import { Calculator, Sun, Zap, TrendingUp, PiggyBank, Leaf, ArrowRight, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { calculateSolarMetrics, formatINR, formatNumber } from '../utils/formatters';

interface SavingsCalculatorProps {
  onLockSavings: (billINR: number) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onLockSavings }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(4500); // Default ₹4,500/mo
  const [sunFactor, setSunFactor] = useState<number>(1.0);

  // Calculate live metrics based on user inputs
  const metrics = calculateSolarMetrics(monthlyBill, sunFactor);

  const presetBills = [2500, 4500, 8000, 15000, 25000];

  return (
    <section id="calculator" className="py-20 relative bg-[#0F1117] overflow-hidden">
      
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
            <Calculator className="w-4 h-4" />
            Interactive ROI Calculator (₹ INR)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See How Much You Will <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Save With Solar</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Enter your current monthly electricity bill to calculate instant system sizing, annual savings in Indian Rupees (₹), and PM Surya Ghar subsidy rebate.
          </p>
        </div>

        {/* Main Calculator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls & Inputs Column */}
          <div className="lg:col-span-6 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 backdrop-blur-xl shadow-2xl">
            
            {/* Input 1: Monthly Electricity Bill */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <PiggyBank className="w-4 h-4 text-orange-400" />
                  Your Current Monthly Electricity Bill
                </label>
                <div className="text-2xl font-black text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-xl border border-amber-400/20">
                  {formatINR(monthlyBill)}<span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min={1500}
                  max={50000}
                  step={500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:accent-amber-400 transition-all"
                />
                <div className="flex justify-between text-[11px] font-medium text-slate-400">
                  <span>₹1,500/mo</span>
                  <span>₹25,000/mo</span>
                  <span>₹50,000+/mo</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs text-slate-400 self-center mr-1">Presets:</span>
                {presetBills.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setMonthlyBill(preset)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      monthlyBill === preset
                        ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {formatINR(preset, true)}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Roof Sunlight Exposure */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400" />
                Sultanpur Roof Sunlight Exposure
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSunFactor(0.85)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    sunFactor === 0.85
                      ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Partial Shade
                </button>
                <button
                  onClick={() => setSunFactor(1.0)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    sunFactor === 1.0
                      ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Full Sun (Standard)
                </button>
                <button
                  onClick={() => setSunFactor(1.15)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    sunFactor === 1.15
                      ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Unobstructed Peak
                </button>
              </div>
            </div>

            {/* System Breakdown Specs */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Rec. System Size</span>
                <span className="text-xl font-bold text-white flex items-center gap-1">
                  <Zap className="w-4 h-4 text-amber-400" />
                  {metrics.systemSizeKw} kW
                </span>
                <span className="text-[11px] text-slate-400">({metrics.panelsCount} Tier-1 Panels)</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-1">Est. Roof Needed</span>
                <span className="text-xl font-bold text-white">
                  {formatNumber(metrics.roofSpaceSqFt)} <span className="text-xs font-normal text-slate-400">sq.ft</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">Suitable for most roofs</span>
              </div>
            </div>

          </div>

          {/* Right Results Display Column */}
          <div className="lg:col-span-6 bg-gradient-to-b from-orange-950/30 via-slate-900/90 to-[#0F1117] border border-orange-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Your Estimated Solar Returns
              </span>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                92% Utility Bill Reduction
              </span>
            </div>

            {/* Big Highlight: Annual Savings */}
            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-400">Estimated First Year Savings</span>
              <div className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {formatINR(metrics.estAnnualSavingsINR)}
                <span className="text-sm font-normal text-slate-400 ml-2">/year saved</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              
              {/* 25-Year Cumulative Savings */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  25-Year Net Savings
                </div>
                <div className="text-2xl font-extrabold text-white">
                  {formatINR(metrics.est25YrSavingsINR, true)}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Includes grid inflation offset</p>
              </div>

              {/* Payback Period */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  Full Investment Payback
                </div>
                <div className="text-2xl font-extrabold text-amber-300">
                  {metrics.estPaybackYears} Years
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Pure profit afterwards</p>
              </div>

            </div>

            {/* Financial Rebate Breakdown */}
            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Est. Gross System Cost:</span>
                <span className="font-semibold">{formatINR(metrics.systemCostBeforeRebateINR)}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>30% PM Surya Ghar & State Subsidy:</span>
                <span>-{formatINR(metrics.taxCreditDiscountINR)}</span>
              </div>
              <div className="flex justify-between text-white font-extrabold pt-2 border-t border-white/10 text-sm">
                <span>Net System Investment:</span>
                <span className="text-amber-400">{formatINR(metrics.netSystemCostINR)}</span>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CO₂ Offset: <strong>{metrics.co2OffsetTonsYr} Tons/yr</strong></span>
              </div>
              <span className="font-semibold text-slate-200">🌳 {metrics.equivalentTreesPlanted} Trees Planted</span>
            </div>

            {/* Direct Action CTA */}
            <button
              onClick={() => onLockSavings(monthlyBill)}
              className="w-full py-4 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all flex items-center justify-center gap-2 group text-base"
            >
              Lock In These Savings (Get Official Quote)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
