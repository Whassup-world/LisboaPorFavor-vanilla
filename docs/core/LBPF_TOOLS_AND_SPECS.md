**START METADATA**

1.0.1  Metadata Field           Core - Tools and Specs
1.0.2  Title                    LBPF_TOOLS_AND_SPECS.md
1.0.3  Version                  V1.2.0
1.0.4  Version History          2026-01-31: Imported Bootstrap archive content (Bokun booking engine integration plan, API specs, security)
                                2026-01-31: Initial creation from TOBE Core structure
1.0.5  Date Modified            2026-01-31 @ 15.52 hour
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
