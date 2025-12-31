// Guide v2 – LXtourguide public page controller
// Renders hero + tiles from currentGuideV2Data using LBPF v2 components.

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var data = window.currentGuideV2Data || window.lxtourguideV2Data;
    if (!data) return;

    var guide = data.guide || {};
    var gallery = (data.gallery && Array.isArray(data.gallery.images)) ? data.gallery.images : [];
    var tours = Array.isArray(data.tours) ? data.tours : [];

    var heroSection = document.querySelector(".guide-v2-hero");
    var tilesSection = document.querySelector(".guide-v2-tiles");
    if (!heroSection || !tilesSection) return;

    var isAdminView = document.body.classList.contains("lbpf-admin-v2");

    // Shared hero tile (Tile 0 baseline)
    var heroHTML = "" +
      '<article class="lbpf-tile lbpf-tile--bento guide-v2-hero-tile" aria-label="Guide hero">' +
        '<div class="guide-v2-hero-top-label">' + (guide.partnerStatus || "Partner of LisboaPorFavor") + '</div>' +
        '<div class="guide-v2-hero-main">' +
          '<div class="guide-v2-hero-avatar-block">' +
            (guide.avatarUrl ? '<img class="guide-v2-hero-avatar" src="' + guide.avatarUrl + '" alt="' + (guide.name || "Guide") + '" />' : "") +
          '</div>' +
          '<div class="guide-v2-hero-text-block">' +
            '<h1 id="guide-v2-name" class="guide-v2-hero-name">' + (guide.name || "LXtourguide") + '</h1>' +
            '<p class="guide-v2-hero-tagline">' + (guide.tagline || "Your local guide for the Lisbon Area") + '</p>' +
            '<p class="guide-v2-hero-rating">★★★★★ ' + (guide.ratingAverage || 5.0) + ' · ' + (guide.ratingCount || 0) + ' reviews</p>' +
            '<div class="guide-v2-hero-tags">' +
              (Array.isArray(guide.tags) ? guide.tags.map(function (tag) {
                return '<span class="lbpf-pill lbpf-pill--tag">' + tag + '</span>';
              }).join("") : "") +
            '</div>' +
          '</div>' +
          '<div class="guide-v2-hero-logo-block">' +
            '<div class="guide-v2-hero-logo-card">' +
              '<span class="guide-v2-hero-logo-text">LisboaPorFavor</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="guide-v2-hero-ctas">' +
          '<button class="lbpf-pill lbpf-pill--ghost" type="button">See my bio</button>' +
          '<button class="lbpf-pill lbpf-pill--reviews" type="button">See all reviews</button>' +
        '</div>' +
      '</article>';

    heroSection.innerHTML = heroHTML;

    var tilesHTML;

    if (!isAdminView) {
      // Public tiles: Bio, Tours, Gallery
      tilesHTML = "" +
        '<article class="lbpf-tile lbpf-tile--bento guide-v2-tile guide-v2-tile--bio" aria-label="Guide bio">' +
          '<h2 class="guide-v2-tile-title">About your guide</h2>' +
          '<p class="guide-v2-tile-text">LXtourguide is your local guide for the Lisbon Area. More detailed bio text can be added here later.</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--bento guide-v2-tile guide-v2-tile--tours" aria-label="Tours overview">' +
          '<h2 class="guide-v2-tile-title">See my tours</h2>' +
          '<p class="guide-v2-tile-text">' + tours.length + ' tours configured in this profile. Booking flow remains manual for now.</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--bento guide-v2-tile guide-v2-tile--gallery" aria-label="Photo gallery">' +
          '<h2 class="guide-v2-tile-title">See my gallery</h2>' +
          '<div class="guide-v2-gallery-grid">' +
            gallery.map(function (img) {
              return '<figure class="guide-v2-gallery-item"><img src="' + img.src + '" alt="' + (img.alt || "Guide photo") + '"></figure>';
            }).join("") +
          '</div>' +
        '</article>';
    } else {
      // Admin tiles: Today/messages, Profile, Tours & availability, Bookings, Stories/media, Settings
      tilesHTML = "" +
        '<article class="lbpf-tile lbpf-tile--dashboard guide-v2-tile admin-v2-tile admin-v2-tile--today" aria-label="Today, messages & agenda">' +
          '<h2 class="guide-v2-tile-title">Today, messages & agenda</h2>' +
          '<p class="guide-v2-tile-text">Today\'s tours, pending requests and unread messages for this guide.</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--dashboard guide-v2-tile admin-v2-tile admin-v2-tile--people" aria-label="Guide profile">' +
          '<h2 class="guide-v2-tile-title">LXtourguide profile</h2>' +
          '<p class="guide-v2-tile-text">Guide ID, languages and partner status for this single guide.</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--dashboard guide-v2-tile admin-v2-tile admin-v2-tile--tours" aria-label="Tours & availability">' +
          '<h2 class="guide-v2-tile-title">Tours & availability</h2>' +
          '<p class="guide-v2-tile-text">Tour library and availability windows for LXtourguide.</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--dashboard guide-v2-tile admin-v2-tile admin-v2-tile--bookings" aria-label="Bookings & agenda">' +
          '<h2 class="guide-v2-tile-title">Bookings & agenda</h2>' +
          '<p class="guide-v2-tile-text">Booked and pending tours for this guide (manual tracking for now).</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--dashboard guide-v2-tile admin-v2-tile admin-v2-tile--brand" aria-label="Stories & media uploads">' +
          '<h2 class="guide-v2-tile-title">Stories & media uploads</h2>' +
          '<p class="guide-v2-tile-text">End-of-tour photos and text stories to be uploaded and approved here.</p>' +
        '</article>' +
        '<article class="lbpf-tile lbpf-tile--dashboard guide-v2-tile admin-v2-tile admin-v2-tile--settings" aria-label="Settings & access">' +
          '<h2 class="guide-v2-tile-title">Settings & access</h2>' +
          '<p class="guide-v2-tile-text">Login, access and debug tools (later Supabase-protected).</p>' +
        '</article>';
    }

    tilesSection.innerHTML = tilesHTML;

    // Admin view: refine tile text using data-driven placeholders
    if (isAdminView) {
      var todayTileText = document.querySelector(".admin-v2-tile--today .guide-v2-tile-text");
      if (todayTileText) {
        var todayLines = [
          "Tours today: " + tours.length + " configured (exact times still managed in LBPF calendar)",
          "Messages: handled via hello@lisboaporfavor.com and WhatsApp (to be surfaced here later)",
          "Agenda: daily view will be shown here when calendar integration is wired"
        ];
        todayTileText.innerHTML = todayLines.join("<br>");
      }

      var peopleTileText = document.querySelector(".admin-v2-tile--people .guide-v2-tile-text");
      if (peopleTileText && data.guide) {
        var languagesCount = Array.isArray(guide.languages) ? guide.languages.length : 0;
        var id = guide.id || "—";
        var partner = guide.partnerStatus || "";
        peopleTileText.textContent = id + " · " + languagesCount + " languages · " + partner;
      }

      var toursTileText = document.querySelector(".admin-v2-tile--tours .guide-v2-tile-text");
      if (toursTileText) {
        toursTileText.textContent = "Library for " + (guide.name || "this guide") + ": " + tours.length + " tours; availability is still managed manually.";
      }

      var bookingsTileText = document.querySelector(".admin-v2-tile--bookings .guide-v2-tile-text");
      if (bookingsTileText) {
        bookingsTileText.textContent = "Booked and pending tours are tracked manually for now; later this connects to Bokun/Stripe/Supabase.";
      }

      var brandTileText = document.querySelector(".admin-v2-tile--brand .guide-v2-tile-text");
      if (brandTileText) {
        brandTileText.textContent = gallery.length + " gallery images connected. After each tour, upload new photos and short stories here (storage to be wired).";
      }

      var settingsTileText = document.querySelector(".admin-v2-tile--settings .guide-v2-tile-text");
      if (settingsTileText) {
        settingsTileText.textContent = "Auth and access will move to Supabase in the next phase. Front-end only for now.";
      }
    }
  });
})();
