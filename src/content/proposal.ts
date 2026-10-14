export const chapters = [
  { id: 'discovery', title: 'Make room for play', stage: 'Start' },
  { id: 'portfolio', title: 'Three brands. Different roles.', stage: 'Portfolio' },
  { id: 'priority', title: 'Why SuperPark first', stage: 'Priority' },
  { id: 'concept', title: 'Built for shared play', stage: 'What we know' },
  { id: 'evidence', title: 'What people already do', stage: 'What we know' },
  { id: 'occasions', title: 'A reason to visit', stage: 'The question' },
  { id: 'benchmark', title: 'A clearer offer', stage: 'The question' },
  { id: 'meta-audit', title: 'Build on the ads already running', stage: 'Digital audit' },
  { id: 'digital-audit', title: 'Keep the booking promise', stage: 'Digital audit' },
  { id: 'moves', title: 'Three actions', stage: 'Three moves' },
  { id: 'activation', title: '1. Build the adult brand campaign', stage: 'Three moves' },
  { id: 'tiktok', title: 'The UGC series: Clock Out. Play On.', stage: 'Three moves' },
  { id: 'subscription', title: '2. Build a reason to return', stage: 'Three moves' },
  { id: 'digital-campaign', title: '3. Turn interest into bookings', stage: 'Three moves' },
  { id: 'plan', title: 'Test it with the team', stage: 'The plan' },
  { id: 'mandate', title: 'What hiring me unlocks', stage: 'The plan' },
  { id: 'closing', title: 'Connect creativity to growth', stage: 'Next step' },
];

export const storyBridges = [
  '',
  'Three brands open three different doors. For working adults and office teams, which door should we open wider?',
  'SuperPark fits the audience. The next step is to make adults see themselves in the experience.',
  'The games are already there. Now consider the people who might choose them after a long workday.',
  'People already make time for friends and activity. Can SuperPark become the plan they share?',
  'A good invitation starts the story. A clear offer helps the organiser say yes.',
  'Before we add more reach, follow the invitation from the ad to the booking page.',
  'Adult and corporate ads already exist. The next click needs to carry the same promise.',
  'The opportunity is a connected journey: feel invited, see the value, then book with confidence.',
  'These are three workstreams—not three isolated tactics. Start with the story we want adults to share.',
  'The hero film introduces the message. Real people keep that story going on TikTok.',
  'When the first outing feels worth it, the next question is simple: why not come back?',
  'A repeat offer gives the visit value. A clear digital journey makes that value easy to act on.',
  'Now the message, offer and booking route are ready to test together.',
  'The plan needs someone who can connect the work. Here is what hiring me brings.',
  'These capabilities share one purpose: connect the creativity already here to measurable growth.',
  '',
];

export const moves = [
  { section: 'activation', title: 'Build a brand campaign for adults.', why: '“This place is for us, too.”', body: 'One hero message across content, TikTok UGC, social profiles and partnerships.', tag: '01 / BRAND CAMPAIGN' },
  { section: 'subscription', title: 'Build an offer worth returning for.', why: '“Let’s make this a regular plan.”', body: 'Design subscription-first pricing for professionals, plus clear corporate offers.', tag: '02 / PRODUCT & PRICING' },
  { section: 'digital-campaign', title: 'Turn interest into bookings.', why: '“I know what to book and how.”', body: 'Connect digital campaigns, focused landing pages, sales follow-up and measurement.', tag: '03 / DIGITAL CONVERSION' },
];

export type Persona = { id: string; name: string; buyer: string; occasion: string; value: string; message: string; proof: string; test: string; hypothesis: true };
export const personas: Persona[] = [
  { id: 'friends', name: 'Professionals', buyer: 'The colleague or friend who makes the plan', occasion: 'An after-work outing everyone can join', value: 'Play together. Try something new. Know the total cost.', message: 'Your next after-work outing, with everyone in the game.', proof: 'Games for groups, beginner help, clear prices and session times.', test: 'Compare a group outing offer with the usual ticket message. Track bookings, attendance and costs.', hypothesis: true },
  { id: 'family', name: 'Family', buyer: 'A parent or caregiver', occasion: 'A day where parents play too', value: 'A shared experience, with activities that suit the family.', message: 'A family day where parents play too.', proof: 'Parent admission, age and height limits, sibling options and places to rest.', test: 'Try a family session. Watch participation and ask whether they would book again.', hypothesis: true },
  { id: 'corporate', name: 'Corporate', buyer: 'HR or the office organiser', occasion: 'A team outing that is easy to run', value: 'A host, a clear agenda and simple group booking.', message: 'Team building through play.', proof: 'Group size, safety, host, schedule, quote and invoice.', test: 'Run one hosted team session. Review paid bookings, costs and organiser feedback.', hypothesis: true },
  { id: 'school', name: 'School', buyer: 'A teacher or school leader', occasion: 'A school trip with a clear purpose', value: 'Active learning, guidance and a planned session.', message: 'Learn through active play.', proof: 'Learning goals, age suitability, supervision, safety and parent permission.', test: 'Design a session with educators. Check that it works and that schools want to book it.', hypothesis: true },
];

export type Storyboard = { id: string; title: string; audience: string; message: string; frames: string[]; cta: string; measurement: string; hypothesis: true };
export const activations: Storyboard[] = [
  { id: 'friends-night', title: 'After-Work Play Night', audience: 'Working adults and friend groups', message: personas[0].message, frames: ['A host shows the group how to start.', 'Friends try games and challenges together.', 'Invite them to the next session. Explain any pass offer clearly.'], cta: 'Book a group session. See prices and rules.', measurement: 'Bookings, attendance, sales, direct costs and return visits.', hypothesis: true },
  { id: 'family-missions', title: 'Family Play Missions', audience: 'Parents and children', message: personas[1].message, frames: ['Choose tasks that suit the family.', 'Parents and children complete a mission together.', 'Give them a new mission to try next time.'], cta: 'See family sessions and admission rules.', measurement: 'Family bookings, parent participation, feedback, costs and repeat bookings.', hypothesis: true },
  { id: 'team-programme', title: 'Team Programme Booking Test', audience: 'HR and office organisers', message: 'Make the existing corporate programme easy to choose and book.', frames: ['Confirm the existing programme, host and safety rules.', 'The team completes a guided challenge.', 'Discuss the experience. Follow up with the organiser.'], cta: 'Ask for an agenda and a quote.', measurement: 'Enquiries, paid bookings, attendance, costs and organiser feedback.', hypothesis: true },
];
export const videos: Storyboard[] = [
  { id: 'group-outing', title: 'EP01 / The chat finally clocks out', audience: 'Working adults and friends', message: 'Clock Out. Play On. / Make Room for Play. SuperPark is for grown-ups, too.', frames: ['The group chat has said “soon” for weeks. A creator finally makes the plan.', 'Friends arrive after work and try a shared challenge. Film their real reactions.', 'The creator says why they made time. End: Make Room for Play.'], cta: 'Send this to your work friends. See the after-work offer.', measurement: 'Shares, adult-audience fit, landing-page visits, bookings and attendance.', hypothesis: true },
  { id: 'first-attempt', title: 'EP02 / First try after five', audience: 'Beginner adults', message: 'You do not need to be sporty to make room for play. Check each activity’s rules.', frames: ['A working adult says what they are nervous to try.', 'Show the first attempt and a host’s practical tip.', 'Keep the honest reaction. End: Make Room for Play.'], cta: 'Pick an activity. Check the rules and book a session.', measurement: 'Watch time, activity-page visits, paid bookings and participant feedback.', hypothesis: true },
  { id: 'parents-play', title: 'EP03 / My turn to play', audience: 'Working parents', message: 'Grown-ups get to join in. SuperPark remains an all-age venue.', frames: ['A parent explains that they usually watch from the side.', 'They join their child in an activity that suits both.', 'Capture their real reaction. End: Make Room for Play.'], cta: 'Explore family sessions and admission rules.', measurement: 'Adult participation, family-page visits, bookings and feedback.', hypothesis: true },
  { id: 'team-play', title: 'EP04 / Out of office. Into play.', audience: 'HR, office organisers and colleagues', message: 'Make room for the team beyond the meeting room.', frames: ['A colleague films the team leaving the usual office routine.', 'Show the host, briefing and a real shared challenge.', 'Ask the organiser what they needed to book. End: Make Room for Play.'], cta: 'Plan your team outing on the corporate landing page.', measurement: 'Qualified enquiries, quotes, paid team bookings and direct contribution.', hypothesis: true },
  { id: 'pass-explained', title: 'EP05 / Same friends. Next round.', audience: 'Professionals considering repeat visits', message: 'Make play a regular plan—when the pass fits your actual visits.', frames: ['A creator checks the calendar for another outing.', 'Compare an approved pass with tickets, including visits, slots and expiry.', 'Give an honest choice. End: Make Room for Play.'], cta: 'Compare approved plans. Tickets remain an option.', measurement: 'Plan visits, purchases, actual use, return visits and renewals.', hypothesis: true },
];

export const stages = [
  { name: 'Understand', work: 'See what customers buy and how the visit works.', outputs: ['Current offers, sales and visit patterns', 'Customer feedback and a visit walkthrough', 'Booking, payment and capacity checks'], gate: 'Choose one customer group and one venue.', owners: 'Aditya leads the review. Leadership sets priorities. Finance and operations share the facts.' },
  { name: 'Design', work: 'Build one offer people can understand.', outputs: ['Hero film brief, adult bio and UGC series', 'Subscription-first offer and corporate quote grid', 'Corporate landing page and tracking plan'], gate: 'Approve the offer, budget and venue limits.', owners: 'Aditya leads the offer. Finance checks costs. Operations checks delivery. Leadership approves.' },
  { name: 'Launch', work: 'Prepare the team and open bookings.', outputs: ['Named session and check-in owners', 'Approved hero content, UGC and test offers', 'Working landing pages, enquiry handoff and tracking'], gate: 'Check that the visit and the tracking work.', owners: 'Operations runs the visit safely. Staff and agreed agency support deliver the work. Aditya coordinates.' },
  { name: 'Evaluate', work: 'Check bookings, use, costs and feedback.', outputs: ['Customer feedback and booking results', 'Revenue after fees and visit costs', 'Return visits, renewals and busy-slot use'], gate: 'Keep, change, expand or stop the offer.', owners: 'Finance checks the numbers. Operations checks capacity. Aditya recommends the next move. Leadership decides.' },
];
export const alignment = ['Priority goal at PIM or Puri', 'Current tickets, passes and memberships', 'Actual ticket prices, customer mix and visit frequency', 'Capacity, safety and staffing limits', 'Existing school and group programmes', 'Current TikTok content, creators and ads', 'Booking, member ID, QR and payment systems', 'Who approves prices and owns delivery', 'Data we can use to measure the test', 'Approved photos and verified case studies'];
