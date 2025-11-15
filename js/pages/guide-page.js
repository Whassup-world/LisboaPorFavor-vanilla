// Guide Page - LXTourguide
// Handles all interactive features for guide detail page

(function() {
  'use strict';

  // State
  let expanded = false;
  let showAll = false;
  let lightboxOpen = false;
  let activeIndex = 0;
  let touchStartX = null;
  let savedScrollY = 0;

  // DOM Elements (initialized after DOM load)
  let elements = {};

  // Initialize page
  function initGuidePage() {
    // Get DOM elements
    elements = {
      // Gallery
      featuredGallery: document.getElementById('featured-gallery'),
      moreGallery: document.getElementById('more-gallery'),
      toggleGalleryBtn: document.getElementById('toggle-gallery-btn'),
      
      // Guide info
      guideAvatar: document.getElementById('guide-avatar'),
      guideName: document.getElementById('guide-name'),
      guideNameTours: document.getElementById('guide-name-tours'),
      ratingNumber: document.getElementById('rating-number'),
      reviewCount: document.getElementById('review-count'),
      guideId: document.getElementById('guide-id'),
      
      // Welcome
      welcomeTitle: document.getElementById('welcome-title'),
      welcomeText: document.getElementById('welcome-text'),
      readMoreBtn: document.getElementById('read-more-btn'),
      
      // Tours
      toursGrid: document.getElementById('tours-grid'),
      
      // Reviews
      reviewsList: document.getElementById('reviews-list'),
      
      // Booking
      bookingAvatar: document.getElementById('booking-avatar'),
      bookingName: document.getElementById('booking-name'),
      languages: document.getElementById('languages'),
      responseTime: document.getElementById('response-time'),
      messageBtn: document.getElementById('message-btn'),
      
      // Lightbox
      lightbox: document.getElementById('lightbox'),
      lightboxImage: document.getElementById('lightbox-image'),
      lightboxClose: document.getElementById('lightbox-close'),
      lightboxPrev: document.getElementById('lightbox-prev'),
      lightboxNext: document.getElementById('lightbox-next'),
      
      // Breadcrumb
      breadcrumbGuideName: document.getElementById('breadcrumb-guide-name')
    };

    // Populate page with data
    populatePage();
    
    // Setup event listeners
    setupEventListeners();
  }

  // Populate page with guide data
  function populatePage() {
    const data = window.lxtourguideData;
    if (!data) {
      console.error('Guide data not loaded');
      return;
    }

    // Breadcrumb
    elements.breadcrumbGuideName.textContent = data.guideName;

    // Guide info
    elements.guideAvatar.src = data.avatarUrl;
    elements.guideAvatar.alt = data.guideName;
    elements.guideName.textContent = data.guideName;
    elements.guideNameTours.textContent = data.guideName;
    elements.ratingNumber.textContent = data.rating.toFixed(1);
    elements.reviewCount.textContent = `(${data.reviewCount} reviews)`;
    elements.guideId.textContent = `ID: ${data.guideId}`;

    // Welcome
    elements.welcomeTitle.textContent = data.title;
    elements.welcomeText.textContent = data.welcomePreview;

    // Booking
    elements.bookingAvatar.src = data.avatarUrl;
    elements.bookingAvatar.alt = data.guideName;
    elements.bookingName.textContent = data.guideName;
    elements.languages.textContent = data.languages.join(', ');
    elements.responseTime.textContent = data.responseTime;
    elements.messageBtn.textContent = `Message ${data.guideName}`;

    // Gallery
    renderGallery(data.images);
    
    // Tours
    renderTours(data.tours);
    
    // Reviews
    renderReviews(data.reviews);
  }

  // Render gallery
  function renderGallery(images) {
    const featured = images.slice(0, 3);
    const more = images.slice(3);

    // Featured images
    elements.featuredGallery.innerHTML = featured.map((img, index) => `
      <div class="gallery-item" data-index="${index}">
        <img src="${img.src}" alt="${img.alt}">
        <div class="zoom-icon">🔍</div>
      </div>
    `).join('');

    // More images
    if (more.length > 0) {
      elements.moreGallery.innerHTML = more.map((img, index) => `
        <div class="gallery-item" data-index="${index + featured.length}">
          <img src="${img.src}" alt="${img.alt}">
          <div class="zoom-icon">🔍</div>
        </div>
      `).join('');
    } else {
      elements.toggleGalleryBtn.style.display = 'none';
    }

    // Add click listeners
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        openLightbox(index);
      });
    });
  }

  // Render tours
  function renderTours(tours) {
    elements.toursGrid.innerHTML = tours.map(tour => `
      <div class="tour-card">
        <div class="tour-image-wrapper">
          <img src="${tour.image}" alt="${tour.title}" class="tour-image">
          <span class="tour-badge">New</span>
        </div>
        <div class="tour-content">
          <h3 class="tour-title">${tour.title}</h3>
          <div class="tour-rating">
            <span class="stars">${tour.rating}</span>
            <span class="review-count">(${tour.reviews} reviews)</span>
          </div>
          <p class="tour-description">${tour.description}</p>
          <div class="tour-meta">
            <span class="tour-price">${tour.price} / person</span>
            <span class="tour-duration">${tour.duration}</span>
          </div>
          <div class="tour-actions">
            <a href="/tours/${tour.slug}" class="btn-outline">View Details</a>
            <a href="/cart?add=${tour.slug}" class="btn-success">Book now</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render reviews
  function renderReviews(reviews) {
    elements.reviewsList.innerHTML = reviews.map(review => `
      <div class="review-card">
        <div class="review-header">
          <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
          <div class="review-info">
            <div class="review-top">
              <h3 class="review-name">${review.name}</h3>
              <span class="review-date">${review.date}</span>
            </div>
            <div class="review-stars">${review.rating}</div>
            <p class="review-text">${review.text}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Setup event listeners
  function setupEventListeners() {
    // Read More/Less
    elements.readMoreBtn.addEventListener('click', toggleWelcomeText);

    // Toggle Gallery
    elements.toggleGalleryBtn.addEventListener('click', toggleGallery);

    // Lightbox controls
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightboxPrev.addEventListener('click', prevImage);
    elements.lightboxNext.addEventListener('click', nextImage);
    
    // Lightbox click outside to close
    elements.lightbox.addEventListener('click', (e) => {
      if (e.target === elements.lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);

    // Touch gestures
    elements.lightbox.addEventListener('touchstart', handleTouchStart);
    elements.lightbox.addEventListener('touchend', handleTouchEnd);
  }

  // Toggle welcome text
  function toggleWelcomeText() {
    const data = window.lxtourguideData;
    expanded = !expanded;
    
    if (expanded) {
      elements.welcomeText.textContent = data.welcomeFull;
      elements.readMoreBtn.textContent = 'Read Less';
    } else {
      elements.welcomeText.textContent = data.welcomePreview;
      elements.readMoreBtn.textContent = 'Read More';
    }
  }

  // Toggle gallery
  function toggleGallery() {
    showAll = !showAll;
    
    if (showAll) {
      elements.moreGallery.style.display = 'grid';
      elements.toggleGalleryBtn.textContent = 'Hide photos';
    } else {
      elements.moreGallery.style.display = 'none';
      elements.toggleGalleryBtn.textContent = 'View all photos';
    }
  }

  // Open lightbox
  function openLightbox(index) {
    activeIndex = index;
    lightboxOpen = true;
    
    const data = window.lxtourguideData;
    elements.lightboxImage.src = data.images[activeIndex].src;
    elements.lightboxImage.alt = data.images[activeIndex].alt;
    elements.lightbox.style.display = 'flex';
    
    // Lock body scroll
    lockBodyScroll();
  }

  // Close lightbox
  function closeLightbox() {
    lightboxOpen = false;
    elements.lightbox.style.display = 'none';
    
    // Unlock body scroll
    unlockBodyScroll();
  }

  // Next image
  function nextImage() {
    const data = window.lxtourguideData;
    activeIndex = (activeIndex + 1) % data.images.length;
    elements.lightboxImage.src = data.images[activeIndex].src;
    elements.lightboxImage.alt = data.images[activeIndex].alt;
  }

  // Previous image
  function prevImage() {
    const data = window.lxtourguideData;
    activeIndex = (activeIndex - 1 + data.images.length) % data.images.length;
    elements.lightboxImage.src = data.images[activeIndex].src;
    elements.lightboxImage.alt = data.images[activeIndex].alt;
  }

  // Handle keyboard
  function handleKeyboard(e) {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  }

  // Handle touch start
  function handleTouchStart(e) {
    touchStartX = e.touches?.[0]?.clientX ?? null;
  }

  // Handle touch end
  function handleTouchEnd(e) {
    if (touchStartX == null) return;
    
    const touchEndX = e.changedTouches?.[0]?.clientX ?? 0;
    const dx = touchEndX - touchStartX;
    
    if (dx > 50) {
      prevImage();
    } else if (dx < -50) {
      nextImage();
    }
    
    touchStartX = null;
  }

  // Lock body scroll
  function lockBodyScroll() {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  // Unlock body scroll
  function unlockBodyScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGuidePage);
  } else {
    initGuidePage();
  }

})();
