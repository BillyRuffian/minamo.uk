// ============================================
// MINAMO MAIN JAVASCRIPT
// General interactions and utilities
// ============================================

(function () {
  'use strict';

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================

  const initMobileMenu = () => {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const isExpanded = nav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);

        // Update button content
        const icon = menuToggle.querySelector('span');
        if (icon) {
          icon.textContent = isExpanded ? '✕' : '☰';
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          const icon = menuToggle.querySelector('span');
          if (icon) {
            icon.textContent = '☰';
          }
        }
      });

      // Close menu when clicking a link
      const navLinks = nav.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          const icon = menuToggle.querySelector('span');
          if (icon) {
            icon.textContent = '☰';
          }
        });
      });
    }
  };

  // ============================================
  // ACTIVE NAVIGATION LINK
  // ============================================

  const setActiveNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  };

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  const initSmoothScroll = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // ============================================
  // FORM VALIDATION (if needed)
  // ============================================

  const initFormValidation = () => {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
          } else {
            field.classList.remove('error');
          }
        });

        if (!isValid) {
          e.preventDefault();
        }
      });
    });
  };

  // ============================================
  // INITIALIZE ON DOM READY
  // ============================================

  const init = () => {
    initMobileMenu();
    setActiveNavLink();
    initSmoothScroll();
    initFormValidation();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
