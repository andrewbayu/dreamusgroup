# SuperPark Meta ads and digital assets

Audited 14 October 2026, Asia/Jakarta. Scope: user-supplied Meta Ad Library screenshot, SuperPark brand site and DreamUs booking flows. This is a creative and customer-journey audit. Ads Manager, campaign spend/objectives/targeting, attribution settings, sales records and Events Manager were not supplied.

## Decision

Build on the adult and corporate marketing already running. The clearest immediate work is to align offer copy, destination and booking assistance. Then test an after-work offer and measure actual bookings. The evidence does not justify calling a creative a winner, pausing ads, changing budget allocation, or promising a revenue uplift.

## Meta snapshot

Source file: screencapture-facebook-ads-library-2026-10-14-00_07_53.png, supplied by the user. This is a frozen capture, not a fresh live account export. Filter: Indonesia, All ads, Active ads, SuperPark Indonesia. Visible start dates: 27 September–13 October 2026. The interface reports approximately 24 results.

There are **18 visible cards**. Three cards group 3, 4 and 2 ads; expanding those group labels gives 24 ads, consistent with the approximate result label. A card, creative asset, ad and campaign are different units. The carousel card is still one card. The manual inventory is in [meta-ads-snapshot.csv](meta-ads-snapshot.csv).

| Primary theme assigned per visible card | Cards |
| --- | ---: |
| School / class outing | 4 |
| Halloween | 4 |
| General / social play | 3 |
| Corporate | 3 |
| Birthday | 2 |
| 10.10 discount | 1 |
| Family creator | 1 |
| Total | 18 |

Counts describe creative inventory only. They do not describe spend, reach, frequency, audience size, results or budget share. Themes can overlap; each card is assigned one primary theme for this table.

### What already works in the message

- Adults are already represented: the Gen Z/date/friends creative and the weekend/workday-recharge message. The latter mentions colleagues.
- Three dedicated corporate cards address office outings, indoor team building and an October bonding package. One asks the viewer to share with HR; another states inclusions, timing and minimum group size.
- Real venue/participant video previews, group footage, a family creator and a school carousel provide different forms of experience proof. The videos were not played from the screenshot, so this is not a frame-by-frame video review.
- Visible CTA labels: 9 cards show WhatsApp, 6 show Book now/Buy tickets, and 3 have no visible button in the capture. These are visible-card counts, not campaign objectives. Only displayed destination domains are known; full ad click URLs were not tested from the capture.

### What to fix or test

| Evidence | Interpretation | Action |
| --- | --- | --- |
| Several booking ads say link in bio; one also mentions Traveloka while its display domain is superpark.id | The paid-ad instruction and button can point to different mental next steps | Test direct “Tap Book now”; match venue, dates, price and inclusions to the linked offer |
| R3C3 and R4C3 state pre-sale sold out, then retain urgency about pre-sale availability | Availability wording is internally inconsistent | If presale is sold out but regular tickets remain, say that plainly; update all grouped variants and landing copy together |
| Corporate ads already use WhatsApp and address HR | A consultative group-sales path exists | Keep it; capture venue, date, group size and package interest, then connect the enquiry to a paid booking |
| Halloween, school and birthday messages appear alongside adult/social messages | There are several buying occasions, not proof of poor targeting | Organise tests by offer and buyer; avoid judging the account from card count or style alone |
| R1C3 asks people to comment while displaying Book now | The message mixes an engagement prompt with a booking action; the campaign objective is unknown | If the goal is bookings, test an outing-led opening and a direct booking invitation. If the goal is engagement, assess that separately from sales |
| The newest grouped card has a low-impression label after five hours | Too early, and no outcome data is supplied | Do not label it a losing ad or infer fatigue from active duration/duplicated variants |

## Digital customer journey

### SuperPark brand site

[superpark.id](https://superpark.id/) already promotes adult activities and corporate offers. In the desktop session, the hero carousel included the October team-bonding package. In the mobile session it settled to a rewards banner, with Buy Ticket still prominent. Carousels change during a visit; one screenshot is not a permanent first-slide claim.

The Buy Ticket header link goes directly to [DreamUs /superpark](https://www.dreamus-online.id/superpark), bypassing the three-brand selector. Google cross-domain linker decoration was observed on that link. The ticket information page also has venue links. This is an existing useful connection, not a disconnected brand site and shop.

[The Indonesian corporate page](https://superpark.id/companies/) provides programme choices and a WhatsApp contact. Its programme benefits are company claims, not validated employee outcomes. The general marketing page is not a substitute for a package-specific quote/booking page.

### DreamUs booking assets

The root is a three-brand selector; /superpark is a venue selector. At the tested PIM route, ticket products, dates, a cart and payment-method logos were visible. Team Building, School Field Trip, Party and Membership are existing menu routes. No payment, personal-data submission, reservation or contact message was performed. Payment logos do not prove payment completion.

**Material observation:** the Team Building self-service category displayed “Products Not Found” after date confirmation for PIM on 14 and 15 October and Puri on 15 October. These are sampled venue/date/category states, not proof that all corporate programmes are unavailable or that WhatsApp sales fail. The current corporate ads visible in the screenshot use WhatsApp, so this observation must not be reported as a verified failure of those ad click destinations.

For an intentionally quote-led product, replace a bare empty catalogue with relevant booking help: programme choices, minimum group information and an obvious quote/contact action. If self-service is intended, check product publication, eligible dates and inventory with the ticketing partner. The cause was not established from the public UI.

Changing the outlet from the PIM programme view to Puri took the browser to Puri’s general home/ticket view; the selected date persisted. Preserve the selected product category when switching venue, or clearly explain the change. This is a UX recommendation, not measured abandonment.

The ordinary PIM ticket catalogue on 14 October showed discounted ticket options, including two-hour play and unlimited playtime. That is **single-visit duration**, not evidence of an unlimited recurring subscription. Existing membership/loyalty promotions remain distinct from a proposed repeat-access pass.

## Technical and mobile checks

- Settled layouts were inspected at 1280px desktop and 360px mobile widths. Mobile documents stayed inside the viewport. The SuperPark carousel initially rendered stacked banners during load, then settled; this is not recorded as a persistent layout failure or a measured loading-speed issue.
- SuperPark homepage had a canonical link and no H1 or meta name=description in the inspected DOM. The sampled DreamUs programme route used a generic document title and had no H1, meta description or canonical in the inspected DOM. Review page semantics and route-specific metadata; no ranking loss is inferred.
- Brand/venue selectors are clickable div cards in the inspected DOM. Review keyboard semantics and give them real links/buttons. A full accessibility audit was not run.
- Google tagging and Meta Pixel script hints were present on both properties. Presence is not proof of accurate Purchase/Lead events, cross-domain attribution, server-side events or deduplication. These were not validated through a completed purchase or Events Manager.
- SuperPark’s browser console reported Google Maps DeletedApiProjectMapError on two loads. Check the map integration with the web owner. [Google’s error reference](https://developers.google.com/maps/documentation/javascript/error-messages#deleted-api-project-map-error) explains the project issue. No API key is copied into this report, and the visibility of a failed map on every page was not established.
- No Core Web Vitals, Lighthouse score, search ranking, analytics traffic or full link crawl was measured. The observed birthday URL redirected to the canonical birthday page; it is not recorded as broken.

## Three priorities

| Priority / timing | Owner | Scope | Success signal / guardrail |
| --- | --- | --- | --- |
| First: before expanding an offer | Sales + operations + web/ticketing partner | Reconcile availability copy and grouped ad variants; provide a useful fallback for empty corporate catalogues | Every sampled offer link reaches the correct offer or booking help. Prices, dates and capacity approved by operations |
| Next: once the booking path is ready | Aditya + content + media team | Test one after-work message and one HR package, separately from school/family offers | Qualified enquiries, paid bookings, attendance and direct costs. Agree baseline, sample size and review date before launch |
| Before scaling: reconcile outcomes | Media + finance + ticketing partner | Connect campaign/creative and enquiry IDs to confirmed orders; validate tracking across domains and refunds | Booking and revenue records reconcile with reported results; no scaling decision from low CPC or inventory counts alone |

Budget allocation is not assessed here. No fixed uplift, budget percentage or performance threshold is invented. Leadership can set the test resources after the booking and measurement baseline is reviewed.

## Data needed for a performance verdict

Creative test ideas: show a professional group’s actual session, make the host and group plan visible for HR, and use one clear primary action. Put the short reason to go first; move detailed eligibility and package terms to a matching offer page. Keep the price/date/minimum group conditions available before purchase. These are test directions, not claims that current videos or longer copy perform badly.

Comparable reporting period, Ads Manager spend/delivery/clicks/results by creative, objective and optimisation event, attribution window, exact landing URLs, qualified conversations, response times, quotes, paid/attended bookings, order revenue/refunds, and tracking diagnostics. CTR, cost per qualified enquiry, booking conversion, CPA and ROAS can then be calculated with their denominators and attribution limits stated.

The proposal places two audit chapters immediately before the three actions. The short narrative is: existing adult/corporate intent → clearer offer and booking route → repeat value → content tied to real bookings.
