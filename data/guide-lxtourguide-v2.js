// LXTourguide – v2 guide data (clean structure for public + admin)
// This file is new for v2 and does not reuse legacy conflicting code.

const lxtourguideV2Data = {
  guide: {
    id: "PTLIS00001",
    slug: "lxtourguide",
    name: "LXtourguide",
    tagline: "Your local guide for the Lisbon Area",
    avatarUrl: "images/guides/lxtourguide/LXtourguide-profile.png",
    languages: ["English", "Dutch", "German"],
    ratingAverage: 5.0,
    ratingCount: 20,
    partnerStatus: "Partner of LisboaPorFavor",
    tags: [
      "Qualified for 5 tours",
      "Identified Guide",
      "Partner",
      "Local Expert"
    ]
  },
  gallery: {
    images: [
      { src: "images/guides/lxtourguide/IMG-20250727-WA0009.jpg", alt: "LXtourguide in Lisbon – riverside view" },
      { src: "images/guides/lxtourguide/IMG-20241025-WA0005.jpg", alt: "Guests exploring Alfama" },
      { src: "images/guides/lxtourguide/IMG-20240902-WA0003.jpg", alt: "Cycling along the Tagus" },
      { src: "images/guides/lxtourguide/IMG-20250517-WA0000.jpg", alt: "Hidden square in the old town" },
      { src: "images/guides/lxtourguide/IMG-20250621-WA0003.jpg", alt: "Golden-hour viewpoint" },
      { src: "images/guides/lxtourguide/IMG-20240519-WA00X3.jpg", alt: "Street details and tiles" }
    ]
  },
  tours: [
    {
      slug: "alfama-vintage-market",
      title: "Lisbon - Alfama Vintage Market Walking Tour With Tastings",
      duration: "3 hours",
      maxGuests: 8,
      summary: "A paced walk through Alfama's viewpoints and markets.",
      external_system: "manual",
      external_product_id: null,
      external_url: null,
      pricing_strategy: "Per person price, paid via LBPF before the tour."
    },
    {
      slug: "belem-bike-tour",
      title: "Belém Bike Tour",
      duration: "2.5–3 hours",
      maxGuests: 12,
      summary: "Flat, riverside cycling to Belém's monuments.",
      external_system: "manual",
      external_product_id: null,
      external_url: null,
      pricing_strategy: "Per person price, paid via LBPF before the tour."
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah J.",
      dateLabel: "June 2025",
      rating: "★★★★★",
      text: "Loved the mix of history, local tips and hidden corners.",
      avatar: null
    },
    {
      id: 2,
      name: "Michael T.",
      dateLabel: "May 2025",
      rating: "★★★★★",
      text: "Great food stops and a relaxed pace around the old town.",
      avatar: null
    }
  ]
};

window.lxtourguideV2Data = lxtourguideV2Data;
window.currentGuideV2Data = lxtourguideV2Data;
