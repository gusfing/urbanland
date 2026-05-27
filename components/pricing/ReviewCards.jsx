"use client";

import { useEffect } from "react";

export default function ReviewCards() {
  return (
    <>
{/* pricing review cards */}
<section className="lp:py-39! py-20 md:py-28">
  <div className="main-container">
    <div className="space-y-19">
      <h2
        data-text-reveal
        id="testimonials-heading"
        className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora text-center font-normal"
      >
        What our clients say
      </h2>

      {/* testimonial cards  */}

      <div className="grid grid-cols-12 items-center justify-center gap-4 xl:gap-2">
        {/* card one  */}
        <div
          data-opai-animate
          data-delay="0.1"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
    Urbanland's custom outdoor planters and premium outdoor benches transformed our township pathways. Exceptional finish and build quality!
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-275.png"
        alt="Ramesh Nair, Senior Project Director"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Ramesh Nair</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Senior Project Director, Lodha Group</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card two  */}
        <div
          data-opai-animate
          data-delay="0.2"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
    The wicker pool loungers and custom cabanas supplied by Urbanland are of absolute international grade. Our resort guests love the premium comfort.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-276.png"
        alt="Ananya Sen, Lead Landscape Architect"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Ananya Sen</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Lead Landscape Architect, Oberoi Realty</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card three  */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
    Excellent bulk supply of heavy-duty MS car park structures and modern benches. Delivered right on schedule for our township launch.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-03.png"
        alt="Vikramaditya Rao, Procurement Head"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Vikramaditya Rao</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Procurement Head, Adani Realty</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card four  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-white/90">
    Highly impressed by the durability and modern styling of Urbanland's stainless steel bus shelters and outdoor public bins.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-274.png"
        alt="S. Chidambaram, Infrastructure Consultant"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-white">S. Chidambaram</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-white/60">Infrastructure Consultant, Smart City Mission</p>
    </div>
  </div>
</div>


` }} />
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}