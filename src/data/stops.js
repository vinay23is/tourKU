// Tour stop data for the walking route. Times are rough walking estimates,
// not official figures. Copy is general descriptive text — no precise
// historical claims beyond commonly known campus facts.
const stops = [
  {
    id: 'jayhawk-boulevard',
    number: 1,
    name: 'Jayhawk Boulevard',
    category: 'The Spine',
    visit: '10 min walk',
    short: 'The main street of campus, running along the crest of Mount Oread.',
    story:
      'Every KU day crosses this street. Limestone halls line both sides, and between classes the sidewalks fill shoulder to shoulder. Walk it end to end and you pass most of a century of campus architecture.',
    why: 'It is the axis everything else hangs on — start here and the rest of the hill makes sense.',
  },
  {
    id: 'fraser-hall',
    number: 2,
    name: 'Fraser Hall',
    category: 'Landmark',
    visit: '10 min stop',
    short: 'The twin-towered hall visible from almost anywhere in Lawrence.',
    story:
      'Fraser sits at the high point of the hill, and its two towers are the silhouette people picture when they picture KU. From the lawn you can see the Kaw Valley open up below the campus.',
    why: 'The best single view of how the university sits above the town.',
  },
  {
    id: 'memorial-campanile',
    number: 3,
    name: 'Memorial Campanile',
    category: 'Tradition',
    visit: '15 min stop',
    short: 'The bell tower on the hill overlooking Memorial Stadium.',
    story:
      'The Campanile is a World War II memorial, and its carillon marks the hours across campus. Students traditionally wait until Commencement to walk through its arch — graduates pass through it on the walk down the hill.',
    why: 'The one spot on campus where tradition is something you physically do.',
  },
  {
    id: 'allen-fieldhouse',
    number: 4,
    name: 'Allen Fieldhouse',
    category: 'Game Day',
    visit: '20 min stop',
    short: 'Named for coach Phog Allen. “Pay Heed, All Who Enter.”',
    story:
      'Even empty, the fieldhouse hums. On game nights the Rock Chalk chant rolls around the rafters, slow and low, and visiting teams talk about it for years. The banner says the rest: Beware of the Phog.',
    why: 'You cannot explain KU to someone without standing in this building.',
  },
  {
    id: 'spencer-museum',
    number: 5,
    name: 'Spencer Museum of Art',
    category: 'Quiet Hour',
    visit: '30 min stop',
    short: 'A teaching museum with a collection far larger than its footprint suggests.',
    story:
      'The Spencer is free to walk into and easy to lose an hour in. It is where campus slows down — students sketching, a class gathered around a single work, galleries that turn over often enough to reward coming back.',
    why: 'The counterweight to game day. Campus at its quietest and most curious.',
  },
  {
    id: 'watson-library',
    number: 6,
    name: 'Watson Library',
    category: 'Landmark',
    visit: '15 min stop',
    short: 'The old main library, all limestone and reading rooms.',
    story:
      'Watson is the library people mean when they say “the library.” Its older reading rooms feel borrowed from another century, and the stacks go deep enough to get pleasantly lost in.',
    why: 'The clearest surviving piece of the early campus, still doing its original job.',
  },
  {
    id: 'kansas-union',
    number: 7,
    name: 'The Kansas Union',
    category: 'Daily Life',
    visit: '20 min stop',
    short: 'Six floors of student life stacked into the side of the hill.',
    story:
      'The Union is where campus eats, meets, studies, and argues. It is built into the slope, so the floor you enter on depends on which side of the hill you came from — a very Mount Oread problem.',
    why: 'The best place to watch ordinary KU life happen in real time.',
  },
  {
    id: 'mass-street',
    number: 8,
    name: 'Mass Street',
    category: 'Into Town',
    visit: 'The rest of the day',
    short: 'Downhill from campus, Massachusetts Street is downtown Lawrence.',
    story:
      'The tour does not end at the edge of campus, because KU does not end there either. Walk down the hill and Mass Street picks up where the boulevard leaves off — record shops, bookstores, coffee, and the crowd after every home win.',
    why: 'This is the point of the whole route: the town and the university are one walk.',
  },
];

export default stops;
