export const portfolioBrands = [
  { name: 'Pororo Park', category: 'CHARACTER PLAY', audience: 'Children & families', offer: 'Pororo-themed rides, play zones and character experiences.', role: 'Build family visits around characters children love.', sourceIds: ['S14'], tone: 'pororo' },
  { name: 'Tayo Station', category: 'PLAY & LEARN', audience: 'Children & families', offer: 'Driving, road-safety learning and pretend play with Tayo.', role: 'Build family and school visits around learning through play.', sourceIds: ['S15'], tone: 'tayo' },
  { name: 'SuperPark', category: 'ACTIVE PLAY TOGETHER', audience: 'All ages, including adults', offer: 'Active games, group play and local corporate programmes.', role: 'First growth test: working adults and corporate teams.', sourceIds: ['S4', 'S16'], tone: 'superpark' },
] as const;

// Selected public offers, not a market census or a scored product review.
export const competitiveRows = [
  { market: 'Children’s play', dreamus: 'Pororo Park / Tayo Station', alternatives: 'kidzooona · Fanpekka · Kidzilla · Playtopia Playground', proof: 'Child-led play, learning and family visits. Multiple local mall options.', implication: 'Many close alternatives. Make the character and learning experience count.', sourceIds: ['S17', 'S18', 'S19', 'S20', 'S21', 'S22'] },
  { market: 'Adults playing together', dreamus: 'SuperPark', alternatives: 'Playtopia Adventure', proof: 'All-age activities, with a listed Senayan Park outlet.', implication: 'Compete on a group outing people can picture and book.', sourceIds: ['S21', 'S22'] },
  { market: 'Corporate outings', dreamus: 'SuperPark', alternatives: 'Playtopia corporate gathering · Funworld bowling (substitute)', proof: 'Corporate gatherings and social bowling compete for the same outing budget.', implication: 'Make the agenda, host, quote and booking easy for HR.', sourceIds: ['S21', 'S23'] },
] as const;

export const priorityReasons = [
  { title: 'Adults can join in.', body: 'SuperPark already serves adults as players.', sourceIds: ['S4'], status: 'Company claim' as const },
  { title: 'Corporate already exists.', body: 'Indonesia lists Super Team, Super Squad and Super Builder.', sourceIds: ['S16'], status: 'Company claim' as const },
  { title: 'A focused next test.', body: 'Improve after-work outings and team bookings. Measure paid demand.', sourceIds: [], status: 'Strategic hypothesis' as const },
];
