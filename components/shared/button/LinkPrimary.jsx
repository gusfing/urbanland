export default function LinkPrimary() {
  return (
    <>
<a href="{=$href}" className="btn-shadcn {=$class}" aria-label="{=$button-text}">
  {=$button-text}
  <span className="btn-shadcn-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right opacity-60"><path d="m9 18 6-6-6-6"/></svg>
  </span>
</a>



    </>
  );
}