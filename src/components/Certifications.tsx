import React from 'react';
import { Award, ShieldCheck, Zap, FileCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/solarData';

export const Certifications: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-8 h-8 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-orange-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-yellow-400" />;
      case 'FileCheck':
        return <FileCheck className="w-8 h-8 text-emerald-400" />;
      default:
        return <Award className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 bg-[#0B0D12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Industry Recognition</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Sultanpur's Most Certified Solar Engineers</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#141822] border border-white/10 hover:border-orange-500/40 transition-all text-center space-y-4 shadow-lg group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(cert.icon)}
              </div>
              <div className="space-y-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 mb-1">
                  {cert.badgeText}
                </span>
                <h4 className="text-sm font-bold text-white leading-tight">{cert.name}</h4>
                <p className="text-[11px] text-slate-400">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
