import type { ModelInputs } from '../lib/subscriptionEconomics';
export const defaults: ModelInputs = { price: 599000, ticket: 199000, baselineVisits: 1.5, visits: 4, cost: 25000, passFee: .03, ticketFee: .03, customers: 100 };
export const annualDefault = 6000000;
export const inputDefinitions: { key: keyof ModelInputs; label: string; unit: string; description: string; max: number; step: number }[] = [
  { key: 'price', label: 'Monthly pass price', unit: 'IDR / customer', description: 'Example price, before payment and channel fees.', max: 100000000, step: 1000 },
  { key: 'ticket', label: 'Single ticket price', unit: 'IDR / visit', description: 'Match the pass’s tax, discount and refund basis.', max: 100000000, step: 1000 },
  { key: 'baselineVisits', label: 'Visits without a pass', unit: 'visits / month', description: 'Expected paid visits if the customer buys tickets.', max: 100, step: .1 },
  { key: 'visits', label: 'Visits with a pass', unit: 'visits / month', description: 'Average visits. Decimals are allowed.', max: 100, step: .1 },
  { key: 'cost', label: 'Cost per visit', unit: 'IDR / visit', description: 'Extra cost to serve each visit. Fixed costs excluded.', max: 100000000, step: 1000 },
  { key: 'passFee', label: 'Pass fee', unit: '%', description: 'Payment and channel fees on the pass.', max: 100, step: .1 },
  { key: 'ticketFee', label: 'Ticket fee', unit: '%', description: 'Payment and channel fees on tickets.', max: 100, step: .1 },
  { key: 'customers', label: 'Customers in this model', unit: 'customers', description: 'Example group size. Not actual customer numbers.', max: 1000000, step: 1 },
];
