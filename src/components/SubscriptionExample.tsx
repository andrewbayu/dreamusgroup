import { calculateEconomics, currency } from '../lib/subscriptionEconomics';

const scenario = { price: 600000, ticket: 200000, baselineVisits: 1, visits: 4, cost: 25000, passFee: .03, ticketFee: .03, customers: 100 };
const example = calculateEconomics(scenario);
const alreadyRegular = calculateEconomics({ ...scenario, baselineVisits: 4 });

export function SubscriptionExample() {
  return <div className="subscription-example">
    <span className="eyebrow">WHY LEAD WITH A PASS? / A SIMPLE EXAMPLE</span><h3>One purchase can become a month of play.</h3>
    <p className="model-notice">Illustrative assumptions. Not DreamUs revenue, costs or approved prices.</p>
    <div className="pass-number-grid"><article><span>Single ticket</span><strong>Rp200,000</strong><p>For one visit.</p></article><article className="pass-number-featured"><span>Monthly subscription pass</span><strong>Rp600,000</strong><p>Example: four included visits in one month.</p></article><article><span>Value at four visits</span><strong>Save Rp200,000</strong><p>Four tickets cost Rp800,000. The pass costs 25% less—or Rp150,000 per visit when all four are used.</p></article></div>
    <div className="subscription-business"><div><span className="eyebrow">BUSINESS CASE / 100 CUSTOMERS</span><h4>A larger purchase, with reasons to return.</h4><p>Assume each customer would otherwise buy <strong>one ticket that month</strong>. With the pass, each pays upfront and uses all four included visits.</p></div><div className="pass-comparison" role="region" aria-label="Illustrative monthly ticket and pass comparison" tabIndex={0}><table><caption>Same 100 customers · one month</caption><thead><tr><th scope="col">Illustrative outcome</th><th scope="col">One ticket each</th><th scope="col">Monthly pass each</th></tr></thead><tbody><tr><th scope="row">Customer visits</th><td>100</td><td>400</td></tr><tr><th scope="row">Sales before fees</th><td>{currency(example.baselineRevenue * 100)}</td><td>{currency(example.passRevenue * 100)}</td></tr><tr><th scope="row">After fees &amp; visit costs</th><td>{currency(example.baselineContribution * 100)}</td><td>{currency(example.passContribution * 100)}</td></tr></tbody></table></div></div>
    <p className="pass-result">In this scenario: <strong>Rp40 million more sales</strong> and <strong>Rp31.3 million more contribution</strong> for the month.</p>
    <p className="fine">Both options assume 3% payment/channel fees and Rp25,000 extra cost per visit. Contribution excludes fixed costs, acquisition cost and displaced peak-slot sales; it is not profit. Prices use the same tax, discount and refund basis.</p>
    <details><summary>When a subscription does not win</summary><p>If the same customer would already buy four tickets, the pass reduces sales from Rp800,000 to Rp600,000 and contribution from {currency(alreadyRegular.baselineContribution)} to {currency(alreadyRegular.passContribution)}—{currency(Math.abs(alreadyRegular.contributionDifference))} less per customer.</p><p>The example assumes extra visits and willingness to pay; it does not prove either. At one visit, a ticket is cheaper for the customer. Check repeat demand, visit costs, capacity and renewal before scaling. Four included visits make this a monthly subscription with capped access, not unlimited play.</p></details>
  </div>;
}
