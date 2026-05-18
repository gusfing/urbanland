/* =========================
 Sidebar menu animation js
=========================== */
const sidebarAnimation = {
  elements: null,
  tl: null,

  init() {
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          this.cacheElements();
          this.initTimeline();
          this.bindEvents();
        });
      } else {
        this.cacheElements();
        this.initTimeline();
        this.bindEvents();
      }
    } catch (error) {
      console.error('Sidebar animation initialization failed:', error);
    }
  },

  cacheElements() {
    this.elements = {
      navHamburger: document.querySelector('.nav-hamburger'),
      navHamburgerClose: document.querySelector('.nav-hamburger-close'),
      sidebar: document.querySelector('.sidebar'),
      navItems: document.querySelectorAll('.sidebar .group\\/nav-item'),
      rightCol: document.querySelector('.sidebar .lg\\:col-span-5'),
      closeBtn: document.querySelector('.sidebar .nav-hamburger-close'),
      bottomItems: document.querySelectorAll('.sidebar .border-t p, .sidebar .border-t a, .sidebar .border-t span'),
    };
  },

  initTimeline() {
    const { sidebar, navItems, rightCol, closeBtn, bottomItems } = this.elements;
    
    // Check if gsap is available globally
    if (sidebar && typeof window !== 'undefined' && (window.gsap || typeof gsap !== 'undefined')) {
      const gsapInstance = window.gsap || gsap;

      // Initialize initial state via GSAP to ensure smooth override of inline HTML styles
      gsapInstance.set(sidebar, { xPercent: 100, autoAlpha: 0 });

      // Create paused GSAP Timeline
      this.tl = gsapInstance.timeline({ 
        paused: true,
        defaults: { ease: 'power3.out' }
      });

      // 1. Sidebar slide-in and fade-in panel
      this.tl.to(sidebar, {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: 'power4.out'
      });

      // 2. Staggered reveal of giant navigation links
      if (navItems && navItems.length > 0) {
        this.tl.from(navItems, {
          y: 40,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 0.6
        }, '-=0.45');
      }

      // 3. Slide up and fade-in for the right column info card
      if (rightCol) {
        this.tl.from(rightCol, {
          y: 30,
          autoAlpha: 0,
          duration: 0.6
        }, '-=0.4');
      }

      // 4. Scale and rotate close button with an overshoot effect
      if (closeBtn) {
        this.tl.from(closeBtn, {
          scale: 0.7,
          rotation: -180,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'back.out(1.8)'
        }, '-=0.55');
      }

      // 5. Drawer footer elements (credits, ISO tags, terms) reveal
      if (bottomItems && bottomItems.length > 0) {
        this.tl.from(bottomItems, {
          y: 15,
          autoAlpha: 0,
          stagger: 0.04,
          duration: 0.5
        }, '-=0.35');
      }
    } else if (sidebar) {
      // Add fallback class if GSAP is not loaded
      sidebar.classList.add('sidebar-fallback');
    }
  },

  bindEvents() {
    const { navHamburger, navHamburgerClose, sidebar } = this.elements;

    if (navHamburger && sidebar) {
      navHamburger.addEventListener('click', () => {
        document.body.classList.add('overflow-hidden');
        if (this.tl) {
          this.tl.play();
        } else {
          // Fallback to CSS classes if GSAP is not loaded
          sidebar.classList.add('show-sidebar');
        }
      });
    }

    if (navHamburgerClose && sidebar) {
      navHamburgerClose.addEventListener('click', () => {
        document.body.classList.remove('overflow-hidden');
        if (this.tl) {
          this.tl.reverse();
        } else {
          // Fallback to CSS classes if GSAP is not loaded
          sidebar.classList.remove('show-sidebar');
        }
      });
    }
  },
};

if (typeof window !== 'undefined') {
  sidebarAnimation.init();
}
