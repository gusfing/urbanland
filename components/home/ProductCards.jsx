"use client";
import { useEffect } from "react";

export default function ProductCards() {
  return (
    <>
{/* Most Requested Products Section */}
<section className="w-full overflow-hidden bg-transparent py-20 md:py-28 relative" aria-labelledby="products-heading">
  <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-16">
    {/* Header Grid */}
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="space-y-4 max-w-2xl">
        <span className="inline-block font-ibm-plex-mono text-xs font-semibold tracking-[0.2em] text-[#8b3721] uppercase">
          Most Requested Products
        </span>
        <h2
          id="products-heading"
          className="font-sora text-[clamp(2.25rem,4.5vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#010101]"
        >
          Outdoor & Urban Furniture <br className="hidden sm:inline" />
          <span className="italic text-[#8b3721] font-semibold">for Large-Scale Projects</span>
        </h2>
      </div>
      <div className="max-w-md">
        <p className="font-inter-tight text-sm md:text-base text-[#010101]/65 leading-relaxed">
          Specified by India's leading real estate developers, hotels, and smart cities. Heavy-duty construction backed by our 2-year guarantee.
        </p>
      </div>
    </div>
  </div>

  {/* Symmetrical Responsive Products Grid */}
  <div className="max-w-[1440px] mx-auto px-6 md:px-16">
    <div
      className="group/track grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12"
      role="list"
      aria-label="Most requested products grid"
    >

      {/* ── CARD 1 — Bus Shelters ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Bus Shelters"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          {/* Primary Image */}
        <img src="./images/products-new/Bus_Shelters.png" alt="Bus shelters manufacturer India — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        {/* Hover Image */}
        <img src="./images/products-new/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg" alt="Bus shelters alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Robust infrastructure solutions</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Popular</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Bus Shelters</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Robust MS/SS bus shelters for townships, campuses & smart cities.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 2 — Benches ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Outdoor Benches"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Benches.png" alt="WPC bench manufacturer India — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg" alt="Benches alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Weather-resistant park benches</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Best Seller</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Outdoor Benches</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Weather-resistant and durable outdoor benches.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 3 — Outdoor Dustbins ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Outdoor Dustbins"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Dustbins.png" alt="Outdoor dustbin manufacturer India — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Dustbins/Create_a_clean,_premium,_professional_202605170106.jpeg" alt="Dustbins alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Durable waste management</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Popular</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Outdoor Dustbins</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Stainless steel and composite dustbins for smart city zones.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 4 — Planters ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Outdoor Planters"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Planters_Box.png" alt="Outdoor planter manufacturer — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Planters Box/Create_a_clean,_premium,_professional_202605170111.jpeg" alt="Planters alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Lightweight landscape elements</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Popular</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Outdoor Planters</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lightweight outdoor planters for premium commercial developments.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 5 — Canteen Tables ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Canteen Tables"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Canteen_Table.png" alt="Canteen table manufacturer India — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Canteen Table/Create_a_clean,_premium,_professional_202605170053.jpeg" alt="Canteen Table alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Heavy-duty communal dining</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Popular</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Canteen Tables</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Heavy-duty dining sets for corporate and campus spaces.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 6 — Car Parking Sheds ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Car Parking Sheds"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Car_Shelter.png" alt="Car parking shed manufacturer — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Car Shelter/Create_a_clean,_premium,_professional_202605170216.jpeg" alt="Car Shelter alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Modular vehicle protection</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Featured</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Car Parking Sheds</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Powder-coated, modular car sheds for residential projects.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 7 — Poolside Loungers & Umbrella ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Poolside Loungers & Umbrella"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Poolside_Loungers.png" alt="Poolside lounger manufacturer — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg" alt="Poolside alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Premium resort lounging</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Popular</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Poolside Loungers & Umbrella</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Premium loungers and cabanas for resort and hotel decks.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

      {/* ── CARD 8 — Wicker Furniture ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Wicker Furniture"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
<a href="./service-details.html" className="absolute inset-0 size-full block z-0">
          <img src="./images/products-new/Cane_Furniture.png" alt="Wicker furniture manufacturer India — Urbanland Products" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
        <img src="./images/products-new/Cane Furniture/2 Items.jpeg" alt="Wicker alternate" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
        </a>
        <div className="relative z-10 flex items-start justify-between gap-3 p-6">
          <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Hand-woven luxury wicker</h3>
          <div className="flex shrink-0 gap-1.5">
            <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">Popular</span>
          </div>
        </div>

        <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Wicker Furniture</p>
          <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Luxury hand-woven wicker dining sets and lounge chairs.</p>
          <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
            <span>View & Get Quote</span>
            <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
</article>

    </div>
    
    {/* 4 New Cards */}
    <div
      className="group/track grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12 mt-8"
      role="list"
      aria-label="New Products"
    >
      {/* ── CARD 9 — Pre Fab Homes ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Pre Fab Homes"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
          <a href="./service-details.html" className="absolute inset-0 size-full block z-0">
            <img src="./images/products-new/Pre_Fab_Homes/prefab_home.png" alt="Pre Fab Homes" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
            <img src="./images/products-new/Pre_Fab_Homes/prefab_home.png" alt="Pre Fab Homes hover" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </a>
          <div className="relative z-10 flex items-start justify-between gap-3 p-6">
            <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Modular residential structures</h3>
            <div className="flex shrink-0 gap-1.5">
              <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">New</span>
            </div>
          </div>
          <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
            <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Pre Fab Homes</p>
            <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Premium modular homes for quick deployment.</p>
            <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
              <span>View & Get Quote</span>
              <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* ── CARD 10 — Parabola ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Parabola"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
          <a href="./service-details.html" className="absolute inset-0 size-full block z-0">
            <img src="./images/products-new/Parabola/parabola_shade.png" alt="Parabola" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
            <img src="./images/products-new/Parabola/parabola_shade.png" alt="Parabola hover" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </a>
          <div className="relative z-10 flex items-start justify-between gap-3 p-6">
            <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Modern shading structures</h3>
            <div className="flex shrink-0 gap-1.5">
              <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">New</span>
            </div>
          </div>
          <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
            <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Parabola</p>
            <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Architectural parabolic shading for outdoor spaces.</p>
            <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
              <span>View & Get Quote</span>
              <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* ── CARD 11 — Gazebo ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Gazebo"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
          <a href="./service-details.html" className="absolute inset-0 size-full block z-0">
            <img src="./images/products-new/Gazebo/gazebo.png" alt="Gazebo" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
            <img src="./images/products-new/Gazebo/gazebo.png" alt="Gazebo hover" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </a>
          <div className="relative z-10 flex items-start justify-between gap-3 p-6">
            <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Elegant garden structures</h3>
            <div className="flex shrink-0 gap-1.5">
              <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">New</span>
            </div>
          </div>
          <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
            <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Gazebo</p>
            <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Premium gazebos tailored for luxury outdoor relaxation.</p>
            <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
              <span>View & Get Quote</span>
              <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* ── CARD 12 — Cabanas ── */}
      <article className="relative flex h-[420px] sm:h-[480px] lg:h-[520px] w-full flex-col justify-between overflow-hidden bg-white group rounded-[16px] hover:!scale-[1.03] hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500"
        role="listitem" tabIndex="0" aria-label="Cabanas"
      >
        <div className="absolute inset-0 size-full flex flex-col justify-between transition-all duration-500 group-hover/track:opacity-45 group-hover/track:blur-[1px] group-hover:!opacity-100 group-hover:!blur-none">
          <a href="./service-details.html" className="absolute inset-0 size-full block z-0">
            <img src="./images/products-new/Cabanas/cabanas.png" alt="Cabanas" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none" />
            <img src="./images/products-new/Cabanas/cabanas.png" alt="Cabanas hover" className="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] lg:top-[12%] lg:bottom-[20%] lg:h-[68%] lg:w-[92%] object-contain transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </a>
          <div className="relative z-10 flex items-start justify-between gap-3 p-6">
            <h3 className="text-left text-xs md:text-sm font-normal leading-relaxed text-[#010101]/60 max-w-[70%]">Poolside comfort</h3>
            <div className="flex shrink-0 gap-1.5">
              <span className="inline-flex items-center rounded-full bg-[#8b3721] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white">New</span>
            </div>
          </div>
          <div className="relative z-10 p-6 text-left space-y-2 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
            <p className="font-sora text-lg md:text-xl font-semibold tracking-tight text-[#010101]">Cabanas</p>
            <p className="font-inter text-xs text-[#010101]/60 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">Resort-style cabanas for luxury private seating.</p>
            <a href="./contact.html" className="inline-flex items-center gap-2 font-sora text-[11px] font-bold uppercase tracking-wider text-[#8b3721] group/btn pt-1">
              <span>View & Get Quote</span>
              <svg className="size-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

    </>
  );
}