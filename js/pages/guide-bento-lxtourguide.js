(function () {
  'use strict';
  var photobookImages = [];
  var photobookCurrentIndex = 0;
  var photobookKeydownHandler = null;

  function init() {
    var data = window.lxtourguideData;
    if (!data) {
      return;
    }

    populateHero(data);
    populateBioTile(data);
    populateToursTile(data);
    populateReviewsTile(data);
    populatePhotobookTile(data);
    initAvailabilityTile(data);
  }

  function populateHero(data) {
    var avatarEl = document.querySelector('.guide-bento-avatar');
    var nameEl = document.querySelector('.guide-bento-name');
    var ratingNumberEl = document.querySelector('.guide-bento-rating-number');
    var ratingCountEl = document.querySelector('.guide-bento-rating-count');
    var idTagEl = document.querySelector('.guide-tag-id');
    var qualifiedTagEl = document.querySelector('.guide-tag-qualified');
    var languagesTagEl = document.querySelector('.guide-tag-languages');

    if (nameEl) {
      nameEl.textContent = data.guideName;
    }

    if (ratingNumberEl) {
      ratingNumberEl.textContent = data.rating.toFixed(1);
    }

    if (ratingCountEl) {
      ratingCountEl.textContent = '· ' + data.reviewCount + ' reviews';
    }

    if (idTagEl) {
      idTagEl.textContent = 'ID: ' + data.guideId;
    }

    if (qualifiedTagEl) {
      qualifiedTagEl.textContent = 'Qualified for ' + data.qualifiedToursCount + ' tours';
    }

    if (languagesTagEl && Array.isArray(data.languages)) {
      languagesTagEl.textContent = data.languages.join(' · ');
    }

    if (avatarEl && data.avatarUrl) {
      avatarEl.textContent = '';
      avatarEl.style.backgroundImage = 'url(' + data.avatarUrl + ')';
      avatarEl.style.backgroundSize = 'cover';
      avatarEl.style.backgroundPosition = 'center';
    }
  }

  function populateBioTile(data) {
    var bioBody = document.querySelector('.bento-tile-bio .bento-tile-body');
    if (!bioBody || !data.welcomeFull) {
      return;
    }

    bioBody.innerHTML = '';
    var paragraphs = data.welcomeFull.split(/\n\s*\n/);
    paragraphs.forEach(function (block) {
      var text = (block || '').trim();
      if (!text) return;
      var p = document.createElement('p');
      p.textContent = text;
      bioBody.appendChild(p);
    });
  }

  function populateToursTile(data) {
    var toursBody = document.querySelector('.bento-tile-tours .bento-tile-body');
    if (!toursBody || !Array.isArray(data.tours) || !data.tours.length) {
      return;
    }

    var grid = toursBody.querySelector('.bento-tours-grid');
    if (!grid) {
      grid = document.createElement('div');
      grid.className = 'bento-tours-grid';
      toursBody.insertBefore(grid, toursBody.firstChild);
    } else {
      grid.innerHTML = '';
    }

    data.tours.forEach(function (tour) {
      var card = document.createElement('article');
      card.className = 'bento-tour-card';

      var imageWrapper = document.createElement('div');
      imageWrapper.className = 'bento-tour-image-wrapper';
      if (tour.image) {
        var imageEl = document.createElement('img');
        imageEl.className = 'bento-tour-image-thumb';
        imageEl.src = tour.image;
        imageEl.alt = tour.title;
        imageWrapper.appendChild(imageEl);
      }

      var content = document.createElement('div');
      content.className = 'bento-tour-card-content';

      var title = document.createElement('h3');
      title.className = 'bento-tour-title';
      title.textContent = tour.title;

      var meta = document.createElement('p');
      meta.className = 'bento-tour-meta';
      var maxGuests = tour.maxGuests || '-';
      meta.textContent = tour.duration + ' · max ' + maxGuests + ' guests';

      var desc = document.createElement('p');
      desc.className = 'bento-tour-text';
      desc.textContent = tour.description;

      var cta = document.createElement('button');
      cta.type = 'button';
      cta.className = 'bento-tour-cta';
      cta.textContent = 'See available dates';
      cta.addEventListener('click', function (event) {
        event.stopPropagation();
        openAvailabilityForTour(tour.slug, data);
      });

      content.appendChild(title);
      content.appendChild(meta);
      content.appendChild(desc);
      content.appendChild(cta);

      card.appendChild(imageWrapper);
      card.appendChild(content);
      grid.appendChild(card);
    });
  }

  function populateReviewsTile(data) {
    var reviewsBody = document.querySelector('.bento-tile-reviews .bento-tile-body');
    if (!reviewsBody || !Array.isArray(data.reviews) || !data.reviews.length) {
      return;
    }

    reviewsBody.innerHTML = '';

    var list = document.createElement('div');
    list.className = 'bento-reviews-list';

    data.reviews.forEach(function (review, index) {
      var item = document.createElement('article');
      item.className = 'bento-review-item';

      var header = document.createElement('button');
      header.type = 'button';
      header.className = 'bento-review-header';

      var avatarWrapper = document.createElement('div');
      avatarWrapper.className = 'bento-review-avatar-wrapper';
      if (review.avatar) {
        var avatarImg = document.createElement('img');
        avatarImg.className = 'bento-review-avatar';
        avatarImg.src = review.avatar;
        avatarImg.alt = review.name;
        avatarWrapper.appendChild(avatarImg);
      }

      var meta = document.createElement('div');
      meta.className = 'bento-review-meta';

      var nameRow = document.createElement('div');
      nameRow.className = 'bento-review-name-row';
      var nameEl = document.createElement('div');
      nameEl.className = 'bento-review-name';
      nameEl.textContent = review.name;
      var dateEl = document.createElement('div');
      dateEl.className = 'bento-review-date';
      dateEl.textContent = review.date;
      nameRow.appendChild(nameEl);
      nameRow.appendChild(dateEl);

      var starsEl = document.createElement('div');
      starsEl.className = 'bento-review-stars';
      starsEl.textContent = review.rating || '';

      meta.appendChild(nameRow);
      meta.appendChild(starsEl);

      header.appendChild(avatarWrapper);
      header.appendChild(meta);

      var text = document.createElement('div');
      text.className = 'bento-review-text';
      text.textContent = review.text;

      var ownerReply = document.createElement('div');
      ownerReply.className = 'bento-review-owner-reply';
      ownerReply.textContent = 'Reply from LXTourguide will appear here after your tour.';

      header.addEventListener('click', function (event) {
        event.stopPropagation();
        var alreadyOpen = item.classList.contains('bento-review-item--open');
        var allItems = list.querySelectorAll('.bento-review-item');
        Array.prototype.forEach.call(allItems, function (el) {
          el.classList.remove('bento-review-item--open');
        });
        if (!alreadyOpen) {
          item.classList.add('bento-review-item--open');
        }
      });

      if (index === 0) {
        item.classList.add('bento-review-item--open');
      }

      item.appendChild(header);
      item.appendChild(text);
      item.appendChild(ownerReply);
      list.appendChild(item);
    });

    reviewsBody.appendChild(list);
  }

  function populatePhotobookTile(data) {
    var body = document.querySelector('.bento-tile-gallery .bento-tile-body');
    if (!body || !Array.isArray(data.images) || !data.images.length) {
      return;
    }

    photobookImages = data.images.slice(0, 3);

    var wrapper = document.createElement('div');
    wrapper.className = 'bento-photobook-photos';

    photobookImages.forEach(function (img, index) {
      var figure = document.createElement('figure');
      figure.className = 'bento-photobook-photo';
      var image = document.createElement('img');
      image.src = img.src;
      image.alt = img.alt || '';
      figure.appendChild(image);

      figure.addEventListener('click', function (event) {
        event.stopPropagation();
        openPhotobookLightbox(index);
      });

      wrapper.appendChild(figure);
    });

    body.appendChild(wrapper);
  }

  function openPhotobookLightbox(startIndex) {
    if (!photobookImages || !photobookImages.length) {
      return;
    }

    photobookCurrentIndex = (typeof startIndex === 'number' && startIndex >= 0 && startIndex < photobookImages.length)
      ? startIndex
      : 0;

    if (document.querySelector('.lightbox')) {
      return;
    }

    var overlay = document.createElement('div');
    overlay.className = 'lightbox';

    var imageEl = document.createElement('img');
    imageEl.className = 'lightbox-image';
    overlay.appendChild(imageEl);

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      closePhotobookLightbox(overlay);
    });
    overlay.appendChild(closeBtn);

    function updateImage() {
      var item = photobookImages[photobookCurrentIndex] || {};
      imageEl.src = item.src;
      imageEl.alt = item.alt || '';
    }

    if (photobookImages.length > 1) {
      var prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'lightbox-prev';
      prevBtn.textContent = '<';
      prevBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        photobookCurrentIndex = (photobookCurrentIndex - 1 + photobookImages.length) % photobookImages.length;
        updateImage();
      });
      overlay.appendChild(prevBtn);

      var nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'lightbox-next';
      nextBtn.textContent = '>';
      nextBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        photobookCurrentIndex = (photobookCurrentIndex + 1) % photobookImages.length;
        updateImage();
      });
      overlay.appendChild(nextBtn);
    }

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        closePhotobookLightbox(overlay);
      }
    });

    photobookKeydownHandler = function (event) {
      if (event.key === 'Escape') {
        closePhotobookLightbox(overlay);
      } else if (event.key === 'ArrowRight' && photobookImages.length > 1) {
        photobookCurrentIndex = (photobookCurrentIndex + 1) % photobookImages.length;
        updateImage();
      } else if (event.key === 'ArrowLeft' && photobookImages.length > 1) {
        photobookCurrentIndex = (photobookCurrentIndex - 1 + photobookImages.length) % photobookImages.length;
        updateImage();
      }
    };

    document.addEventListener('keydown', photobookKeydownHandler);

    document.body.appendChild(overlay);
    updateImage();
  }

  function closePhotobookLightbox(overlay) {
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }

    if (photobookKeydownHandler) {
      document.removeEventListener('keydown', photobookKeydownHandler);
      photobookKeydownHandler = null;
    }
  }

  function openAvailabilityForTour(slug, data) {
    if (!slug) {
      return;
    }

    var availabilityTile = document.querySelector('.bento-tile-availability');
    var tiles = document.querySelectorAll('.bento-tile');
    if (availabilityTile && tiles && tiles.length) {
      Array.prototype.forEach.call(tiles, function (tile) {
        tile.classList.remove('bento-tile--open');
      });
      availabilityTile.classList.add('bento-tile--open');
    }

    bookingState.selectedTourSlug = slug;

    var tourSelect = document.getElementById('bento-booking-tour');
    var guestsInput = document.getElementById('bento-booking-guests');
    var childrenInput = document.getElementById('bento-booking-children');

    if (tourSelect) {
      tourSelect.value = slug;
    }

    if (data) {
      updateGuestsMax(data, guestsInput, childrenInput, slug);
    }

    if (availabilityTile && availabilityTile.scrollIntoView) {
      availabilityTile.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  var bookingState = {
    monthDate: new Date(),
    selectedDate: null,
    selectedTourSlug: null,
    selectedTime: 'AM'
  };

  function initAvailabilityTile(data) {
    var calendarGrid = document.getElementById('bento-calendar-grid');
    var monthLabel = document.getElementById('bento-calendar-month-label');
    var prevBtn = document.getElementById('bento-calendar-prev');
    var nextBtn = document.getElementById('bento-calendar-next');
    var tourSelect = document.getElementById('bento-booking-tour');
    var guestsInput = document.getElementById('bento-booking-guests');
    var childrenInput = document.getElementById('bento-booking-children');
    var timePills = document.getElementById('bento-time-pills');
    var requestBtn = document.getElementById('bento-booking-request-btn');
    var feedbackEl = document.getElementById('bento-booking-feedback');
    var calendarEl = document.getElementById('bento-calendar');

    if (!calendarGrid || !monthLabel) {
      return;
    }

    if (calendarEl) {
      calendarEl.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }

    function resetBookingState() {
      bookingState.selectedDate = null;
      bookingState.selectedTime = 'AM';

      if (Array.isArray(data.tours) && data.tours.length && tourSelect) {
        bookingState.selectedTourSlug = data.tours[0].slug;
        tourSelect.value = bookingState.selectedTourSlug;
        updateGuestsMax(data, guestsInput, childrenInput, bookingState.selectedTourSlug);
      }

      if (guestsInput) {
        guestsInput.value = '2';
      }

      if (childrenInput) {
        childrenInput.value = '0';
      }

      if (timePills) {
        var pills = timePills.querySelectorAll('.bento-time-pill');
        Array.prototype.forEach.call(pills, function (btn) {
          btn.classList.remove('bento-time-pill-active');
          if (btn.getAttribute('data-time') === 'AM') {
            btn.classList.add('bento-time-pill-active');
          }
        });
      }

      renderCalendar();
    }

    if (tourSelect && Array.isArray(data.tours)) {
      tourSelect.innerHTML = data.tours.map(function (tour) {
        var max = tour.maxGuests || '';
        return '<option value="' + tour.slug + '" data-max="' + max + '">' + tour.title + '</option>';
      }).join('');

      if (data.tours.length) {
        bookingState.selectedTourSlug = data.tours[0].slug;
        updateGuestsMax(data, guestsInput, childrenInput, bookingState.selectedTourSlug);
      }
    }

    function renderCalendar() {
      var baseDate = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
      var year = baseDate.getFullYear();
      var monthIndex = baseDate.getMonth();
      var daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

      var label = baseDate.toLocaleString('default', { month: 'long', year: 'numeric' });
      monthLabel.textContent = label;

      var cells = [];
      for (var day = 1; day <= daysInMonth; day += 1) {
        var classes = ['bento-calendar-day'];
        if (bookingState.selectedDate === day) {
          classes.push('is-selected');
        }
        cells.push('<button type="button" class="' + classes.join(' ') + '" data-day="' + day + '">' + day + '</button>');
      }
      calendarGrid.innerHTML = cells.join('');

      var buttons = calendarGrid.querySelectorAll('.bento-calendar-day');
      Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener('click', function () {
          var value = parseInt(btn.getAttribute('data-day') || '0', 10);
          if (!value) return;
          bookingState.selectedDate = value;
          renderCalendar();
        });
      });
    }

    renderCalendar();

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var d = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
        bookingState.monthDate = new Date(d.getFullYear(), d.getMonth() - 1, 1);
        renderCalendar();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var d = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
        bookingState.monthDate = new Date(d.getFullYear(), d.getMonth() + 1, 1);
        renderCalendar();
      });
    }

    if (tourSelect) {
      tourSelect.addEventListener('change', function (event) {
        var slug = event.target.value;
        bookingState.selectedTourSlug = slug;
        updateGuestsMax(data, guestsInput, childrenInput, slug);
      });
    }

    if (guestsInput) {
      guestsInput.addEventListener('input', function () {
        var tour = findTourBySlug(data, bookingState.selectedTourSlug || (tourSelect && tourSelect.value));
        if (!tour || !tour.maxGuests) return;
        var val = parseInt(guestsInput.value || '1', 10);
        if (!val || val < 1) val = 1;
        if (val > tour.maxGuests) val = tour.maxGuests;
        guestsInput.value = String(val);
      });
    }

    if (childrenInput) {
      childrenInput.addEventListener('input', function () {
        var tour = findTourBySlug(data, bookingState.selectedTourSlug || (tourSelect && tourSelect.value));
        if (!tour || !tour.maxGuests) return;
        var val = parseInt(childrenInput.value || '0', 10);
        if (!val || val < 0) val = 0;
        if (val > tour.maxGuests) val = tour.maxGuests;
        childrenInput.value = String(val);
      });
    }

    if (timePills) {
      timePills.addEventListener('click', function (event) {
        var pill = event.target.closest('.bento-time-pill');
        if (!pill) return;
        var time = pill.getAttribute('data-time');
        if (!time) return;
        bookingState.selectedTime = time;
        var all = timePills.querySelectorAll('.bento-time-pill');
        Array.prototype.forEach.call(all, function (btn) {
          btn.classList.remove('bento-time-pill-active');
        });
        pill.classList.add('bento-time-pill-active');
      });
    }

    if (requestBtn && feedbackEl) {
      requestBtn.addEventListener('click', function () {
        var messages = [];
        var tour = findTourBySlug(data, bookingState.selectedTourSlug || (tourSelect && tourSelect.value));

        if (!tour) {
          messages.push('Please choose a tour.');
        }

        if (!bookingState.selectedDate) {
          messages.push('Please select a date.');
        }

        var adults = 1;
        if (guestsInput) {
          adults = parseInt(guestsInput.value || '1', 10) || 1;
        }

        var children = 0;
        if (childrenInput) {
          children = parseInt(childrenInput.value || '0', 10) || 0;
        }

        var totalGuests = adults + children;

        if (tour && tour.maxGuests && totalGuests > tour.maxGuests) {
          messages.push('Maximum ' + tour.maxGuests + ' guests for this tour.');
        }

        if (messages.length) {
          feedbackEl.textContent = messages.join(' ');
          return;
        }

        var baseDate = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
        var year = baseDate.getFullYear();
        var monthIndex = baseDate.getMonth();
        var selectedDay = bookingState.selectedDate || 1;
        var dateObj = new Date(year, monthIndex, selectedDay);
        var weekday = dateObj.toLocaleString('default', { weekday: 'long' });
        var dayNumber = dateObj.getDate();
        var timeLabel = bookingState.selectedTime || 'AM';

        var firstLine = 'Request sent: "' + tour.title + '" - ' + weekday + ' ' + dayNumber + ' ' + timeLabel + ' ' + totalGuests + ' guest' + (totalGuests === 1 ? '' : 's');
        var secondLine = 'We will confirm availability within 12 hours or we will contact you.';
        var thirdLine = 'For groups please contact LBPF directly.';

        feedbackEl.innerHTML = firstLine + '<br>' + secondLine + '<br>' + thirdLine;

        resetBookingState();
      });
    }
  }

  function updateGuestsMax(data, guestsInput, childrenInput, slug) {
    if (!guestsInput || !slug) return;
    var tour = findTourBySlug(data, slug);
    if (!tour || !tour.maxGuests) return;
    guestsInput.max = String(tour.maxGuests);
    var current = parseInt(guestsInput.value || '1', 10) || 1;
    if (current > tour.maxGuests) {
      guestsInput.value = String(tour.maxGuests);
    }

    if (childrenInput) {
      childrenInput.max = String(tour.maxGuests);
      var childVal = parseInt(childrenInput.value || '0', 10) || 0;
      if (childVal > tour.maxGuests) {
        childrenInput.value = String(tour.maxGuests);
      }
    }
  }

  function findTourBySlug(data, slug) {
    if (!slug || !Array.isArray(data.tours)) return null;
    for (var i = 0; i < data.tours.length; i += 1) {
      if (data.tours[i].slug === slug) {
        return data.tours[i];
      }
    }
    return null;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
