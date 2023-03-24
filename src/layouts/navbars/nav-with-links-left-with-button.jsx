export function NavbarWithLinksLeftWithButton() {
  return (
    <div className="w-full bg-second">
      <div className="container-xl mx-auto">
        <div className="w-full p-[20px] h-auto flex flex-row items-center justify-between bg-second">
          <div className="flex flex-row item-center content-center">
            <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>
            <div className="flex flex-row items-center max-sm:flex-col max-sm:hidden ml-3">
              <div className="group flex flex-col mx-5">
                <a href="#" className="font-text text-[17px] text-first font-normalBasicNavbarWithLinksLeft leading-tight">Home</a>
                <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
              </div>
              <div className="group flex flex-col mx-5">
                <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
                <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
              </div>
              <div className="group flex flex-col mx-5">
                <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
                <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
              </div>
              <div className="group flex flex-col mx-5 mr-0">
                <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
                <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
              </div>
            </div>
          </div>
          <a href="#" className="bg-yellow text-second font-text font-bold hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px] max-sm:hidden block">Sign Up</a>
          <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-column max-sm:block hidden pb-4 h-auto">
          <div className="group flex flex-col mx-5">
            <a href="#" className="font-text text-[17px] text-first font-normal ">Home</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="group flex flex-col mx-5">
            <a href="#" className="font-text text-[17px] text-first font-normal ">About</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="group flex flex-col mx-5">
            <a href="#" className="font-text text-[17px] text-first font-normal ">Pricing</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="group flex flex-col mx-5 mr-0 mb-5">
            <a href="#" className="font-text text-[17px] text-first font-normal ">Contact</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <a href="#" className="bg-yellow text-second font-bold hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px] mt-7">Sign Up</a>

        </div>
      </div>
    </div>
  );
}
