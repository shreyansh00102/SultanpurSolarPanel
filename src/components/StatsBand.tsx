import React from 'react';
import { ShieldCheck, Clock, BadgePercent, MapPin } from 'lucide-react';
import { STATS_BAND } from '../data/solarData';

export const StatsBand: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-orange-400" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-amber-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-8 h-8 text-yellow-400" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-orange-400" />;
    }
  };

  return (
    <section className="py-14 bg-gradient-to-r from-orange-950/40 via-[#121620] to-amber-950/30 border-y border-orange-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_BAND.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 shadow-inner">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
