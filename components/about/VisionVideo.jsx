export default function VisionVideo() {
  return (
    <>
{/* video  */}
<section data-opai-animate data-delay="0.1" className="lp:pb-44! pb-20 md:pb-25 lg:pb-30">
  <div className="main-container">
    <div
      className="group relative h-[400px] overflow-hidden rounded-2xl bg-neutral-800 md:h-[550px] lg:h-[785px]"
    >
      <video
        data-about-video
        className="size-full object-cover"
        src="/video/video.mp4"
        muted
        playsinline
        loop
        autoplay
        preload="auto"
      ></video>
      <button
        data-about-video-control
        data-play="true"
        type="button"
        className="group/control absolute top-1/2 left-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 outline-2 outline-[#beab9a] backdrop-blur-xl transition-all duration-300 ease-in-out group-hover:opacity-100 hover:scale-105"
        aria-label="Toggle play"
      >
        <span className="relative flex size-full items-center justify-center">
          <span
            className="play-icon absolute translate-y-0 opacity-100 transition-all duration-300 group-data-[play=true]/control:translate-y-6 group-data-[play=true]/control:opacity-0"
          >
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="19"
  viewBox="0 0 16 19"
  fill="none"
  class="play-icon absolute top-1/2 left-1/2 ml-px -translate-x-1/2 -translate-y-1/2"
  style="transform: translate(-7.99716px, -9px); translate: none; rotate: none; scale: none"
>
  <foreignObject x="-4" y="-4" width="23.6328" height="26.6816"
    ><div
      xmlns="http://www.w3.org/1999/xhtml"
      style="
        backdrop-filter: blur(2px);
        clip-path: url(#bgblur_0_5153_3765_clip_path);
        height: 100%;
        width: 100%;
      "
    ></div
  ></foreignObject>
  <path
    data-figma-bg-blur-radius="4"
    d="M0.5 2.50415C0.5 0.921819 2.25049 -0.0338637 3.58151 0.821794L14.2163 7.65846C15.441 8.44573 15.441 10.2359 14.2163 11.0232L3.58152 17.8598C2.2505 18.7155 0.5 17.7598 0.5 16.1775V2.50415Z"
    fill="#BEAB9A"
    stroke="#BEAB9A"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
  <defs>
    <clipPath id="bgblur_0_5153_3765_clip_path" transform="translate(4 4)">
      <path
        d="M0.5 2.50415C0.5 0.921819 2.25049 -0.0338637 3.58151 0.821794L14.2163 7.65846C15.441 8.44573 15.441 10.2359 14.2163 11.0232L3.58152 17.8598C2.2505 18.7155 0.5 17.7598 0.5 16.1775V2.50415Z"
      ></path>
    </clipPath>
  </defs>
</svg>


` }} />
          </span>
          <span
            className="pause-icon absolute translate-y-6 opacity-0 transition-all duration-300 group-data-[play=true]/control:translate-y-0 group-data-[play=true]/control:opacity-100"
          >
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" class="size-7">
  <path d="M19.0026 4.6665H18.3359C17.2314 4.6665 16.3359 5.56193 16.3359 6.6665V21.3332C16.3359 22.4377 17.2314 23.3332 18.3359 23.3332H19.0026C20.1072 23.3332 21.0026 22.4377 21.0026 21.3332V6.6665C21.0026 5.56193 20.1072 4.6665 19.0026 4.6665Z" fill="#BEAB9A" />
  <path d="M9.66667 4.6665H9C7.89543 4.6665 7 5.56193 7 6.6665V21.3332C7 22.4377 7.89543 23.3332 9 23.3332H9.66667C10.7712 23.3332 11.6667 22.4377 11.6667 21.3332V6.6665C11.6667 5.56193 10.7712 4.6665 9.66667 4.6665Z" fill="#BEAB9A" />
</svg>


` }} />
          </span>
        </span>
      </button>
    </div>
  </div>
</section>



    </>
  );
}