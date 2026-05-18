/* =========================
 Sidebar menu animation js
=========================== */
const sidebarAnimation = {
  elements: null,

  init() {
    console.log('[Sidebar] init() called');
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          this.cacheElements();
          this.bindEvents();
        });
      } else {
        this.cacheElements();
        this.bindEvents();
      }
    } catch (error) {
      console.error('[Sidebar] Sidebar animation initialization failed:', error);
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
      sidebarLinks: document.querySelectorAll('.sidebar a'),
    };
    console.log('[Sidebar] Cached elements:', {
      navHamburger: !!this.elements.navHamburger,
      navHamburgerClose: !!this.elements.navHamburgerClose,
      sidebar: !!this.elements.sidebar,
      navItemsCount: this.elements.navItems?.length,
      sidebarLinksCount: this.elements.sidebarLinks?.length,
    });
  },

  bindEvents() {
    const { navHamburger, navHamburgerClose, sidebar, navItems, rightCol, closeBtn, bottomItems, sidebarLinks } = this.elements;

    if (navHamburger && sidebar) {
      console.log('[Sidebar] Binding click listener to open menu');
      
      // Make sure pointer-events are correct
      sidebar.style.pointerEvents = 'auto';

      navHamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('[Sidebar] Opening menu panel...');
        
        // Add classes to show panel instantly with GPU-accelerated CSS transition
        document.body.classList.add('overflow-hidden');
        sidebar.classList.add('show-sidebar');

        // Staggered reveal of internal list items via GSAP if available
        if (typeof window !== 'undefined' && (window.gsap || typeof gsap !== 'undefined')) {
          const gsapInstance = window.gsap || gsap;
          
          // Clear any active tweens to prevent stutter
          gsapInstance.killTweensOf([navItems, rightCol, closeBtn, bottomItems]);

          // Animate list items
          if (navItems && navItems.length > 0) {
            gsapInstance.fromTo(navItems,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, delay: 0.15, ease: 'power3.out' }
            );
          }

          // Animate right info card
          if (rightCol) {
            gsapInstance.fromTo(rightCol,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: 'power3.out' }
            );
          }

          // Animate close button
          if (closeBtn) {
            gsapInstance.fromTo(closeBtn,
              { scale: 0.8, opacity: 0, rotation: -90 },
              { scale: 1, opacity: 1, rotation: 0, duration: 0.5, delay: 0.1, ease: 'back.out(1.5)' }
            );
          }

          // Animate footer items
          if (bottomItems && bottomItems.length > 0) {
            gsapInstance.fromTo(bottomItems,
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.04, duration: 0.4, delay: 0.35, ease: 'power3.out' }
            );
          }
        }
      });
    } else {
      console.warn('[Sidebar] Hamburger button or sidebar missing from DOM');
    }

    // Bind event to close the sidebar panel
    const closeSidebar = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      console.log('[Sidebar] Closing menu panel...');
      document.body.classList.remove('overflow-hidden');
      sidebar.classList.remove('show-sidebar');
    };

    if (navHamburgerClose && sidebar) {
      console.log('[Sidebar] Binding click listener to close menu');
      navHamburgerClose.addEventListener('click', closeSidebar);
    }

    // Auto-close when any links inside the sidebar are clicked (critical for inner page anchor targets)
    if (sidebarLinks && sidebarLinks.length > 0) {
      console.log(`[Sidebar] Binding close-listeners to ${sidebarLinks.length} inner sidebar links`);
      sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
          console.log('[Sidebar] Inner link clicked, auto-closing panel');
          // Allow small delay for smooth transition feel
          setTimeout(() => {
            document.body.classList.remove('overflow-hidden');
            sidebar.classList.remove('show-sidebar');
          }, 150);
        });
      });
    }
  },
};

if (typeof window !== 'undefined') {
  sidebarAnimation.init();
}
