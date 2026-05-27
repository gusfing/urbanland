export default function Hero() {
  return (
    <>
{/* case study hero section */}

<section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
  <div className="main-container">
    <div className="space-y-19">
      {/*  content  */}
      <div className="space-y-3 text-center">
        <h2
          data-text-reveal
          className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal tracking-[-2.4px]"
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

      {/* cards  */}
      <div
        className="grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2"
        role="list"
        aria-label="Success stories and case studies"
      >
        {/* card one */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-302.png"
              alt="E-Commerce optimization success case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card two  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="E-Commerce optimization case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  E-Commerce optimization
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Struggling with cart abandonment and low conversion rates.
              </p>
            </div>

            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                Sarah Chen
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                E-Commerce Director
              </p>
            </div>
          </div>
        </div>

        {/* card three  */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-study-details.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>

              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="48 percent increase"
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
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Increased conversion rates
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
                    Email open rate
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* card four */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-303.png"
              alt="Healthcare predictive model success case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card five  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="Healthcare predictive model case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  Healthcare predictive model
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Need for early disease detection and risk prediction.
              </p>
            </div>

            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                Dr. Michael Rodriguez
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                Chief Medical Officer
              </p>
            </div>
          </div>
        </div>

        {/* card six  */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-study-details.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>

              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="91 percent accuracy"
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
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Increased conversion rates
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label="38 percent reduction in false positives"
                  >
                    <span
                      data-counter
                      data-number="38"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >38</span
                    >%
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    Email open rate
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* card seven */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-304.png"
              alt="Financial analytics success case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card eight  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="Financial analytics case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  Financial analytics
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Complex risk assessment and fraud detection challenges.
              </p>
            </div>

            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                David Thompson
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                Chief Risk Officer
              </p>
            </div>
          </div>
        </div>

        {/* card nine  */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-studies.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>

              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="87 percent fraud detection rate"
                  >
                    <span
                      data-counter
                      data-number="87"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >87</span
                    >%
                  </h3>
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Increased conversion rates
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label="54 percent faster processing"
                  >
                    <span
                      data-counter
                      data-number="54"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >54</span
                    >%
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    Email open rate
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* card ten - row 4 image */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-3.png"
              alt="CNN defect detection manufacturing case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card eleven - row 4 case study */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="CNN defect detection case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  CNN defect detection
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Real-time visual inspection and quality control on production lines.
              </p>
            </div>

            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                James Park
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                VP of Manufacturing
              </p>
            </div>
          </div>
        </div>

        {/* card twelve - row 4 stats */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-study-details.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>
              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="94 percent defect detection"
                  >
                    <span
                      data-counter
                      data-number="94"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >94</span
                    >%
                  </h3>
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Defect detection accuracy
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label="40 percent fewer recalls"
                  >
                    <span
                      data-counter
                      data-number="40"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.1"
                      >40</span
                    >%
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    Fewer product recalls
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* card thirteen - row 5 image */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-4.png"
              alt="Transformer-based customer support case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card fourteen - row 5 case study */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="Transformer-based support case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  Transformer-based support
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Scaling customer service with NLP and intent recognition at scale.
              </p>
            </div>
            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                Priya Sharma
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                Head of Customer Experience
              </p>
            </div>
          </div>
        </div>

        {/* card fifteen - row 5 stats */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-study-details.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>
              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="65 percent ticket reduction"
                  >
                    <span
                      data-counter
                      data-number="65"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >65</span
                    >%
                  </h3>
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Ticket volume reduction
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label="3.2x faster resolution"
                  >
                    <span
                      data-counter
                      data-number="3.2"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="1"
                      data-height-space="2.3"
                      >3</span
                    >.
                    <span
                      data-counter
                      data-number="2"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="1"
                      data-height-space="2.1"
                      >2</span
                    >
                    x
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    Faster resolution time
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* card sixteen - row 6 image */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-5.png"
              alt="Neural perception for autonomous systems case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card seventeen - row 6 case study */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="Neural perception systems case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  Neural perception systems
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Real-time object detection and scene understanding for autonomous platforms.
              </p>
            </div>
            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                Alex Kim
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                Director of Autonomy
              </p>
            </div>
          </div>
        </div>

        {/* card eighteen - row 6 stats */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-study-details.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>
              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="99.2 percent accuracy"
                  >
                    <span
                      data-counter
                      data-number="99.2"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >99.2</span
                    >%
                  </h3>
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Detection accuracy
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label="45 percent faster inference"
                  >
                    <span
                      data-counter
                      data-number="45"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >45</span
                    >%
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    Faster inference
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* card nineteen - row 7 image */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <figure
            className="h-[265px] overflow-hidden rounded-3xl"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <img
              src="./images/opai-img-6.png"
              alt="Neural Networks demand forecasting energy case study visual"
              className="size-full object-cover"
              itemprop="image"
            />
          </figure>
        </div>

        {/* card twenty - row 7 case study */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/CaseStudy"
        >
          <div
            className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
            aria-label="Smart grid demand forecasting case study"
          >
            <div className="space-y-1">
              <a href="./case-study-details.html">
                <h3
                  className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                  itemprop="name"
                >
                  Smart grid demand forecasting
                </h3>
              </a>
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemprop="about">
                Deep learning for load prediction and grid optimization.
              </p>
            </div>
            <div itemscope itemtype="https://schema.org/Person">
              <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemprop="name">
                Maria Santos
              </h4>
              <p
                className="font-inter-tight text-tagline-3 font-normal text-white/50"
                itemprop="jobTitle"
              >
                Chief Data Officer
              </p>
            </div>
          </div>
        </div>

        {/* card twenty-one - row 7 stats */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 lg:col-span-3"
          role="listitem"
          itemscope
          itemtype="https://schema.org/AggregateRating"
        >
          <a href="./case-study-details.html">
            <div
              className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
              aria-label="Performance metrics and results"
            >
              <div
                className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                <span className="relative size-6 overflow-hidden" aria-hidden="true">
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  class=""
  aria-hidden="true"
  role="img"
>
  <path
    d="M7 17L17 7"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7 7H17V17"
    stroke="#F8F9FA"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
                </span>
              </div>
              <div
                className="flex items-center justify-start gap-x-10 lg:justify-center"
                role="group"
                aria-label="Performance statistics"
              >
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    itemprop="ratingValue"
                    aria-label="23 percent forecast improvement"
                  >
                    <span
                      data-counter
                      data-number="23"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >23</span
                    >%
                  </h3>
                  <p
                    className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                    itemprop="description"
                  >
                    Forecast accuracy gain
                  </p>
                </div>
                <div>
                  <h3
                    className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                    aria-label="31 percent cost reduction"
                  >
                    <span
                      data-counter
                      data-number="31"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="2.3"
                      >31</span
                    >%
                  </h3>
                  <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                    Operational cost reduction
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}