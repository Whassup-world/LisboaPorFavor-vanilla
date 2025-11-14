function createGuidesPage() {
  return `
    <section class="mini-hero">
      <div class="mini-hero-content">
        <p class="eyebrow">Verified locals</p>
        <h1>Lisbon’s Trusted Guides</h1>
        <p>Certified storytellers, historians, and food lovers ready for private or small-group tours.</p>
        <div class="mini-hero-badges">
          <span>✔ Verified</span>
          <span>🌍 Multilingual</span>
          <span>⭐ 4.8+ Rating</span>
        </div>
      </div>
    </section>

    <section class="guides-spotlight">
      <div class="spotlight-image"></div>
      <div class="spotlight-content">
        <p class="eyebrow">Featured guide</p>
        <h2>LXTourguide</h2>
        <p>15+ years uncovering Lisbon’s hidden stories. History, food, architecture, and neighborhood secrets in one itinerary.</p>
        <ul class="spotlight-stats">
          <li>127+ reviews • 4.9 rating</li>
          <li>Languages: EN · NL · DE</li>
          <li>Specialties: History, Food, Architecture</li>
        </ul>
        <a class="btn btn-primary" href="#guide/lxtourguide">View full profile →</a>
      </div>
    </section>

    <section class="guides-grid-section">
      <div class="section-heading">
        <h3>Meet the Collective</h3>
        <p>Handpicked locals for culinary, cultural, and outdoor experiences.</p>
      </div>
      <div class="guides-grid">
        ${renderGuideCard('Maria Santos', 'images/guides/maria.png', 'Food & Wine', '4.9 · 89 reviews', ['Food Tours','Wine','Markets'])}
        ${renderGuideCard('João Costa', 'images/guides/joao.png', 'Adventure & Outdoors', '4.8 · 95 reviews', ['Biking','Adventure','Nature'])}
        ${renderGuideCard('Ana Ribeiro', 'images/guides/ana.png', 'Art & Culture', '4.8 · 72 reviews', ['Arts','Architecture','Boutiques'])}
      </div>
    </section>
  `;
}

function renderGuideCard(name, image, specialty, stats, badges) {
  return `
    <article class="guide-card">
      <div class="guide-card-media" style="background-image:url('${image}')"></div>
      <div class="guide-card-body">
        <p class="eyebrow">${specialty}</p>
        <h4>${name}</h4>
        <p class="guide-card-stats">${stats}</p>
        <div class="guide-card-badges">
          ${badges.map(b => `<span>${b}</span>`).join('')}
        </div>
        <a href="#guide/${name.toLowerCase().replace(/\\s+/g,'-')}" class="card-link">View profile →</a>
      </div>
    </article>
  `;
}