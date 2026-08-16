// Indian Rupee (INR) and Number Formatting Utilities

/**
 * Formats a number into Indian Rupee format (e.g. ₹4,500 or ₹1.8 Cr / ₹45 Lakh)
 */
export function formatINR(amount: number, compact: boolean = false): string {
  if (isNaN(amount)) return '₹0';

  if (compact) {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} Lakh`;
    }
    if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}k`;
    }
  }

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats numbers with commas (e.g. 1,250)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

/**
 * Calculates Solar Metrics based on Monthly Bill (in ₹)
 */
export interface SolarCalculation {
  monthlyBill: number;
  systemSizeKw: number; // System size in kW
  panelsCount: number; // Number of ~400W panels needed
  roofSpaceSqFt: number; // Sq ft required
  estAnnualSavingsINR: number; // Annual savings in ₹
  est25YrSavingsINR: number; // 25-Year cumulative savings in ₹
  estPaybackYears: number; // Payback period in years
  co2OffsetTonsYr: number; // Metric tons of CO2 saved/yr
  equivalentTreesPlanted: number; // Trees equivalent
  systemCostBeforeRebateINR: number; // Estimated gross system cost
  taxCreditDiscountINR: number; // 30% Tax Credit
  netSystemCostINR: number; // Net investment after incentives
}

export function calculateSolarMetrics(monthlyBillINR: number, sunHoursFactor: number = 1.0): SolarCalculation {
  // Average electricity rate in India/Denver equivalence ~ ₹8.5 / kWh
  const ratePerKwh = 8.5; // ₹8.5 per kWh
  const monthlyKwh = monthlyBillINR / ratePerKwh;
  const annualKwhNeeded = monthlyKwh * 12;

  // Average daily peak sun hours ~ 4.8 hrs * sunHoursFactor
  const dailySunHours = 4.8 * sunHoursFactor;
  const annualSunHours = dailySunHours * 365;

  // System kW required (with 15% efficiency buffer)
  const systemSizeKw = Math.max(2.0, parseFloat((annualKwhNeeded / annualSunHours / 0.85).toFixed(1)));
  const panelsCount = Math.ceil((systemSizeKw * 1000) / 400); // 400W panels
  const roofSpaceSqFt = Math.ceil(panelsCount * 21); // ~21 sq ft per panel

  // Financial calculations
  // Est 92% bill offset with solar
  const estAnnualSavingsINR = Math.round(monthlyBillINR * 12 * 0.92);
  const est25YrSavingsINR = Math.round(estAnnualSavingsINR * 25 * 1.35); // includes electricity rate inflation (~3.5%/yr)

  // Estimated system cost: ~ ₹55,000 per kW (Industry standard for high-tier residential solar + microinverters)
  const systemCostBeforeRebateINR = Math.round(systemSizeKw * 58000);
  const taxCreditDiscountINR = Math.round(systemCostBeforeRebateINR * 0.30); // 30% Federal/State Subsidy
  const netSystemCostINR = systemCostBeforeRebateINR - taxCreditDiscountINR;

  const estPaybackYears = parseFloat((netSystemCostINR / estAnnualSavingsINR).toFixed(1));

  // Environmental impact
  const annualKwhGenerated = systemSizeKw * annualSunHours * 0.85;
  const co2OffsetTonsYr = parseFloat(((annualKwhGenerated * 0.82) / 1000).toFixed(1)); // 0.82 kg CO2 per kWh
  const equivalentTreesPlanted = Math.round(co2OffsetTonsYr * 45);

  return {
    monthlyBill: monthlyBillINR,
    systemSizeKw,
    panelsCount,
    roofSpaceSqFt,
    estAnnualSavingsINR,
    est25YrSavingsINR,
    estPaybackYears: Math.max(2.8, estPaybackYears),
    co2OffsetTonsYr,
    equivalentTreesPlanted,
    systemCostBeforeRebateINR,
    taxCreditDiscountINR,
    netSystemCostINR,
  };
}
