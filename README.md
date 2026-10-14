# SuperPark Indonesia — A Reason to Return

Interactive executive proposal for DreamUs leadership, prepared by Aditya Indra Bayu. Seventeen English chapters connect public research and audit findings to three umbrella actions: adult brand campaign, repeat-value product/pricing and digital conversion. Client-only React + TypeScript + Vite; no tracking, credentials, visitor storage or payments.

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

- Reading mode shows all sixteen chapters with chapter navigation and scroll progress.
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
| `src/content/sources.ts` | Typed source register S1–S29 and public survey facts |
| `src/content/digitalAudit.ts` | Meta snapshot inventory, booking routes and audit actions |
| `src/content/portfolio.ts` | Three-brand map, competitive comparison and priority reasons |
| `src/content/assumptions.ts` | Illustrative model defaults, units, descriptions and supported UI ranges |
| `src/lib/subscriptionEconomics.ts` | Pure equations and numerical validation |
| `src/App.tsx` | Narrative composition, hash navigation and presentation controls |
| `src/styles/main.css`, `src/styles/visuals.css` | Responsive editorial tokens, image treatments and print stylesheet |
| `src/content/visuals.ts`, `src/components/EditorialVisual.tsx` | Descriptions, responsive images and conceptual captions |
| `docs/visual-prompts.json` | Complete prompt set for twelve image_gen originals |

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

Sources S1–S12 were reviewed against the supplied research register and reopened on 13 October 2026. Live pages may change. Databoks is a secondary report; its English text is automatically translated. Populix detail is gated and no detailed percentages are used. Company-reported awards are not financial performance evidence. Portfolio and competitive sources S13–S23 were added on 14 October 2026. See [competitive brief](docs/competitive-brief.md) for the method and limits, including counter-evidence from Playtopia. See the site’s evidence drawer for clickable links.

See [asset manifest](docs/asset-manifest.md). Twelve original horizontal illustrations were generated with the built-in image_gen tool and visually inspected. Editorial gouache images, survey/offer/access/workflow infographics and distinctive scene thumbnails support each chapter. All human/event imagery is clearly labelled conceptual. No generated photograph is presented as an actual SuperPark visitor, facility, testimonial, employee or post.

Responsive WebP variants, intrinsic dimensions, explicit sizes/srcset and lazy loading limit transfer and layout shift. The hero loads eagerly; calculator equations and source definitions remain accessible HTML. The infographic with 76%, 38% and 32% is a visual companion to the separate source/sample definitions below it. Regenerate that image if its underlying facts change. Fonts are self-hosted; icons are Lucide. Client-approved photography and Aditya’s approved portrait can be added after reuse permission is documented. Full generation prompts are saved in [visual-prompts.json](docs/visual-prompts.json).

## Deployment

The session requested deployment to https://github.com/andrewbayu/dreamusgroup. The repository was empty when inspected. GitHub Pages is the static host: https://andrewbayu.github.io/dreamusgroup/.

`.github/workflows/deploy.yml` installs locked dependencies, runs unit tests, builds, uploads `dist/` and deploys through the `github-pages` environment. Repository Settings → Pages must use **GitHub Actions**. Pushes to `main` publish; pull requests build and test without publishing. No custom domain or secret is required. Other static hosts can publish `dist/` after `npm ci && npm run build`.

## Verification and remaining inputs

Digital audit revision, 14 October 2026: new chapters 8–9 analyse the supplied Meta screenshot and the public booking journey, before the three actions. The deck now has 16 chapters. The 18-card inventory reconciles to 24 grouped ads; visible CTA counts reconcile to 9 WhatsApp, 6 booking and 3 not shown. These are inventory counts, not spend or performance. See [full audit](docs/meta-and-digital-audit.md) and [card inventory](docs/meta-ads-snapshot.csv). Self-service corporate empty states are labelled by venue/date and kept separate from the observed WhatsApp ad route.

Audit update QA: production build and 12 economics tests passed; the CSV totals reconciled independently. Browser QA verified all 16 presentation states, one visible chapter per state, the final Next boundary, the new source drawer, and both audit chapters at desktop 1280×800 and mobile 360×800. Mobile page width stayed within the viewport, and the proposal produced no captured console errors or warnings.

Portfolio revision, 14 October 2026: new slides 2–3 map Pororo Park, Tayo Station and SuperPark, then explain the first adult/corporate growth test. Previous slides shift by two. The comparison follows a buyer → offer → alternatives → implication template; it makes no relative market-density or saturation claim. All chapter counters and source totals are dynamic, and action links resolve by stable chapter ID.

Portfolio QA: production build and 12 economics tests passed. Browser checks confirmed all 14 presentation states, one visible chapter per state, the disabled final Next button, the chapter menu, action-to-activation link, corporate storyboard and filtered competitor sources. Desktop 1280×800 and mobile 360×800 were inspected. Mobile page width stayed at 345px within the 360px viewport (15px scrollbar); only the comparison table scrolls sideways. Arrow keys scroll its focused region without changing the presentation chapter.

Feedback revision, 14 October 2026: shorter copy across the twelve chapters, menus, tabs, storyboards and calculator; a new opening hook; explicit chapter transitions; three customer needs that lead into the three actions; and the supplied DreamUs logo. The access infographic uses the simpler ACCESS label. The three-action slide has a compact desktop presentation layout. Source dates and model equations remain unchanged.

Revision QA: production build and 12 economics tests passed. Inspected desktop 1280×800 and mobile 360×800; opening/logo, chapter 5 transition, three-action slide, action-to-pass navigation, high-use/default/reset/annual outputs, chapter menu and two updated storyboards. Mobile content width stayed within the viewport.

- Production TypeScript/Vite build passed.
- Twelve independent economics tests passed, including demo values, high usage, zero cost/customers/visits, fractional averages, invalid inputs, fee bounds, numeric overflow and annual separation.
- Production browser QA: desktop 1280×720 and mobile 360×800; all persona and activation tabs, all eight storyboards, all four plan stages, source drawer dismissal/focus return, calculator defaults/high use/zero values/invalid input/reset/annual separation, chapter selection, presentation keyboard navigation, input protection and clean exit.
- No horizontal overflow at 360px and no captured console errors or warnings in the tested interactions.
- Visual refresh QA: all twelve presentation chapters loaded their image assets; three activation selections use distinct programme art; all five video dialogs loaded their corresponding scenes. Desktop 1280×720 and mobile 360×800 were inspected, including infographic readability, full-composition image treatment, scene crops, dialog Escape behavior and alt descriptions. All 18 images in reading mode have explicit intrinsic dimensions and descriptive alt text.
- Browser Print action was exercised: details expanded before printing and their previous state was restored afterward. The in-app browser did not expose a PDF print preview, so exact page-break and PDF-export QA remains unverified. The stylesheet reveals sources, keeps all chapters in order and excludes controls/notes.

Commercial readiness still requires approved photography/proof assets, full current catalogue, first-party ticket economics and frequency, venue capacity/safety constraints, system capability and leadership approval of any actual pilot. Nothing on this site is a consumer checkout or an approved launch offer.

Campaign refresh, 14 October 2026: Make Room for Play / SuperPark is for grown-ups, too. Chapter 11 proposes a hero film, bio and partnerships; chapter 12 extends it through Clock Out. Play On. UGC; chapter 13 designs subscription-first pricing and corporate offers; chapter 14 includes a corporate landing-page preview with a local-only enquiry form. See [campaign strategy](docs/campaign-strategy.md). The proposal is published here; DreamUs-owned websites and profiles are not changed.

Campaign refresh QA: production build and all 12 economics tests passed. Browser checks verified all 17 presentation states and the final navigation boundary, mobile 360×800 campaign/UGC/corporate layouts, loaded preview imagery, the corporate prototype’s local form validation/status, unchanged chapter hash and Escape/focus restoration. No captured console errors or warnings.

Corporate Search update: chapter 14 now includes the proposed Google Search Ads test, Bahasa Indonesia keywords, negative-keyword candidates, Keyword Planner validation gate, ad copy and conversion path. The supplied search screenshot is preserved and attributed as S30; the register now has 30 sources. No volume, CPC or uplift is invented.
