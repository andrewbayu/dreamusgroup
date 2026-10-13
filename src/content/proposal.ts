export const chapters = [
  { id: 'discovery', title: 'A reason to return', stage: 'Start' },
  { id: 'portfolio', title: 'Three brands. Different roles.', stage: 'Portfolio' },
  { id: 'priority', title: 'Why SuperPark first', stage: 'Priority' },
  { id: 'concept', title: 'Built for shared play', stage: 'What we know' },
  { id: 'evidence', title: 'What people already do', stage: 'What we know' },
  { id: 'occasions', title: 'A reason to visit', stage: 'The question' },
  { id: 'benchmark', title: 'A clearer offer', stage: 'The question' },
  { id: 'moves', title: 'Three actions', stage: 'Three moves' },
  { id: 'activation', title: 'Make the outing real', stage: 'Three moves' },
  { id: 'subscription', title: 'Make return visits worthwhile', stage: 'Three moves' },
  { id: 'tiktok', title: 'Show the play', stage: 'Three moves' },
  { id: 'plan', title: 'Test it with the team', stage: 'The plan' },
  { id: 'mandate', title: 'Who does what', stage: 'The plan' },
  { id: 'closing', title: 'Choose the first test', stage: 'Next step' },
];

export const storyBridges = [
  '',
  'Three brands, with different jobs. Which one fits the next growth priority?',
  'Start with SuperPark. Now look at the experience we can build on.',
  'Shared play is the product. Now look at how people spend their free time.',
  'The habits are there. Which outing would give people a reason to choose SuperPark?',
  'Once the outing is clear, the offer needs to make buying it easy.',
  'A clear outing. A reason to return. A story worth sharing. These are the three needs to test.',
  'Start with the experience. Then build repeat access and show it in action.',
  'A good first visit opens the next question: what makes a second visit worthwhile?',
  'Once the offer works, show people exactly what they can book.',
  'Now bring the offer, venue team and content together in one test.',
  'The plan needs a lead and clear owners.',
  'Start with one customer group and one offer.',
  '',
];

export const moves = [
  { section: 'activation', title: 'Give people a reason to visit.', why: 'Groups need a plan they can picture.', body: 'Package an outing. Make sure the venue delivers it.', tag: 'BRAND & EXPERIENCE' },
  { section: 'subscription', title: 'Make coming back worthwhile.', why: 'A repeat visit needs clear value.', body: 'Test a pass with clear access rules and workable costs.', tag: 'PASSES & PRICING' },
  { section: 'tiktok', title: 'Show the play on TikTok.', why: 'The organiser needs something to share.', body: 'Show real experiences. Link each video to an outing people can book.', tag: 'TIKTOK & BOOKINGS' },
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
  { id: 'group-outing', title: 'The group chat made it out', audience: 'Friends and group organisers', message: 'Show what friends can do together.', frames: ['A friend shares the outing plan.', 'The group tries a game together.', 'Show their real reactions, then the booking details.'], cta: 'Send this to your group. See session details.', measurement: 'Shares and watch time show interest. Paid bookings and attendance show results.', hypothesis: true },
  { id: 'first-attempt', title: 'One tip. Another try.', audience: 'First-time adults', message: 'Make the first try feel easy.', frames: ['A beginner tries an activity.', 'A host gives one useful tip.', 'They try again. Keep the reaction real.'], cta: 'Try it. Check the activity rules first.', measurement: 'Watch time, activity-page visits, bookings and feedback.', hypothesis: true },
  { id: 'parents-play', title: 'Parents play too', audience: 'Families', message: 'Show parents joining in.', frames: ['A parent and child get ready together.', 'They try an activity that suits them.', 'Show the family session, price and rules.'], cta: 'Explore family sessions.', measurement: 'Family-page visits, paid bookings, attendance and participation.', hypothesis: true },
  { id: 'team-play', title: 'A different team meeting', audience: 'HR and office organisers', message: 'Show the host and the team experience.', frames: ['The host briefs the group.', 'The team completes a shared task.', 'Show how an organiser can book the programme.'], cta: 'Ask for team programme details.', measurement: 'Enquiries, quotes, bookings and revenue after direct costs.', hypothesis: true },
  { id: 'pass-explained', title: 'Does a pass fit your play?', audience: 'People who may visit again', message: 'Explain when a pass makes sense.', frames: ['Compare the cost of the same type of ticketed visit.', 'Show included visits, time slots and expiry.', 'Explain who benefits—and who may prefer tickets.'], cta: 'Compare plans once the test offer is approved.', measurement: 'Plan-page visits, upgrades, use, revenue and renewals or cancellations.', hypothesis: true },
];

export const stages = [
  { name: 'Understand', work: 'See what customers buy and how the visit works.', outputs: ['Current offers, sales and visit patterns', 'Customer feedback and a visit walkthrough', 'Booking, payment and capacity checks'], gate: 'Choose one customer group and one venue.', owners: 'Aditya leads the review. Leadership sets priorities. Finance and operations share the facts.' },
  { name: 'Design', work: 'Build one offer people can understand.', outputs: ['A clear message and session plan', 'Price options and pass rules', 'Booking steps and content ideas'], gate: 'Approve the offer, budget and venue limits.', owners: 'Aditya leads the offer. Finance checks costs. Operations checks delivery. Leadership approves.' },
  { name: 'Launch', work: 'Prepare the team and open bookings.', outputs: ['Named session and check-in owners', 'A live test offer and approved content', 'Booking codes and a simple results report'], gate: 'Check that the visit and the tracking work.', owners: 'Operations runs the visit safely. Staff and agreed agency support deliver the work. Aditya coordinates.' },
  { name: 'Evaluate', work: 'Check bookings, use, costs and feedback.', outputs: ['Customer feedback and booking results', 'Revenue after fees and visit costs', 'Return visits, renewals and busy-slot use'], gate: 'Keep, change, expand or stop the offer.', owners: 'Finance checks the numbers. Operations checks capacity. Aditya recommends the next move. Leadership decides.' },
];
export const alignment = ['Priority goal at PIM or Puri', 'Current tickets, passes and memberships', 'Actual ticket prices, customer mix and visit frequency', 'Capacity, safety and staffing limits', 'Existing school and group programmes', 'Current TikTok content, creators and ads', 'Booking, member ID, QR and payment systems', 'Who approves prices and owns delivery', 'Data we can use to measure the test', 'Approved photos and verified case studies'];
