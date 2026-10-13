export type EvidenceStatus = 'Verified public fact' | 'Company claim' | 'Strategic hypothesis' | 'Illustrative model';
export type Source = { id: string; title: string; publisher: string; url: string; researchCheckedAt: string; publicationPeriod: string; evidenceType: 'company-positioning' | 'company-claim' | 'survey' | 'case-study'; caveat: string };
const originalSources: Source[] = [
  { id: 'S1', title: 'The Concept', publisher: 'SuperPark United', url: 'https://www.superparkunited.com/concept/', publicationPeriod: 'Live company page', evidenceType: 'company-positioning', caveat: 'Global all-age positioning. Global activity inventory is not the inventory of an Indonesian venue.' },
  { id: 'S2', title: 'For Groups', publisher: 'SuperPark Singapore', url: 'https://www.superpark.com.sg/groups/', publicationPeriod: 'Live product page', evidenceType: 'company-positioning', caveat: 'Singapore school and group programmes. Availability does not establish adoption or Indonesian demand.' },
  { id: 'S3', title: 'For Companies', publisher: 'SuperPark Singapore', url: 'https://www.superpark.com.sg/corporate/', publicationPeriod: 'Live product page', evidenceType: 'company-positioning', caveat: 'Team building, employee family days and corporate membership. International offer benchmark only.' },
  { id: 'S4', title: 'SuperPark Indonesia', publisher: 'SuperPark Indonesia', url: 'https://superpark.id/', publicationPeriod: 'Live product page', evidenceType: 'company-positioning', caveat: 'Pondok Indah Mall and Puri Indah Mall; corporate, school and birthday offers. No commercial performance data.' },
  { id: 'S5', title: 'Indonesia Membership', publisher: 'SuperPark Indonesia', url: 'https://superpark.id/memberships-2/', publicationPeriod: 'Live membership page', evidenceType: 'company-positioning', caveat: 'Twelve-month discount/perk membership: registered member, ticket discounts up to IDR 60,000, selected Puri F&B perks, partner offers and special class prices. This does not prove other access products are absent.' },
  { id: 'S6', title: 'Indonesia Youth Choice Award', publisher: 'SuperPark United', url: 'https://www.superparkunited.com/3389-2-2-2-2-2/', publicationPeriod: '2025 award', evidenceType: 'company-claim', caveat: 'Company reports Best Integrated Product Campaign to Gen Z. Award is not evidence of conversion, profitability or repeat visits.' },
  { id: 'S7', title: 'ASEAN Consumer Sentiment Study', publisher: 'UOB', url: 'https://www.uobgroup.com/asean-insights/articles/acss-2025.page', publicationPeriod: 'May–June 2025', evidenceType: 'survey', caveat: '76% of Indonesian respondents consider experiential spending essential. Regional sample: 5,000 across five countries. Broad spending category; no SuperPark willingness-to-pay estimate.' },
  { id: 'S8', title: 'Gen Z Leisure Activities', publisher: 'Databoks / Jakpat', url: 'https://databoks.katadata.co.id/en/demographics/statistics/699d0fa905160/the-majority-of-indonesian-gen-z-spend-their-free-time-on-social-media', publicationPeriod: '10–12 December 2025 survey; February 2026 article', evidenceType: 'survey', caveat: 'Online n=1,158, ages 17–28. Hangout 38%, exercise 32%, social scrolling 63%. Multiple self-reported activities, not shares of time. Secondary report with automated English translation.' },
  { id: 'S9', title: 'Sports Habits & Healthy Lifestyle', publisher: 'Jakpat', url: 'https://insight.jakpat.net/examining-sports-habits-and-healthy-lifestyle-of-gen-z-and-millennials-in-indonesia/', publicationPeriod: '19 June 2024', evidenceType: 'survey', caveat: 'n=4,477 Gen Z/Millennials. Stress reduction 47%, mood improvement 36%; home 54%, sports field 53% among preferred locations. Self-report, no indoor-entertainment willingness-to-pay claim.' },
  { id: 'S10', title: 'Gen Z Characteristics & Behaviours', publisher: 'Jakpat', url: 'https://insight.jakpat.net/gen-z-characteristics-and-behaviors-2/', publicationPeriod: '31 December 2024', evidenceType: 'survey', caveat: 'n=1,155. Qualitative digital-leisure and coffee-price context. Different study from S8; not a SuperPark pricing ceiling.' },
  { id: 'S11', title: 'Sports in Workers’ Routines', publisher: 'Populix', url: 'https://populix.co/en/data-hub/reports/how-sport-is-becoming-part-of-work-and-regular-activity-among-indonesian-workers', publicationPeriod: '19 April 2026', evidenceType: 'survey', caveat: 'Public wellness/routine summary only. Detailed report gated and not obtained; no detailed percentages used.' },
  { id: 'S12', title: 'Samsung Galaxy Watch6', publisher: 'TikTok for Business', url: 'https://ads.tiktok.com/business/en-US/inspiration/samsung-galaxy-watch6', publicationPeriod: 'Platform case study', evidenceType: 'case-study', caveat: 'Gamified creator participation including Indonesia. Creative reference only; no transferred performance forecast or required premium ad format.' },
].map(source => ({ ...source, researchCheckedAt: '2026-10-13' })) as Source[];

const portfolioSources: Source[] = [
  {
    "id": "S13",
    "title": "DreamUs Indonesia brand selector",
    "publisher": "DreamUs Edutainment Indonesia",
    "url": "https://dreamus-online.id/",
    "publicationPeriod": "Live brand selector",
    "evidenceType": "company-positioning",
    "caveat": "Lists Pororo Park, Tayo Station and SuperPark. Supports this three-brand map, not portfolio revenue or market share."
  },
  {
    "id": "S14",
    "title": "Pororo Park Indonesia",
    "publisher": "Pororo Park Indonesia",
    "url": "https://pororopark.id/",
    "publicationPeriod": "Live company page",
    "evidenceType": "company-positioning",
    "caveat": "Pororo-themed children’s play zones and train. Positioning only; no adult-only demand or sales comparison."
  },
  {
    "id": "S15",
    "title": "About Tayo Station Indonesia",
    "publisher": "Tayo Station Indonesia",
    "url": "https://tayostation.id/about-us/",
    "publicationPeriod": "Live company page",
    "evidenceType": "company-positioning",
    "caveat": "Children’s driving, road-safety and pretend-play experiences; school trips and birthdays. No portfolio performance ranking."
  },
  {
    "id": "S16",
    "title": "Indonesia Corporate Team Building",
    "publisher": "SuperPark Indonesia",
    "url": "https://superpark.id/companies/",
    "publicationPeriod": "Live corporate offer page",
    "evidenceType": "company-positioning",
    "caveat": "Lists Super Team, Super Squad, Super Builder and hosts. Confirm each venue’s current delivery and capacity. Programme claims are not proven team outcomes."
  },
  {
    "id": "S17",
    "title": "kidzooona and Fanpekka FAQ",
    "publisher": "AEON Fantasy Indonesia",
    "url": "https://www.aeonfantasy.co.id/faq/",
    "publicationPeriod": "Live FAQ, includes older pandemic guidance",
    "evidenceType": "company-positioning",
    "caveat": "Describes children aged 0–12 and adult companions. Only audience information is used; old health rules and prices are not reused."
  },
  {
    "id": "S18",
    "title": "AEON Fantasy stores",
    "publisher": "AEON Fantasy Indonesia",
    "url": "https://www.aeonfantasy.co.id/store/?attribute=1&location=Jakarta",
    "publicationPeriod": "Public store directory",
    "evidenceType": "company-positioning",
    "caveat": "Lists kidzooona at Lippo Mall Kemang and Jakarta Garden City, and Fanpekka at JGC. The directory returned locations beyond its filter, so no outlet totals are used."
  },
  {
    "id": "S19",
    "title": "Funworld playground formats",
    "publisher": "Funworld",
    "url": "https://www.funworld.id/playgrounds/",
    "publicationPeriod": "Live product page",
    "evidenceType": "company-positioning",
    "caveat": "Describes Kidzilla as children’s edutainment. Also lists all-age formats; Funworld is not classified as a children-only company."
  },
  {
    "id": "S20",
    "title": "Funworld / Kidzilla locations",
    "publisher": "Funworld",
    "url": "https://funworld.co.id/store-location/page/3/",
    "publicationPeriod": "Official directory, search-indexed content",
    "evidenceType": "company-positioning",
    "caveat": "Indexed directory lists Kidzilla at Emporium Pluit and other Jakarta malls. Direct page retrieval failed; confirm current outlet availability. No counts or prices used."
  },
  {
    "id": "S21",
    "title": "Playtopia formats and corporate gatherings",
    "publisher": "Playtopia",
    "url": "https://www.playtopia.id/",
    "publicationPeriod": "Live product page",
    "evidenceType": "company-positioning",
    "caveat": "Separates child-ticket Playground from all-age Adventure and advertises Corporate Gathering. This is direct counter-evidence to an uncontested adult/corporate market."
  },
  {
    "id": "S22",
    "title": "Playtopia local outlets",
    "publisher": "Playtopia",
    "url": "https://location.playtopia.id/",
    "publicationPeriod": "Official outlet directory",
    "evidenceType": "company-positioning",
    "caveat": "Lists Jakarta Playground locations and Adventure at Senayan Park. Selected local examples only, not a market census or density comparison."
  },
  {
    "id": "S23",
    "title": "Funworld bowling and social play",
    "publisher": "Funworld",
    "url": "https://www.funworld.id/",
    "publicationPeriod": "Live company page",
    "evidenceType": "company-positioning",
    "caveat": "Promotes bowling for friends and families. An indirect outing alternative, not evidence that every Jakarta branch offers bowling or a corporate package."
  }
].map(source => ({ ...source, researchCheckedAt: '2026-10-14' })) as Source[];

export const sources: Source[] = [...originalSources, ...portfolioSources];

export const facts: { title: string; body: string; status: EvidenceStatus; sourceIds: string[]; metric?: number; sampleContext?: string }[] = [
  { title: 'Experiences matter', body: 'of Indonesian respondents say spending on experiences is essential.', status: 'Verified public fact', sourceIds: ['S7'], metric: 76, sampleContext: 'UOB ACSS 2025 · Regional n=5,000 across five countries; figure is Indonesia-specific.' },
  { title: 'Time with friends', body: 'of surveyed Indonesian Gen Z hang out with friends in their free time.', status: 'Verified public fact', sourceIds: ['S8'], metric: 38, sampleContext: 'Jakpat · December 2025 · Online n=1,158, ages 17–28 · Reported by Databoks.' },
  { title: 'Time to exercise', body: 'of the same surveyed Gen Z exercise during their free time.', status: 'Verified public fact', sourceIds: ['S8'], metric: 32, sampleContext: 'Jakpat · December 2025 · Online n=1,158, ages 17–28 · Multiple-response activities.' },
];
