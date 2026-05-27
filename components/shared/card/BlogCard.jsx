export default function BlogCard() {
  return (
    <>
<article
  className="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6"
>
  <figure className="{=$img-class} h-[276px] w-full overflow-hidden rounded-2xl">
    <a href="#">
      <img
        src="{=$image}"
        alt="{=$title}"
        className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
      />
    </a>
  </figure>

  <div className="space-y-4">
    <time
      className="font-inter-tight text-tagline-4 text-background-13/80 inline-block font-normal"
      datetime="2025-07-05"
    >
      {=$date}
    </time>

    <div className="flex items-center justify-start gap-x-2">
      <div
        className="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        {=$badge1}
      </div>
      <div
        className="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal"
      >
        {=$badge2}
      </div>
    </div>

    <a
      href="#"
      className="font-sora blog-title-black text-sora-heading-5 text-background-13/90 line-clamp-2"
    >
      <h3>{=$title}</h3>
    </a>
  </div>
</article>



    </>
  );
}