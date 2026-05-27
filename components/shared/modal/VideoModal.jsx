export default function VideoModal() {
  return (
    <>
{/* =========================
Video Modal
===========================*/}
<dialog
  className="modal-overlay modal-close fixed top-0 left-0 z-9999! h-full w-full bg-black/95"
  aria-hidden="true"
>
  <div
    className="modal-content fixed top-1/2 left-1/2 h-full max-h-[30%] w-full max-w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] max-[400px]:max-h-[20%] max-[400px]:max-w-[90%] max-[400px]:rounded-2xl sm:max-h-[400px] md:max-h-[450px] xl:max-h-[600px] xl:max-w-[1000px]"
  >
    <iframe
      className="h-full w-full rounded-[10px] max-[400px]:rounded-lg"
      src="https://www.youtube.com/embed/BTMjD7_evjE?si=HXnYR-0JdkmV_kwM"
      title="Copyright-free music upbeat | Copyright-free nature music for videos | Copyright nature videos"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share;
      "
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>

    <button
      className="modal-close-btn absolute -top-8 -right-8 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white p-1 max-[400px]:-top-4 max-[400px]:-right-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 transition-transform duration-300 ease-in-out hover:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</dialog>



    </>
  );
}