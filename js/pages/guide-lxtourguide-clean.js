// Guide Clean – LXTourguide public + admin controller
// Renders 8 tiles from data/guide-lxtourguide.js
// Mode switch: public vs admin based on body class

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var data = window.lxtourguideData || {};
    if (!data || !data.guide) return;

    var guide = data.guide || {};
    var reviews = Array.isArray(data.reviews) ? data.reviews : [];
    var tours = Array.isArray(data.tours) ? data.tours : [];
    var images = (data.gallery && Array.isArray(data.gallery.images)) ? data.gallery.images : [];

    var isAdminView = document.body.classList.contains("lbpf-admin-guide");

    // Populate hero
    var nameEl = document.getElementById("guide-name");
    var taglineEl = document.getElementById("guide-tagline");
    var ratingEl = document.getElementById("guide-rating");
    var reviewCountEl = document.getElementById("guide-review-count");
    var avatarEl = document.querySelector(".guide-clean-avatar");
    var tagsEl = document.getElementById("guide-tags");

    if (nameEl) nameEl.textContent = guide.name || "LXTourguide";
    if (taglineEl) taglineEl.textContent = guide.tagline || "Your local guide for the Lisbon Area";
    if (ratingEl) ratingEl.textContent = (guide.ratingAverage || 5.0).toFixed(1);
    if (reviewCountEl) reviewCountEl.textContent = "· " + (guide.ratingCount || 0) + " reviews";
    if (avatarEl && guide.name) {
      var initials = guide.name
        .split(/\s+/)
        .filter(Boolean)
        .map(function (part) { return part.charAt(0).toUpperCase(); })
        .join("")
        .slice(0, 2);
      avatarEl.textContent = initials || "LX";
    }

    // Populate tags
    if (tagsEl && Array.isArray(guide.tags)) {
      tagsEl.innerHTML = guide.tags.map(function (tag) {
        return '<span class="lbpf-pill lbpf-pill--tag">' + tag + '</span>';
      }).join("");
    }

    // ============================================
    // PUBLIC TILES (8 tiles)
    // ============================================

    if (!isAdminView) {
      // Tile 1: Bio
      var bioEl = document.getElementById("tile-bio");
      if (bioEl) {
        bioEl.innerHTML = (guide.welcomeFull || "Welcome to LXTourguide, your local expert in Lisbon.") +
          "<p>Ready to start your Lisbon adventure? Let's plan a tour that fits your pace, interests and curiosity.</p>";
      }

      // Tile 2: Reviews
      var reviewsEl = document.getElementById("tile-reviews");
      if (reviewsEl) {
        if (reviews.length > 0) {
          reviewsEl.innerHTML = reviews.slice(0, 3).map(function (review) {
            return '<p>"' + review.text + '" – ' + review.author + '</p>';
          }).join("");
        } else {
          reviewsEl.innerHTML = "<p>No reviews yet. Book a tour and share your experience!</p>";
        }
      }

      // Tile 3: Tours
      var toursEl = document.getElementById("tile-tours");
      if (toursEl) {
        if (tours.length > 0) {
          toursEl.innerHTML = "<p>" + tours.length + " tours available. All tours can be adjusted for your pace, group size and special requests.</p>";
        } else {
          toursEl.innerHTML = "<p>Tours coming soon. Check back later!</p>";
        }
      }

      // Tile 4: Availability
      var availEl = document.getElementById("tile-availability");
      if (availEl) {
        availEl.innerHTML = "<p>Pick a date, tour and time of day. I'll confirm and follow up with a personal message.</p>";
      }

      // Tile 5: Rewards
      var rewardsEl = document.getElementById("tile-rewards");
      if (rewardsEl) {
        rewardsEl.innerHTML = "<p>After launch this tile will show your rewards between the dates you travel and the spots you visit in Lisbon.</p>";
      }

      // Tile 6: Favourites
      var favEl = document.getElementById("tile-favourites");
      if (favEl) {
        favEl.innerHTML = "<p>Think of this as my personal shortlist inside LisboaPorFavor: cafés, viewpoints and corners of the city I return to again and again.</p>";
      }

      // Tile 7: Gallery
      var galleryEl = document.getElementById("tile-gallery");
      if (galleryEl) {
        if (images.length > 0) {
          galleryEl.innerHTML = '<div class="guide-clean-gallery-grid">' +
            images.slice(0, 6).map(function (img) {
              return '<figure class="guide-clean-gallery-item"><img src="' + img.src + '" alt="' + (img.alt || "Tour photo") + '"></figure>';
            }).join("") +
            "</div>";
        } else {
          galleryEl.innerHTML = "<p>Gallery coming soon.</p>";
        }
      }

      // Tile 8: Social
      var socialEl = document.getElementById("tile-social");
      if (socialEl) {
        socialEl.innerHTML = "<p>You can follow LXTourguide on Instagram, Facebook, YouTube and Pinterest. Links and handles will be added once this guide page goes live.</p>";
      }
    }

    // ============================================
    // ADMIN TILES (8 tiles, different content)
    // ============================================

    if (isAdminView) {
      // Tile 1: Today & Messages
      var todayEl = document.getElementById("tile-today");
      if (todayEl) {
        todayEl.innerHTML = "<p>Tours today: " + tours.length + " configured</p>" +
          "<p>Messages: handled via hello@lisboaporfavor.com and WhatsApp</p>" +
          "<p>Agenda: daily view will be shown here when calendar integration is wired</p>";
      }

      // Tile 2: Profile
      var profileEl = document.getElementById("tile-profile");
      if (profileEl) {
        var languages = Array.isArray(guide.languages) ? guide.languages.length : 0;
        var id = guide.id || "—";
        var partner = guide.partnerStatus || "";
        profileEl.innerHTML = "<p>" + id + " · " + languages + " languages · " + partner + "</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>Edit profile</button></p>";
      }

      // Tile 3: Tours & Availability
      var toursAdminEl = document.getElementById("tile-tours-admin");
      if (toursAdminEl) {
        toursAdminEl.innerHTML = "<p>Library for " + (guide.name || "this guide") + ": " + tours.length + " tours</p>" +
          "<p>Availability is still managed manually.</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>Manage tours</button></p>";
      }

      // Tile 4: Bookings
      var bookingsEl = document.getElementById("tile-bookings");
      if (bookingsEl) {
        bookingsEl.innerHTML = "<p>Booked and pending tours are tracked manually for now.</p>" +
          "<p>Later this connects to Bokun/Stripe/Supabase.</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>View bookings</button></p>";
      }

      // Tile 5: Stories & Media
      var mediaEl = document.getElementById("tile-media");
      if (mediaEl) {
        mediaEl.innerHTML = "<p>" + images.length + " gallery images connected.</p>" +
          "<p>After each tour, upload new photos and short stories here (storage to be wired).</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>Upload media</button></p>";
      }

      // Tile 6: LBPF Communication
      var commsEl = document.getElementById("tile-comms");
      if (commsEl) {
        commsEl.innerHTML = "<p>Announcements and requests from LisboaPorFavor will appear here.</p>" +
          "<p>No new messages at this time.</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>View all</button></p>";
      }

      // Tile 7: Tour Operations Info
      var opsEl = document.getElementById("tile-ops");
      if (opsEl) {
        opsEl.innerHTML = "<p><strong>Contact:</strong> hello@lisboaporfavor.com</p>" +
          "<p><strong>Meeting Point:</strong> To be set per tour</p>" +
          "<p><strong>Tour Type:</strong> Walking / Biking</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>Edit details</button></p>";
      }

      // Tile 8: Settings & Access
      var settingsEl = document.getElementById("tile-settings");
      if (settingsEl) {
        settingsEl.innerHTML = "<p>Auth and access will move to Supabase in the next phase.</p>" +
          "<p>Front-end only for now.</p>" +
          "<p><button class='lbpf-pill lbpf-pill--ghost' style='margin-top: 0.5rem;'>Settings</button></p>";
      }
    }
  });
})();
