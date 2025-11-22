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
  let toursList = [];
  let bookingState = {
    selectedTourSlug: null,
    selectedDate: null,
    selectedTime: 'AM',
    monthDate: new Date()
  };

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
      qualifiedToursPill: document.getElementById('qualified-tours-pill'),
      languagesPill: document.getElementById('languages-pill'),
      seeAllReviewsTop: document.getElementById('see-all-reviews-top'),
      guideId: document.getElementById('guide-id'),
      
      // Welcome
      welcomeTitle: document.getElementById('welcome-title'),
      welcomeText: document.getElementById('welcome-text'),
      readMoreBtn: document.getElementById('read-more-btn'),
      
      // Tours
      toursGrid: document.getElementById('tours-grid'),
      
      // Reviews
      reviewsSection: document.getElementById('guide-reviews'),
      reviewsRatingNumber: document.getElementById('reviews-rating-number'),
      reviewsReviewCount: document.getElementById('reviews-review-count'),
      reviewsList: document.getElementById('reviews-list'),
      seeAllReviewsBottom: document.getElementById('see-all-reviews-bottom'),
      
      // Booking
      bookingAvatar: document.getElementById('booking-avatar'),
      bookingName: document.getElementById('booking-name'),
      bookingRatingNumber: document.getElementById('booking-rating-number'),
      bookingTour: document.getElementById('booking-tour'),
      bookingGuests: document.getElementById('booking-guests'),
      bookingMaxGuests: document.getElementById('booking-max-guests'),
      bookingTimeOptions: document.getElementById('booking-time-options'),
      bookingRequestBtn: document.getElementById('booking-request-btn'),
      bookingCalendarGrid: document.getElementById('booking-calendar-grid'),
      bookingMonthLabel: document.getElementById('booking-month-label'),
      availabilityCard: document.getElementById('availability-card'),
      languages: document.getElementById('languages'),
      responseTime: document.getElementById('response-time'),
      messageBtn: document.getElementById('message-btn'),
      bookingReviewsLink: document.getElementById('booking-reviews-link'),
      bookingFeedback: document.getElementById('booking-feedback'),
      
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

    toursList = Array.isArray(data.tours) ? data.tours.slice() : [];

    // Breadcrumb
    elements.breadcrumbGuideName.textContent = data.guideName;

    // Guide info
    elements.guideAvatar.src = data.avatarUrl;
    elements.guideAvatar.alt = data.guideName;
    elements.guideName.textContent = data.guideName;
    elements.guideNameTours.textContent = data.guideName;
    const ratingText = data.rating.toFixed(1);
    const reviewCountText = `${data.reviewCount} review${data.reviewCount === 1 ? '' : 's'}`;
    const seeAllLabel = 'See all reviews >';

    elements.ratingNumber.textContent = ratingText;
    elements.reviewCount.textContent = `(${reviewCountText})`;
    elements.guideId.textContent = `ID: ${data.guideId}`;

    if (elements.qualifiedToursPill) {
      elements.qualifiedToursPill.textContent = `Qualified for ${data.qualifiedToursCount} tours`;
    }

    if (elements.languagesPill) {
      elements.languagesPill.textContent = data.languages.join(' · ');
    }

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

    if (elements.reviewsRatingNumber) {
      elements.reviewsRatingNumber.textContent = ratingText;
    }

    if (elements.reviewsReviewCount) {
      elements.reviewsReviewCount.textContent = `(${reviewCountText})`;
    }

    if (elements.bookingRatingNumber) {
      elements.bookingRatingNumber.textContent = ratingText;
    }

    if (elements.bookingReviewsLink) {
      elements.bookingReviewsLink.textContent = `(${reviewCountText})`;
    }

    if (elements.seeAllReviewsTop) {
      elements.seeAllReviewsTop.textContent = seeAllLabel;
    }

    if (elements.seeAllReviewsBottom) {
      elements.seeAllReviewsBottom.textContent = seeAllLabel;
    }

    // Gallery
    renderGallery(data.images);
    
    // Tours
    renderTours(data.tours);
    
    // Reviews
    renderReviews(data.reviews);

    // Booking form & calendar
    initBookingForm(toursList);
    renderBookingCalendar();
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
            <button type="button" class="btn-success book-tour-btn" data-tour-slug="${tour.slug}">Book now</button>
          </div>
        </div>
      </div>
    `).join('');

    bindTourBookingButtons(tours);
  }

  function initBookingForm(tours) {
    if (!elements.bookingTour) return;

    const options = (tours || []).map((tour) => {
      const maxGuests = tour.maxGuests || '';
      return `<option value="${tour.slug}" data-max="${maxGuests}">${tour.title}</option>`;
    }).join('');

    elements.bookingTour.innerHTML = options;

    if (tours && tours.length > 0) {
      bookingState.selectedTourSlug = tours[0].slug;
      updateMaxGuestsForSlug(bookingState.selectedTourSlug);
    }
  }

  function renderBookingCalendar() {
    if (!elements.bookingCalendarGrid) return;

    const baseDate = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
    const monthLabel = baseDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    if (elements.bookingMonthLabel) {
      elements.bookingMonthLabel.textContent = monthLabel;
    }

    const year = baseDate.getFullYear();
    const monthIndex = baseDate.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const cells = [];

    for (let day = 1; day <= daysInMonth; day += 1) {
      const classes = ['calendar-day', 'calendar-day--available'];
      if (bookingState.selectedDate === day) {
        classes.push('calendar-day--selected');
      }
      cells.push(`<button type="button" class="${classes.join(' ')}" data-day="${day}">${day}</button>`);
    }

    elements.bookingCalendarGrid.innerHTML = cells.join('');

    elements.bookingCalendarGrid.querySelectorAll('.calendar-day--available').forEach((btn) => {
      btn.addEventListener('click', () => {
        const value = parseInt(btn.getAttribute('data-day') || '0', 10);
        if (!value) return;
        bookingState.selectedDate = value;
        renderBookingCalendar();
      });
    });
  }

  function bindTourBookingButtons(tours) {
    const buttons = document.querySelectorAll('.book-tour-btn');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-tour-slug');
        if (!slug) return;
        bookingState.selectedTourSlug = slug;
        setBookingFromTourSlug(slug, tours);
        scrollToAvailabilityCard();
      });
    });
  }

  function setBookingFromTourSlug(slug, tours) {
    if (!elements.bookingTour) return;

    elements.bookingTour.value = slug;

    // Ensure toursList is up to date
    if (!toursList.length && Array.isArray(tours)) {
      toursList = tours.slice();
    }

    updateMaxGuestsForSlug(slug);
  }

  function updateMaxGuestsForSlug(slug) {
    const tour = findTourBySlug(slug);
    if (!tour) return;

    const maxGuests = tour.maxGuests || null;
    if (elements.bookingMaxGuests && maxGuests) {
      elements.bookingMaxGuests.textContent = `Max ${maxGuests} guests`;
    }

    if (elements.bookingGuests && maxGuests) {
      elements.bookingGuests.max = String(maxGuests);
      const current = parseInt(elements.bookingGuests.value || '1', 10) || 1;
      if (current > maxGuests) {
        elements.bookingGuests.value = String(maxGuests);
      }
    }
  }

  function findTourBySlug(slug) {
    if (!slug || !Array.isArray(toursList)) return null;
    return toursList.find((tour) => tour.slug === slug) || null;
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

    if (elements.bookingTour) {
      elements.bookingTour.addEventListener('change', (event) => {
        const slug = event.target.value;
        bookingState.selectedTourSlug = slug;
        updateMaxGuestsForSlug(slug);
      });
    }

    if (elements.bookingGuests) {
      elements.bookingGuests.addEventListener('input', () => {
        const tour = findTourBySlug(bookingState.selectedTourSlug || (elements.bookingTour && elements.bookingTour.value));
        if (!tour || !tour.maxGuests) return;
        let value = parseInt(elements.bookingGuests.value || '1', 10);
        if (Number.isNaN(value) || value < 1) value = 1;
        if (value > tour.maxGuests) value = tour.maxGuests;
        elements.bookingGuests.value = String(value);
      });
    }

    if (elements.bookingTimeOptions) {
      elements.bookingTimeOptions.addEventListener('click', (event) => {
        const pill = event.target.closest('.time-pill');
        if (!pill) return;
        const time = pill.getAttribute('data-time');
        if (!time) return;
        bookingState.selectedTime = time;
        elements.bookingTimeOptions.querySelectorAll('.time-pill').forEach((btn) => {
          btn.classList.remove('time-pill-active');
        });
        pill.classList.add('time-pill-active');
      });
    }

    if (elements.bookingRequestBtn) {
      elements.bookingRequestBtn.addEventListener('click', handleBookingRequest);
    }

    if (elements.seeAllReviewsTop) {
      elements.seeAllReviewsTop.addEventListener('click', scrollToReviewsSection);
    }

    if (elements.seeAllReviewsBottom) {
      elements.seeAllReviewsBottom.addEventListener('click', scrollToReviewsSection);
    }

    if (elements.bookingReviewsLink) {
      elements.bookingReviewsLink.addEventListener('click', scrollToReviewsSection);
    }

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);

    // Touch gestures
    elements.lightbox.addEventListener('touchstart', handleTouchStart);
    elements.lightbox.addEventListener('touchend', handleTouchEnd);
  }

  function scrollToReviewsSection() {
    if (!elements.reviewsSection) return;
    elements.reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function scrollToAvailabilityCard() {
    if (!elements.availabilityCard) return;
    elements.availabilityCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleBookingRequest() {
    if (!elements.bookingFeedback) return;

    const messages = [];
    const selectedTourSlug = bookingState.selectedTourSlug || (elements.bookingTour && elements.bookingTour.value) || null;
    const selectedTour = findTourBySlug(selectedTourSlug);

    if (!selectedTourSlug || !selectedTour) {
      messages.push('Please choose a tour.');
    }

    if (!bookingState.selectedDate) {
      messages.push('Please select an available date.');
    }

    let guests = 1;
    if (elements.bookingGuests) {
      guests = parseInt(elements.bookingGuests.value || '1', 10) || 1;
    }

    if (selectedTour && selectedTour.maxGuests && guests > selectedTour.maxGuests) {
      messages.push(`Maximum ${selectedTour.maxGuests} guests for this tour.`);
    }

    if (messages.length) {
      elements.bookingFeedback.textContent = messages.join(' ');
      return;
    }

    const time = bookingState.selectedTime || 'AM';

    const baseDate = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
    const year = baseDate.getFullYear();
    const monthIndex = baseDate.getMonth();
    const dateObj = new Date(year, monthIndex, bookingState.selectedDate || 1);
    const weekday = dateObj.toLocaleString('default', { weekday: 'long' });
    const dayNumber = dateObj.getDate();

    const firstLine = `Request sent: "${selectedTour.title}" · ${weekday} ${dayNumber} ${time} ${guests} guest${guests === 1 ? '' : 's'}`;
    const secondLine = 'We will confirm availability within 12 hours or we will contact you.';
    const thirdLine = 'For groups please <a href="contact.html">contact LBPF directly</a>.';

    elements.bookingFeedback.innerHTML = `${firstLine}<br>${secondLine}<br>${thirdLine}`;
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
