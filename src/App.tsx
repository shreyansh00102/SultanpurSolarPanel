import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ServiceCards } from './components/ServiceCards';
import { StatsBand } from './components/StatsBand';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CaseStudies } from './components/CaseStudies';
import { Incentives } from './components/Incentives';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { QuoteForm } from './components/QuoteForm';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteInitialBill, setQuoteInitialBill] = useState<number>(4500);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('Residential Solar System');

  const handleOpenQuote = (billINR?: number, serviceName?: string) => {
    if (billINR) setQuoteInitialBill(billINR);
    if (serviceName) setQuoteInitialService(serviceName);
    setQuoteOpen(true);
  };

  const handleScrollToCalculator = () => {
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white font-sans selection:bg-orange-500 selection:text-slate-950">
      
      {/* Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Live Animated Counter */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Stats & Trust Highlights */}
        <StatsBand />

        {/* Interactive Solar Savings Calculator (in ₹ INR) */}
        <SavingsCalculator
          onLockSavings={(billINR) => handleOpenQuote(billINR)}
        />

        {/* 3 Core Services (Residential, Battery, EV Charger) */}
        <ServiceCards
          onOpenQuote={(serviceName) => handleOpenQuote(undefined, serviceName)}
        />

        {/* 4-Step Process Timeline */}
        <ProcessTimeline
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Customer Case Studies & ROI */}
        <CaseStudies
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Federal & State Tax Incentives (30% Tax Credit) */}
        <Incentives
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Certifications & Badges */}
        <Certifications />

        {/* Customer Testimonials & FAQs */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp Quick Connect Widget */}
      <a
        href="https://wa.me/917068286755?text=Namaste%20Sultanpur%20Solar%20Panel!%20I%20want%20a%20free%20solar%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 md:bottom-6 right-4 md:right-6 z-40 md:z-50 p-2.5 md:p-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 border border-emerald-400/50 flex items-center gap-2.5 transition-all group backdrop-blur-md"
        title="Chat on WhatsApp (+91 70682 86755)"
      >
        <div className="relative">
          <img src="/whatsapp-logo.png?v=5" alt="WhatsApp Logo" className="w-7 h-7 object-contain rounded-lg drop-shadow group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-black leading-tight text-white">Chat on WhatsApp</span>
          <span className="text-[9px] text-emerald-100 font-semibold">+91 70682 86755</span>
        </div>
      </a>

      {/* Quote Request Multi-Step Modal */}
      <QuoteForm
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialBillINR={quoteInitialBill}
        initialService={quoteInitialService}
      />

    </div>
  );
};

export default App;
