**START METADATA**

1.0.1  Metadata Field           Core - Tools and Specs
1.0.2  Title                    LBPF_TOOLS_AND_SPECS.md
1.0.3  Version                  V1.3.0
1.0.4  Version History          2026-01-31: Added Hero Image System (SEO analysis, carousel strategy, UGC workflow, implementation phases)
                                2026-01-31: Imported Bootstrap archive content (Bokun booking engine integration plan, API specs, security)
                                2026-01-31: Initial creation from TOBE Core structure
1.0.5  Date Modified            2026-01-31 @ 18.22 hour
1.0.6  Date Created             2026-01-31 @ 14.08 hour
1.0.7  File Type                MD
1.0.8  Tags                     lbpf, tools, specs, apis, bokun, booking-engine, integration
1.0.9  Description              Tools registry, API specifications, and integration plans including Bokun booking engine, tech stack, hosting, and security considerations
1.0.10 Source                   USER + Bootstrap Archive Import
1.0.11 Confidentiality Level    INTERNAL
1.0.12 Owner                    USER
1.0.13 Canonical path           lisboaporfavor-vanilla/docs/core/LBPF_TOOLS_AND_SPECS.md
1.0.14 Local mirror             (optional)
1.0.15 Remote mirror            GitHub: Whassup-world/LisboaPorFavor-vanilla

**END METADATA**

---

## 0.0.0 HERO IMAGE SYSTEM

### 0.1.0 SEO PENALTY ANALYSIS (CRITICAL)

**Decision:** Synced hero images across all guide pages with no delay

**SEO Impact Assessment:**

| Factor | Impact | Explanation |
|--------|--------|-------------|
| **Background images** | ✅ No penalty | Not indexed as page content |
| **Identical hero across pages** | ✅ No penalty | Content (text) is unique per guide |
| **JavaScript-loaded images** | ✅ No penalty | Google renders JS, sees final image |
| **Daily image changes** | ✅ Positive | Fresh content signal |
| **Image alt text** | ⚠️ Important | Must be unique per guide or generic |

**What Google DOES Penalize:**
- ❌ Duplicate text content (bio, tours, reviews)
- ❌ Thin content (too little unique text)
- ❌ Keyword stuffing
- ❌ Cloaking (showing different content to crawlers vs users)

**What Google IGNORES:**
- ✅ Decorative background images
- ✅ CSS styling similarities
- ✅ Shared navigation/footer
- ✅ Brand elements (logos, colors)

**Conclusion:** Zero SEO penalty risk. Focus on maximizing uniqueness and professionalism through:
1. Unique guide bios and tour descriptions
2. High-quality, professional hero images
3. Detailed, specific content per guide
4. Structured data markup
5. Fast loading times

**SEO Score: 10/10 - Zero penalty risk**

---

### 0.2.0 HERO + TEXT OVERLAY SYSTEM

**Purpose:** Sync hero images with dynamic offers/information

**Use Cases:**
- Seasonal campaigns ("Summer Special - 20% off")
- Event promotions ("Lisbon Light Festival Week")
- Flash sales ("48-hour discount")
- Contextual info ("Rainy Day? Try Our Indoor Food Tour")

**Technical Implementation:**
```javascript
// data/hero-config.json
{
  "currentHero": {
    "image": "images/_rawslug/Alfama-sunset.jpg",
    "overlay": {
      "title": "Summer Special",
      "subtitle": "20% off all walking tours this week",
      "cta": "Book Now",
      "link": "/tours?promo=summer20"
    }
  }
}
```

**Marketing Benefits:**
- 🎯 Coordinated messaging across all guide pages
- 🎯 Instant campaign updates (change 1 file, all pages update)
- 🎯 A/B testing capability
- 🎯 SEO benefit: overlay text IS indexed by Google

---

### 0.3.0 AUTO-ROTATING HERO SYSTEM

**Selected Strategy:** Multi-Image Carousel (Option A) with Video Preparation (Option B)

**Phase 1 (MVP - Feb 2026):**
- Multi-image carousel with 3-5 professional photos
- 8-second intervals with smooth fade transitions
- Showcases different Lisbon scenes per guide page load
- Fallback to static image if JavaScript disabled

**Phase 2 (Post-Launch - Q2 2026):**
- Add video backgrounds for desktop users
- Mobile: image carousel (data-friendly)
- Desktop: video option with image fallback
- Browser detection for optimal format

**Technical Stack:**
```
/data/hero-config.json          → Central configuration
/images/_rawslug/               → Professional photos (7 daily rotation)
/images/carousel/               → Carousel-specific images (3-5 per page)
/videos/hero/                   → Video backgrounds (future)
/js/hero-manager.js             → Rotation & sync logic
```

**Carousel Configuration:**
```javascript
{
  "rotation": {
    "interval": 8000,
    "transition": "fade",
    "images": [
      {
        "url": "images/_rawslug/Alfama-sunset.jpg",
        "alt": "Alfama at golden hour",
        "overlay": {
          "title": "Discover Alfama",
          "subtitle": "Historic heart of Lisbon"
        }
      },
      {
        "url": "images/_rawslug/Belem-tower.jpg",
        "alt": "Belém Tower riverside"
      },
      {
        "url": "images/_rawslug/Tram28.jpg",
        "alt": "Iconic Tram 28"
      }
    ]
  }
}
```

---

### 0.4.0 UGC INTEGRATION WORKFLOW

**Purpose:** User-generated content for hero images and photo albums

**Content Sources:**
1. **Post-tour submissions** - Clients share photos for website feature
2. **Guide tour reports** - Mandatory submission of tour images/videos
3. **Instagram hashtag** - `#LisboaPorFavorTours`
4. **Review photos** - From booking confirmation emails

**AI-Powered Sorting System (Future):**
```
Tour Report Submission (Guide + Client photos/videos)
         ↓
    AI Analysis
         ↓
    ├─→ A) Website hero/gallery (quality, composition, lighting)
    ├─→ B) Social Media posts (engagement potential, storytelling)
    └─→ C) Client photo album (all tour moments, downloadable)
```

**Client Photo Album:**
- Downloadable PDF/ZIP from guide page
- Includes: guide photos + client photos + tour highlights
- Branded with LisboaPorFavor watermark
- Reward for booking through platform

**Legal Requirements:**
- Photo release form signed at booking
- Credit photographer on website display
- Curate for quality and brand safety
- Moderate before publication

**Quality Control:**
- Professional photos: immediate use
- UGC photos: review queue → approval → publication
- Video content: compress, optimize, test across devices

---

### 0.5.0 IMPLEMENTATION PHASES

**MVP Launch: End February 2026**
- ✅ Static hero image system (7 daily rotation)
- ✅ Centralized JSON configuration
- ✅ Mobile-first responsive design
- ✅ Basic fade transitions

**Phase 1: March 2026 (First Client Tour)**
- ✅ Multi-image carousel (3-5 images per page)
- ✅ Dynamic overlay system for offers
- ✅ UGC submission workflow (guide tour reports)
- ✅ Client photo album generation (manual)

**Phase 2: Q2 2026**
- ✅ Video background support (desktop)
- ✅ AI-powered photo sorting (A/B/C categories)
- ✅ Automated photo album generation
- ✅ A/B testing for hero effectiveness

**Phase 3: Q3 2026**
- ✅ Full UGC integration (Instagram, reviews)
- ✅ Seasonal campaign automation
- ✅ Advanced analytics (hero engagement tracking)
- ✅ White-label hero system for partner agencies

---

### 0.6.0 SEO OPTIMIZATION STRATEGY

**To Maximize SEO with Dynamic Heroes:**

**1. Structured Data:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "LXTourguide - Lisbon Tours",
  "image": [
    "https://lisboaporfavor.com/images/_rawslug/Alfama-sunset.jpg",
    "https://lisboaporfavor.com/images/_rawslug/Belem-tower.jpg"
  ]
}
</script>
```

**2. Image Optimization:**
- WebP format with JPEG fallback
- Lazy loading below fold
- Responsive images (srcset)
- Descriptive filenames: `alfama-sunset-golden-hour-lisbon.jpg`
- Compress to <200KB per image

**3. Alt Text Strategy:**
```html
<!-- Generic for hero (not indexed) -->
<div class="hero-section" role="img" aria-label="Scenic view of Lisbon"></div>

<!-- Specific for content images (indexed) -->
<img src="tour-photo.jpg" alt="LXTourguide leading group through Alfama district">
```

**4. Performance Metrics:**
- Target: <2s hero image load time
- Preload first carousel image
- Lazy load subsequent images
- Use CDN for image delivery (future: Cloudflare R2)

---

## 1.0.0 TOOL REGISTRY

### Current Stack
- **Frontend:** Vanilla HTML/CSS/JS (no frameworks)
- **Backend:** (Future: Node.js/Express or similar)
- **Database:** (Future: PostgreSQL via Neon or similar)
- **Media:** (Future: Cloudinary)
- **Email:** Hostinger SMTP
- **Booking:** (Future: Bokun API - Phase 2)
- **Analytics:** Google Analytics 4

---

## 1.1.0 INTERNAL RULES (NO SECRETS)

- All API keys stored in environment variables
- Never commit credentials to Git
- Use separate keys for dev/prod environments
- Document all external service dependencies

---

## 1.2.0 BOKUN BOOKING ENGINE INTEGRATION

**Status:** Planning Phase  
**Priority:** Phase 2 (After core platform complete)  
**Timeline:** Implementation in Month 2-3

### What is Bokun?

**Bokun** (by TripAdvisor) is a booking management system for tour operators.

**Key Features:**
- Online booking engine
- Availability management
- Multi-channel distribution
- Payment processing
- Agent management (works with FareHarbor, Viator, etc.)
- Calendar sync
- Reporting & analytics

**Why Bokun:**
- Used by professional tour operators
- Integrates with OTAs (Online Travel Agencies)
- Agents using FareHarbor can book through Bokun
- White-label booking widgets
- Commission management

### Integration Goals

**Primary Goals:**

1. **Sync Tours**
   - LisboaPorFavor tours → Bokun products
   - Automatic updates when tour details change
   - Pricing sync

2. **Availability Management**
   - Guide calendars → Bokun availability
   - Real-time booking updates
   - Prevent overbooking

3. **Booking Flow**
   - Customer books on lisboaporfavor.com
   - Booking creates in Bokun
   - Guide receives notification
   - Customer gets confirmation

4. **Agent Distribution**
   - Tours available to agents using Bokun network
   - Works with FareHarbor agents
   - Commission tracking

**Secondary Goals:**

5. **Reporting**
   - Pull booking data from Bokun
   - Display in admin dashboard
   - Revenue tracking

6. **Reviews**
   - Bokun post-tour surveys
   - Auto-import reviews to site
   - Display on tour pages

### Technical Architecture

**Bokun API Overview:**
```
Base URL: https://api.bokun.io/
Authentication: API Key + Access Key
Format: JSON REST API
Rate Limits: 1000 requests/hour

Main Endpoints:
- /products                  # Tour products
- /products/{id}/availability # Check availability
- /bookings                  # Create/manage bookings
- /vendors                   # Operator info
- /customers                 # Customer management
- /pricing                   # Pricing rules
```

**Integration Points:**
```
LisboaPorFavor ↔ Bokun

1. Tour Creation:
   Admin creates tour in LBPF → API creates product in Bokun
   
2. Availability:
   Guide sets schedule in LBPF → API updates Bokun availability
   
3. Booking:
   Customer books on LBPF → API creates booking in Bokun
   → Bokun sends confirmation email
   → LBPF stores booking reference
   
4. Sync:
   Webhook from Bokun → LBPF updates booking status
   (confirmed, cancelled, modified)
```

### Implementation Phases

**Phase 1: API Setup (Week 1)**
- Get Bokun API credentials
- Set up authentication
- Create Bokun API client
- Test connection
- Document API endpoints

**Phase 2: Tour Sync (Week 2)**
- Create sync function: Tour → Bokun Product
- Add "Sync to Bokun" button in admin
- Store Bokun product ID in database
- Handle sync errors
- Auto-sync on tour approval

**Phase 3: Availability Management (Week 3)**
- Create guide calendar interface
- Sync calendar → Bokun availability
- Block dates when tours booked
- Handle recurring availability
- Auto-update on booking confirmation

**Phase 4: Booking Flow (Week 4)**
- Create booking form on site
- Check Bokun availability
- Create booking in Bokun via API
- Store booking reference
- Send confirmation email
- Webhook handler for status updates

**Phase 5: Agent Distribution (Week 5)**
- Configure Bokun agent network
- Set commission rates
- Enable FareHarbor integration
- Test agent booking flow
- Commission tracking in admin

**Phase 6: Reporting & Reviews (Week 6)**
- Pull booking data from Bokun
- Display in admin dashboard
- Import post-tour reviews
- Revenue reporting
- Analytics integration

### Security Considerations

1. **API Keys**
   - Store in environment variables
   - Never commit to Git
   - Use separate keys for dev/prod

2. **Webhook Verification**
   - Verify webhook signatures
   - Check source IP (Bokun IPs)
   - Validate payload structure

3. **Data Sync**
   - Handle sync failures gracefully
   - Retry mechanism for failed syncs
   - Log all sync attempts

4. **Payment Data**
   - Never store credit card numbers
   - Let Bokun handle payments
   - Only store booking references

### Success Metrics

Track after implementation:
- **Tours synced:** 100% of approved tours in Bokun
- **Booking success rate:** >95%
- **Sync latency:** <5 seconds
- **Agent bookings:** Growing over time
- **Commission tracking:** 100% accurate

### Resources

**Bokun Documentation:**
- API Docs: https://docs.bokun.io
- Dashboard: https://app.bokun.io
- Support: support@bokun.io

**Similar Integrations:**
- FareHarbor API (if agents use it)
- GetYourGuide API (alternative channel)
- Viator API (TripAdvisor network)

**Note:** Start implementation only after core admin system is stable and working. Complete admin system, guide management, and tour reports FIRST. Then Bokun integration.

---

## 1.3.0 LIBRARIES

(To be documented as project evolves)

---

## 1.4.0 HOSTING / DEPLOY

**Current:**
- Static hosting via Netlify or similar
- GitHub repository: Whassup-world/LisboaPorFavor-vanilla

**Future:**
- Backend API hosting (Node.js)
- Database hosting (Neon PostgreSQL)
- Media CDN (Cloudinary)

---

**End**

---
