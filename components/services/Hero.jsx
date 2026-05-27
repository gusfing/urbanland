"use client";

import { useEffect } from "react";

export default function Hero() {
  return (
    <>
{/* services hero section */}
<section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
  <div className="main-container">
    <div className="space-y-14">
      {/* content  */}
      <div className="space-y-3">
        <h2
          data-text-reveal
          id="solutions-heading"
          className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[800px] text-center font-normal tracking-[-2.4px]"
          itemprop="name"
        >
          Urbanland: Smart Solutions for Modern Cities
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[500px] text-center font-normal"
          itemprop="description"
        >
          Enhancing urban life through innovative street furniture and sustainable city infrastructure.
        </p>
      </div>

      {/* card  */}
      <div
        className="grid grid-cols-12 items-center justify-center gap-4 lg:gap-2"
        role="list"
        aria-label="AI solutions"
      >
        {/* card one  */}
        <div
          data-opai-animate
          data-delay="0.1"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Deep Learning"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-1 text-4xl text-white"></span>
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
          </a>
        </div>

        {/* card two  */}
        <div
          data-opai-animate
          data-delay="0.2"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Computer Vision"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-2 text-4xl text-white"></span>
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
      Image and video analysis powered by convolutional Neural Networks (CNNs).
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card three  */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="NLP & Transformers"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-3 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      NLP & Transformers
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Language understanding and generation with transformer architectures.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card four  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Neural Architecture"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-4 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Neural Architecture
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Custom network design, hyperparameter tuning, and automated ML (NAS).
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card five  */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 md:col-span-6"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Model Deployment"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-5 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Model Deployment
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Production inference APIs and edge deployment for trained Neural Networks.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card six  */}
        <div
          data-opai-animate
          data-delay="0.1"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Reinforcement Learning"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-6 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Reinforcement Learning
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Train agents to make sequential decisions through reward-based optimization.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card seven  */}
        <div
          data-opai-animate
          data-delay="0.2"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Time Series Forecasting"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-7 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Time Series Forecasting
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Recurrent and attention-based models for sequence prediction.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card eight  */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Transfer Learning"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-8 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Transfer Learning
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Leverage pre-trained models and fine-tune for your domain.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card nine  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="col-span-12 md:col-span-6"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="AutoML & NAS"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-9 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      AutoML & NAS
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Automate model selection, architecture search, and hyperparameter tuning.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card ten  */}
        <div
          data-opai-animate
          data-delay="0.5"
          className="col-span-12 md:col-span-6"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Edge AI"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-10 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Edge AI
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Deploy lightweight Neural Networks on devices and embedded systems.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card eleven  */}
        <div
          data-opai-animate
          data-delay="0.1"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Generative Models"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-11 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Generative Models
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      GANs, VAEs, and diffusion models for synthetic data and content.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card twelve  */}
        <div
          data-opai-animate
          data-delay="0.2"
          className="col-span-12 md:col-span-6 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="Multimodal AI"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-12 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      Multimodal AI
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      Combine vision, language, and other modalities in unified models.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>

        {/* card thirteen  */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="col-span-12 lg:col-span-4"
          role="listitem"
          itemscope
          itemtype="https://schema.org/Service"
        >
          <a href="./service-details.html">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14"
  aria-label="MLOps & Pipelines"
>
  <span
    class="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
    aria-hidden="true"
  >
    <span class="ns-shape-13 text-4xl text-white"></span>
  </span>

  <div class="space-y-1">
    <h3
      class="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
      itemprop="name"
    >
      MLOps & Pipelines
    </h3>
    <p
      class="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
      itemprop="description"
    >
      CI/CD, monitoring, and lifecycle management for Neural Networks.
    </p>
  </div>
</div>


` }} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}