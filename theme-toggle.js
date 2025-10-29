// ============================================
// MINAMO THEME TOGGLE
// Light/Dark mode with localStorage persistence
// ============================================

(function () {
  'use strict';

  // Get theme from localStorage or default to light
  const getStoredTheme = () => localStorage.getItem('theme') || 'light';
  const setStoredTheme = theme => localStorage.setItem('theme', theme);

  // Apply theme to document
  const applyTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Update button text
  const updateButtonText = (button, theme) => {
    if (button) {
      button.textContent = theme === 'dark' ? 'Light' : 'Dark';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  };

  // Initialize theme on page load
  const initTheme = () => {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);

    // Update button if it exists
    const themeToggle = document.getElementById('theme-toggle');
    updateButtonText(themeToggle, storedTheme);
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    setStoredTheme(newTheme);

    // Update button
    const themeToggle = document.getElementById('theme-toggle');
    updateButtonText(themeToggle, newTheme);
  };

  // Initialize immediately
  initTheme();

  // Set up event listener when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
      }
    });
  } else {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  }

  // Expose toggle function globally if needed
  window.toggleTheme = toggleTheme;
})();
