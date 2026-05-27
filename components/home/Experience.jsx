"use client";

export default function Experience() {
  return (
    <>
      <section className="bg-[#f4f4f4] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6">
          
          {/* Bento Gallery Grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-16">
            
            {/* Left Main Large Image */}
            <div className="col-span-12 lg:col-span-8 relative rounded-[2rem] overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
              <img src="./images/hero/Wicker_Furniture.jpeg" alt="Sleek Wicker Furniture" className="w-full h-full object-cover" />
              
              {/* Top Left Cutout Button */}
              <div className="absolute top-0 left-0 bg-[#f4f4f4] pb-4 pr-4 rounded-br-[2rem] z-10 flex items-start justify-start">
                <a href="#" className="bg-[#1a1a1a] text-white font-inter text-sm md:text-base font-medium px-6 py-3 rounded-full hover:bg-black transition-colors inline-block">
                  Explore Collections
                </a>
                
                {/* Inverse curves using box-shadow trick */}
                {/* Right curve */}
                <div className="absolute top-0 right-[-24px] w-6 h-6 bg-transparent rounded-tl-[1.5rem] shadow-[-12px_-12px_0_12px_#f4f4f4]"></div>
                {/* Bottom curve */}
                <div className="absolute bottom-[-24px] left-0 w-6 h-6 bg-transparent rounded-tl-[1.5rem] shadow-[-12px_-12px_0_12px_#f4f4f4]"></div>
              </div>

              {/* Bottom Right Cutout Button */}
              <div className="absolute bottom-0 right-0 bg-[#f4f4f4] pt-4 pl-4 rounded-tl-[2rem] z-10 flex items-end justify-end">
                <a href="#" className="bg-[#1a1a1a] text-white font-inter text-sm md:text-base font-medium px-8 py-3 rounded-full hover:bg-black transition-colors flex items-center gap-2">
                  Shop now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                
                {/* Inverse curves */}
                {/* Left curve */}
                <div className="absolute bottom-0 left-[-24px] w-6 h-6 bg-transparent rounded-br-[1.5rem] shadow-[12px_12px_0_12px_#f4f4f4]"></div>
                {/* Top curve */}
                <div className="absolute top-[-24px] right-0 w-6 h-6 bg-transparent rounded-br-[1.5rem] shadow-[12px_12px_0_12px_#f4f4f4]"></div>
              </div>
            </div>

            {/* Right Stacked Images */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 lg:gap-6 h-[400px] sm:h-[500px] lg:h-[600px]">
              <div className="flex-1 rounded-[2rem] overflow-hidden bg-[#e8e8e8]">
                <img src="./images/hero/Planters_Box.jpeg" alt="Minimalist Planter Box" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-[2rem] overflow-hidden bg-[#e8e8e8]">
                <img src="./images/hero/Bench.jpeg" alt="Modern Outdoor Bench" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

          {/* Statistics and Social Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 py-8 border-t border-[#1a1a1a]/10">
            
            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-10 lg:gap-24 w-full justify-start text-center md:text-left">
              <div className="flex flex-col gap-2">
                <span className="font-inter text-4xl lg:text-5xl font-bold text-[#1a1a1a]">20K+</span>
                <span className="font-inter text-sm lg:text-base text-[#1a1a1a]/60 max-w-[200px] leading-relaxed mx-auto md:mx-0">
                  Satisfied and Loyal customers buy from us
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-inter text-4xl lg:text-5xl font-bold text-[#1a1a1a]">80%</span>
                <span className="font-inter text-sm lg:text-base text-[#1a1a1a]/60 max-w-[200px] leading-relaxed mx-auto md:mx-0">
                  Return Customers are happy to buy from us again
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-inter text-4xl lg:text-5xl font-bold text-[#1a1a1a]">500+</span>
                <span className="font-inter text-sm lg:text-base text-[#1a1a1a]/60 max-w-[200px] leading-relaxed mx-auto md:mx-0">
                  Furniture we have created and sold on the market
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 text-[#1a1a1a]">
              <a href="#" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-60 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}