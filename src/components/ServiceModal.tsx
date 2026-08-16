import React from 'react';
import { X, CheckCircle2, Shield, Zap, Sun, BatteryCharging, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/solarData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#141822] border border-white/15 rounded-3xl overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header Image Banner */}
        <div className="relative h-48 sm:h-56">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141822] via-[#141822]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                {service.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{service.title}</h3>
            </div>
            <span className="text-xs text-amber-300 font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              {service.priceStartingINR}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 pb-6 space-y-6">
          
          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {service.fullDesc}
          </p>

          {/* Warranty Badge */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300">
            <Shield className="w-5 h-5 text-orange-400 shrink-0" />
            <div>
              <strong className="block text-white">Warranty & Protection:</strong>
              {service.warranty}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Engineering Advantages</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Specifications</h4>
            <div className="grid grid-cols-2 gap-3">
              {service.specs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-slate-400 block">{spec.label}</span>
                  <span className="text-xs font-semibold text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/5"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectQuote(service.title);
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-md shadow-orange-500/20 flex items-center gap-2"
            >
              Request Quote for {service.title}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
