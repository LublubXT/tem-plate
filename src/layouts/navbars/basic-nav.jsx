export function BasicNavbar() {
  return (
    <div className="w-full bg-second">
      <div className="container-xl mx-auto">
        <div className="w-full p-[20px] h-auto flex flex-row content-center items-center justify-between bg-second">
          <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>

          <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
          </svg>

          <div className="flex flex-row align-middle max-sm:flex-col max-sm:hidden">
            <div className="flex flex-col mx-5 group">
              <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Home</a>
              <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
            </div>
            <div className="flex flex-col mx-5 group">
              <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
              <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
            </div>
            <div className="flex flex-col mx-5 group">
              <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
              <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
            </div>
            <div className="flex flex-col mx-5 mr-0 group">
              <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
              <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
            </div>
          </div>
        </div>
        <div className="flex hidden pb-4 flex-column max-sm:block">
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal">Home</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal">About</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal">Pricing</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 mr-0 group">
            <a href="#" className="font-text text-[17px] text-first font-normal">Contact</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
