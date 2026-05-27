"use client";

import { useEffect } from "react";

export default function ContactForm() {
  return (
    <>
{/* contact form  */}

<section className="pt-28 pb-20 md:pt-39 md:pb-28 lg:pb-39">
  <div className="main-container">
    <div className="space-y-10 lg:space-y-14">
      <div className="space-y-3 text-center">
        <h2
          data-text-reveal
          className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[600px] font-normal"
        >
          Reach out — We’ll get back within 24 hours
        </h2>
        <p
          data-text-reveal
          data-delay="0.2"
          className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[300px] font-normal"
        >
          Fill out the form below, and a member of our team will be in touch shortly.
        </p>
      </div>

      <div
        data-opai-animate
        data-delay="0.3"
        data-instant
        className="flex flex-col items-center justify-center gap-y-10 rounded-xl bg-white p-4 md:rounded-3xl md:p-8 lg:flex-row lg:gap-x-14 lg:gap-y-0"
      >
        {/* form  */}
        <form data-opai-animate data-delay="0.4" data-instant action="#" className="w-full space-y-6">
          <div>
            {/* email  */}
            <fieldset className="mb-6 space-y-2">
              <label
                htmlFor="email"
                className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                required
                aria-label="Your email"
              />
            </fieldset>

            {/* password  */}
            <fieldset className="mb-6 space-y-2">
              <label
                htmlFor="password"
                className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block"
                >Password</label
              >
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
                required
                aria-label="Password"
              />
            </fieldset>

            {/* your message */}
            <fieldset className="mb-4 space-y-2">
              <label
                htmlFor="message"
                className="text-inter-tight text-tagline-23font-normal text-background-13/90 inline-block"
                >Your message</label
              >
              <textarea
                id="message"
                placeholder="Enter your message"
                className="border-stroke-3/18 bg-background-7 focus-within:border-stroke-1/70 text-background-13/90 placeholder:text-background-13/60 h-45.5 w-full rounded-lg border px-4.5 py-3 focus-within:outline-none"
              ></textarea>
            </fieldset>

            {/* remember me  and forget password  */}
            <fieldset className="mb-14 flex items-center justify-between gap-x-5">
              <label className="flex cursor-pointer items-center gap-x-3 sm:gap-1.5">
                <input
                  type="checkbox"
                  name="terms"
                  required=""
                  className="peer sr-only"
                  aria-label="I accept with the Terms of uses and privacy policy"
                />
                <span
                  className="border-stroke-3/18 peer-checked:border-background-13/60 after:bg-background-13/50 relative size-5 cursor-pointer rounded-[2px] border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"
                ></span>
                <span
                  className="text-tagline-3 text-background-13/60 peer-checked:text-background-13/90 font-medium select-none"
                >
                  I accept with the Terms of uses and privacy policy
                </span>
              </label>
            </fieldset>

            {/* submit request button  */}
            <div className="inline-block">
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<button type="submit" class="btn-shadcn  w-full" aria-label="Submit request">
  Submit request
  <span class="btn-shadcn-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right opacity-60"><path d="m9 18 6-6-6-6"/></svg>
  </span>
</button>


` }} />
            </div>
          </div>
        </form>

        {/* img  */}

        <div
          data-opai-animate
          data-delay="0.4"
          data-instant
          className="h-[330px] w-full rounded-2xl md:h-[563px]"
        >
          <figure className="relative size-full overflow-hidden rounded-2xl">
            <img
              src="./images/opai-img-27.png"
              alt="contact-form-img"
              className="size-full object-cover"
            />

            <div
              data-opai-animate
              data-delay="0.5"
              className="bg-background-13/20 absolute top-1/2 left-1/2 flex h-12 w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-2.5 rounded-lg backdrop-blur-md md:w-[334px]"
            >
              <span>
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="">
  <path
    d="M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12ZM12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125Z"
    fill-opacity="0.9"
  />
</svg>


` }} />
              </span>

              <span className="font-inter-tight text-tagline-3 font-normal text-white/90">
                1320 Geoage ST Brisbane, QLD, Japan 4009
              </span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}