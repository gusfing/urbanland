export default function Pricing() {
  return (
    <>
{/*  pricing */}
<section
  data-opai-animate
  data-delay="0.1"
  className="bg-[url('/images/opai-35.jpg')] bg-cover bg-center bg-no-repeat py-[80px] md:py-[120px] xl:py-[156px]"
  aria-labelledby="pricing-heading"
>
  <div className="main-container">
    <div className="space-y-8 lg:space-y-2">
      {/* text content  */}
      <div
        data-opai-animate
        data-delay="0.1"
        className="rounded-3xl bg-white/10 px-2 py-8 md:px-0 md:py-14"
      >
        <h2
          data-text-reveal
          data-delay="0.2"
          className="text-sora-heading-3 lg:text-sora-heading-2 font-sora mx-auto max-w-[400px] text-center font-normal text-white/90"
        >
          Flexible plans that grow with you
        </h2>
      </div>

      {/* pricing cards  */}
      <div
        className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 lg:flex-nowrap lg:gap-y-0"
      >
        {/* card one  */}
        <div
          data-opai-animate
          data-delay="0.2"
          className="flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8"
        >
          <div className="space-y-1">
            <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">Starter</h3>
            <p
              className="font-inter-tight text-tagline-3 text-background-13/50 max-w-[150px] font-normal"
            >
              Perfect for getting started
            </p>
          </div>

          <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
            <span className="text-background-13/30" aria-hidden="true">$</span><span>49</span
            ><span className="text-it-heading-6 text-background-13/30">/mo</span>
          </h4>

          {/* list  */}
          <ul className="space-y-2" aria-label="Starter plan features">
            {/* item one  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >Web-based editor</span
              >
            </li>
            {/* item two  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                Access to 300+ AI voices</span
              >
            </li>

            {/* item three  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >Basic audio export (MP3)</span
              >
            </li>
            {/* item four  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >5 minutes of voiceover per month</span
              >
            </li>
          </ul>

          <div className="w-full">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<a href="./contact.html" class="btn-shadcn-outline w-full" aria-label="Start free">
  Start free
  <span class="btn-shadcn-outline-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right opacity-60"><path d="m9 18 6-6-6-6"/></svg>
  </span>
</a>


` }} />
          </div>
        </div>

        {/* card two  */}
        <div
          data-opai-animate
          data-delay="0.3"
          className="flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8"
        >
          <div className="space-y-1">
            <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">Pro</h3>
            <p
              className="font-inter-tight text-tagline-3 text-background-13/50 max-w-[150px] font-normal"
            >
              Full suite access for growing businesses.
            </p>
          </div>

          <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
            <span className="text-background-13/30" aria-hidden="true">$</span><span>149</span
            ><span className="text-it-heading-6 text-background-13/30">/mo</span>
          </h4>

          {/* list  */}
          <ul className="space-y-2" aria-label="Pro plan features">
            {/* item one  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                120 minutes of voiceover per month</span
              >
            </li>
            {/* item two  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >2,000+ premium voices in 80+ languages</span
              >
            </li>

            {/* item three  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >Background music & emotion control</span
              >
            </li>
            {/* item four  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                Commercial usage rights</span
              >
            </li>
          </ul>

          <div className="w-full">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `
<a href="./contact.html" class="group w-full" aria-label="Learn more">
  
  <div
    class=" group relative flex h-[52px] w-full cursor-pointer items-center justify-center rounded-2xl p-1"
  >
    <div
      class="lp:group-hover:left-[82%]! absolute left-[1%] z-20 h-11 w-15 overflow-hidden rounded-[13px] transition-[left] duration-700 ease-in-out group-hover:left-[80%] max-[376px]:group-hover:left-[75%] md:group-hover:left-[82%] lg:group-hover:left-[74%]"
      aria-hidden="true"
    >
      <div
        class="size-full rounded-[13px] bg-linear-to-r from-[#ffffff00] from-0% to-[#000000] to-100%"
        aria-hidden="true"
      >
        <div
          class="bg-opai-purple relative z-10 flex size-full items-center justify-center rounded-[13px]"
          style="box-shadow: 0 3px 10px 0 rgba(255, 255, 255, 0.4) inset"
        >
          
          <span class="flex size-6 items-center justify-center p-[5px]" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              class="size-[14px] fill-white/80"
            >
              <path d="M6 0H8V2H6V0Z" />
              <path d="M0 0H2V2H0V0Z" />
              <path d="M9 3H11V5H9V3Z" />
              <path d="M3 3H5V5H3V3Z" />
              <path d="M12 6H14V8H12V6Z" />
              <path d="M6 6H8V8H6V6Z" />
              <path d="M9 9H11V11H9V9Z" />
              <path d="M3 9H5V11H3V9Z" />
              <path d="M6 12H8V14H6V12Z" />
              <path d="M0 12H2V14H0V12Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    
    <span
      class="font-ibm-plex-mono text-tagline-2 text-background-11 lp:group-hover:left-[20%]!  absolute left-1/2 shrink-0 -translate-x-1/2 stroke-0 px-4 text-center font-normal text-nowrap transition-[left] duration-700 ease-in-out group-hover:left-[20%] first-letter:uppercase max-[376px]:group-hover:left-[25%] lg:group-hover:left-[25%]"
      aria-hidden="true"
    >
      Start free
    </span>
  </div>
</a>


` }} />
          </div>
        </div>

        {/* card three  */}
        <div
          data-opai-animate
          data-delay="0.4"
          className="flex h-[550px] w-full max-w-[425px] flex-col items-start justify-between rounded-3xl bg-white p-8"
        >
          <div className="space-y-1">
            <h3 className="font-sora text-sora-heading-4 text-background-13/80 font-normal">
              Enterprise
            </h3>
            <p className="font-inter-tight text-tagline-3 text-background-13/50 font-normal">
              Custom Pricing <br />Tailored deployment and hands-on support.
            </p>
          </div>

          <h4 className="font-inter-tight text-it-heading-4 h-10.5 font-normal text-black">
            <span className="text-background-13/30" aria-hidden="true">$</span><span>179</span
            ><span className="text-it-heading-6 text-background-13/30">/mo</span>
          </h4>

          {/* list  */}
          <ul className="space-y-2" aria-label="Enterprise plan features">
            {/* item one  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >600+ minutes monthly</span
              >
            </li>
            {/* item two  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                Voice cloning (1 voice)</span
              >
            </li>

            {/* item three  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                API access</span
              >
            </li>
            {/* item four  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >HD video & audio exports (MP4/MP3)</span
              >
            </li>

            {/* item five  */}
            <li className="flex items-center justify-start gap-x-3">
              <span aria-hidden="true"
                ><div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="9"
  viewBox="0 0 13 9"
  fill="none"
  aria-hidden="true"
  role="img"
  class=""
>
  <path
    d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z"
    fill="black"
  />
</svg>


` }} /></span>
              <span className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                >Priority support</span
              >
            </li>
          </ul>

          <div className="w-full">
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<a href="./contact.html" class="btn-shadcn-outline w-full" aria-label="Start free">
  Start free
  <span class="btn-shadcn-outline-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right opacity-60"><path d="m9 18 6-6-6-6"/></svg>
  </span>
</a>


` }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}