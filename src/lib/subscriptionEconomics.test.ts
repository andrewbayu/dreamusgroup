import { describe, it, expect } from 'vitest';
import { calculateEconomics, calculateAnnual, type ModelInputs } from './subscriptionEconomics';

const demo: ModelInputs = { price: 599000, ticket: 199000, baselineVisits: 1.5, visits: 4, cost: 25000, passFee: .03, ticketFee: .03, customers: 100 };
describe('customer economics on a comparable monthly revenue basis', () => {
  it('reproduces every supplied handoff result', () => {
    const r = calculateEconomics(demo);
    expect(r.passRevenue).toBe(599000);
    expect(r.baselineRevenue).toBe(298500);
    expect(r.passContribution).toBe(481030);
    expect(r.baselineContribution).toBe(252045);
    expect(r.contributionDifference).toBe(228985);
    expect(r.totalDifference).toBe(22898500);
    expect(r.breakEvenVisits).toBeCloseTo(13.1594, 4);
  });
  it('preserves negative contribution and negative difference for heavy use', () => {
    const r = calculateEconomics({ ...demo, visits: 30 });
    expect(r.passContribution).toBe(-168970);
    expect(r.contributionDifference).toBe(-421015);
  });
  it('handles zero costs without division by zero', () => {
    expect(calculateEconomics({ ...demo, cost: 0 }).breakEvenVisits).toBeNull();
  });
  it('supports zero customers and zero use without changing the ticket baseline', () => {
    const r = calculateEconomics({ ...demo, customers: 0, visits: 0 });
    expect(r.totalDifference).toBe(0);
    expect(r.baselineContribution).toBe(252045);
    expect(r.passContribution).toBe(581030);
  });
  it('represents a pass below baseline even before use', () => {
    expect(calculateEconomics({ ...demo, price: 100000 }).breakEvenVisits).toBeLessThan(0);
  });
  it('allows fractional average visits and 100% transaction fees', () => {
    const r = calculateEconomics({ ...demo, visits: 2.5, passFee: 1, ticketFee: 1 });
    expect(r.passContribution).toBe(-62500);
    expect(r.baselineContribution).toBe(-37500);
  });
  it.each([-1, NaN, Infinity])('rejects invalid input %s', value => {
    expect(() => calculateEconomics({ ...demo, price: value })).toThrow();
  });
  it('rejects fee fractions outside zero to one', () => {
    expect(() => calculateEconomics({ ...demo, passFee: 1.1 })).toThrow();
    expect(() => calculateEconomics({ ...demo, ticketFee: -.1 })).toThrow();
  });
  it('rejects overflowing derived amounts', () => {
    expect(() => calculateEconomics({ ...demo, visits: Number.MAX_VALUE })).toThrow();
  });
  it('keeps annual cash separate from monthly earned-revenue proxy', () => {
    expect(calculateAnnual(6000000)).toEqual({ upfrontCash: 6000000, monthlyRevenueProxy: 500000 });
    expect(calculateAnnual(0)).toEqual({ upfrontCash: 0, monthlyRevenueProxy: 0 });
    expect(() => calculateAnnual(-1)).toThrow();
  });
});
