# SuperPark Indonesia — Turning Play into a Stronger Business Offer

Interactive executive proposal for DreamUs leadership, prepared by Aditya Indra Bayu. Twelve English chapters connect public research, customer occasions, proposed activation, access subscriptions and TikTok demand generation. Client-only React + TypeScript + Vite; no tracking, credentials, visitor storage or payments.

## Run locally

Use Node 22.12+ (verified locally on 22.17.1) or a compatible newer Node version.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`dist/` is the production output. Dependencies are locked in `package-lock.json`. `vite.config.ts` uses relative asset URLs so the build supports both the repository subpath on GitHub Pages and a root-domain static host.

## Present and read

- Reading mode shows all twelve chapters with chapter navigation and scroll progress.
- **Present** starts one chapter at a time. Arrows and PageUp/PageDown navigate; Escape exits. Inputs and tab controls retain their own keyboard behavior.
- The presentation toolbar offers next/previous, chapter selection, optional fullscreen and public speaker notes. Long chapters scroll normally so details remain available.
- Section hashes such as `#subscription` work in both modes. Tab selections and calculator inputs survive navigation within the current page; no visitor data is persisted.
- Native modal dialogs provide keyboard focus trapping, Escape dismissal and focus restoration. Evidence links include publisher, period, source type and limits.
- Tab groups support arrow keys, Home and End. The economics chart has a textual description and a table.
- Use browser Print, or **All chapters → Print report**. Print includes all chapters, selected tab content, assumptions, expanded details and the complete source register. Controls and speaker notes are omitted. PDF pagination should be reviewed in the intended browser; no claim of identical output across browsers.

## Edit content

| File | Purpose |
| --- | --- |
| `src/content/proposal.ts` | Chapters, proposed personas, activation/video storyboards, plan and alignment checklist |
| `src/content/sources.ts` | Typed source register S1–S12 and public survey facts |
| `src/content/assumptions.ts` | Illustrative model defaults, units, descriptions and supported UI ranges |
| `src/lib/subscriptionEconomics.ts` | Pure equations and numerical validation |
| `src/App.tsx` | Narrative composition, hash navigation and presentation controls |
| `src/styles/main.css` | Responsive editorial tokens and print stylesheet |

Facts, company positioning/claims, hypotheses and illustrative calculations have different evidence labels. Product concepts are not current offers. No internal performance figures, customer mix, campaign metrics, venue layouts or service prices have been invented. No numeric WSE case-study results are included because the supplied candidate page could not be verified.

## Economics

Inputs use a comparable revenue basis before separately modeled transaction/channel fees. Normalize taxes, discounts and refunds before replacing assumptions with actual data. Monthly and annual calculations are separate scenarios.

```text
Pass revenue = P
Pass contribution = P × (1 − pass fee) − pass visits × variable cost
Ticket revenue = baseline visits × ticket revenue per visit
Ticket contribution = baseline visits × [ticket revenue × (1 − ticket fee) − variable cost]
Revenue difference = pass revenue − ticket revenue
Contribution difference = pass contribution − ticket contribution
Total contribution difference = modeled customers × contribution difference
Break-even usage vs baseline = [P × (1 − pass fee) − ticket contribution] ÷ variable cost
Annual upfront cash = A
Monthly earned-revenue proxy = A ÷ 12
```

Default P=599,000; T=199,000; baseline visits=1.5; pass visits=4; c=25,000; fees=3% each; N=100. Expected pass contribution: IDR 481,030; ticket contribution: IDR 252,045; difference: IDR 228,985/customer/month; total: IDR 22,898,500; break-even: approximately 13.16 visits. High-use preset (16 visits) produces a negative difference of IDR 71,015/customer/month.

Zero variable cost makes break-even usage not applicable. A negative threshold means the pass is already below baseline before use. Finite, nonnegative input and fee bounds are validated; baseline visit frequency is independently editable. Zero visits/customers and fractional average visits are supported. Annual allocation is a simplified proxy requiring finance confirmation.

Contribution excludes fixed costs, displaced peak ticket customers, opportunity cost, staffing step changes, acquisition cost, unnormalized taxes, churn and add-ons. It is not profit or EBITDA. Every scenario is explicitly illustrative, not DreamUs actuals or approved pricing.

## Sources and assets

Sources S1–S12 were reviewed against the supplied research register and reopened on 13 October 2026. Live pages may change. Databoks is a secondary report; its English text is automatically translated. Populix detail is gated and no detailed percentages are used. Company-reported awards are not financial performance evidence. See the site’s evidence drawer for normal clickable links and caveats.

See [asset manifest](docs/asset-manifest.md). Original neutral SVG concepts replace missing approved photographs; no fabricated SuperPark visitors, facilities, testimonials or posts. Fonts are self-hosted; icons are Lucide. Client-approved photography and Aditya’s approved portrait can be added after reuse permission is documented.

## Deployment

The session requested deployment to https://github.com/andrewbayu/dreamusgroup. The repository was empty when inspected. GitHub Pages is the static host: https://andrewbayu.github.io/dreamusgroup/.

`.github/workflows/deploy.yml` installs locked dependencies, runs unit tests, builds, uploads `dist/` and deploys through the `github-pages` environment. Repository Settings → Pages must use **GitHub Actions**. Pushes to `main` publish; pull requests build and test without publishing. No custom domain or secret is required. Other static hosts can publish `dist/` after `npm ci && npm run build`.

## Verification and remaining inputs

- Production TypeScript/Vite build passed.
- Twelve independent economics tests passed, including demo values, high usage, zero cost/customers/visits, fractional averages, invalid inputs, fee bounds, numeric overflow and annual separation.
- Production browser QA: desktop 1280×720 and mobile 360×800; all persona and activation tabs, all eight storyboards, all four plan stages, source drawer dismissal/focus return, calculator defaults/high use/zero values/invalid input/reset/annual separation, chapter selection, presentation keyboard navigation, input protection and clean exit.
- No horizontal overflow at 360px and no captured console errors or warnings in the tested interactions.
- Browser Print action was exercised: details expanded before printing and their previous state was restored afterward. The in-app browser did not expose a PDF print preview, so exact page-break and PDF-export QA remains unverified. The stylesheet reveals sources, keeps all chapters in order and excludes controls/notes.

Commercial readiness still requires approved photography/proof assets, full current catalogue, first-party ticket economics and frequency, venue capacity/safety constraints, system capability and leadership approval of any actual pilot. Nothing on this site is a consumer checkout or an approved launch offer.
