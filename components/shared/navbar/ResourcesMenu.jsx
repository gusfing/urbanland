"use client";

import { useEffect } from "react";

export default function ResourcesMenu() {
  return (
    <>
<div>
  <div
    className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[280px] -translate-x-1/2 bg-transparent opacity-0"
  ></div>
  <ul
    id="resources-dropdown-menu-v2"
    className="dropdown-menu shadow-14 border-stroke-2/60 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[280px] -translate-x-1/2 rounded-[20px] border bg-white p-3 opacity-0"
  >
    <li>
      <a href="./blog.html" className="group relative flex items-center gap-2 rounded-[10px] p-3">
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path
    d="M4.875 14.6161H1.125C0.95924 14.6161 0.800269 14.5503 0.683058 14.4331C0.565848 14.3159 0.5 14.1569 0.5 13.9911V10.5C0.5 10.4179 0.516166 10.3367 0.547575 10.2608C0.578984 10.185 0.625022 10.1161 0.683059 10.0581L10.0581 0.683058C10.1753 0.565848 10.3342 0.5 10.5 0.5C10.6658 0.5 10.8247 0.565848 10.9419 0.683058L14.4331 4.17418C14.5503 4.29139 14.6161 4.45036 14.6161 4.61612C14.6161 4.78188 14.5503 4.94085 14.4331 5.05806L4.875 14.6161Z"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M8 2.74109L12.375 7.11609"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Blog
        </span>
      </a>
    </li>
    <li>
      <a
        href="./integration.html"
        className="group relative flex items-center gap-2 rounded-[10px] p-3"
      >
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
  <path
    d="M3.625 16.7501H9.875"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M2.89873 11.6728C2.15556 11.0924 1.55363 10.351 1.13818 9.50449C0.722728 8.65796 0.504568 7.72828 0.500096 6.78531C0.481376 3.39763 3.2125 0.581526 6.5993 0.501812C7.91169 0.470211 9.20072 0.852645 10.2835 1.59487C11.3664 2.33709 12.188 3.40141 12.6319 4.63687C13.0757 5.87232 13.1194 7.21618 12.7565 8.47781C12.3937 9.73945 11.6428 10.8548 10.6104 11.6657C10.383 11.8418 10.1986 12.0674 10.0712 12.3253C9.94381 12.5832 9.87672 12.8667 9.87502 13.1544L9.87501 13.625C9.87501 13.7908 9.80916 13.9498 9.69195 14.067C9.57474 14.1842 9.41577 14.25 9.25001 14.25H4.24999C4.08423 14.25 3.92526 14.1842 3.80805 14.067C3.69084 13.9498 3.62499 13.7908 3.62499 13.625L3.62498 13.1539C3.62427 12.8681 3.55851 12.5862 3.43268 12.3296C3.30685 12.073 3.12425 11.8484 2.89873 11.6728V11.6728Z"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M7.38477 3.06134C8.14923 3.19128 8.85448 3.55538 9.40313 4.10336C9.95178 4.65133 10.3167 5.35613 10.4476 6.12043"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Integration
        </span>
      </a>
    </li>
    <li>
      <a href="./case-studies.html" className="group relative flex items-center gap-2 rounded-[10px] p-3">
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path
    d="M2.87976 14.3702C2.16069 13.6512 2.63762 12.1415 2.27162 11.257C1.89222 10.34 0.5 9.60195 0.5 8.62497C0.5 7.64801 1.89222 6.91 2.27163 5.99303C2.63763 5.10846 2.1607 3.59882 2.87976 2.87976C3.59882 2.16069 5.10846 2.63762 5.99304 2.27162C6.91002 1.89222 7.64805 0.5 8.62503 0.5C9.60199 0.5 10.34 1.89222 11.257 2.27163C12.1415 2.63763 13.6512 2.1607 14.3702 2.87976C15.0893 3.59882 14.6124 5.10846 14.9784 5.99304C15.3578 6.91002 16.75 7.64805 16.75 8.62503C16.75 9.60199 15.3578 10.34 14.9784 11.257C14.6124 12.1415 15.0893 13.6512 14.3702 14.3702C13.6512 15.0893 12.1415 14.6124 11.257 14.9784C10.34 15.3578 9.60195 16.75 8.62497 16.75C7.64801 16.75 6.91 15.3578 5.99303 14.9784C5.10846 14.6124 3.59882 15.0893 2.87976 14.3702Z"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M8.625 13.625C9.14277 13.625 9.5625 13.2053 9.5625 12.6875C9.5625 12.1697 9.14277 11.75 8.625 11.75C8.10723 11.75 7.6875 12.1697 7.6875 12.6875C7.6875 13.2053 8.10723 13.625 8.625 13.625Z"
    class="fill-secondary "
  />
  <path
    d="M8.625 9.87537V9.25037C9.05765 9.25037 9.48058 9.12207 9.84031 8.88171C10.2 8.64134 10.4804 8.2997 10.646 7.89999C10.8116 7.50027 10.8549 7.06044 10.7705 6.63611C10.6861 6.21177 10.4777 5.822 10.1718 5.51607C9.86587 5.21014 9.47609 5.0018 9.05176 4.9174C8.62743 4.83299 8.18759 4.87631 7.78788 5.04188C7.38817 5.20745 7.04653 5.48782 6.80616 5.84756C6.5658 6.20729 6.4375 6.63022 6.4375 7.06287"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Case Studies
        </span>
      </a>
    </li>
    <li>
      <a
        href="./testimonials.html"
        className="group relative flex items-center gap-2 rounded-[10px] p-3"
      >
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path
    d="M0.5 14.875C0.5 14.3777 0.697544 13.9008 1.04917 13.5492C1.40081 13.1975 1.87772 13 2.375 13H13V0.5H2.375C1.87772 0.5 1.40081 0.697544 1.04917 1.04917C0.697544 1.40081 0.5 1.87772 0.5 2.375V14.875Z"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M0.5 14.875V15.5H11.75"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Testimonial
        </span>
      </a>
    </li>
    <li>
      <a href="./services.html" className="group relative flex items-center gap-2 rounded-[10px] p-3">
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path
    d="M15.6137 8H13.1137C12.7822 8 12.4643 8.1317 12.2299 8.36612C11.9954 8.60054 11.8637 8.91848 11.8637 9.25V12.375C11.8637 12.7065 11.9954 13.0245 12.2299 13.2589C12.4643 13.4933 12.7822 13.625 13.1137 13.625H14.3637C14.6953 13.625 15.0132 13.4933 15.2476 13.2589C15.482 13.0245 15.6137 12.7065 15.6137 12.375V8ZM15.6137 8C15.6137 7.01031 15.4179 6.03039 15.0374 5.11675C14.6569 4.20311 14.0994 3.3738 13.3969 2.67664C12.6944 1.97947 11.8609 1.42823 10.9444 1.0547C10.0279 0.68116 9.04654 0.492712 8.05687 0.500216C7.0672 0.492712 6.08583 0.68116 5.16932 1.0547C4.25282 1.42823 3.41931 1.97947 2.71684 2.67664C2.01437 3.3738 1.45683 4.20311 1.07636 5.11675C0.695883 6.03039 0.5 7.01031 0.5 8V12.375C0.5 12.7065 0.631696 13.0245 0.866116 13.2589C1.10054 13.4933 1.41848 13.625 1.75 13.625H3C3.33152 13.625 3.64946 13.4933 3.88388 13.2589C4.1183 13.0245 4.25 12.7065 4.25 12.375V9.25C4.25 8.91848 4.1183 8.60054 3.88388 8.36612C3.64946 8.1317 3.33152 8 3 8H0.5"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M15.6137 12.375V14.25C15.6137 14.913 15.3503 15.5489 14.8815 16.0178C14.4127 16.4866 13.7768 16.75 13.1137 16.75H8.625"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Services
        </span>
      </a>
    </li>
    <li>
      <a href="./contact.html" className="group relative flex items-center gap-2 rounded-[10px] p-3">
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_4483_34377)">
    <path
      d="M12.5415 4.16665C13.3555 4.32545 14.1035 4.72353 14.6899 5.30993C15.2763 5.89632 15.6744 6.64437 15.8332 7.45831M12.5415 0.833313C14.2326 1.02118 15.8095 1.77846 17.0134 2.98082C18.2173 4.18318 18.9765 5.75915 19.1665 7.44998M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2744C18.1006 17.4871 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1856C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1118 9.32486 15.7083C7.31139 14.4289 5.60431 12.7218 4.32486 10.7083C2.91651 8.53432 2.04007 6.05914 1.76653 3.48331C1.7457 3.25287 1.77309 3.02061 1.84695 2.80133C1.9208 2.58205 2.03951 2.38055 2.1955 2.20966C2.3515 2.03877 2.54137 1.90224 2.75302 1.80875C2.96468 1.71526 3.19348 1.66686 3.42486 1.66665H5.92486C6.32929 1.66267 6.72136 1.80588 7.028 2.06959C7.33464 2.3333 7.53493 2.69952 7.59153 3.09998C7.69705 3.90003 7.89274 4.68559 8.17486 5.44165C8.28698 5.73992 8.31125 6.06408 8.24479 6.37571C8.17832 6.68735 8.02392 6.97341 7.79986 7.19998L6.74153 8.25831C7.92783 10.3446 9.65524 12.072 11.7415 13.2583L12.7999 12.2C13.0264 11.9759 13.3125 11.8215 13.6241 11.7551C13.9358 11.6886 14.2599 11.7129 14.5582 11.825C15.3143 12.1071 16.0998 12.3028 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6913 18.3332 14.1Z"
      class="stroke-background-13 "
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_4483_34377">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Contact
        </span>
      </a>
    </li>
    <li>
      <a href="./team.html" className="group relative flex items-center gap-2 rounded-[10px] p-3">
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<div
  class="bg-background-13/5  absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-400 group-hover:opacity-100"
></div>


` }} />
        <span className="relative z-10">
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
  <path
    d="M6.75 13C10.2018 13 13 10.2018 13 6.75C13 3.29822 10.2018 0.5 6.75 0.5C3.29822 0.5 0.5 3.29822 0.5 6.75C0.5 10.2018 3.29822 13 6.75 13Z"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M6.75 10.5C8.82107 10.5 10.5 8.82107 10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 6.75 10.5Z"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M10.501 11.7496V18L6.75043 16.125L3.00098 18V11.7502"
    class="stroke-background-13 "
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


` }} />
        </span>
        <span className="text-tagline-2 font-sora text-background-13 relative z-10 font-normal">
          Team
        </span>
      </a>
    </li>
  </ul>
</div>



    </>
  );
}