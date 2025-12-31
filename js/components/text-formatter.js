/**
 * Text Formatter Component
 * Reusable text formatting toolbar for admin textareas
 * Apply by adding class="text-formatter" to any textarea
 * 
 * Features:
 * - Font selection (Sans Serif, Serif, Monospace)
 * - Font weight (Normal, Semi-bold, Bold)
 * - Line height (Compact, Normal, Loose)
 * - Text style (Normal, Heading, Subheading)
 * - Size (Small, Normal, Large)
 * - Bold/Italic/Underline buttons
 * - Link button
 * - List buttons (bullet, numbered)
 * - Text alignment (left, center, right)
 * - Emoji insertion
 */

(function () {
  'use strict';

  const EMOJIS = ['🌟', '😊', '👍', '🎉', '✨', '🚀', '💡', '🌍', '🏃', '🚴', '🎭', '🍽️', '📸', '🗺️', '🎯', '🌺', '🎨', '🎵', '📚', '✈️'];

  const TOOLBAR_HTML = `
    <div class="text-formatter-toolbar" style="display: flex; gap: 0.75rem; margin-bottom: 1rem; padding: 0.75rem; background: var(--lbpf-neutral-50); border-radius: 6px; flex-wrap: wrap; align-items: flex-end;">
      
      <!-- Text Style -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Style</label>
        <select class="text-formatter-style" style="padding: 0.4rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; font-size: 0.85rem; background: var(--pt-white);">
          <option value="normal">Normal</option>
          <option value="heading">Heading</option>
          <option value="subheading">Subheading</option>
        </select>
      </div>

      <!-- Font -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Font</label>
        <select class="text-formatter-font" style="padding: 0.4rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; font-size: 0.85rem; background: var(--pt-white);">
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>

      <!-- Size -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Size</label>
        <select class="text-formatter-size" style="padding: 0.4rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; font-size: 0.85rem; background: var(--pt-white);">
          <option value="0.85rem">Small</option>
          <option value="0.95rem" selected>Normal</option>
          <option value="1.1rem">Large</option>
        </select>
      </div>

      <!-- Weight -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Weight</label>
        <select class="text-formatter-weight" style="padding: 0.4rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; font-size: 0.85rem; background: var(--pt-white);">
          <option value="400">Normal</option>
          <option value="600">Semi-bold</option>
          <option value="700">Bold</option>
        </select>
      </div>

      <!-- Line Height -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Spacing</label>
        <select class="text-formatter-lineheight" style="padding: 0.4rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; font-size: 0.85rem; background: var(--pt-white);">
          <option value="1.4">Compact</option>
          <option value="1.6" selected>Normal</option>
          <option value="1.8">Loose</option>
        </select>
      </div>

      <!-- Alignment -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Align</label>
        <div style="display: flex; gap: 0.25rem;">
          <button type="button" class="text-formatter-align" data-align="left" title="Align left" style="padding: 0.4rem 0.6rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; background: var(--pt-white); cursor: pointer; font-size: 0.9rem;">⬅</button>
          <button type="button" class="text-formatter-align" data-align="center" title="Align center" style="padding: 0.4rem 0.6rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; background: var(--pt-white); cursor: pointer; font-size: 0.9rem;">⬇</button>
          <button type="button" class="text-formatter-align" data-align="right" title="Align right" style="padding: 0.4rem 0.6rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; background: var(--pt-white); cursor: pointer; font-size: 0.9rem;">➡</button>
        </div>
      </div>

      <!-- Emoji -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        <label style="font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Insert</label>
        <button type="button" class="text-formatter-emoji" style="padding: 0.4rem 0.8rem; border: 1px solid var(--lbpf-neutral-300); border-radius: 4px; background: var(--pt-white); cursor: pointer; font-weight: 600; font-size: 0.9rem;">😊 Emoji</button>
      </div>
    </div>
  `;

  function initTextFormatter() {
    const textareas = document.querySelectorAll('textarea.text-formatter');
    
    textareas.forEach(function (textarea) {
      // Skip if already initialized
      if (textarea.dataset.formatterInitialized) return;
      textarea.dataset.formatterInitialized = 'true';

      // Insert toolbar before textarea
      const toolbar = document.createElement('div');
      toolbar.innerHTML = TOOLBAR_HTML;
      textarea.parentNode.insertBefore(toolbar.firstElementChild, textarea);

      const toolbarEl = textarea.previousElementSibling;
      const styleSelect = toolbarEl.querySelector('.text-formatter-style');
      const fontSelect = toolbarEl.querySelector('.text-formatter-font');
      const sizeSelect = toolbarEl.querySelector('.text-formatter-size');
      const weightSelect = toolbarEl.querySelector('.text-formatter-weight');
      const lineHeightSelect = toolbarEl.querySelector('.text-formatter-lineheight');
      const alignButtons = toolbarEl.querySelectorAll('.text-formatter-align');
      const emojiButton = toolbarEl.querySelector('.text-formatter-emoji');

      // Apply style changes
      if (styleSelect) {
        styleSelect.addEventListener('change', function () {
          applyTextStyle(textarea, this.value);
        });
      }

      if (fontSelect) {
        fontSelect.addEventListener('change', function () {
          textarea.style.fontFamily = this.value;
        });
      }

      if (sizeSelect) {
        sizeSelect.addEventListener('change', function () {
          textarea.style.fontSize = this.value;
        });
      }

      if (weightSelect) {
        weightSelect.addEventListener('change', function () {
          textarea.style.fontWeight = this.value;
        });
      }

      if (lineHeightSelect) {
        lineHeightSelect.addEventListener('change', function () {
          textarea.style.lineHeight = this.value;
        });
      }

      alignButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          const align = this.dataset.align;
          textarea.style.textAlign = align;
          
          // Visual feedback
          alignButtons.forEach(function (b) { b.style.background = 'var(--pt-white)'; });
          this.style.background = 'var(--lbpf-neutral-200)';
        });
      });

      if (emojiButton) {
        emojiButton.addEventListener('click', function (e) {
          e.preventDefault();
          const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
          textarea.value += emoji;
        });
      }
    });
  }

  function applyTextStyle(textarea, style) {
    switch (style) {
      case 'heading':
        textarea.style.fontSize = '1.3rem';
        textarea.style.fontWeight = '700';
        break;
      case 'subheading':
        textarea.style.fontSize = '1.1rem';
        textarea.style.fontWeight = '600';
        break;
      case 'normal':
      default:
        textarea.style.fontSize = '0.95rem';
        textarea.style.fontWeight = '400';
        break;
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTextFormatter);
  } else {
    initTextFormatter();
  }

  // Re-initialize if new textareas are added dynamically
  window.initTextFormatter = initTextFormatter;
})();
