"use client";

import { useEffect } from "react";

export default function TrackRecord() {
  return (
    <>
{/*  track record */}
<section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="track-record-heading">
  <div className="main-container">
    <div className="space-y-19">
      {/*  content  */}

      <div className="space-y-3 text-center">
        <h2
          id="track-record-heading"
          data-text-reveal
          className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal"
        >
          Our proven track record
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal"
        >
          See how we've delivered measurable success to our clients.
        </p>
      </div>

      {/* card  + btn */}
      <div className="space-y-14">
        {/* cards  */}
        <div className="space-y-4 lg:space-y-2">
          {/* card one  */}
          <div className="grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2">
            {/* fragment one for mobile and upper lg */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="col-span-12 md:hidden lg:col-span-3 lg:block"
            >
              <figure className="h-[265px] overflow-hidden rounded-3xl">
                <img
                  src="./images/opai-img-302.png"
                  alt="E-Commerce optimization success case study visual"
                  className="size-full object-cover"
                />
              </figure>
            </div>

            {/* fragment one for md */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="relative col-span-12 hidden md:col-span-6 md:block lg:col-span-3 lg:hidden"
            >
              <a href="./case-study-details.html">
                <figure className="h-[265px] overflow-hidden rounded-3xl">
                  <div className="bg-background-6/60 absolute top-0 left-0 size-full rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 z-10 space-y-1 p-6">
                    <h3 className="font-sora text-sora-heading-6 text-white/90">
                      E-Commerce optimization
                    </h3>
                    <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                      Struggling with cart abandonment and low conversion rates.
                    </p>
                  </div>
                  <img
                    src="./images/opai-img-302.png"
                    alt="E-Commerce optimization success case study visual"
                    className="size-full object-cover"
                  />
                </figure>
              </a>
            </div>

            {/* fragment two  */}
            <div
              data-opai-animate
              data-delay="0.4"
              className="col-span-12 md:hidden lg:col-span-4 lg:block"
            >
              <div
                className="bg-[#14743A] flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
                aria-label="E-Commerce optimization case study"
              >
                <div className="space-y-1">
                  <a href="./case-study-details.html">
                    <h3
                      className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                    >
                      E-Commerce optimization
                    </h3>
                  </a>
                  <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    Struggling with cart abandonment and low conversion rates.
                  </p>
                </div>

                <div>
                  <h4 className="font-sora text-sora-heading-6 font-normal text-white/90">
                    Sarah Chen
                  </h4>
                  <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                    E-Commerce Director
                  </p>
                </div>
              </div>
            </div>

            {/* fragment three  */}
            <div data-opai-animate data-delay="0.5" className="col-span-12 md:col-span-6 lg:col-span-3">
              <a href="./case-study-details.html">
                <div
                  className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
                  aria-label="Performance metrics and results"
                >
                  <div
                    className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                    aria-hidden="true"
                  >
                    <span className="relative size-6 overflow-hidden">
                      {/* first svg  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-0 left-0 transition-all duration-450 ease-in-out group-hover:top-[-26px] group-hover:left-[26px]"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* 2nd svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-[20px] left-[-24px] transition-all duration-450 ease-in-out group-hover:top-0 group-hover:left-0"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex items-center justify-start gap-x-10 lg:justify-center">
                    <div>
                      <h3
                        className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                        aria-label="48 percent increase in conversion rates"
                      >
                        <span
                          data-counter
                          data-number="48"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.3"
                          >48</span
                        >%
                      </h3>
                      <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Conversion rate lift
                      </p>
                    </div>
                    <div>
                      <h3
                        className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                        aria-label="62 percent reduction in cart abandonment"
                      >
                        <span
                          data-counter
                          data-number="62"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.3"
                          >62</span
                        >%
                      </h3>
                      <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Cart abandonment drop
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* card two  */}
          <div className="grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2">
            {/* fragment one for mobile and upper lg */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="col-span-12 md:hidden lg:col-span-3 lg:block"
            >
              <figure className="h-[265px] overflow-hidden rounded-3xl">
                <img
                  src="./images/opai-img-303.png"
                  alt="Healthcare predictive model success case study visual"
                  className="size-full object-cover"
                />
              </figure>
            </div>

            {/* fragment one for md */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="relative col-span-12 hidden md:col-span-6 md:block lg:col-span-3 lg:hidden"
            >
              <a href="./case-study-details.html">
                <figure className="h-[265px] overflow-hidden rounded-3xl">
                  <div className="bg-background-6/60 absolute top-0 left-0 size-full rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 z-10 space-y-1 p-6">
                    <h3 className="font-sora text-sora-heading-6 text-white/90">
                      Healthcare predictive model
                    </h3>
                    <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                      Need for early disease detection and risk prediction.
                    </p>
                  </div>
                  <img
                    src="./images/opai-img-303.png"
                    alt="Healthcare predictive model success case study visual"
                    className="size-full object-cover"
                  />
                </figure>
              </a>
            </div>

            {/* fragment two  */}
            <div
              data-opai-animate
              data-delay="0.4"
              className="col-span-12 md:hidden lg:col-span-4 lg:block"
            >
              <div
                className="bg-[#14743A] flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
                aria-label="Healthcare predictive model case study"
              >
                <div className="space-y-1">
                  <a href="./case-study-details.html">
                    <h3
                      className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                    >
                      Healthcare predictive model
                    </h3>
                  </a>
                  <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    Need for early disease detection and risk prediction.
                  </p>
                </div>

                <div>
                  <h4 className="font-sora text-sora-heading-6 font-normal text-white/90">
                    Dr. Michael Rodriguez
                  </h4>
                  <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                    Chief Medical Officer
                  </p>
                </div>
              </div>
            </div>

            {/* fragment three  */}
            <div data-opai-animate data-delay="0.5" className="col-span-12 md:col-span-6 lg:col-span-3">
              <a href="./case-study-details.html">
                <div
                  className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
                  aria-label="Performance metrics and results"
                >
                  <div
                    className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                    aria-hidden="true"
                  >
                    <span className="relative size-6 overflow-hidden">
                      {/* first svg  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-0 left-0 transition-all duration-450 ease-in-out group-hover:top-[-26px] group-hover:left-[26px]"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* 2nd svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-[20px] left-[-24px] transition-all duration-450 ease-in-out group-hover:top-0 group-hover:left-0"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex items-center justify-start gap-x-10 lg:justify-center">
                    <div>
                      <h3
                        className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                        aria-label="91 percent diagnostic accuracy"
                      >
                        <span
                          data-counter
                          data-number="91"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.3"
                          >91</span
                        >%
                      </h3>
                      <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Diagnostic accuracy
                      </p>
                    </div>
                    <div>
                      <h3
                        className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                        aria-label="34 percent faster risk stratification"
                      >
                        <span
                          data-counter
                          data-number="34"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.3"
                          >34</span
                        >%
                      </h3>
                      <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Faster risk stratification
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* card three  */}
          <div className="grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2">
            {/* fragment one for mobile and upper lg */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="col-span-12 md:hidden lg:col-span-3 lg:block"
            >
              <figure className="h-[265px] overflow-hidden rounded-3xl">
                <img
                  src="./images/opai-img-304.png"
                  alt="Financial analytics success case study visual"
                  className="size-full object-cover"
                />
              </figure>
            </div>

            {/* fragment one for md */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="relative col-span-12 hidden md:col-span-6 md:block lg:col-span-3 lg:hidden"
            >
              <a href="./case-study-details.html">
                <figure className="h-[265px] overflow-hidden rounded-3xl">
                  <div className="bg-background-6/60 absolute top-0 left-0 size-full rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 z-10 space-y-1 p-6">
                    <h3 className="font-sora text-sora-heading-6 text-white/90">Financial analytics</h3>
                    <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                      Complex risk assessment and fraud detection challenges.
                    </p>
                  </div>
                  <img
                    src="./images/opai-img-304.png"
                    alt="Financial analytics success case study visual"
                    className="size-full object-cover"
                  />
                </figure>
              </a>
            </div>

            {/* fragment two  */}
            <div
              data-opai-animate
              data-delay="0.4"
              className="col-span-12 md:hidden lg:col-span-4 lg:block"
            >
              <div
                className="bg-[#14743A] flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
                aria-label="Financial analytics case study"
              >
                <div className="space-y-1">
                  <a href="./case-study-details.html">
                    <h3
                      className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                    >
                      Financial analytics
                    </h3>
                  </a>
                  <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    Complex risk assessment and fraud detection challenges.
                  </p>
                </div>

                <div>
                  <h4 className="font-sora text-sora-heading-6 font-normal text-white/90">
                    Dr. John Smith
                  </h4>
                  <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                    Chief Risk Officer
                  </p>
                </div>
              </div>
            </div>

            {/* fragment three  */}
            <div data-opai-animate data-delay="0.5" className="col-span-12 md:col-span-6 lg:col-span-3">
              <a href="./case-study-details.html">
                <div
                  className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
                  aria-label="Performance metrics and results"
                >
                  <div
                    className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                    aria-hidden="true"
                  >
                    <span className="relative size-6 overflow-hidden">
                      {/* first svg  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-0 left-0 transition-all duration-450 ease-in-out group-hover:top-[-26px] group-hover:left-[26px]"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* 2nd svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute top-[20px] left-[-24px] transition-all duration-450 ease-in-out group-hover:top-0 group-hover:left-0"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="#F8F9FA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex items-center justify-start gap-x-10 lg:justify-center">
                    <div>
                      <h3
                        className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                        aria-label="73 percent improvement in fraud detection"
                      >
                        <span
                          data-counter
                          data-number="73"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.3"
                          >73</span
                        >%
                      </h3>
                      <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Fraud detection precision
                      </p>
                    </div>
                    <div>
                      <h3
                        className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                        aria-label="28 percent reduction in portfolio risk"
                      >
                        <span
                          data-counter
                          data-number="28"
                          data-speed="1400"
                          data-interval="200"
                          data-rooms="2"
                          data-height-space="2.3"
                          >28</span
                        >%
                      </h3>
                      <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                        Portfolio risk reduction
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* btn  */}
        <div data-opai-animate data-delay="0.6" className="text-center">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<a href="./case-studies.html" class="btn-shadcn " aria-label="View all case studies">
  View all case studies
  <span class="btn-shadcn-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right opacity-60"><path d="m9 18 6-6-6-6"/></svg>
  </span>
</a>


` }} />
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}