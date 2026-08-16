import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, Shield, PiggyBank, Home, MapPin, User, Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { calculateSolarMetrics, formatINR } from '../utils/formatters';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialBillINR?: number;
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  isOpen,
  onClose,
  initialBillINR = 4500,
  initialService = 'Residential Solar System',
}) => {
  const [step, setStep] = useState<number>(1);
  const [monthlyBill, setMonthlyBill] = useState<number>(initialBillINR);
  const [propertyType, setPropertyType] = useState<string>('Single Family Home');
  const [roofCondition, setRoofCondition] = useState<string>('Good Condition (< 10 yrs)');
  const [pincode, setPincode] = useState<string>('228001');
  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialBillINR) {
      setMonthlyBill(initialBillINR);
    }
  }, [initialBillINR]);

  if (!isOpen) return null;

  const metrics = calculateSolarMetrics(monthlyBill);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof (window as any).confetti === 'function') {
      (window as any).confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121620] border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="relative bg-gradient-to-r from-orange-950/80 via-[#121620] to-amber-950/80 p-6 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
              <Sparkles className="w-3.5 h-3.5" /> PM Surya Ghar Subsidy Eligible
            </span>
            <h3 className="text-2xl font-extrabold text-white">Get Your Free Solar Quote</h3>
            <p className="text-xs text-slate-300">Fast 24-hour turnaround • ₹0 Down options available in Sultanpur</p>
          </div>

          {/* Progress Step Bar */}
          {!submitted && (
            <div className="flex items-center gap-2 pt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-gradient-to-r from-orange-500 to-amber-400' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="px-6 pb-6">
          {submitted ? (
            /* Success Celebration Card */
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-3xl font-black text-white">Quote Request Received!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-amber-400">{name || 'Sultanpur Resident'}</strong>! Our senior solar engineer is generating your custom CAD roof report and financial payback proposal.
                </p>
              </div>

              {/* Estimated Quote Summary Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-orange-500/30 text-left space-y-3 max-w-md mx-auto">
                <span className="text-xs uppercase font-bold text-orange-400 block tracking-wider">Estimated System Preview</span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Recommended System:</span>
                    <span className="font-bold text-white">{metrics.systemSizeKw} kW Array</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Est. Annual Savings:</span>
                    <span className="font-extrabold text-amber-400">{formatINR(metrics.estAnnualSavingsINR)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Net System Cost:</span>
                    <span className="font-bold text-emerald-400">{formatINR(metrics.netSystemCostINR)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Surya Ghar Subsidy (30%):</span>
                    <span className="font-bold text-orange-300">{formatINR(metrics.taxCreditDiscountINR)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="py-3.5 px-8 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 shadow-lg text-sm"
              >
                Back to Sultanpur Solar Homepage
              </button>
            </div>
          ) : (
            /* Multi-Step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Monthly Bill & Service */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <PiggyBank className="w-4 h-4 text-orange-400" />
                        Average Monthly Electricity Bill (in ₹)
                      </span>
                      <span className="text-xl font-black text-amber-400 bg-amber-400/10 px-3 py-0.5 rounded-lg border border-amber-400/20">
                        {formatINR(monthlyBill)}/mo
                      </span>
                    </label>
                    
                    <input
                      type="range"
                      min={1500}
                      max={50000}
                      step={500}
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>₹1,500</span>
                      <span>₹25,000</span>
                      <span>₹50,000+</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-200 block">Primary Interest / Product</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        'Residential Solar System',
                        'Solar + Battery Storage',
                        'EV Charger Add-on'
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setSelectedService(item)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                            selectedService === item
                              ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Est. Annual Savings Potential:</span>
                    <span className="font-extrabold text-amber-400 text-sm">{formatINR(metrics.estAnnualSavingsINR)}/yr</span>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-md flex items-center gap-2"
                    >
                      Next Step: Property Info
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Property & Roof Details */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <Home className="w-4 h-4 text-orange-400" />
                      Home Structure & Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Independent House / Kothi', 'Apartment / Society', 'Commercial / Hospital', 'Farmhouse / Mill'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setPropertyType(type)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                            propertyType === type
                              ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-200 block">Roof Condition & Type</label>
                    <select
                      value={roofCondition}
                      onChange={(e) => setRoofCondition(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium focus:border-orange-500 focus:outline-none"
                    >
                      <option value="Concrete Open RCC Roof" className="bg-[#121620]">Concrete Open RCC Roof</option>
                      <option value="Tinshed / Metal Sheet Roof" className="bg-[#121620]">Tinshed / Metal Sheet Roof</option>
                      <option value="Tiles / Sloped Roof" className="bg-[#121620]">Tiles / Sloped Roof</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Sultanpur PIN Code</label>
                      <input
                        type="text"
                        required
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="e.g. 228001"
                        className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Locality / Address</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. Civil Lines, Sultanpur"
                        className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/5 flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-md flex items-center gap-2"
                    >
                      Next Step: Contact Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submit */}
              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Rajesh Verma"
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">Email Address *</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="rajesh@example.com"
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">Phone / WhatsApp Number *</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-orange-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Your privacy is 100% protected. Zero spam. Certified Sultanpur Engineers.</span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/5 flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 shadow-xl shadow-orange-500/25 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Get My Free Solar Quote
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
