// Navbar Component
function createNavbar() {
  return `
    <nav class="navbar">
      <div class="navbar-wrapper">
        <!-- Logo -->
        <a href="index.html" class="navbar-brand">
          <img src="images/logo-720.png" alt="LisboaPorFavor" class="navbar-logo">
        </a>
        
        <!-- Right side: Two rows -->
        <div class="navbar-right">
          <!-- Top Row: Category Buttons + User Actions -->
          <div class="navbar-top-row">
            <div class="navbar-categories">
              <a href="guides.html" class="nav-pill">Guides</a>
              <a href="tours.html" class="nav-pill">Tours</a>
              <a href="#partners" class="nav-pill">Local Partners</a>
              <a href="#activities" class="nav-pill">Activities</a>
              <a href="#experiences" class="nav-pill">Experiences</a>
              <a href="#info" class="nav-pill">Info</a>
              <a href="#history" class="nav-pill">History</a>
              <a href="docs/DOCUMENTATION.html" class="nav-pill" style="opacity: 0.6;">📚 Docs</a>
            </div>
            <div class="navbar-actions">
              <a href="#login" class="btn btn-text">Login</a>
              <a href="#register" class="btn btn-primary">Register</a>
            </div>
          </div>
          
          <!-- Bottom Row: Search Bar -->
          <div class="navbar-search">
            <div class="search-container">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input type="text" placeholder="Search for guides, tours, activities..." class="search-input">
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
}

// Navbar scroll effect
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Auto-inject navbar into placeholder
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }
  
  function injectNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
      placeholder.innerHTML = createNavbar();
      initNavbar();
    }
  }
})();
