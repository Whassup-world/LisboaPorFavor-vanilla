// Admin v2 – lightweight, data-driven tiles for LXtourguide
// Uses lxtourguideV2Data from data/guide-lxtourguide-v2.js (front-end only, no Supabase yet).

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var data = window.currentGuideV2Data || window.lxtourguideV2Data;
    if (!data) return;

    var tours = Array.isArray(data.tours) ? data.tours : [];
    var galleryImages = (data.gallery && Array.isArray(data.gallery.images)) ? data.gallery.images : [];
    var guide = data.guide || {};

    var todayTileText = document.querySelector(".admin-v2-tile--today .admin-v2-tile-text");
    if (todayTileText) {
      var todayLines = [
        "Tours today: " + tours.length + " configured (exact times still managed in LBPF calendar)",
        "Messages: handled via hello@lisboaporfavor.com and WhatsApp (to be surfaced here later)",
        "Agenda: daily view will be shown here when calendar integration is wired"
      ];
      todayTileText.innerHTML = todayLines.join("<br>");
    }

    var peopleTileText = document.querySelector(".admin-v2-tile--people .admin-v2-tile-text");
    if (peopleTileText && data.guide) {
      var languages = Array.isArray(data.guide.languages) ? data.guide.languages.length : 0;
      var id = guide.id || "—";
      var partner = guide.partnerStatus || "";
      peopleTileText.textContent = id + " · " + languages + " languages · " + partner;
    }

    var toursTileText = document.querySelector(".admin-v2-tile--tours .admin-v2-tile-text");
    if (toursTileText) {
      toursTileText.textContent = "Library for " + (guide.name || "this guide") + ": " + tours.length + " tours; availability is still managed manually.";
    }

    var bookingsTileText = document.querySelector(".admin-v2-tile--bookings .admin-v2-tile-text");
    if (bookingsTileText) {
      bookingsTileText.textContent = "Booked and pending tours are tracked manually for now; later this connects to Bokun/Stripe/Supabase.";
    }

    var brandTileText = document.querySelector(".admin-v2-tile--brand .admin-v2-tile-text");
    if (brandTileText) {
      brandTileText.textContent = galleryImages.length + " gallery images connected. After each tour, upload new photos and short stories here (storage to be wired).";
    }

    var settingsTileText = document.querySelector(".admin-v2-tile--settings .admin-v2-tile-text");
    if (settingsTileText) {
      settingsTileText.textContent = "Auth and access will move to Supabase in the next phase. Front-end only for now.";
    }
  });
})();
