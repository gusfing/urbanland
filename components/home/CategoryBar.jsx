export default function CategoryBar() {
  return (
    <>
{/* category bar section */}
<section
  className="w-full bg-transparent"
  aria-label="Product categories"
>
  <div className="relative flex overflow-hidden w-full">
    {/* Marquee Track */}
    <div className="marquee-track flex animate-cat-marquee whitespace-nowrap py-6 md:py-8">
      
      {/* Group 1 */}
      <div className="flex items-center gap-4 md:gap-8 px-4">
        
        {/* 1. Wicker */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Wicker">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
          Wicker
        </button>

        {/* 2. Shelters */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Shelters">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6 5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2l1 2"/><path d="M8 2v2"/><path d="M16 2v2"/><rect width="18" height="16" x="3" y="6" rx="2"/><path d="M3 10h18"/><path d="M8 22v-2"/><path d="M16 22v-2"/><circle cx="7" cy="16" r="2"/><circle cx="17" cy="16" r="2"/></svg>
          Shelters
        </button>

        {/* 3. Planter */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Planter">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 22l10-10"/></svg>
          Planter
        </button>

        {/* 4. Dustbin */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Dustbin">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          Dustbin
        </button>

        {/* 5. Cabanas */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Cabanas">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>
          Cabanas
        </button>

        {/* 6. Benches */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Benches">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M6 12v6"/><path d="M18 12v6"/><path d="M4 18h4"/><path d="M16 18h4"/><path d="M6 8v4"/><path d="M18 8v4"/></svg>
          Benches
        </button>

        {/* 7. Cabanas */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Cabanas">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>
          Cabanas
        </button>

        {/* 8. Sheds */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Sheds">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>
          Sheds
        </button>

        {/* 9. Car sheds */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Car sheds">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          Car sheds
        </button>

        {/* 10. Pool */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Pool">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C5.8 7 7 6 7 6s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1"/></svg>
          Pool
        </button>

      </div>
      
      {/* Group 2 (Clone for seamless loop) */}
      <div className="flex items-center gap-4 md:gap-8 px-4">
        
        {/* 1. Wicker */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Wicker">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
          Wicker
        </button>

        {/* 2. Shelters */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Shelters">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6 5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2l1 2"/><path d="M8 2v2"/><path d="M16 2v2"/><rect width="18" height="16" x="3" y="6" rx="2"/><path d="M3 10h18"/><path d="M8 22v-2"/><path d="M16 22v-2"/><circle cx="7" cy="16" r="2"/><circle cx="17" cy="16" r="2"/></svg>
          Shelters
        </button>

        {/* 3. Planter */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Planter">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 22l10-10"/></svg>
          Planter
        </button>

        {/* 4. Dustbin */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Dustbin">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          Dustbin
        </button>

        {/* 5. Cabanas */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Cabanas">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>
          Cabanas
        </button>

        {/* 6. Benches */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Benches">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M6 12v6"/><path d="M18 12v6"/><path d="M4 18h4"/><path d="M16 18h4"/><path d="M6 8v4"/><path d="M18 8v4"/></svg>
          Benches
        </button>

        {/* 7. Cabanas */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Cabanas">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>
          Cabanas
        </button>

        {/* 8. Sheds */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Sheds">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>
          Sheds
        </button>

        {/* 9. Car sheds */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Car sheds">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          Car sheds
        </button>

        {/* 10. Pool */}
        <button className="cat-item flex shrink-0 items-center gap-3 md:gap-4 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-base md:px-8 md:py-4 md:text-lg font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer" role="listitem" aria-label="Pool">
          <svg className="size-5 md:size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C5.8 7 7 6 7 6s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1"/></svg>
          Pool
        </button>

      </div>
    </div>
  </div>
</section>



    </>
  );
}