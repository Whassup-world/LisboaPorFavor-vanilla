// LXTourguide - Guide Profile Data
const lxtourguideData = {
  guideName: "LXtourguide",
  title: "Welcome to LXTourguide",
  avatarUrl: "images/guides/lxtourguide/LXtourguide-profile.png",
  rating: 5.0,
  reviewCount: 20,
  qualifiedToursCount: 5,
  guideId: "PTLIS00001",
  languages: ["English", "Dutch", "German"],
  responseTime: "6 hours on average",
  
  welcomePreview: `Welcome to LXTourguide, your local expert in Lisbon! 🌟 I'm George, your dedicated tour guide, partnering with Lisboaporfavor to offer personalized walking and biking tours that showcase the best of our beautiful city.

Discover historic landmarks, enjoy delicious local cuisine, and uncover hidden gems with a tour tailored just for you!`,

  welcomeFull: `Welcome to LXTourguide, your local expert in Lisbon! 🌟 I'm George, your dedicated tour guide, partnering with Lisboaporfavor to offer personalized walking and biking tours that showcase the best of our beautiful city.

Discover historic landmarks, enjoy delicious local cuisine, and uncover hidden gems with a tour tailored just for you!

Why Choose LXTourguide?
- Customized Tours: Each tour is designed to fit your interests.
- Local Insights: Gain insider knowledge about Lisbon's rich culture.
- Memorable Experiences: Create lasting memories with unique adventures.

Ready to start your Lisbon adventure? Contact me to plan your perfect trip! Let's make your journey unforgettable!

Best,
George
LXTourguide
Partner of Lisboaporfavor`,

  images: [
    { src: "images/guides/lxtourguide/IMG-20250727-WA0009.jpg", alt: "LXtourguide Lisbon — featured" },
    { src: "images/guides/lxtourguide/IMG-20241025-WA0005.jpg", alt: "LXtourguide Lisbon — gallery 1" },
    { src: "images/guides/lxtourguide/IMG-20240902-WA0003.jpg", alt: "LXtourguide Lisbon — gallery 2" },
    { src: "images/guides/lxtourguide/IMG-20250517-WA0000.jpg", alt: "LXtourguide Lisbon — gallery 3" },
    { src: "images/guides/lxtourguide/IMG-20250621-WA0003.jpg", alt: "LXtourguide Lisbon — gallery 4" },
    { src: "images/guides/lxtourguide/IMG-20240519-WA00X3.jpg", alt: "LXtourguide Lisbon — landscape 1" }
  ],

  tours: [
    {
      slug: "alfama-vintage-market",
      title: "Alfama Vintage Market Walk",
      image: "images/_rawslug/cais-das-colunas-view.webp",
      duration: "3 hours",
      price: "€35",
      rating: "★★★★★",
      reviews: 12,
      maxGuests: 8,
      description: "Your bespoke walking route through Alfama's markets and miradouros."
    },
    {
      slug: "belem-bike-tour",
      title: "Belém Bike Tour",
      image: "images/_rawslug/cais-das-colunas-view.webp",
      duration: "2.5–3 hours",
      price: "€42",
      rating: "★★★★★",
      reviews: 29,
      maxGuests: 12,
      description: "Riverside cycling to Belém's monuments with safe, flat paths."
    }
  ],

  reviews: [
    {
      id: 1,
      name: "Sarah J.",
      date: "June 2025",
      avatar: "images/_rawslug/bifana.webp",
      rating: "★★★★★",
      text: "George was an amazing guide! His knowledge of Lisbon's history made our walking tour so interesting. He took us to hidden spots we would never have found on our own. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael T.",
      date: "May 2025",
      avatar: "images/_rawslug/prego-no-pao.webp",
      rating: "★★★★★",
      text: "The food tour was incredible! George took us to authentic local restaurants and explained the history behind each dish. The pastéis de nata were the best I've ever had. A must-do experience in Lisbon!"
    },
    {
      id: 3,
      name: "Emma L.",
      date: "April 2025",
      avatar: "images/_rawslug/francesinha.webp",
      rating: "★★★★★",
      text: "The Belém by Bike tour was perfect! George provided comfortable bikes and took us at a nice pace. He knew all the best photo spots and shared fascinating stories about the monuments. Great way to see this beautiful area!"
    }
  ]
};

// Export to window for use in other scripts
window.lxtourguideData = lxtourguideData;
