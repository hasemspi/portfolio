import React from 'react';
import { Link } from 'react-router-dom';

const Mobile = () => {
    return (
        <div>
<button
  className="MobileMenu sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden mr-1.5 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
  type="button"
  data-te-offcanvas-toggle
  data-te-target="#offcanvasRight"
  aria-controls="offcanvasRight"
  data-te-ripple-init
  data-te-ripple-color="light">
 <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
</button>



<div
  className="invisible fixed bottom-0 top-0
        right-0 z-[1045]
        flex w-60 max-w-full
        translate-x-full
        flex-col border-none
        bg-base-100
        bg-clip-padding
        text-neutral-700 
        shadow-sm outline-none
        transition duration-300
        ease-in-out dark:bg-neutral-800 
        dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        tabIndex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
  data-te-offcanvas-init>
  <div className="flex items-center justify-between p-4">
    <h5
      className="mb-0 font-semibold leading-normal"
      id="offcanvasRightLabel">
     Moble Menu
    </h5>
    <button
      type="button"
      className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      data-te-offcanvas-dismiss>
      <span
        className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    </button>
  </div>
  <div className="offcanvas-body flex-grow overflow-y-auto p-4">
    <div className="text-center artboard phone-61">
        <div className="mt-[70px] mb-5 avatar online">
            <div className="w-40 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
            </div>
        </div>
        <div className="max-w-md">
            <h1 className="text-3xl font-bold">Abul Hasem</h1>
            <p className="py-2">Full Stock Developer</p>
            <button className="btn btn-primary">Download CV</button>
            <ul>
                <li data-te-offcanvas-dismiss>
                    <Link to={'/'} >
                        Home
                    </Link>
                </li>
                <li data-te-offcanvas-dismiss>
                <Link to={'/about'}>
                        About
                    </Link>
                </li>
                <li data-te-offcanvas-dismiss>
                <Link to={'/resum'}>
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Mobile;