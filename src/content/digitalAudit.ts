export const adThemes = [
  { label: 'School / class outings', cards: 4 },
  { label: 'Halloween', cards: 4 },
  { label: 'General / social play', cards: 3 },
  { label: 'Corporate', cards: 3 },
  { label: 'Birthday', cards: 2 },
  { label: '10.10 discount', cards: 1 },
  { label: 'Family creator', cards: 1 },
];

export const adFindings = [
  { label: 'KEEP', title: 'Adults and HR are already addressed.', text: 'Workday recharge, office outings and team bonding are visible. Build on those messages.' },
  { label: 'FIX', title: 'Make the next step clear.', text: 'Some copy says “link in bio” while the ad has a booking button. Two cards mix “pre-sale sold out” with pre-sale urgency.' },
  { label: 'TEST', title: 'Sell an outing people can repeat.', text: 'Test one after-work offer and one HR package. Judge them by paid bookings and attendance.' },
];

export const bookingRoutes = [
  { title: 'Individual outing', observed: 'Buy Ticket → SuperPark venue → dated tickets', action: 'Link to the right venue and offer. Keep the advertised terms visible.' },
  { title: 'Corporate group', observed: 'Ads use WhatsApp. The website also has Team Building.', action: 'Give HR an agenda, group rules and a clear route to a quote.' },
  { title: 'Return visit', observed: 'Membership and rewards are already promoted.', action: 'Explain the benefits. Test repeat access separately from discount membership.' },
];

export const auditActions = [
  { priority: 'FIRST', action: 'Match the offer and booking route.', owner: 'Sales + operations + web team', signal: 'Every sampled link reaches its offer or useful booking help.' },
  { priority: 'NEXT', action: 'Test an after-work / HR message.', owner: 'Aditya + content + media team', signal: 'Qualified chats, paid bookings, attendance and visit costs.' },
  { priority: 'BEFORE SCALING', action: 'Connect ads to actual bookings.', owner: 'Media + finance + ticketing partner', signal: 'Paid orders, refunds and revenue agree with the booking records.' },
];
