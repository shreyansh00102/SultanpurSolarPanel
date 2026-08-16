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
