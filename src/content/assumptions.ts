import type { ModelInputs } from '../lib/subscriptionEconomics';
export const defaults: ModelInputs = { price: 599000, ticket: 199000, baselineVisits: 1.5, visits: 4, cost: 25000, passFee: .03, ticketFee: .03, customers: 100 };
export const annualDefault = 6000000;
export const inputDefinitions: { key: keyof ModelInputs; label: string; unit: string; description: string; max: number; step: number }[] = [
  { key: 'price', label: 'Monthly pass revenue basis', unit: 'IDR / customer', description: 'Before separately modeled transaction fees; illustrative price.', max: 100000000, step: 1000 },
  { key: 'ticket', label: 'Comparable ticket revenue basis', unit: 'IDR / visit', description: 'Use the same tax, discount and refund basis as the pass.', max: 100000000, step: 1000 },
  { key: 'baselineVisits', label: 'Ticket baseline frequency', unit: 'visits / month', description: 'Expected paid visits without a pass. Independent of pass usage.', max: 100, step: .1 },
  { key: 'visits', label: 'Pass usage', unit: 'visits / month', description: 'Average usage with the pass; fractional averages are allowed.', max: 100, step: .1 },
  { key: 'cost', label: 'Incremental delivery cost', unit: 'IDR / visit', description: 'Variable delivery cost only, excluding fixed costs.', max: 100000000, step: 1000 },
  { key: 'passFee', label: 'Pass transaction fee', unit: '%', description: 'Pass payment and channel fees.', max: 100, step: .1 },
  { key: 'ticketFee', label: 'Ticket transaction fee', unit: '%', description: 'Ticket payment and channel fees.', max: 100, step: .1 },
  { key: 'customers', label: 'Modeled customers', unit: 'customers', description: 'Scenario size; not actual DreamUs customer counts.', max: 1000000, step: 1 },
];
