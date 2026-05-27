"use client";
import { useEffect } from "react";

export default function Cta() {
  return (
    <>
{/* cta section  */}
<section className="py-[80px] lg:py-[112px] bg-transparent" aria-labelledby="cta-heading">
  <div className="main-container">
    <div
      data-opai-animate
      data-delay="0.1"
      className="relative overflow-hidden rounded-[32px] bg-[#010101] shadow-2xl min-h-[520px] flex items-center"
    >
      {/* Background Image */}
      <img
        src="./images/projects/project-1.png"
        alt="Urbanland Products premium wooden bench and concrete planter installation"
        className="absolute inset-0 size-full object-cover object-center opacity-45 pointer-events-none scale-100 group-hover:scale-105 transition-transform duration-700"
      />
      {/* Dark gradient overlay for extreme readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 lg:to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 py-16 md:px-16 lg:py-24 xl:px-24 flex flex-col justify-center text-left space-y-8 max-w-3xl">
        <div className="space-y-4">
          {/* Small tag for SEO context */}
          <span className="inline-block font-ibm-plex-mono text-[10px] md:text-xs font-semibold tracking-[0.25em] text-[#2C5F2E] uppercase">
            Guaranteed Outdoor Furniture Manufacturer India
          </span>
          <h2
            id="cta-heading"
            className="font-sora text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-white"
          >
            Ready to Specify <br className="hidden sm:inline" />
            <span className="italic font-semibold text-[#2C5F2E]">Outdoor Furniture</span> for Your Next Project?
          </h2>
          <p
            className="font-inter-tight text-sm md:text-base leading-relaxed text-white/80 max-w-[620px]"
          >
            Get your custom project quote and full product catalogue in under 60 seconds. <strong className="text-white font-semibold">Urbanland Products</strong> — India's guaranteed <span className="underline decoration-[#2C5F2E] decoration-2 underline-offset-4">outdoor furniture manufacturer</span> for real estate, hospitality & smart cities.
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          {/* CTA BUTTON 1 (PRIMARY — GREEN) */}
          <a
            href="./contact.html"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 outline-offset-2 hover:scale-[1.02] active:scale-[0.98] h-12 px-6 bg-[#2C5F2E] text-white shadow-md hover:bg-[#224b24] relative pe-14 shrink-0 font-sora"
            aria-label="Get Project Quote Now"
          >
            Get Project Quote Now
            <span className="pointer-events-none absolute inset-y-0 end-0 flex w-12 items-center justify-center bg-white/15 border-l border-white/10 rounded-r-lg">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* CTA BUTTON 2 (SECONDARY — OUTLINED) */}
          <a
            href="./contact.html#download-catalogue"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 outline-offset-2 hover:scale-[1.02] active:scale-[0.98] h-12 px-6 border border-white/30 bg-transparent text-white shadow-sm hover:bg-white/10 hover:border-white/50 relative pe-14 shrink-0 font-sora"
            aria-label="Download Full Catalogue 2026"
          >
            Download Full Catalogue 2026
            <span className="pointer-events-none absolute inset-y-0 end-0 flex w-12 items-center justify-center bg-white/10 border-l border-white/15 rounded-r-lg">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        {/* Supporting Line */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-[11px] md:text-xs text-white/50 font-inter">
          <div className="flex items-center gap-1.5">
            <svg className="size-3.5 text-[#2C5F2E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Free quote. No commitment.</span>
          </div>
          <span className="hidden sm:inline size-1 rounded-full bg-white/20"></span>
          <div className="flex items-center gap-1.5">
            <svg className="size-3.5 text-[#2C5F2E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Nationwide delivery.</span>
          </div>
          <span className="hidden sm:inline size-1 rounded-full bg-white/20"></span>
          <div className="flex items-center gap-1.5">
            <svg className="size-3.5 text-[#2C5F2E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>2-Year Guarantee on every product.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}