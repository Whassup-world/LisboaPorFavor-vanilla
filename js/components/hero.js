// Hero Component - EXACT TEST template
function createHero() {
  return `
    <div class="hero-section" style="background-image: url('images/hero.webp');">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-headline">Discover Lisbon</h1>
        <p class="hero-subheadline">Authentic experiences with local guides</p>
        <div class="wip-banner">Work in progress — MVP launch soon. Some pages are being updated.</div>
      </div>
    </div>
  `;
}

// Initialize hero animations (fade in content after 1s like TEST)
function initHero() {
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('visible');
    }
  }, 1000);
}
