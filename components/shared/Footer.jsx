export default function Footer() {
  return (
    <>
<footer className="bg-background-8 pt-[80px] pb-7 md:pt-[120px] xl:pt-[156px]">
  <div className="main-container">
    <div
      data-opai-animate
      data-delay="0.1"
      className="bg-gradient-to-br from-[#09090B] to-[#020202] border border-white/5 space-y-12 overflow-hidden rounded-[30px] p-8 md:p-12 shadow-2xl"
    >
      {/* Logo Block */}
      <div data-opai-animate data-delay="0.2" className="border-b border-white/10 pb-8">
        <a href="./index.html" className="block">
          <span className="sr-only">Urbanland</span>
          <figure className="h-[40px] w-[166px]">
            <img src="./images/shared/urbanland-logo.png" alt="Urbanland" className="logo-white h-full w-full object-contain" />
          </figure>
        </a>
      </div>

      {/* Main Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        
        {/* Column 1: Brand Info */}
        <div data-opai-animate data-delay="0.3" className="space-y-4">
          <h3 className="font-sora text-base font-semibold text-white">Urbanland Products</h3>
          <p className="text-sm font-inter text-white/60 leading-relaxed">
            Outdoor &amp; Urban Furniture Manufacturer in India
          </p>
          <p className="text-xs font-inter text-white/40 leading-relaxed pt-2">
            Vasai Virar, Maharashtra <br /> ISO 9001:2015 Certified
          </p>
        </div>

        {/* Column 2: Products */}
        <div data-opai-animate data-delay="0.4" className="space-y-4">
          <h3 className="font-sora text-sm font-semibold uppercase tracking-wider text-white/95">Products</h3>
          <ul className="space-y-2.5">
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Outdoor Benches</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Bus Shelters</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Outdoor Planters</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Outdoor Dustbins</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Car Parking Sheds</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Canteen Furniture</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Poolside Loungers & Umbrella</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Wicker Furniture</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Solutions */}
        <div data-opai-animate data-delay="0.5" className="space-y-4">
          <h3 className="font-sora text-sm font-semibold uppercase tracking-wider text-white/95">Solutions</h3>
          <ul className="space-y-2.5">
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Real Estate &amp; Townships</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Hotels &amp; Resorts</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Hospitals &amp; Healthcare</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Schools &amp; Universities</a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-inter">Municipal &amp; Smart Cities</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Trust Badges */}
        <div data-opai-animate data-delay="0.6" className="space-y-6">
          <h3 className="font-sora text-sm font-semibold uppercase tracking-wider text-white/95">Contact Details</h3>
          <ul className="space-y-3 text-sm text-white/50 font-inter">
            <li className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-wider text-white/30">Phone</span>
              <a href="tel:+912212345678" className="text-white/80 hover:text-white transition-colors font-medium">+91 22 1234 5678</a>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-wider text-white/30">Email</span>
              <a href="mailto:info@urbanland.com" className="text-white/80 hover:text-white transition-colors font-medium">info@urbanland.com</a>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-wider text-white/30">WhatsApp</span>
              <a href="https://wa.me/919930099300" target="_blank" rel="noopener" className="text-[#14743A] hover:text-[#14743A]/80 transition-colors font-medium">+91 99300 99300</a>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-wider text-white/30">Address</span>
              <span className="text-white/80">Vasai Virar, Maharashtra, India</span>
            </li>
          </ul>

          {/* Trust Badges */}
          <div className="border-t border-white/10 pt-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="text-amber-400">★</span>
              <span className="font-inter">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="text-[#14743A]">✓</span>
              <span className="font-inter">2-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="text-emerald-500">🇮🇳</span>
              <span className="font-inter font-medium tracking-wide">Made in India</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar with SEO Anchor Tag Copy */}
      <div className="border-t border-white/10 pt-8 mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3 text-left">
          <p className="text-xs text-white/50 font-inter">
            &copy; 2026 <span className="font-semibold text-white">Urbanland Products</span>. All rights reserved. &nbsp;|&nbsp; 
            <a href="./privacy.html" className="hover:text-white transition-colors duration-300">Privacy Policy</a> &nbsp;|&nbsp; 
            <a href="./sitemap.xml" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </p>
          <p className="text-[11px] text-white/35 font-inter leading-relaxed max-w-[750px]">
            Outdoor Furniture Manufacturer in India — Outdoor Benches, Bus Shelters, Outdoor Planters &amp; Urban Street Furniture
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-white/30 shrink-0">
          <span className="text-[9px] uppercase tracking-widest font-semibold border border-white/10 rounded px-2.5 py-1 bg-white/5">Premium Landscapes</span>
        </div>
      </div>

    </div>
  </div>
  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<script src="./vendor/gsap.min.js"></script>
<script src="./vendor/scroll-trigger.min.js"></script>
<script src="./vendor/vanilla-infinite-marquee.min.js"></script>
<script src="./vendor/split-text.min.js"></script>
<script src="./vendor/lenis.min.js"></script>
<script src="./vendor/springer.min.js"></script>
<script src="./vendor/number-counter.js"></script>


` }} />
  {/* SCRIPT */}
</footer>

    </>
  );
}