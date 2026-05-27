"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
{/* =========================
Header
===========================*/}
<header id="site-header" className="fixed top-4 left-1/2 z-[990] w-[calc(100%-2rem)] max-w-[1440px] -translate-x-1/2 transition-all duration-300">
  <div id="header-container" className="relative flex items-center justify-between rounded-[9px] border border-[#1A1A1A]/10 bg-white/95 px-4 py-3 sm:px-6 shadow-md backdrop-blur-xl transition-all duration-300">
    
    {/* Left: Logo */}
    <div className="flex items-center">
      <a href="./index.html" className="flex items-center">
        <span className="sr-only">Urbanland</span>
        <img id="header-logo" src="./images/shared/urbanland-logo.png" alt="Urbanland" className="h-6 sm:h-8 w-auto transition-all duration-300 hover:scale-[1.02]" />
      </a>
    </div>

    {/* Center: Brand Icon (Absolutely Centered) */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
      <img id="center-brand-icon" src="./images/shared/center-icon.png" alt="Urbanland Icon" className="h-6 sm:h-8 w-auto pointer-events-auto transition-all duration-300 hover:scale-[1.05]" />
    </div>

    {/* Right: Menu Button */}
    <div className="flex items-center">
      <button 
        className="nav-hamburger flex items-center gap-1.5 cursor-pointer font-inter text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] transition-all duration-300 hover:opacity-75" 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Menu"
      >
        <span className="text-sm font-light leading-none" id="hamburger-plus">+</span>
        <span className="leading-none">Menu</span>
      </button>
    </div>
    
  </div>
</header>

{/* Sidebar Menu */}
  {isMenuOpen && (
  <aside
    className="sidebar fixed inset-0 z-[9999] h-screen w-screen bg-white/98 backdrop-blur-3xl overflow-y-auto"
  >
    
    <div className="min-h-screen flex flex-col px-6 py-8 sm:px-12 sm:py-10 max-w-[1600px] mx-auto w-full justify-between">
      
      
      <div className="flex items-center justify-between pb-8 border-b border-black/5">
        <a href="./index.html" className="flex items-center">
          <span className="sr-only">Home</span>
          <figure className="max-w-[140px] sm:max-w-[160px]">
            <img src="./images/shared/urbanland-logo.png" alt="Urbanland" className="block w-full" />
          </figure>
        </a>
        <button
          className="nav-hamburger-close flex items-center gap-3 bg-black/5 hover:bg-black/10 border border-black/10 pl-5 pr-4 py-2.5 cursor-pointer rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] leading-none">Close</span>
          <div className="relative flex size-6 flex-col items-center justify-center">
            <span className="bg-[#1A1A1A] absolute block h-0.5 w-4 rotate-45"></span>
            <span className="bg-[#1A1A1A] absolute block h-0.5 w-4 -rotate-45"></span>
          </div>
        </button>
      </div>

      
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch py-12 sm:py-16">
        
        
        <nav className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          <ul className="space-y-8 sm:space-y-10">
            
            
            <li className="group/nav-item">
              <div className="flex items-baseline gap-4 sm:gap-6 cursor-pointer">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8b3721]/80">01</span>
                <a href="#" className="font-sora text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] transition-all duration-300 group-hover/nav-item:text-[#8b3721] group-hover/nav-item:pl-4">PRODUCTS</a>
              </div>
            </li>

            
            <li className="group/nav-item">
              <div className="flex items-baseline gap-4 sm:gap-6 cursor-pointer">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8b3721]/80">02</span>
                <a href="#" className="font-sora text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] transition-all duration-300 group-hover/nav-item:text-[#8b3721] group-hover/nav-item:pl-4">SOLUTIONS</a>
              </div>
            </li>

            
            <li className="group/nav-item">
              <div className="flex items-baseline gap-4 sm:gap-6 cursor-pointer">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8b3721]/80">03</span>
                <a href="#" className="font-sora text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] transition-all duration-300 group-hover/nav-item:text-[#8b3721] group-hover/nav-item:pl-4">PROJECTS</a>
              </div>
            </li>

            
            <li className="group/nav-item">
              <div className="flex items-baseline gap-4 sm:gap-6 cursor-pointer">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8b3721]/80">04</span>
                <a href="#" className="font-sora text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] transition-all duration-300 group-hover/nav-item:text-[#8b3721] group-hover/nav-item:pl-4">ABOUT US</a>
              </div>
            </li>

            
            <li className="group/nav-item">
              <div className="flex items-baseline gap-4 sm:gap-6 cursor-pointer">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8b3721]/80">05</span>
                <a href="#" className="font-sora text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] transition-all duration-300 group-hover/nav-item:text-[#8b3721] group-hover/nav-item:pl-4">BLOG</a>
              </div>
            </li>

            
            <li className="group/nav-item">
              <div className="flex items-baseline gap-4 sm:gap-6 cursor-pointer">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8b3721]/80">06</span>
                <a href="./contact.html" className="font-sora text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] transition-all duration-300 group-hover/nav-item:text-[#8b3721] group-hover/nav-item:pl-4">CONTACT US</a>
              </div>
            </li>

          </ul>
        </nav>

        
        <div className="lg:col-span-5 bg-black/[0.015] border border-black/5 rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="font-sora text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide leading-relaxed">
              Let's build something <span className="text-[#8b3721] font-medium">extraordinary</span> together.
            </h4>
            <p className="font-inter text-xs sm:text-sm text-[#2D2D2D]/60 leading-relaxed">
              Partner with India's premier certified manufacturer of heavy-duty, guaranteed urban street furniture. We customize finishes and designs for large scale developers and townships.
            </p>
          </div>

          <div className="space-y-6 pt-10 border-t border-black/5">
            
            <a
              href="./contact.html"
              className="flex w-full items-center justify-center gap-3 rounded-[12px] bg-[#8b3721] py-4 text-center font-inter text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#a5482e] hover:scale-[1.02] shadow-lg shadow-[#8b3721]/20"
            >
              Get Project Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </a>

            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#2D2D2D]/40">Email Us</span>
                <a href="mailto:info@urbanland.com" className="font-inter text-xs text-[#2D2D2D]/80 hover:text-[#8b3721] transition-colors">info@urbanland.com</a>
              </div>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#2D2D2D]/40">Call Us</span>
                <a href="tel:+919876543210" className="font-inter text-xs text-[#2D2D2D]/80 hover:text-[#8b3721] transition-colors">+91 98765 43210</a>
              </div>
            </div>
          </div>

          
          <div className="pt-6 mt-6 border-t border-black/5 flex flex-wrap gap-4 text-[#2D2D2D]/40 font-inter text-[10px] tracking-wide">
            <span>★ ISO 9001:2015</span>
            <span>• ✓ 2-Year Guarantee</span>
            <span>• Made in India 🇮🇳</span>
          </div>
        </div>

      </div>

      
      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-black/5 gap-4">
        <p className="font-inter text-[10px] text-[#2D2D2D]/40">© 2026 Urbanland Products LLP. All Rights Reserved.</p>
        <div className="flex gap-6 font-inter text-[10px] text-[#2D2D2D]/40">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>
  </aside>
  )}
    </>
  );
}