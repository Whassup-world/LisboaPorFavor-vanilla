(function () {
  'use strict';
  
  var bookingState = {
    monthDate: new Date(),
    selectedDate: null,
    selectedTourSlug: null,
    selectedSlot: null
  };

  function init() {
    var data = window.lxtourguideData;
    if (!data) {
      console.warn('lxtourguideData not found');
      return;
    }

    // Initialize calendar for public page
    initCalendar(data);
    
    // Initialize tile expansion
    initTileExpansion();
  }

  function initCalendar(data) {
    var calendarGrid = document.getElementById('calendar-grid');
    var monthLabel = document.getElementById('calendar-month-label');
    var prevBtn = document.getElementById('calendar-prev');
    var nextBtn = document.getElementById('calendar-next');
    var tourSelect = document.getElementById('booking-tour');
    var guestsInput = document.getElementById('booking-guests');
    var childrenInput = document.getElementById('booking-children');
    var selectedSlotLabel = document.getElementById('selected-slot-label');
    var requestBtn = document.getElementById('booking-request-btn');
    var restrictionPills = document.getElementById('restriction-pills');
    var restrictionsTextarea = document.getElementById('booking-restrictions');

    if (!calendarGrid || !monthLabel) {
      return;
    }

    var storageKey = 'lbpf_availability_' + ((data && data.guideId) ? data.guideId : 'default');
    function readStoredAvailability() {
      try {
        return JSON.parse(localStorage.getItem(storageKey) || '{}') || {};
      } catch (e) {
        return {};
      }
    }

    // Populate tour select
    if (tourSelect && Array.isArray(data.tours)) {
      tourSelect.innerHTML = data.tours.map(function (tour) {
        return '<option value="' + tour.slug + '">' + tour.title + '</option>';
      }).join('');
      if (data.tours.length) {
        bookingState.selectedTourSlug = data.tours[0].slug;
      }
    }

    function getSlotLabel(slot) {
      if (slot === 'AM') return 'AM';
      if (slot === 'PM') return 'PM';
      if (slot === 'EVENING') return 'Eve';
      if (slot === 'PRIVATE') return 'Priv';
      return slot;
    }

    function updateSelectedSlotLabel() {
      if (!selectedSlotLabel) return;
      if (!bookingState.selectedDate || !bookingState.selectedSlot) {
        selectedSlotLabel.textContent = 'Pick a date & slot in the calendar';
        return;
      }

      var baseDate = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
      var year = baseDate.getFullYear();
      var monthIndex = baseDate.getMonth();
      var d = new Date(year, monthIndex, bookingState.selectedDate);

      var dateLabel = d.toLocaleDateString(undefined, {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });
      selectedSlotLabel.textContent = dateLabel + ' — ' + getSlotLabel(bookingState.selectedSlot);
    }

    function getRestrictionsManualText(value) {
      var text = (value || '').trim();
      if (!text) return '';
      var lines = text.split(/\r?\n/);
      if (lines.length && /^Selected:\s*/i.test(lines[0])) {
        lines.shift();
      }
      return lines.join('\n').trim();
    }

    function setRestrictionsWithSelected(selectedList) {
      if (!restrictionsTextarea) return;
      var selected = Array.isArray(selectedList) ? selectedList : [];
      var manual = getRestrictionsManualText(restrictionsTextarea.value);
      var firstLine = selected.length ? ('Selected: ' + selected.join(', ')) : '';

      if (firstLine && manual) {
        restrictionsTextarea.value = firstLine + '\n' + manual;
        return;
      }
      if (firstLine) {
        restrictionsTextarea.value = firstLine;
        return;
      }
      restrictionsTextarea.value = manual;
    }

    function initRestrictionPills() {
      if (!restrictionPills || !restrictionsTextarea) return;
      var selected = new Set();

      restrictionPills.addEventListener('click', function (event) {
        var pill = event.target.closest('.restriction-pill');
        if (!pill) return;
        event.preventDefault();

        var value = pill.getAttribute('data-value');
        if (!value) return;

        if (selected.has(value)) {
          selected.delete(value);
          pill.classList.remove('restriction-pill-active');
        } else {
          selected.add(value);
          pill.classList.add('restriction-pill-active');
        }

        setRestrictionsWithSelected(Array.from(selected));
      });
    }

    function renderCalendar() {
      var baseDate = bookingState.monthDate instanceof Date ? bookingState.monthDate : new Date();
      var year = baseDate.getFullYear();
      var monthIndex = baseDate.getMonth();
      var daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

      var label = baseDate.toLocaleString('default', { month: 'long', year: 'numeric' });
      monthLabel.textContent = label;

      var storedAvailability = readStoredAvailability();

      var slotOrder = ['EVENING', 'PRIVATE', 'AM', 'PM'];
      var cells = [];

      var firstDay = new Date(year, monthIndex, 1);
      var firstWeekday = (firstDay.getDay() + 6) % 7;
      for (var pad = 0; pad < firstWeekday; pad++) {
        cells.push('<div class="calendar-day calendar-day--empty" aria-hidden="true"></div>');
      }

      for (var day = 1; day <= daysInMonth; day++) {
        var dateKey = year + '-' + String(monthIndex + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        var weekday = new Date(year, monthIndex, day).toLocaleDateString(undefined, { weekday: 'short' });

        var slots = slotOrder.map(function (slot) {
          var override = storedAvailability[dateKey] && storedAvailability[dateKey][slot] ? storedAvailability[dateKey][slot] : null;
          var effective = override || 'unavailable';

          var classes = ['calendar-slot'];
          if (effective === 'available') classes.push('is-available');
          if (effective === 'confirmed') classes.push('is-confirmed');
          if (effective === 'blocked') classes.push('is-blocked');
          if (effective === 'unavailable') classes.push('is-unavailable');
          if (bookingState.selectedDate === day && bookingState.selectedSlot === slot) {
            classes.push('is-selected');
          }

          var disabledAttr = (effective !== 'available') ? ' disabled' : '';
          return '<button type="button" class="' + classes.join(' ') + '" data-date="' + dateKey + '" data-day="' + day + '" data-slot="' + slot + '"' + disabledAttr + '>' + getSlotLabel(slot) + '</button>';
        }).join('');

        cells.push(
          '<div class="calendar-day" data-date="' + dateKey + '">' +
            '<div class="calendar-day-top">' +
              '<span class="calendar-day-weekday">' + weekday + '</span>' +
              '<span class="calendar-day-number">' + day + '</span>' +
            '</div>' +
            '<div class="calendar-day-slots">' + slots + '</div>' +
          '</div>'
        );
      }

      var totalCells = firstWeekday + daysInMonth;
      var trailing = totalCells % 7;
      if (trailing) {
        for (var padEnd = 0; padEnd < (7 - trailing); padEnd++) {
          cells.push('<div class="calendar-day calendar-day--empty" aria-hidden="true"></div>');
        }
      }

      calendarGrid.innerHTML = cells.join('');
      updateSelectedSlotLabel();
    }

    renderCalendar();
    initRestrictionPills();

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
        bookingState.selectedTourSlug = event.target.value;
      });
    }

    if (calendarGrid && !calendarGrid.__lbpfSlotBound) {
      calendarGrid.__lbpfSlotBound = true;
      calendarGrid.addEventListener('click', function (event) {
        var slotBtn = event.target.closest('.calendar-slot');
        if (!slotBtn) return;
        if (slotBtn.disabled) return;
        event.preventDefault();
        event.stopPropagation();

        var dayValue = parseInt(slotBtn.getAttribute('data-day') || '0', 10);
        var slotValue = slotBtn.getAttribute('data-slot');
        if (!dayValue || !slotValue) return;

        bookingState.selectedDate = dayValue;
        bookingState.selectedSlot = slotValue;
        renderCalendar();
      });
    }

    if (requestBtn) {
      requestBtn.addEventListener('click', function () {
        var feedback = document.getElementById('booking-feedback');
        if (feedback) {
          if (!bookingState.selectedDate || !bookingState.selectedSlot) {
            feedback.textContent = 'Please pick a date + slot first.';
            feedback.style.color = '#d32f2f';
            return;
          }
          feedback.textContent = 'Request submitted! George will confirm within 6 hours.';
          feedback.style.color = 'green';
        }
      });
    }
  }

  function initTileExpansion() {
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function (tile) {
      var header = tile.querySelector('.tile-label, .tile-title, .tile-text');
      if (header) {
        header.parentElement.addEventListener('click', function (event) {
          // Only toggle if clicking on header area, not inside tile-body
          var body = tile.querySelector('.tile-body');
          if (body && body.contains(event.target)) {
            return;
          }
          
          var isOpen = tile.classList.contains('tile--open');
          tiles.forEach(function (t) { t.classList.remove('tile--open'); });
          if (!isOpen) {
            tile.classList.add('tile--open');
          }
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
