// Footer Component
function createFooter() {
  return `
    <footer>
      <!-- Main Footer Section -->
      <div class="footer-main">
        <div class="footer-content">
          <div class="footer-grid">
            <!-- General -->
            <div class="footer-column">
              <h6>General</h6>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            
            <!-- Legal -->
            <div class="footer-column">
              <h6>Legal</h6>
              <ul>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="terms.html">Terms</a></li>
                <li><a href="payment-terms.html">Payment Terms</a></li>
                <li><a href="cookies.html">Cookies</a></li>
                <li><a href="faq.html">FAQ</a></li>
              </ul>
            </div>
            
            <!-- Relations -->
            <div class="footer-column">
              <h6>Relations</h6>
              <ul>
                <li><a href="partners.html">Partners</a></li>
                <li><a href="vacancies.html">Vacancies</a></li>
                <li><a href="press.html">Press</a></li>
                <li><a href="sitemap.html">Sitemap</a></li>
              </ul>
            </div>
            
            <!-- Payments -->
            <div class="footer-column footer-payments">
              <h6>Payments</h6>
              <div class="payment-icons">
                <svg viewBox="0 0 48 32" width="48" height="32" class="payment-icon"><rect fill="#1A1F71" width="48" height="32" rx="4"/><text x="50%" y="50%" fill="white" font-size="12" font-weight="bold" text-anchor="middle" dominant-baseline="middle">VISA</text></svg>
                <svg viewBox="0 0 48 32" width="48" height="32" class="payment-icon"><circle cx="18" cy="16" r="12" fill="#EB001B"/><circle cx="30" cy="16" r="12" fill="#F79E1B"/></svg>
                <svg viewBox="0 0 48 32" width="48" height="32" class="payment-icon"><rect fill="#003087" width="48" height="32" rx="4"/><text x="50%" y="50%" fill="white" font-size="10" font-weight="bold" text-anchor="middle" dominant-baseline="middle">PayPal</text></svg>
                <svg viewBox="0 0 48 32" width="48" height="32" class="payment-icon"><rect fill="#635BFF" width="48" height="32" rx="4"/><text x="50%" y="50%" fill="white" font-size="10" font-weight="bold" text-anchor="middle" dominant-baseline="middle">Stripe</text></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Social Media Section -->
      <div class="footer-social">
        <div class="footer-content">
          <div class="social-icons">
            <a href="https://www.instagram.com/lisboaporfavor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61570971981279" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCvyZ5QixloWYVXoZbKGBoQg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://pt.pinterest.com/lisboaporfavor_com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </a>
          </div>
          
          <div class="language-selector">
            <select id="language-select">
              <option value="EN">EN</option>
              <option value="NL">NL</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Brand Section -->
      <div class="footer-brand">
        <p>Coded by AI in cooperation with <a href="https://tobeornottobe.eu" target="_blank" rel="noreferrer">tobeornottobe.eu</a> 2025</p>
      </div>
    </footer>
  `;
}

// Auto-inject footer into placeholder
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
  
  function injectFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.innerHTML = createFooter();
    }
  }
})();
