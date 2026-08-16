// Data definitions for Sultanpur Solar - Mahuwariya, Sultanpur, UP 228001

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  priceStartingINR: string;
  warranty: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface CaseStudy {
  id: string;
  homeowner: string;
  location: string;
  systemKw: number;
  panelsCount: number;
  batteryBackup: boolean;
  oldMonthlyBillINR: number;
  newMonthlyBillINR: number;
  annualSavingsINR: number;
  paybackYears: number;
  treesPlantedEq: number;
  image: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  avatar: string;
  verified: boolean;
  text: string;
  systemKw: string;
}

export interface IncentiveItem {
  id: string;
  title: string;
  percentageOrValue: string;
  authority: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  badgeText: string;
  icon: string;
}

export const PHONE_NUMBER = "7068286755";
export const PHONE_DISPLAY = "+91 70682 86755";
export const WHATSAPP_LINK = `https://wa.me/917068286755?text=${encodeURIComponent("Namaste Sultanpur Solar! I want to get a free quote & rooftop solar calculation for my home in Sultanpur (Mahuwariya, 228001).")}`;

export const HERO_STATS = [
  { label: 'Homes Powered in Sultanpur', value: 412, suffix: '+' },
  { label: 'Total Client Savings', value: 18500000, isCurrency: true, prefix: '₹', suffix: '+' },
  { label: 'Clean Energy Generated', value: 99.4, suffix: '%' },
  { label: '5-Star Customer Rating', value: 4.9, suffix: '/5' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-solar',
    title: 'Residential Solar Systems',
    badge: 'Most Popular in Sultanpur',
    shortDesc: 'Tier-1 ultra-efficiency solar panels engineered for Mahuwariya & Sultanpur UP climate with 300+ annual sunny days.',
    fullDesc: 'Empower your household in Mahuwariya, Sultanpur with state-of-the-art monocrystalline solar panels featuring integrated microinverters. Built to generate maximum power year-round with zero grid dependency.',
    iconName: 'Sun',
    priceStartingINR: '₹0 Down Options',
    warranty: '25-Year Performance & 15-Year Craftsmanship',
    highlights: [
      '22.8% Industry-Leading Cell Efficiency',
      'Enphase IQ8 Microinverters for shade resilience',
      '24/7 Mobile App Energy & Savings Monitoring',
      'Dust-shedding hydrophobic glass coating'
    ],
    specs: [
      { label: 'Panel Rating', value: '400W Monocrystalline' },
      { label: 'Weather Protection', value: 'IP68 All-Weather Rated' },
      { label: 'Monitoring', value: 'Real-time Enphase Cloud' },
      { label: 'Net Metering', value: 'UPPCL & UPNEDA Approved' }
    ],
    image: 'residential_install.jpg'
  },
  {
    id: 'battery-storage',
    title: 'Smart Battery Storage',
    badge: '24/7 Power Shield',
    shortDesc: 'Keep your lights, fans, ACs, and appliances running seamless during power cuts in Mahuwariya & Sultanpur.',
    fullDesc: 'Pair your solar array with Tesla Powerwall or LFP lithium battery backup. Store peak daytime solar power to run your home through the night or during unexpected power cuts in Mahuwariya, Sultanpur.',
    iconName: 'Zap',
    priceStartingINR: '₹0 Down Available',
    warranty: '10-Year Full Replacement Warranty',
    highlights: [
      'Instantaneous power-cut switchover (< 10ms)',
      'Time-of-Use smart tariff optimization',
      'Scalable from 5 kWh to 30+ kWh capacity',
      'Heavy duty surge power support'
    ],
    specs: [
      { label: 'Usable Capacity', value: '13.5 kWh per battery unit' },
      { label: 'Peak Power output', value: '7.0 kW continuous' },
      { label: 'Operating Temp', value: '-10°C to 55°C' },
      { label: 'Grid Support', value: 'Full Off-Grid Capability' }
    ],
    image: 'house2.png'
  },
  {
    id: 'ev-charger',
    title: 'Solar EV Charging Station',
    badge: '100% Free Vehicle Fuel',
    shortDesc: 'Charge your Electric Vehicle directly with clean sunshine at 5x the speed of standard sockets.',
    fullDesc: 'Turn your Mahuwariya home driveway into a zero-emissions fueling station. Our Level 2 smart EV chargers integrate directly with your solar energy system, allowing you to charge your EV using 100% free home solar energy.',
    iconName: 'BatteryCharging',
    priceStartingINR: 'Included in Solar Bundles',
    warranty: '5-Year Equipment Warranty',
    highlights: [
      'Level 2 High-Speed 48A / 11.5 kW charging',
      'Solar-Only charging mode for zero cost miles',
      'Universal Tata, Mahindra, MG & Tesla compatible',
      'Weatherproof IP66 outdoor rated'
    ],
    specs: [
      { label: 'Charging Speed', value: 'Up to 44 km of range / hr' },
      { label: 'Cable Length', value: '25-foot heavy duty cable' },
      { label: 'Smart App', value: 'Scheduled charging & tracking' },
      { label: 'Installation', value: '1-Day Certified Electrician' }
    ],
    image: 'house3.png'
  }
];

export const STATS_BAND = [
  {
    icon: 'ShieldCheck',
    title: '15-Year Warranty',
    subtitle: 'Comprehensive equipment & craftsmanship protection guaranteed.',
  },
  {
    icon: 'Clock',
    title: '1-Day Installation',
    subtitle: 'Experienced Master Electricians install your system in under 8 hours.',
  },
  {
    icon: 'BadgePercent',
    title: '₹0 Down Financing',
    subtitle: 'Pay lower than your current electricity bill from month one.',
  },
  {
    icon: 'MapPin',
    title: 'Mahuwariya Team',
    subtitle: 'Local office at Mahuwariya, Sultanpur, UP 228001.',
  }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Free Roof Assessment',
    description: 'We analyze your satellite roof geometry, shade profiles, and past electricity bills to build your personalized solar proposal.',
    duration: '24-48 Hours',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Engineering & UPPCL Approval',
    description: 'Our certified engineers design your custom CAD electrical blue-print and submit all permits for UPPCL & UPNEDA net metering in Sultanpur.',
    duration: '1-2 Weeks',
    icon: 'FileText'
  },
  {
    step: '03',
    title: '1-Day Precision Installation',
    description: 'Our certified installation crew mounts panels, installs microinverters, safety wiring, and battery systems in a single day.',
    duration: '1 Day (8 Hrs)',
    icon: 'Wrench'
  },
  {
    step: '04',
    title: 'Grid Connection & Activation',
    description: 'UPPCL installs your bi-directional net meter, PTO (Permission to Operate) is granted, and your system starts producing free energy!',
    duration: 'Instant PTO',
    icon: 'CheckCircle2'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    homeowner: 'The Verma Family',
    location: 'Mahuwariya, Sultanpur',
    systemKw: 8,
    panelsCount: 20,
    batteryBackup: true,
    oldMonthlyBillINR: 14000,
    newMonthlyBillINR: 1200,
    annualSavingsINR: 153600,
    paybackYears: 3.9,
    treesPlantedEq: 260,
    image: 'residential_install.jpg',
    quote: 'Our 8 kW system in Mahuwariya brought down our electric bill from ₹14,000/mo to practically grid connection charges. Sultanpur Solar installed it in a single day!'
  },
  {
    id: 'case-2',
    homeowner: 'Rajesh & Sunita Singh',
    location: 'KNIT Road, Sultanpur',
    systemKw: 6,
    panelsCount: 15,
    batteryBackup: true,
    oldMonthlyBillINR: 10500,
    newMonthlyBillINR: 900,
    annualSavingsINR: 115200,
    paybackYears: 4.1,
    treesPlantedEq: 210,
    image: 'house2.png',
    quote: 'Our 6 kW solar system with battery backup saves us over ₹1.15 Lakhs every year. Zero power cut issues even during peak summer months!'
  },
  {
    id: 'case-3',
    homeowner: 'Dr. Alok Mishra',
    location: 'Amhat, Sultanpur',
    systemKw: 3,
    panelsCount: 8,
    batteryBackup: false,
    oldMonthlyBillINR: 5500,
    newMonthlyBillINR: 500,
    annualSavingsINR: 60000,
    paybackYears: 3.5,
    treesPlantedEq: 105,
    image: 'house3.png',
    quote: 'With the 3 kW system and PM Surya Ghar subsidy, my solar loan payment is much lower than my old electricity bill. I save ₹60,000 yearly!'
  }
];

export const INCENTIVES: IncentiveItem[] = [
  {
    id: 'pm-surya-ghar',
    title: 'PM Surya Ghar & UP State Subsidy',
    percentageOrValue: 'Up to ₹78,000',
    authority: 'Ministry of New & Renewable Energy (MNRE)',
    description: 'Direct central government subsidy under PM Surya Ghar Muft Bijli Yojana + additional UP state subsidy transferred directly to your bank account in Sultanpur.',
    highlight: 'Instant Direct Benefit Transfer (DBT)',
    icon: 'Sparkles'
  },
  {
    id: 'solar-rebates',
    title: 'Mahuwariya Green Energy Rebates',
    percentageOrValue: '30% Discount',
    authority: 'UPNEDA Solar Initiative',
    description: 'Cash-back incentives for Sultanpur homeowners installing rooftop solar + smart battery storage systems.',
    highlight: 'Instant credit applied to final installation invoice',
    icon: 'PiggyBank'
  },
  {
    id: 'net-metering',
    title: 'UPPCL 1:1 Net Metering',
    percentageOrValue: '100% Credit',
    authority: 'UP Electricity Regulatory Commission',
    description: 'Sell excess daytime solar power back to the UPPCL grid at full retail rates and use those credits to offset night usage.',
    highlight: 'Locks in energy rates for 25 years',
    icon: 'ArrowRightLeft'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'mnre',
    name: 'MNRE & UPNEDA Certified Channel Partner',
    issuer: 'Ministry of New and Renewable Energy',
    badgeText: 'Govt Approved Installer',
    icon: 'Award'
  },
  {
    id: 'bbb',
    name: 'ISO 9001:2015 Quality Certified',
    issuer: 'International Quality Accreditation',
    badgeText: '100% Quality Assurance',
    icon: 'ShieldCheck'
  },
  {
    id: 'tesla',
    name: 'Tesla & LFP Battery Approved Partner',
    issuer: 'Tesla & Smart Storage India',
    badgeText: 'Authorized Premium Partner',
    icon: 'Zap'
  },
  {
    id: 'master-electrician',
    name: 'Licensed UP Master Engineers',
    issuer: 'Uttar Pradesh Electrical Licensing Board',
    badgeText: 'Reg # UP-78920',
    icon: 'FileCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rameshwar Tripathi',
    role: 'Homeowner',
    location: 'Mahuwariya, Sultanpur',
    rating: 5,
    date: 'August 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true,
    text: 'Sultanpur Solar team in Mahuwariya made the transition effortless. Their engineer walked us through the CAD design, got UPPCL net metering cleared, and installed 20 panels in ONE single day. My monthly bill dropped from ₹14,000 to ₹1,200!',
    systemKw: '8 kW System'
  },
  {
    id: 'test-2',
    name: 'Priyanka Srivastava',
    role: 'Architect & Homeowner',
    location: 'Badrakhat, Sultanpur',
    rating: 5,
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verified: true,
    text: 'As an architect, aesthetics matter to me. Sultanpur Solar installed a 6 kW array with sleek black-on-black panels. My roof looks futuristic while generating free electricity!',
    systemKw: '6 kW Sleek Array'
  },
  {
    id: 'test-3',
    name: 'Vikas & Archana Gupta',
    role: 'Business Owners',
    location: 'Kadipur, Sultanpur',
    rating: 5,
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    verified: true,
    text: 'We opted for a 3 kW solar system with PM Surya Ghar subsidy. The whole process was transparent, zero hidden fees, and our monthly electricity bills are nearly zero!',
    systemKw: '3 kW System'
  }
];

export const FAQS = [
  {
    q: 'Where is the Sultanpur Solar office located in Sultanpur?',
    a: 'Our registered headquarters and customer service center is located at Mahuwariya, Sultanpur, Uttar Pradesh 228001. You can call or WhatsApp us at +91 70682 86755.'
  },
  {
    q: 'Which company is #1 for rooftop solar installation in Sultanpur UP?',
    a: 'Sultanpur Solar is the #1 rated rooftop solar installation company in Sultanpur, UP (MNRE & UPNEDA certified partner), providing ₹0 down financing, 1-day installation, and 15-year warranty.'
  },
  {
    q: 'What solar system sizes (kW) are available for homes in Sultanpur?',
    a: 'We offer popular residential rooftop solar system sizes like 3 kW, 6 kW, and 8 kW, as well as customized commercial solar systems with UPPCL net metering.'
  },
  {
    q: 'How do I claim PM Surya Ghar Muft Bijli Yojana subsidy in Sultanpur UP 228001?',
    a: 'Under the PM Surya Ghar scheme, rooftop solar installations receive up to ₹78,000 central government subsidy plus UP state incentives, credited directly to your bank account. Sultanpur Solar handles all documentation & UPPCL net-metering approval.'
  }
];
