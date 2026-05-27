"use client";

import { useEffect } from "react";

export default function Hero() {
  return (
    <>
{/* signup hero section  */}
<section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
  <div className="main-container">
    <div className="space-y-19">
      <div className="space-y-3 text-center">
        <h2
          data-text-reveal
          className="text-sora-heading-4 md:text-sora-heading-3 xl:text-sora-heading-2 text-background-13 font-sora font-normal"
        >
          Create your account
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="text-tagline-2 text-background-13/60 font-inter-tight mx-auto max-w-[300px] font-normal"
        >
          Join Urbanland and unlock AI-driven solutions tailored to your needs.
        </p>
      </div>

      {/* form and img  */}

      <div
        data-opai-animate
        data-delay="0.3"
        className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-x-8 gap-y-8 overflow-hidden rounded-xl bg-white p-4 md:rounded-3xl md:p-8 lg:flex-row lg:gap-y-0"
      >
        {/* form  */}
        <div
          data-opai-animate
          data-delay="0.3"
          data-instant
          data-direction="left"
          data-offset="100"
          className="bg-background-9 w-full rounded-lg p-4 backdrop-blur-[30px] md:rounded-2xl md:p-6 lg:max-w-[397px]"
        >
          <form action="#" className="w-full">
            {/* email */}
            <fieldset className="space-y-2">
              <label
                htmlFor="signup-email"
                className="text-tagline-2 text-background-13/90 font-inter-tight block font-normal"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="signup-email"
                placeholder="Enter your email"
                required
                className="border-stroke-3/18 text-tagline-3 placeholder:text-tagline-3 bg-background-7 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
              />
            </fieldset>
            {/* username */}
            <fieldset className="mt-6 space-y-2">
              <label
                htmlFor="signup-username"
                className="text-tagline-2 text-background-13/90 font-inter-tight block font-normal"
                >Username</label
              >
              <input
                type="text"
                name="username"
                id="signup-username"
                placeholder="Choose a username"
                required
                autocomplete="username"
                className="border-stroke-3/18 text-tagline-3 placeholder:text-tagline-3 bg-background-7 text-background-13/90 placeholder:text-background-13/60 focus-visible:border-stroke-3/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
              />
            </fieldset>
            {/* password */}
            <fieldset className="mt-6 space-y-2">
              <label
                htmlFor="signup-password"
                className="text-tagline-2 text-background-13/90 font-inter-tight block font-normal"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="signup-password"
                required
                placeholder="At least 8 character"
                className="border-stroke-3/18 text-tagline-3 focus-visible:border-stroke-3/60 placeholder:text-tagline-3 bg-background-7 text-background-13/90 placeholder:text-background-13/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
              />
            </fieldset>
            {/* confirm password */}
            <fieldset className="mt-6 space-y-2">
              <label
                htmlFor="signup-confirm-password"
                className="text-tagline-2 text-background-13/90 font-inter-tight block font-normal"
                >Confirm password</label
              >
              <input
                type="password"
                name="confirm_password"
                id="signup-confirm-password"
                required
                placeholder="Confirm your password"
                className="border-stroke-3/18 text-tagline-3 focus-visible:border-stroke-3/60 placeholder:text-tagline-3 bg-background-7 text-background-13/90 placeholder:text-background-13/60 block h-12 w-full rounded-lg border px-3 py-[14px] font-normal focus:outline-none"
              />
            </fieldset>

            {/* submit button */}
            <div className="mt-8">
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<button type="submit" class="w-full" aria-label="Sign up">
  <div
    class="bg-background-13 font-ibm-plex-mono group text-tagline-2 text-background-7 flex h-[52px] w-full cursor-pointer flex-nowrap items-center justify-center gap-x-2.5 rounded-lg px-6 py-[13px] font-normal lowercase"
  >
    <span class="shrink-0 first-letter:uppercase"> Sign up </span>
    
    <div class="relative top-[1.5px] flex size-6 items-center justify-center overflow-hidden">
      <span
        class="absolute flex translate-x-0 items-center justify-center opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-6 group-hover:opacity-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M6.75 13.5L11.25 9L6.75 4.5"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        class="absolute flex -translate-x-6 items-center justify-center opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M6.75 13.5L11.25 9L6.75 4.5"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </div>
</button>


` }} />
            </div>

            <p className="mt-6 text-center">
              <span className="text-tagline-3 text-background-13/60 font-inter-tight font-normal"
                >Already have an account?</span
              >
              <a
                href="./login.html"
                className="text-tagline-3 text-background-13/90 font-inter-tight font-medium underline underline-offset-2"
                >Log in</a
              >
            </p>
          </form>
          <div>
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div class="py-6 text-center">
  <p
    class="text-tagline-4 text-background-13/90 relative inline-block text-center font-normal before:absolute before:top-1/2 before:left-[164%] before:block before:h-px before:w-[43px] before:-translate-y-1/2 before:rotate-180 before:bg-[linear-gradient(270deg,rgba(13,16,23,0.40)_0%,rgba(13,16,23,0)_78.71%)] before:content-[''] after:absolute after:top-1/2 after:right-[164%] after:block after:h-px after:w-[43px] after:-translate-y-1/2 after:bg-[linear-gradient(270deg,rgba(13,16,23,0.40)_0%,rgba(13,16,23,0)_78.71%)] after:content-[''] sm:before:left-[169%] sm:after:right-[169%]"
  >
    Or
  </p>
</div>
<div class="space-y-4 md:space-y-6">
  <a
    href="#"
    class="border-stroke-3/18 hover:bg-stroke-3/10 group flex w-full items-center justify-center gap-2 rounded-md border bg-white px-8 py-3 transition-all duration-300 ease-in-out"
  >
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.7541 12.2199C21.7541 11.4182 21.6878 10.8332 21.5441 10.2266H12.2031V13.8449H17.6861C17.5756 14.744 16.9786 16.0982 15.6521 17.0082L15.6335 17.1293L18.5869 19.3715L18.7915 19.3916C20.6708 17.6907 21.7541 15.1882 21.7541 12.2199Z"
          fill="#4285F4"
        />
        <path
          d="M12.2002 21.7514C14.8864 21.7514 17.1415 20.8847 18.7886 19.3897L15.6492 17.0063C14.8091 17.5805 13.6815 17.9813 12.2002 17.9813C9.56932 17.9813 7.33635 16.2805 6.54036 13.9297L6.42369 13.9394L3.35266 16.2686L3.3125 16.378C4.94853 19.563 8.30907 21.7514 12.2002 21.7514Z"
          fill="#34A853"
        />
        <path
          d="M6.53907 13.9306C6.32904 13.3239 6.20749 12.6739 6.20749 12.0023C6.20749 11.3305 6.32904 10.6806 6.52802 10.0739L6.52246 9.94471L3.41294 7.57812L3.3112 7.62555C2.63691 8.94723 2.25 10.4314 2.25 12.0023C2.25 13.5731 2.63691 15.0572 3.3112 16.3789L6.53907 13.9306Z"
          fill="#FBBC05"
        />
        <path
          d="M12.2003 6.01997C14.0685 6.01997 15.3286 6.8108 16.0472 7.47168L18.855 4.785C17.1306 3.21417 14.8865 2.25 12.2003 2.25C8.3091 2.25 4.94854 4.43832 3.3125 7.62329L6.52933 10.0717C7.33638 7.72083 9.56936 6.01997 12.2003 6.01997Z"
          fill="#EB4335"
        />
      </svg>
    </span>
    <span class="text-tagline-3 text-background-13/90 font-normal">Continue with Google</span>
  </a>
  <a
    href="#"
    class="border-stroke-3/18 hover:bg-stroke-3/10 group flex w-full items-center justify-center gap-2 rounded-md border bg-white px-8 py-3 transition-all duration-300 ease-in-out"
  >
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22.5 12.0642C22.5 6.22974 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.22974 1.5 12.0642C1.5 17.337 5.33968 21.7075 10.3594 22.5V15.1179H7.69336V12.0642H10.3594V9.73675C10.3594 7.08911 11.927 5.62663 14.3254 5.62663C15.4738 5.62663 16.6758 5.83296 16.6758 5.83296V8.43274H15.3518C14.0475 8.43274 13.6406 9.24713 13.6406 10.0834V12.0642H16.5527L16.0872 15.1179H13.6406V22.5C18.6603 21.7075 22.5 17.337 22.5 12.0642Z"
          fill="#0C63D4"
        />
      </svg>
    </span>
    <span class="text-tagline-3 text-background-13/90 font-normal">Continue with facebook</span>
  </a>
</div>


` }} />
          </div>
        </div>

        {/* img  */}
        <figure
          data-opai-animate
          data-delay="0.4"
          data-instant
          data-direction="right"
          data-offset="100"
          className="h-[400px] w-full overflow-hidden rounded-2xl md:h-[599px] lg:h-[768px] lg:max-w-[557px]"
        >
          <img src="./images/opai-img-472.jpg" alt="signup-hero" className="size-full object-cover" />
        </figure>
      </div>
    </div>
  </div>
</section>



    </>
  );
}