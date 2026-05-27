"use client";
import { useEffect } from "react";

export default function Solutions() {
  useEffect(() => {
      const slider = document.getElementById('solSlider');
      const btnLeft = document.getElementById('solSlideLeft');
      const btnRight = document.getElementById('solSlideRight');

      if (!slider || !btnLeft || !btnRight) return;

      const updateButtons = () => {
          if (slider.scrollLeft <= 10) {
              btnLeft.setAttribute('disabled', 'true');
          } else {
              btnLeft.removeAttribute('disabled');
          }
          if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10) {
              btnRight.setAttribute('disabled', 'true');
          } else {
              btnRight.removeAttribute('disabled');
          }
      };

      const scrollLeft = () => {
          const card = slider.querySelector('.reference-card');
          if(card) {
              const scrollAmount = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight || 0);
              slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }
      };

      const scrollRight = () => {
          const card = slider.querySelector('.reference-card');
          if(card) {
              const scrollAmount = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight || 0);
              slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
      };

      btnLeft.addEventListener('click', scrollLeft);
      btnRight.addEventListener('click', scrollRight);
      slider.addEventListener('scroll', updateButtons, { passive: true });
      window.addEventListener('resize', updateButtons);
      
      // Setup initial state
      let timer = setTimeout(updateButtons, 100);

      return () => {
          btnLeft.removeEventListener('click', scrollLeft);
          btnRight.removeEventListener('click', scrollRight);
          slider.removeEventListener('scroll', updateButtons);
          window.removeEventListener('resize', updateButtons);
          clearTimeout(timer);
      };
  }, []);

  return (
    <>

{/* Solutions section replaced with mmcite slider */}
<div className="mmcite-wrapper bg-background-8 py-12 md:py-20">
  <section className="section" id="urbanland-solutions">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="w-full">
              <div className="w-full" data-content-type="catalog">
                  
                  <div className="flex flex-col md:flex-row justify-between items-end mb-10 pt-10 px-4">
                      <div className="w-full md:max-w-2xl">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] font-light tracking-tight mb-6">Outdoor &amp; Urban<br/>Furniture Solutions</h1>
                          <p className="text-base md:text-lg text-[#1a1a1a]/70 font-light leading-relaxed">
                              From luxury townships to smart city infrastructure — one manufacturer, complete outdoor furniture solutions.
                          </p>
                      </div>
                      <div className="hidden md:block">
                          <a href="case-studies.html" className="inline-block bg-black text-white hover:bg-[#8b3721] transition-colors duration-300 font-medium px-8 py-4 rounded-full">Explore All</a>
                      </div>
                  </div>

                  <div className="relative group mx-auto w-full max-w-[100vw]">
                      <button id="solSlideLeft" className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg text-black hover:bg-[#8b3721] hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none" aria-label="Previous">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                      </button>
                      <button id="solSlideRight" className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg text-black hover:bg-[#8b3721] hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none" aria-label="Next">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </button>

                      <div id="solSlider" className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 sm:px-6 hide-scrollbar">
                          
                          {/* Project 1 */}
                          <div className="reference-card snap-start shrink-0 w-[85vw] md:w-[700px] lg:w-[840px] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] mr-4 md:mr-6">
                              <a className="relative block h-full w-full overflow-hidden rounded-[2rem] group" href="#">
                                  <div className="absolute inset-0 z-0 bg-black">
                                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="./images/hero/Planters_Box.jpeg" alt="Real Estate & Townships" />
                                  </div>
                                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">Real Estate &amp; Townships</h1>
                                      <div className="text-base md:text-lg text-white/80 font-light max-w-2xl">
                                          <span className="inline-block mr-3 font-bold text-[#ff4c00]">01</span>
                                          Premium outdoor benches, outdoor planters, car parking sheds, and cabanas that enhance property value and resident experience.
                                      </div>
                                  </div>
                              </a>
                          </div>

                          {/* Project 2 */}
                          <div className="reference-card snap-start shrink-0 w-[85vw] md:w-[700px] lg:w-[840px] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] mr-4 md:mr-6">
                              <a className="relative block h-full w-full overflow-hidden rounded-[2rem] group" href="#">
                                  <div className="absolute inset-0 z-0 bg-black">
                                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="./images/hero/Wicker_Furniture.jpeg" alt="Hotels & Resorts" />
                                  </div>
                                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">Hotels &amp; Resorts</h1>
                                      <div className="text-base md:text-lg text-white/80 font-light max-w-2xl">
                                          <span className="inline-block mr-3 font-bold text-[#ff4c00]">02</span>
                                          Luxury poolside loungers & umbrellas, wicker dining sets, and canteen furniture engineered for high guest footfall.
                                      </div>
                                  </div>
                              </a>
                          </div>

                          {/* Project 3 */}
                          <div className="reference-card snap-start shrink-0 w-[85vw] md:w-[700px] lg:w-[840px] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] mr-4 md:mr-6">
                              <a className="relative block h-full w-full overflow-hidden rounded-[2rem] group" href="#">
                                  <div className="absolute inset-0 z-0 bg-black">
                                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="./images/hero/Bench.jpeg" alt="Hospitals & Healthcare" />
                                  </div>
                                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">Hospitals &amp; Healthcare</h1>
                                      <div className="text-base md:text-lg text-white/80 font-light max-w-2xl">
                                          <span className="inline-block mr-3 font-bold text-[#ff4c00]">03</span>
                                          Durable, low-maintenance benches, dustbins, and canteen tables built to withstand heavy daily use in medical campuses.
                                      </div>
                                  </div>
                              </a>
                          </div>

                          {/* Project 4 */}
                          <div className="reference-card snap-start shrink-0 w-[85vw] md:w-[700px] lg:w-[840px] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] mr-4 md:mr-6">
                              <a className="relative block h-full w-full overflow-hidden rounded-[2rem] group" href="#">
                                  <div className="absolute inset-0 z-0 bg-black">
                                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="./images/hero/Canteen_Tables.jpeg" alt="Schools & Universities" />
                                  </div>
                                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white">Schools &amp; Universities</h1>
                                      <div className="text-base md:text-lg text-white/80 font-light max-w-2xl">
                                          <span className="inline-block mr-3 font-bold text-[#ff4c00]">04</span>
                                          Heavy-duty canteen tables, outdoor benches, and outdoor planters built for high-footfall educational campuses.
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</div>

    </>
  );
}