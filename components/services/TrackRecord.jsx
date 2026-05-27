"use client";

import { useEffect } from "react";

export default function TrackRecord() {
  return (
    <>
<section className="lp:py-39! py-20 md:py-28">
  <div className="main-container">
    <div className="space-y-17.5">
      {/* content  */}
      <div className="space-y-3 text-center">
        <h2
          data-text-reveal
          id="track-record-heading"
          className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal tracking-[-2.4px]"
          itemprop="name"
        >
          Our proven track record
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal"
          itemprop="description"
        >
          See how we've delivered measurable success to our clients.
        </p>
      </div>

      {/* cards  */}
      <div className="flex flex-col items-center gap-x-2 gap-y-4 md:flex-row md:gap-y-0">
        {/* card one  */}
        <div data-opai-animate data-delay="0.3" className="w-full">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Deep Learning"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-30 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Deep Learning
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Train multi-layer Neural Networks for complex pattern recognition and prediction.
    </p>
  </div>
</div>


` }} />
        </div>
        {/* card two  */}
        <div data-opai-animate data-delay="0.4" className="w-full">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Computer Vision"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-31 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Computer Vision
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Image and video analysis powered by convolution Neural Networks (CNNs).
    </p>
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