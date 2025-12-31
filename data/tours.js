/**
 * Featured Tours Data
 * 
 * Real tour data from Wanderlog, structured for:
 * - GetYourGuide-style cards (homepage)
 * - Detailed tour pages (wanderlog structure)
 */

const featuredTours = [
  {
    id: 'belem-bike-tour',
    
    // Card Display (GetYourGuide style)
    title: 'Lisbon: Bike Tour to Belém',
    slug: 'lisbon-bike-tour-to-belem',
    thumbnail: 'https://itin-dev.wanderlogstatic.com/freeImage/zBtxkz4i3ZMW9ygCTTuKuAgEhcIsMKdO',
    duration: '4 hours',
    rating: 4.9,
    reviewCount: 142,
    price: 35,
    originalPrice: 45,
    badges: ['Top Pick', 'Best Seller'],
    category: 'Bike Tours',
    guideId: 'lxtourguide',
    
    // Detail Page Data
    shortDescription: 'Explore Lisbon\'s riverside route from the city center to historic Belém. Visit iconic monuments, enjoy the waterfront, and discover Portuguese maritime history.',
    
    wanderlogLink: 'https://wanderlog.com/plan/ljzeqwpfywwhqcqc/lisbon-bike-tour-to-belem',
    
    highlights: [
      'Cycle along the scenic riverside route',
      'Visit Belém Tower and Jerónimos Monastery',
      'Stop at the famous Pastéis de Belém',
      'Discover the Monument to the Discoveries',
      'Professional guide and quality bikes included'
    ],
    
    included: [
      'Professional English-speaking guide',
      'Quality bike and helmet',
      'Small group (max 12 people)',
      'Bottled water'
    ],
    
    notIncluded: [
      'Monument entrance fees',
      'Food and drinks',
      'Hotel pickup/drop-off'
    ],
    
    meetingPoint: {
      name: 'Lisbon Bike Tour & Outdoors',
      address: 'Alameda Cardeal Cerejeira, 1070-051 Lisboa, Portugal',
      placeId: 'ChIJN17mIuHLHg0RXVSjkorN-PY',
      lat: 38.7305881,
      lng: -9.1547395
    },
    
    itinerary: [
      {
        id: 1,
        title: 'Meeting Point',
        place: 'Lisbon Bike Tour & Outdoors',
        description: 'We start here - bike fitting and safety briefing',
        duration: '15 min'
      },
      {
        id: 2,
        title: 'Carlos Lopes Pavilion',
        place: 'Pavilhão Carlos Lopes',
        description: 'Named after Portugal\'s first Olympic gold medal winner at the 1984 Games',
        duration: '10 min'
      },
      {
        id: 3,
        title: 'Marquês de Pombal Square',
        place: 'Praça Marquês de Pombal',
        description: 'Learn about Sebastião José de Carvalho e Melo, the minister responsible for rebuilding Lisbon after the 1755 earthquake',
        duration: '15 min'
      },
      {
        id: 4,
        title: 'Avenida da Liberdade',
        place: 'Av. da Liberdade',
        description: 'Admire the beautiful Portuguese pavement (Calçada Portuguesa)',
        duration: '10 min'
      },
      {
        id: 5,
        title: 'Riverside Cycling',
        place: 'Tagus River Route',
        description: 'Scenic cycling along the Tagus River waterfront',
        duration: '30 min'
      },
      {
        id: 6,
        title: 'MAAT Museum',
        place: 'Museu de Arte, Arquitetura e Tecnologia',
        description: 'Photo stop at this stunning contemporary architecture',
        duration: '15 min'
      },
      {
        id: 7,
        title: 'Belém Tower',
        place: 'Torre de Belém',
        description: 'UNESCO World Heritage Site - iconic 16th century fortress',
        duration: '20 min'
      },
      {
        id: 8,
        title: 'Monument to the Discoveries',
        place: 'Padrão dos Descobrimentos',
        description: 'Celebrate Portugal\'s Age of Exploration',
        duration: '15 min'
      },
      {
        id: 9,
        title: 'Pastéis de Belém',
        place: 'Antiga Confeitaria de Belém',
        description: 'Optional stop for the famous Portuguese custard tarts',
        duration: '20 min (optional)'
      },
      {
        id: 10,
        title: 'Jerónimos Monastery',
        place: 'Mosteiro dos Jerónimos',
        description: 'UNESCO World Heritage Site - magnificent Manueline architecture',
        duration: '20 min'
      },
      {
        id: 11,
        title: 'Return Journey',
        place: 'Riverside Route',
        description: 'Cycle back along the scenic waterfront',
        duration: '40 min'
      }
    ],
    
    whatToBring: [
      'Comfortable clothes',
      'Sunscreen',
      'Camera',
      'Water bottle'
    ],
    
    importantInfo: [
      'Moderate fitness level required',
      'Not suitable for children under 12',
      'Tour operates in all weather conditions',
      'Maximum weight limit: 120kg'
    ],
    
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour starts'
  },
  
  {
    id: 'alfama-vintage-market',
    
    // Card Display (GetYourGuide style)
    title: 'Lisbon - Alfama Vintage Market Walking Tour With Tastings',
    slug: 'lisbon-alfama-vintage-market',
    thumbnail: '/images/_rawslug/cais-das-colunas-view.webp',
    duration: '3 hours',
    rating: 4.9,
    reviewCount: 36,
    price: 38,
    originalPrice: 50,
    badges: ['Tram 28', 'Local Favorite'],
    category: 'Walking Tours',
    guideId: 'lxtourguide',
    
    // Public Glimpse (10 highlights max)
    shortDescription: 'Private tour with a very dedicated and knowledgeable guide. Ride iconic Tram 28 through Alfama\'s historic streets. Visit the famous Feira da Ladra flea market, stunning miradouros, and the National Pantheon.',
    
    wanderlogLink: 'https://wanderlog.com/plan/jmwjemgccehxptqo/lisbon-alfama-vintage-market',
    
    highlights: [
      'Ride historic Tram 28 through Graça',
      'Visit Miradouro da Graça with stunning city views',
      'Explore National Pantheon (Eusébio, Amália Rodrigues)',
      'Browse Feira da Ladra vintage flea market',
      'Lunch at authentic Tabernita restaurant',
      'Discover miradouros (Portas do Sol, Santa Luzia)',
      'See beautiful Portuguese azulejos tiles',
      'Walk through medieval Alfama streets',
      'Visit Lisbon Cathedral (Sé de Lisboa)',
      'End at grand Praça do Comércio'
    ],
    
    included: [
      'Professional local guide (George)',
      'Navigante transport card for Tram 28',
      'Small group experience',
      'Photo stops at key viewpoints'
    ],
    
    notIncluded: [
      'Monument entrance fees (Pantheon €4, Churches €2-5)',
      'Food and drinks',
      'Gratuities'
    ],
    
    meetingPoint: {
      name: 'Igreja Sta. Maria Madalena (Tram Stop)',
      address: 'Tram 28e Stop - Caixa Bank, 1100-404 Lisboa',
      placeId: 'ChIJFwBPw3k0GQ0RBLWaX7GnFu8',
      lat: 38.7100636,
      lng: -9.135263799999999
    },
    
    // Full itinerary available after booking
    // (Detailed curriculum stored in training system)
    
    whatToBring: [
      'Comfortable walking shoes (cobblestones)',
      'Water bottle',
      'Camera',
      'Sunscreen & hat',
      'Cash for market purchases'
    ],
    
    importantInfo: [
      'Tour operates on Tuesday and Saturday only, aligned with the vintage market days',
      'Flea market only Tues & Sat (9am-6pm)',
      'Tour involves hills and stairs',
      'Best on Tuesday or Saturday for full market',
      'Full itinerary details provided after booking'
    ],
    
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour starts'
  }
]

// Guide data (referenced in tours)
const guides = {
  lxtourguide: {
    id: 'lxtourguide',
    name: 'George (LXTourguide)',
    publicName: 'LXTourguide',
    slug: 'lxtourguide',
    profilePhoto: '/images/guides/lxtourguide/LXtourguide-profile.png',
    bio: 'Welcome to LXTourguide, your local expert in Lisbon! I\'m George, partnering with Lisboaporfavor to offer personalized walking and biking tours that showcase the best of our beautiful city. Discover historic landmarks, enjoy delicious local cuisine, and uncover hidden gems!',
    rating: 5.0,
    reviewCount: 20,
    tourCount: 2,
    specialties: ['Walking Tours', 'Bike Tours', 'Hidden Gems', 'Local Cuisine'],
    languages: ['English', 'Dutch', 'German'],
    responseTime: '6 hours on average',
    experience: '5+ years'
  }
}

// Category cards for homepage
const categoryCards = [
  {
    id: 'tours',
    title: 'Tours',
    icon: '🎒',
    description: 'Guided experiences',
    link: '/tours',
    count: 12
  },
  {
    id: 'guides',
    title: 'Guides',
    icon: '👤',
    description: 'Local experts',
    link: '/guides',
    count: 8
  },
  {
    id: 'experiences',
    title: 'Experiences',
    icon: '🎭',
    description: 'Unique activities',
    link: '/experiences',
    count: 15
  }
]
