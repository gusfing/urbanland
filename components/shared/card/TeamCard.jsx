export default function TeamCard() {
  return (
    <>
<div className="border-stroke-1/11 {=$class} w-full space-y-4 rounded-3xl border bg-white p-5 md:p-6">
  <figure className="h-[395px] w-full overflow-hidden rounded-xl">
    <img src="{=$image}" alt="team-member-img" className="size-full object-cover" />
  </figure>
  <div className="space-y-1">
    <h3 className="font-sora text-sora-heading-6 text-background-13 font-normal">{=$name}</h3>
    <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">{=$position}</p>
  </div>
</div>



    </>
  );
}