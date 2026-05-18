/* =========================
 Sidebar menu animation js
=========================== */
const sidebarAnimation = {
  elements: null,
  tl: null,

  init() {
    console.log('[Sidebar Debug] init() called');
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          console.log('[Sidebar Debug] DOMContentLoaded event fired');
          this.cacheElements();
          this.initTimeline();
          this.bindEvents();
        });
      } else {
        console.log('[Sidebar Debug] DOM already loaded/interactive');
        this.cacheElements();
        this.initTimeline();
        this.bindEvents();
      }
    } catch (error) {
      console.error('[Sidebar Debug] Sidebar animation initialization failed:', error);
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
    console.log('[Sidebar Debug] cacheElements:', {
      navHamburger: !!this.elements.navHamburger,
      navHamburgerClose: !!this.elements.navHamburgerClose,
      sidebar: !!this.elements.sidebar,
      navItemsCount: this.elements.navItems?.length,
      rightCol: !!this.elements.rightCol,
      closeBtn: !!this.elements.closeBtn,
      bottomItemsCount: this.elements.bottomItems?.length
    });
  },

  initTimeline() {
    const { sidebar, navItems, rightCol, closeBtn, bottomItems } = this.elements;
    
    // Check if gsap is available globally
    const hasGsap = typeof window !== 'undefined' && (window.gsap || typeof gsap !== 'undefined');
    console.log('[Sidebar Debug] initTimeline - GSAP available:', hasGsap);
    
    if (sidebar && hasGsap) {
      const gsapInstance = window.gsap || gsap;

      console.log('[Sidebar Debug] Initializing GSAP Timeline');
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
      console.log('[Sidebar Debug] Falling back to CSS transitions (no GSAP)');
      // Add fallback class if GSAP is not loaded
      sidebar.classList.add('sidebar-fallback');
    }
  },

  bindEvents() {
    const { navHamburger, navHamburgerClose, sidebar } = this.elements;

    console.log('[Sidebar Debug] bindEvents setup:', {
      hasNavHamburger: !!navHamburger,
      hasNavHamburgerClose: !!navHamburgerClose,
      hasSidebar: !!sidebar
    });

    if (navHamburger && sidebar) {
      console.log('[Sidebar Debug] Binding click listener to navHamburger');
      navHamburger.addEventListener('click', (e) => {
        console.log('[Sidebar Debug] navHamburger clicked!');
        document.body.classList.add('overflow-hidden');
        if (this.tl) {
          console.log('[Sidebar Debug] Playing GSAP Timeline');
          this.tl.play();
        } else {
          console.log('[Sidebar Debug] Timeline missing, showing via class');
          // Fallback to CSS classes if GSAP is not loaded
          sidebar.classList.add('show-sidebar');
        }
      });
    } else {
      console.warn('[Sidebar Debug] Could not bind hamburger menu open event listener (navHamburger or sidebar missing)');
    }

    if (navHamburgerClose && sidebar) {
      console.log('[Sidebar Debug] Binding click listener to navHamburgerClose');
      navHamburgerClose.addEventListener('click', () => {
        console.log('[Sidebar Debug] navHamburgerClose clicked!');
        document.body.classList.remove('overflow-hidden');
        if (this.tl) {
          console.log('[Sidebar Debug] Reversing GSAP Timeline');
          this.tl.reverse();
        } else {
          console.log('[Sidebar Debug] Timeline missing, hiding via class');
          // Fallback to CSS classes if GSAP is not loaded
          sidebar.classList.remove('show-sidebar');
        }
      });
    } else {
      console.warn('[Sidebar Debug] Could not bind hamburger menu close event listener (navHamburgerClose or sidebar missing)');
    }
  },
};

if (typeof window !== 'undefined') {
  sidebarAnimation.init();
}
