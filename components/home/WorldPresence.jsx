"use client";
import { useEffect } from "react";

import Script from 'next/script';

export default function WorldPresence() {
  useEffect(() => {
    // We need to wait for GSAP and CustomEase to load
    const checkGsap = setInterval(() => {
      if (typeof window !== 'undefined' && window.gsap && window.CustomEase) {
        clearInterval(checkGsap);
        initGsap();
      }
    }, 100);

    function initGsap() {
      const gsap = window.gsap;
      const CustomEase = window.CustomEase;
      gsap.registerPlugin(CustomEase);
      CustomEase.create(
          'hopWorld',
          'M0,0 C0.488,0.02 0.467,0.286 0.5,0.5 0.532,0.712 0.58,1 1,1'
      );

      const slider = document.querySelector('.smooth-world-wrapper');
      if (!slider) return;

      const sliderTitle = slider.querySelector('.smooth-slider-title');
      const sliderCounter = slider.querySelector('.smooth-slider-counter p span:first-child');
      const sliderItems = slider.querySelector('.smooth-slider-items');
      const sliderPreview = slider.querySelector('.smooth-slider-preview');
      const totalSlides = 4;
      let activeSlideIndex = 1;
      let isAnimating = false;

      const sliderContent = [
          { name: 'Lodha Townships', img: './images/projects/project-1.png' },
          { name: 'Adani Residential', img: './images/projects/banner-1.png' },
          { name: 'Oberoi Luxury', img: './images/projects/project-2.png' },
          { name: 'Smart City Mission', img: './images/projects/banner-2.png' }
      ];

      const clipPath = {
          closed: 'polygon(25% 30%, 75% 30%, 75% 70%, 25% 70%)',
          open: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      };

      const slidePositions = {
          prev: { left: '15%', rotation: -90 },
          active: { left: '50%', rotation: 0 },
          next: { left: '85%', rotation: 90 },
      };

      function splitTextIntoSpans(element) {
          element.innerHTML = element.innerText
              .split('')
              .map(char => `<span>${char === ' ' ? '&nbsp;&nbsp;' : char}</span>`)
              .join('');
      }

      function createAndAnimateTitle(content, direction) {
          const newTitle = document.createElement('h1');
          newTitle.innerText = content.name;
          sliderTitle.appendChild(newTitle);
          splitTextIntoSpans(newTitle);

          const yOffset = direction === 'next' ? 140 : -140;
          gsap.set(newTitle.querySelectorAll('span'), { y: yOffset, opacity: 0 });
          gsap.to(newTitle.querySelectorAll('span'), {
              y: 0,
              opacity: 1,
              duration: 1.25,
              stagger: 0.02,
              ease: 'hopWorld',
              delay: 0.25,
          });

          const currentTitle = sliderTitle.querySelector('h1:not(:last-child)');
          if (currentTitle) {
              gsap.to(currentTitle.querySelectorAll('span'), {
                  y: -yOffset,
                  opacity: 0,
                  duration: 1.25,
                  stagger: 0.02,
                  ease: 'hopWorld',
                  delay: 0.25,
                  onComplete: () => currentTitle.remove(),
              });
          }
      }

      function createSlide(content, className) {
          const slide = document.createElement('div');
          slide.className = `smooth-slide-container ${className}`;
          slide.innerHTML = `<div className="smooth-slide-img"><img src="${content.img}" alt="${content.name}" /></div>`;
          return slide;
      }

      function getSlideIndex(increment) {
          return ((activeSlideIndex + increment - 1 + totalSlides) % totalSlides) + 1;
      }

      function updateCounterAndHighlight(index) {
          if(sliderCounter) sliderCounter.textContent = index;
          if(sliderItems) {
              sliderItems.querySelectorAll('p').forEach((item, i) =>
                  item.classList.toggle('activeItem', i === index - 1)
              );
          }
      }

      function updatePreviewImage(content) {
          const newImage = document.createElement('img');
          newImage.src = content.img;
          newImage.alt = content.name;
          sliderPreview.appendChild(newImage);

          gsap.fromTo(
              newImage,
              { opacity: 0 },
              {
                  opacity: 1,
                  duration: 1,
                  ease: 'power2.inOut',
                  delay: 0.5,
                  onComplete: () => {
                      const oldImg = sliderPreview.querySelector('img:not(:last-child)');
                      if(oldImg) oldImg.remove();
                  }
              }
          );
      }

      function animateSlide(slide, props) {
          gsap.to(slide, { ...props, duration: 2, ease: 'hopWorld' });
          gsap.to(slide.querySelector('.smooth-slide-img'), {
              rotation: -(props.rotation || 0),
              duration: 2,
              ease: 'hopWorld',
          });
      }

      function transitionSlides(direction) {
          if (isAnimating) return;
          isAnimating = true;

          const outgoingPos = direction === 'next' ? 'prev' : 'next';
          const incomingPos = direction === 'next' ? 'next' : 'prev';

          const outgoingSlide = slider.querySelector(`.${outgoingPos}`);
          const activeSlide = slider.querySelector('.active');
          const incomingSlide = slider.querySelector(`.${incomingPos}`);

          animateSlide(incomingSlide, {
              ...slidePositions.active,
              clipPath: clipPath.open,
              zIndex: 20
          });
          animateSlide(activeSlide, {
              ...slidePositions[outgoingPos],
              clipPath: clipPath.closed,
              zIndex: 2
          });
          if(outgoingSlide) {
              gsap.to(outgoingSlide, { scale: 0, opacity: 0, duration: 2, ease: 'hopWorld' });
          }

          const newSlideIndex = getSlideIndex(direction === 'next' ? 2 : -2);
          const newSlide = createSlide(sliderContent[newSlideIndex - 1], incomingPos);
          slider.appendChild(newSlide);
          gsap.set(newSlide, {
              ...slidePositions[incomingPos],
              xPercent: -50,
              yPercent: -50,
              scale: 0,
              opacity: 0,
              clipPath: clipPath.closed,
              zIndex: 2
          });
          gsap.to(newSlide, { scale: 1, opacity: 1, duration: 2, ease: 'hopWorld' });

          const nextActiveIndex = getSlideIndex(direction === 'next' ? 1 : -1);
          createAndAnimateTitle(sliderContent[nextActiveIndex - 1], direction);
          updatePreviewImage(sliderContent[nextActiveIndex - 1]);

          setTimeout(() => updateCounterAndHighlight(nextActiveIndex), 1000);

          setTimeout(() => {
              if(outgoingSlide) outgoingSlide.remove();
              if(activeSlide) activeSlide.className = `smooth-slide-container ${outgoingPos}`;
              if(incomingSlide) incomingSlide.className = 'smooth-slide-container active';
              if(newSlide) newSlide.className = `smooth-slide-container ${incomingPos}`;
              activeSlideIndex = nextActiveIndex;
              isAnimating = false;
          }, 2000);
      }

      const clickHandler = e => {
          const clickedSlide = e.target.closest('.smooth-slide-container');
          if (clickedSlide && !isAnimating) {
              transitionSlides(clickedSlide.classList.contains('next') ? 'next' : 'prev');
          }
      };
      slider.addEventListener('click', clickHandler);

      // Initial setup
      Object.entries(slidePositions).forEach(([key, value]) => {
          gsap.set(`.smooth-slide-container.${key}`, {
              ...value,
              xPercent: -50,
              yPercent: -50,
              clipPath: key === 'active' ? clipPath.open : clipPath.closed,
              zIndex: key === 'active' ? 20 : 2
          });
          if (key !== 'active') {
              gsap.set(`.smooth-slide-container.${key} .smooth-slide-img`, {
                  rotation: -value.rotation,
              });
          }
      });

      const initialTitle = sliderTitle.querySelector('h1');
      if(initialTitle) {
          splitTextIntoSpans(initialTitle);
          gsap.fromTo(
              initialTitle.querySelectorAll('span'),
              { y: 160, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, stagger: 0.02, ease: 'hopWorld' }
          );
      }

      updateCounterAndHighlight(activeSlideIndex);

      if(sliderItems) {
          sliderItems.querySelectorAll('p').forEach((item, index) => {
              item.addEventListener('click', () => {
                  if (index + 1 !== activeSlideIndex && !isAnimating) {
                      transitionSlides(index + 1 > activeSlideIndex ? 'next' : 'prev');
                  }
              });
          });
      }

      return () => {
          slider.removeEventListener('click', clickHandler);
      };
    }
    return () => clearInterval(checkGsap);
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js" strategy="afterInteractive" />


{/* Urbanland in the world section replaced with Smooth-slider */}


<div className="smooth-world-wrapper" id="urbanland-world">
   <div className="absolute top-10 left-0 right-0 z-20 pointer-events-none flex justify-center">
      <div className="max-w-[1440px] w-full px-4 sm:px-6 mx-auto flex flex-col items-center text-center">
         <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] font-light tracking-tight pointer-events-auto mb-4">Urbanland in the world</h2>
         <h3 className="text-base md:text-lg text-[#1a1a1a]/70 font-light leading-relaxed max-w-2xl pointer-events-auto">
             Discover our premium installations across luxury townships, world-class commercial spaces, and smart city infrastructure.
         </h3>
      </div>
   </div>

   <div className="smooth-slide-container prev">
      <div className="smooth-slide-img">
         <img src="./images/projects/banner-2.png" alt="Smart City Mission" />
      </div>
   </div>
   <div className="smooth-slide-container active">
      <div className="smooth-slide-img">
         <img src="./images/projects/project-1.png" alt="Lodha Townships" />
      </div>
   </div>
   <div className="smooth-slide-container next">
      <div className="smooth-slide-img">
         <img src="./images/projects/banner-1.png" alt="Adani Residential" />
      </div>
   </div>

   <div className="smooth-slider-title">
      <h1>Lodha Townships</h1>
   </div>

   <div className="smooth-slider-counter">
      <p><span>1</span><span>/</span><span>4</span></p>
   </div>

   <div className="smooth-slider-items">
      <p className="activeItem">Lodha Townships</p>
      <p>Adani Residential</p>
      <p>Oberoi Luxury</p>
      <p>Smart City Mission</p>
   </div>

   <div className="smooth-slider-preview">
      <img src="./images/projects/project-1.png" alt="Lodha Townships preview" />
   </div>
</div>



    </>
  );
}