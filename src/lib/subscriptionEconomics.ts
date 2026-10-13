export type ModelInputs = { price: number; ticket: number; baselineVisits: number; visits: number; cost: number; passFee: number; ticketFee: number; customers: number };
function nonnegative(value: number) {
  if (!Number.isFinite(value) || value < 0) throw new RangeError('Inputs must be finite and nonnegative.');
}
export function calculateEconomics(input: ModelInputs) {
  Object.values(input).forEach(nonnegative);
  if (input.passFee > 1 || input.ticketFee > 1) throw new RangeError('Fee fractions must be between zero and one.');
  const { price, ticket, baselineVisits, visits, cost, passFee, ticketFee, customers } = input;
  const passContribution = price * (1 - passFee) - visits * cost;
  const baselineContribution = baselineVisits * (ticket * (1 - ticketFee) - cost);
  const contributionDifference = passContribution - baselineContribution;
  const result = {
    passRevenue: price, baselineRevenue: baselineVisits * ticket,
    passContribution, baselineContribution,
    revenueDifference: price - baselineVisits * ticket,
    contributionDifference, totalDifference: customers * contributionDifference,
    breakEvenVisits: cost === 0 ? null : (price * (1 - passFee) - baselineContribution) / cost,
  };
  if (Object.values(result).some(value => value !== null && !Number.isFinite(value))) throw new RangeError('Scenario exceeds supported numeric range.');
  return result;
}
export function calculateAnnual(price: number) {
  nonnegative(price);
  return { upfrontCash: price, monthlyRevenueProxy: price / 12 };
}
export const currency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
