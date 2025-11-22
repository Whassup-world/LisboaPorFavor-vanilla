// Main Page Content - WITH TEST-STYLE DEMO CONTENT
function createMainPage() {
  return `
    <!-- Main Content Section -->
    <section class="content-section">
      <div>
        <!-- Welcome Section #1 -->
        <div class="welcome-section">
          <h2 class="content-title">Welcome to Lisbon</h2>
          <p class="content-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <!-- Info Box -->
          <div class="info-box">
            <p><strong>Important:</strong> This is a full-width demonstration content area. Content is constrained to 880px max width for better readability, matching TEST template behavior.</p>
          </div>
        </div>
        
        <!-- Tour Category Cards -->
        <div class="card-grid" id="tours" style="margin-top: 3rem;">
          <div class="tour-category-card">
            <div class="category-icon">🚴</div>
            <h3>Biking Tours</h3>
            <p>Explore Lisbon's hills and riverside paths on two wheels. Perfect for active travelers who want to cover more ground.</p>
            <div class="card-stats">
              <span>⏱ 3-4 hours</span>
              <span>👥 Small groups</span>
            </div>
            <a href="#biking-tours" class="card-link">View Tours →</a>
          </div>
          <div class="tour-category-card">
            <div class="category-icon">🚶</div>
            <h3>Walking Tours</h3>
            <p>Wander through historic neighborhoods with expert local guides. Discover hidden streets and authentic stories.</p>
            <div class="card-stats">
              <span>⏱ 2-3 hours</span>
              <span>👥 Personal experience</span>
            </div>
            <a href="#walking-tours" class="card-link">View Tours →</a>
          </div>
          <div class="tour-category-card">
            <div class="category-icon">🍷</div>
            <h3>Tours with Tastings</h3>
            <p>Savor Portuguese flavors. Wine, cheese, pastéis de nata, and fresh seafood with knowledgeable guides.</p>
            <div class="card-stats">
              <span>⏱ 2.5-3.5 hours</span>
              <span>👥 Food lovers</span>
            </div>
            <a href="#tasting-tours" class="card-link">View Tours →</a>
          </div>
        </div>
        
        <!-- Reviews Strip Section -->
        <div class="reviews-section">
          <div class="reviews-container">
            <div class="reviews-header">
              <h3 class="content-title" style="font-size: 2rem;">What travelers say</h3>
              <p class="content-description">Real feedback from guests who explored Lisbon with our local guides and partners.</p>
            </div>
            <div class="reviews-strip">
              <article class="review-card">
                <div class="review-rating">⭐⭐⭐⭐⭐</div>
                <p class="review-text">"LXTourGuide gave us a complete picture of Lisbon in one afternoon – professional, relaxed and full of great stories."</p>
                <div class="review-meta">
                  <span class="review-author">Traveler from Germany</span>
                  <span class="review-tag">Traveler · LXTourGuide walking tour</span>
                </div>
              </article>
              <article class="review-card">
                <div class="review-rating">⭐⭐⭐⭐⭐</div>
                <p class="review-text">"Perfect mix of history, viewpoints and photo stops. We felt safe and looked after the whole time."</p>
                <div class="review-meta">
                  <span class="review-author">Family visiting Lisbon</span>
                  <span class="review-tag">Traveler · Private city tour</span>
                </div>
              </article>
              <article class="review-card">
                <div class="review-rating">⭐⭐⭐⭐⭐</div>
                <p class="review-text">"Clear communication before the tour and amazing restaurant tips afterwards – highly recommended."</p>
                <div class="review-meta">
                  <span class="review-author">Couple from the Netherlands</span>
                  <span class="review-tag">Traveler · Food &amp; wine experience</span>
                </div>
              </article>
            </div>
          </div>
        </div>
        
        <!-- Featured Guides Section -->
        <div class="guides-section-inline">
          <h3 class="content-title" style="font-size: 2rem;">Meet Our Expert Guides</h3>
          <p class="content-description">Passionate locals sharing authentic Lisbon experiences</p>
          
          <div class="card-grid">
            <div class="guide-card-featured">
              <img src="../lisboaporfavor-bootstrap/public/images/guides/lxtourguide/LXtourguide-profile.png" alt="LXTourGuide" class="guide-avatar-large">
              <h3>LXTourGuide</h3>
              <div class="guide-rating">⭐⭐⭐⭐⭐ 5.0 (127 reviews)</div>
              <p>Official Lisbon city guide with 15+ years experience. History expert and storyteller.</p>
              <div class="guide-specialties-inline">
                <span class="specialty-tag">History</span>
                <span class="specialty-tag">Architecture</span>
                <span class="specialty-tag">Food</span>
              </div>
              <a href="#guide/lxtourguide" class="card-link">View Profile →</a>
            </div>
            
            <div class="guide-card-featured">
              <div class="guide-avatar-large" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; font-weight: bold;">M</div>
              <h3>Maria Santos</h3>
              <div class="guide-rating">⭐⭐⭐⭐⭐ 4.9 (89 reviews)</div>
              <p>Local food expert and wine sommelier. Passionate about Portuguese culinary traditions.</p>
              <div class="guide-specialties-inline">
                <span class="specialty-tag">Food Tours</span>
                <span class="specialty-tag">Wine</span>
                <span class="specialty-tag">Markets</span>
              </div>
              <a href="#guide/maria" class="card-link">View Profile →</a>
            </div>
            
            <div class="guide-card-featured">
              <div class="guide-avatar-large" style="background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; font-weight: bold;">J</div>
              <h3>João Costa</h3>
              <div class="guide-rating">⭐⭐⭐⭐⭐ 4.8 (95 reviews)</div>
              <p>Adventure guide specializing in biking and outdoor experiences around Lisbon.</p>
              <div class="guide-specialties-inline">
                <span class="specialty-tag">Biking</span>
                <span class="specialty-tag">Adventure</span>
                <span class="specialty-tag">Nature</span>
              </div>
              <a href="#guide/joao" class="card-link">View Profile →</a>
            </div>
          </div>
        </div>
        
        <!-- Welcome Section #2 (Let us increase your experiences) -->
        <div class="welcome-section">
          <h2 class="content-title">Let Us Increase Your Experiences</h2>
          <p class="content-description">
            Discover authentic Lisbon through our trusted network of local partners. Each collaboration brings you closer to the heart of Portuguese culture, 
            combining professional expertise with genuine passion for sharing the best of our city.
          </p>
          
          <!-- Info Box -->
          <div class="info-box">
            <p><strong>Important:</strong> All our partners are carefully selected and verified. Each offers unique experiences that complement our vision of authentic, quality tourism in Lisbon.</p>
          </div>
        </div>
        
        <!-- Local Partner Cards -->
        <div class="partners-section">
          <h3 class="content-title" style="font-size: 2rem;">Our Local Partners</h3>
          <p class="content-description">Collaborating with Lisbon's finest tour operators</p>
          
          <div class="card-grid">
            <div class="partner-card">
              <div class="partner-logo" style="background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: bold;">LBTO</div>
              <h3>Lisbon Bike Tours and Outdoors</h3>
              <p>Specialized biking adventures and outdoor activities. Explore Lisbon's nature trails and scenic routes.</p>
              <div class="partner-stats">
                <span>🏆 250+ Tours</span>
                <span>⭐ 4.8 Rating</span>
              </div>
              <a href="#partner/bike-tours-outdoors" class="card-link">View Partner →</a>
            </div>
            
            <div class="partner-card">
              <div class="partner-logo" style="background: linear-gradient(135deg, var(--secondary) 0%, var(--lbpf-color-accent) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: bold;">LA</div>
              <h3>Lisboa Authentica</h3>
              <p>Authentic local experiences connecting travelers with genuine Portuguese culture and traditions.</p>
              <div class="partner-stats">
                <span>🏆 300+ Tours</span>
                <span>⭐ 4.8 Rating</span>
              </div>
              <a href="#partner/lisboa-authentica" class="card-link">Learn More →</a>
            </div>
            
            <div class="partner-card">
              <div class="partner-logo" style="background: linear-gradient(135deg, var(--primary) 0%, var(--lbpf-color-accent) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.4rem; font-weight: bold;">G2L</div>
              <h3>Go2Lisbon Tours</h3>
              <p>Day trips and city experiences connecting Lisbon with Sintra, Cascais and other highlights around Portugal.</p>
              <div class="partner-stats">
                <span>🏆 200+ Tours</span>
                <span>⭐ 4.7 Rating</span>
              </div>
              <a href="#partner/go2lisbon" class="card-link">View Partner →</a>
            </div>
          </div>
        </div>

        <!-- Location Map Section -->
        <div class="location-section">
          <h3 class="content-title" style="font-size: 2rem;">Location Map</h3>
          <p class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="map-container">
            <p>📍 Map placeholder - Google Maps integration here</p>
          </div>
        </div>
        
        <!-- Plan My Lisbon CTA Section -->
        <div class="register-section">
          <div class="info-box" style="background: var(--lbpf-color-accent-soft); border-left-color: var(--lbpf-color-accent); text-align: center;">
            <h3 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 1rem 0; color: var(--text-primary);">Plan your Lisbon experience</h3>
            <p style="margin: 0 0 1.5rem 0;">Leave your email and we’ll send you curated tours and guide suggestions when we launch.</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
              <a href="#register" class="btn btn-primary" style="background: var(--primary); color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Plan my Lisbon experience</a>
              <a href="#tours" class="btn btn-secondary" style="background: transparent; color: var(--primary); padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; border: 2px solid var(--primary); display: inline-block;">See example tours</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Image Section - EXACT TEST template -->
    <div class="image-section">
      <img src="images/main.webp" alt="Lisbon Streets" id="parallax-image">
    </div>
  `;
}

// Parallax effect for bottom image
function initParallax() {
  const image = document.getElementById('parallax-image');
  if (!image) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const imageSection = image.parentElement;
    const sectionTop = imageSection.offsetTop;
    const sectionHeight = imageSection.offsetHeight;
    
    if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
      const parallaxValue = (scrolled - sectionTop + window.innerHeight) * 0.15;
      image.style.transform = `translateY(-${parallaxValue}px)`;
    }
  });
}
