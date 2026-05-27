export default function Testimonial() {
  return (
    <>
{/* testimonial */}
<section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="testimonials-heading">
  <div className="main-container">
    <div className="space-y-19">
      <h2
        data-text-reveal
        className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora text-center font-normal"
      >
        What our clients say
      </h2>

      {/* testimonial cards  */}

      <div className="grid grid-cols-12 items-center justify-center gap-4 xl:gap-2">
        {/* card one  */}
        <div
          data-opai-animate
          data-delay="0.2"
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
          data-delay="0.3"
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
          data-delay="0.4"
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
          data-delay="0.5"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
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
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">S. Chidambaram</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Infrastructure Consultant, Smart City Mission</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card five  */}
        <div data-opai-animate data-delay="0.6" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
    Specifying Urbanland products for our high-traffic public plazas was a great choice. They show zero signs of wear even after peak weather seasons.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-278.png"
        alt="Devendra Patel, Facilities Director"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Devendra Patel</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Facilities Director, GIFT City</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card six  */}
        <div data-opai-animate data-delay="0.7" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
    Urbanland's wicker furniture and custom dining setups have elevated our seaside lounge aesthetics. Premium weather-resistant finishes that last.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-279.png"
        alt="Rohan Malhotra, Director"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Rohan Malhotra</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Director, Taj Group & Resorts</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card seven  */}
        <div data-opai-animate data-delay="0.8" className="col-span-12 md:col-span-6 lg:col-span-4">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90">
    Their customization capability is outstanding. They delivered custom planter benches exactly matching our complex architectural blueprints.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-280.png"
        alt="Meera Krishnan, Chief Planner"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Meera Krishnan</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Chief Planner, K Raheja Corp</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card eight  */}
        <div
          data-opai-animate
          data-delay="0.9"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90 line-clamp-3 xl:line-clamp-none">
    As developers, we require strict compliance and lasting guarantees. Urbanland's 2-Year comprehensive warranty, flawless engineering certifications, and nationwide delivery network made our bulk procurement completely seamless and worry-free across all residential townships.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-242.jpg"
        alt="Siddharth Mehta, Executive Director"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Siddharth Mehta</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Executive Director, Hiranandani Group</p>
    </div>
  </div>
</div>


` }} />
        </div>

        {/* card nine  */}
        <div
          data-opai-animate
          data-delay="1.0"
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6"
        >
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 "
>
  <p class="font-inter-tight text-tagline-2 font-normal text-background-13/90 line-clamp-3 xl:line-clamp-none">
    For public street furniture, we prioritize structural safety, anti-corrosive finishes, and modern aesthetics. Urbanland supplied bus shelters and stainless steel waste bins that perfectly match Pune's clean and green smart city vision. Excellent project execution.
  </p>

  <div class="flex items-center justify-center gap-x-3">
    <figure class="size-12 overflow-hidden rounded-full">
      <img
        src="./images/opai-avatar-img-243.jpg"
        alt="Dr. Rajesh V. Verma, Municipal Commissioner"
        class="size-full object-cover"
      />
    </figure>

    <div>
      <h3 class="font-manrope text-manrope-heading-6 font-medium text-black">Dr. Rajesh V. Verma</h3>
      <p class="font-inter-tight text-tagline-3 font-normal text-background-13/60">Municipal Commissioner, Smart City Project Pune</p>
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