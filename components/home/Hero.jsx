"use client";
import { useEffect } from "react";
import Script from 'next/script';

export default function Hero() {

  useEffect(() => {
    // Wait for GSAP and ScrollTrigger to load
    const checkGsap = setInterval(() => {
      if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        clearInterval(checkGsap);
        initDragonScroll();
      }
    }, 100);

    function splitTextIntoSpans(element) {
        element.innerHTML = element.innerText
            .split('')
            .map(char => `<span class="inline-block relative" style="will-change: transform;">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');
    }

    function initDragonScroll() {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".dragon-work-item").forEach((item, i) => {
        const img = item.querySelector(".dragon-work-item-img");
        const nameH1 = item.querySelector(".dragon-work-item-name h1");

        // Use custom split text instead of premium GSAP plugin
        if(nameH1) {
            splitTextIntoSpans(nameH1);
            const chars = nameH1.querySelectorAll("span");
            
            // Set initial state
            gsap.set(chars, { y: "125%" });
    
            // Create scroll triggers for each character to slide up
            chars.forEach((char, index) => {
              ScrollTrigger.create({
                trigger: item,
                start: `top+=${index * 25 - 250} top`,
                end: `top+=${index * 25 - 100} top`,
                scrub: 1,
                animation: gsap.fromTo(
                  char,
                  { y: "125%" },
                  { y: "0%", ease: "none" }
                ),
              });
            });
        }

        // Image unmask animation (enter)
        if(img) {
            ScrollTrigger.create({
              trigger: item,
              start: "top bottom",
              end: "top top",
              scrub: 0.5,
              animation: gsap.fromTo(
                img,
                {
                  clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
                },
                {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  ease: "none",
                }
              ),
            });
    
            // Image mask animation (leave)
            ScrollTrigger.create({
              trigger: item,
              start: "bottom bottom",
              end: "bottom top",
              scrub: 0.5,
              animation: gsap.fromTo(
                img,
                {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                {
                  clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
                  ease: "none",
                }
              ),
            });
        }
      });
    }

    return () => {
      clearInterval(checkGsap);
      if (typeof window !== 'undefined' && window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, []);

  const sliderContent = [
      { title: "Wicker Furniture", img: "./images/hero/Wicker_Furniture.jpeg" },
      { title: "Outdoor Planters", img: "./images/hero/Planters_Box.jpeg" },
      { title: "Car Shelters", img: "./images/hero/Car_Shelter.jpeg" },
      { title: "Outdoor Benches", img: "./images/hero/Bench.jpeg" },
  ];

  return (
    <>
      {/* We need ScrollTrigger and GSAP for the Hero */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />

      <div className="dragon-hero-wrapper bg-[#f4f4f4] w-full overflow-hidden font-inter">
        


        {/* Scroll Sections */}
        {sliderContent.map((item, index) => (
            <section key={index} className="dragon-work-item relative w-[100vw] overflow-hidden h-[150svh]">
                <div className="dragon-work-item-img absolute w-full h-full" style={{ clipPath: 'polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)', willChange: 'clip-path' }}>
                    <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Overlay for text readability */}
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="dragon-work-item-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20 px-4 flex justify-center items-center overflow-hidden h-[200px]">
                    <h1 className="text-white font-playfair text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold text-center leading-[1] whitespace-nowrap overflow-hidden py-4 drop-shadow-2xl">
                        {item.title}
                    </h1>
                </div>
            </section>
        ))}


      </div>
    </>
  );
}