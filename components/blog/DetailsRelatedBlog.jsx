export default function DetailsRelatedBlog() {
  return (
    <>
{/* blog details related blog section */}
<section className="lp:py-39! py-20 md:py-28">
  <div className="main-container">
    <div className="space-y-[70px]">
      <div className="space-y-3 text-center">
        <h2
          data-text-reveal
          className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
        >
          Related blog
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="font-inter-tight text-tagline-2 text-background-13/60 font-normal"
        >
          Essential Guidelines and Trends in Modern Public Space Design
        </p>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-12 items-center justify-center gap-y-4 sm:gap-4">
        {/* card one  */}
        <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<article
  class="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6"
>
  <figure class=" h-[276px] w-full overflow-hidden rounded-2xl">
    <a href="#">
      <img
        src="./images/opai-img-16.png"
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
        {/* card two  */}
        <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<article
  class="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6"
>
  <figure class=" h-[276px] w-full overflow-hidden rounded-2xl">
    <a href="#">
      <img
        src="./images/opai-img-18.png"
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
  </div>
</section>



    </>
  );
}