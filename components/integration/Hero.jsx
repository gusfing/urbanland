"use client";

import { useEffect } from "react";

export default function Hero() {
  return (
    <>
{/* integration */}
<section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
  <div className="main-container">
    <div className="space-y-14">
      {/* text  */}
      <div className="space-y-3 text-center">
        <h2
          data-text-reveal
          id="ecosystem-heading"
          className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora font-normal tracking-[-2.4px]"
        >
          Urbanland works with your ecosystem
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
          itemprop="description"
        >
          Urbanland works with your ecosystem
        </p>
      </div>

      {/* cards  */}
      <div
        className="grid grid-cols-12 items-center justify-center gap-4 md:gap-2"
        role="list"
        aria-label="Platform integrations"
      >
        {/* card one   */}

        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.1"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/slack.svg" alt="Urbanland" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Slack</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />

        {/* card two   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.2"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/discord.svg" alt="Urbanland" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Discord</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card three   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.3"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/telegram.svg" alt="Urbanland" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Telegram</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card four   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.4"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/messenger-dark.svg" alt="Urbanland" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Messenger</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card five   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.5"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/duolingo.svg" alt="Urbanland" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Duolingo</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card six   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.6"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/skype.svg" alt="Urbanland" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Skype</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card seven   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.7"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/netflix.svg" alt="Netflix" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Netflix</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card eight   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.8"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/confluence.svg" alt="Confluence" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Confluence</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card nine   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.9"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/claude-ai.svg" alt="Claude" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Claude</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card ten   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.1"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/behance.svg" alt="Behance" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Behance</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card eleven   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.2"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/edge.svg" alt="Edge" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Edge</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card twelve - Skype */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.3"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/skype.svg" alt="Skype" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Skype</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card thirteen   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.4"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/pinterest.svg" alt="Pinterest" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Pinterest</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card fourteen   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.5"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/discord.svg" alt="Discord" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Discord</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card fifteen   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.6"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/jira_service_desk.svg" alt="Jira" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Jira</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card sixteen   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.7"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/tiktok.svg" alt="TikTok" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">TikTok</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card seventeen   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.8"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/safari.svg" alt="Safari" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Safari</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
        {/* card eighteen   */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  data-opai-animate
  data-delay="0.9"
  class="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
>
  <div
    class="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
  >
    <span class="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
      <figure
        class="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
      >
        <img src="./images/icons/mastar-card.svg" alt="Mastercard" class="size-[34px]" />
      </figure>
    </span>
    <h3 class="font-inter-tight text-tagline-1 font-medium text-black">Mastercard</h3>
  </div>

  <p
    class="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
  >
    Send voice-generated alerts directly to team chats.
  </p>
</div>


` }} />
      </div>
    </div>
  </div>
</section>



    </>
  );
}