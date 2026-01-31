/**
 * Hero Image Manager
 * Handles dynamic hero image rotation and overlay system for guide pages
 * Version: 1.0.0 (MVP)
 * Last Updated: 2026-01-31
 */

class HeroManager {
  constructor(configPath = '/data/hero-config.json') {
    this.configPath = configPath;
    this.config = null;
    this.currentIndex = 0;
    this.rotationInterval = null;
    this.heroElement = null;
    this.overlayElement = null;
  }

  /**
   * Initialize the hero manager
   */
  async init() {
    try {
      // Load configuration
      this.config = await this.loadConfig();
      
      // Get hero elements
      this.heroElement = document.querySelector('.hero-section');
      this.overlayElement = document.querySelector('.hero-overlay');
      
      if (!this.heroElement) {
        console.warn('Hero section not found. Hero manager disabled.');
        return;
      }

      // Set initial image
      this.setHeroImage(0);

      // Start rotation if enabled
      if (this.config.rotation.enabled && this.config.rotation.images.length > 1) {
        this.startRotation();
      }

      // Preload images for smooth transitions
      if (this.config.performance.preloadFirst) {
        this.preloadImages();
      }

      console.log('Hero Manager initialized successfully');
    } catch (error) {
      console.error('Hero Manager initialization failed:', error);
      this.setFallbackImage();
    }
  }

  /**
   * Load hero configuration from JSON
   */
  async loadConfig() {
    const response = await fetch(this.configPath);
    if (!response.ok) {
      throw new Error(`Failed to load hero config: ${response.status}`);
    }
    return await response.json();
  }

  /**
   * Set hero background image
   */
  setHeroImage(index) {
    const images = this.config.rotation.images;
    if (index < 0 || index >= images.length) {
      console.warn(`Invalid image index: ${index}`);
      return;
    }

    const image = images[index];
    this.currentIndex = index;

    // Update background image with fade transition
    this.heroElement.style.backgroundImage = `url("${image.url}")`;
    
    // Update overlay if enabled
    if (this.overlayElement && image.overlay && image.overlay.enabled) {
      this.updateOverlay(image.overlay);
    }

    // Update aria-label for accessibility
    this.heroElement.setAttribute('aria-label', image.alt);
  }

  /**
   * Update overlay content
   */
  updateOverlay(overlay) {
    const titleEl = this.overlayElement.querySelector('.hero-overlay-title');
    const subtitleEl = this.overlayElement.querySelector('.hero-overlay-subtitle');
    const ctaEl = this.overlayElement.querySelector('.hero-overlay-cta');

    if (titleEl) titleEl.textContent = overlay.title || '';
    if (subtitleEl) subtitleEl.textContent = overlay.subtitle || '';
    
    if (ctaEl) {
      ctaEl.textContent = overlay.cta || '';
      ctaEl.href = overlay.link || '#';
      ctaEl.style.display = overlay.cta ? 'inline-block' : 'none';
    }

    this.overlayElement.style.display = overlay.title || overlay.subtitle ? 'block' : 'none';
  }

  /**
   * Start automatic image rotation
   */
  startRotation() {
    const interval = this.config.rotation.interval || 8000;
    
    this.rotationInterval = setInterval(() => {
      const nextIndex = (this.currentIndex + 1) % this.config.rotation.images.length;
      this.setHeroImage(nextIndex);
    }, interval);
  }

  /**
   * Stop automatic image rotation
   */
  stopRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
      this.rotationInterval = null;
    }
  }

  /**
   * Preload images for smooth transitions
   */
  preloadImages() {
    const images = this.config.rotation.images;
    images.forEach((img, index) => {
      // Skip first image (already loaded)
      if (index === 0) return;
      
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = img.url;
      document.head.appendChild(preloadLink);
    });
  }

  /**
   * Set fallback image if config fails
   */
  setFallbackImage() {
    if (this.heroElement && this.config?.fallback) {
      this.heroElement.style.backgroundImage = `url("${this.config.fallback.url}")`;
      this.heroElement.setAttribute('aria-label', this.config.fallback.alt);
    }
  }

  /**
   * Manually navigate to specific image
   */
  goToImage(index) {
    this.stopRotation();
    this.setHeroImage(index);
    this.startRotation();
  }

  /**
   * Get current image info
   */
  getCurrentImage() {
    return this.config?.rotation.images[this.currentIndex] || null;
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.heroManager = new HeroManager();
    window.heroManager.init();
  });
} else {
  window.heroManager = new HeroManager();
  window.heroManager.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HeroManager;
}
