import React, { useState } from 'react';
import { Sun, Zap, BatteryCharging, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/solarData';
import { ServiceModal } from './ServiceModal';

interface ServiceCardsProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-6 h-6 text-orange-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-yellow-400" />;
      default:
        return <Sun className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0F1117] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
            <Zap className="w-4 h-4" />
            Complete Clean Energy Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Maximum Performance</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            High-altitude engineered solar systems, 24/7 battery backup, and ultra-fast EV home charging.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#151922] border border-white/10 hover:border-orange-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151922] via-[#151922]/50 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/90 text-slate-950 shadow-md">
                    {service.badge}
                  </span>

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-4 text-xs font-bold text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    {service.priceStartingINR}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pb-3 border-b border-white/5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    {service.warranty.split('&')[0]}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 shadow-md shadow-orange-500/20 flex items-center justify-center gap-1 group/btn"
                  >
                    Get Quote
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectQuote={(title) => onOpenQuote(title)}
      />
    </section>
  );
};
