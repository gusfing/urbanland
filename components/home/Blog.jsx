export default function Blog() {
  return (
    <>
<section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="blog-heading">
  <div className="main-container">
    <div className="space-y-13 md:space-y-[70px]">
      <h2
        data-text-reveal
        className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
      >
        Stay informed, stay ahead
      </h2>

      {/* blogs  */}
      <div className="grid grid-cols-12 items-center justify-center gap-4 lg:gap-x-2">
        {/* blog 01 */}

        <div data-opai-animate data-delay="0.2" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<article
  class="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6"
>
  <figure class=" h-[276px] w-full overflow-hidden rounded-2xl">
    <a href="#">
      <img
        src="./images/opai-img-313.png"
        alt="Choosing the Right Materials for Public Space Benches: WPC vs. Concrete vs. Timber"
        class="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
      />
    </a>
  </figure>

  <div class="space-y-4">
    <time
      class="font-inter-tight text-tagline-4 text-background-13/80 inline-block font-normal"
      datetime="2025-07-05"
    >
      January 12, 2026
    </time>

    <div class="flex items-center justify-start gap-x-2">
      <div
        class="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        Design
      </div>
      <div
        class="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        Materials
      </div>
    </div>

    <a
      href="#"
      class="font-sora blog-title-black text-sora-heading-5 text-background-13/90 line-clamp-2"
    >
      <h3>Choosing the Right Materials for Public Space Benches: WPC vs. Concrete vs. Timber</h3>
    </a>
  </div>
</article>


` }} />
        </div>

        {/* blog 02 */}
        <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<article
  class="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6"
>
  <figure class=" h-[276px] w-full overflow-hidden rounded-2xl">
    <a href="#">
      <img
        src="./images/opai-img-314.png"
        alt="How Modern Bus Shelters Elevate Smart City Transit Infrastructure in India"
        class="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
      />
    </a>
  </figure>

  <div class="space-y-4">
    <time
      class="font-inter-tight text-tagline-4 text-background-13/80 inline-block font-normal"
      datetime="2025-07-05"
    >
      February 4, 2026
    </time>

    <div class="flex items-center justify-start gap-x-2">
      <div
        class="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        Smart Cities
      </div>
      <div
        class="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        Infrastructure
      </div>
    </div>

    <a
      href="#"
      class="font-sora blog-title-black text-sora-heading-5 text-background-13/90 line-clamp-2"
    >
      <h3>How Modern Bus Shelters Elevate Smart City Transit Infrastructure in India</h3>
    </a>
  </div>
</article>


` }} />
        </div>

        {/* blog 03 */}
        <div data-opai-animate data-delay="0.4" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<article
  class="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6"
>
  <figure class=" h-[276px] w-full overflow-hidden rounded-2xl">
    <a href="#">
      <img
        src="./images/opai-img-315.png"
        alt="Designing Integrated Planter-Seating Systems for Modern Township Plazas"
        class="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
      />
    </a>
  </figure>

  <div class="space-y-4">
    <time
      class="font-inter-tight text-tagline-4 text-background-13/80 inline-block font-normal"
      datetime="2025-07-05"
    >
      March 20, 2026
    </time>

    <div class="flex items-center justify-start gap-x-2">
      <div
        class="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        Landscape
      </div>
      <div
        class="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        Plazas
      </div>
    </div>

    <a
      href="#"
      class="font-sora blog-title-black text-sora-heading-5 text-background-13/90 line-clamp-2"
    >
      <h3>Designing Integrated Planter-Seating Systems for Modern Township Plazas</h3>
    </a>
  </div>
</article>


` }} />
        </div>
      </div>
    </div>
    <div data-opai-animate data-delay="0.5" className="mt-[76px] text-center">
      <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<a href="#" class="btn-shadcn " aria-label="Read more articles">
  Read more articles
  <span class="btn-shadcn-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right opacity-60"><path d="m9 18 6-6-6-6"/></svg>
  </span>
</a>


` }} />
    </div>
  </div>
</section>



    </>
  );
}