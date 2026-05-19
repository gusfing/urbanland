// ===============================
// Smooth Scrolling
// ===============================
let lenis;
const smoothScrolling = () => {
  // Initialize Lenis with native touch scrolling on mobile and premium smooth scrolling on desktop
  const isMobileScreen = window.innerWidth <= 768;

  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: !isMobileScreen,
    syncTouch: false, // Absolutely disable touch synchronization to preserve hardware-accelerated native mobile momentum scrolling!
  });

  lenis.on('scroll', () => ScrollTrigger.update());

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

// ===============================
// Smooth Scroll to Links
// ===============================
//  reset all table contents items inactive
const resetTocItems = (sidebarList) => {
  const allListItems = sidebarList.querySelectorAll('li');
  allListItems.forEach((item) => {
    const icon = item.querySelector('span:last-child');
    const text = item.querySelector('span:first-child, a span');

    if (icon) icon.classList.add('invisible');
    if (text) {
      text.classList.remove('font-medium', 'text-background-13');
      text.classList.add('font-normal', 'text-background-13/60');
    }
  });
};

//  activate a specific table of contents item
const activateTocItem = (item) => {
  const icon = item.querySelector('span:last-child');
  const text = item.querySelector('span:first-child, a span');

  if (icon) icon.classList.remove('invisible');
  if (text) {
    text.classList.remove('font-normal', 'text-background-13/60');
    text.classList.add('font-medium', 'text-background-13');
  }
};

//  handle table of contents item click
const handleTocItemClick = (clickedItem, sidebarList) => {
  resetTocItems(sidebarList);
  activateTocItem(clickedItem);
};

// Smooth Scroll to Links Functionality
const lenisSmoothScrollLinks = () => {
  const lenisTargetElements = document.querySelectorAll('.lenis-scroll-to');
  const sidebarList = document.querySelector('.table-of-contents .table-of-list');

  lenisTargetElements.forEach((ele) => {
    ele.addEventListener('click', function (e) {
      e.preventDefault();
      const target = ele.getAttribute('href');

      // Handle table of contents icon visibility
      if (sidebarList) {
        const clickedItem = ele.closest('li');
        if (clickedItem) {
          handleTocItemClick(clickedItem, sidebarList);
        }
      }

      if (target) {
        // Check if Lenis is available (for smooth scrolling)
        if (lenis) {
          lenis.scrollTo(target, {
            offset: -100,
            duration: 1.7,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
        } else {
          // Fallback for when Lenis is not available (mobile devices)
          const targetElement = document.querySelector(target);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            // Add offset manually
            setTimeout(() => {
              window.scrollBy(0, -100);
            }, 100);
          }
        }
      }
    });
  });
};

// Handle table of contents list item clicks for non-linked items
const handleTocListClicks = () => {
  const sidebarList = document.querySelector('.table-of-contents .table-of-list');
  if (!sidebarList) return;

  const listItems = sidebarList.querySelectorAll('li');

  listItems.forEach((item) => {
    // Skip items that already have lenis-scroll-to links
    if (item.querySelector('.lenis-scroll-to')) {
      return;
    }

    item.addEventListener('click', function () {
      handleTocItemClick(item, sidebarList);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  smoothScrolling();
  lenisSmoothScrollLinks();
  handleTocListClicks();
});
