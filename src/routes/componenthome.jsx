import { Navbar } from "../components/navbar";

import { Outlet, Link } from "react-router-dom";

export function ComponentHome() {
  return (
    <div className="min-h-[100vh] bg-third">
      <Navbar />
      <div className="w-full max-w-[1480px] mx-auto px-5 mt-10 pb-20 flex flex-row justify-between flex-wrap gap-20">
        <div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10 flex flex-col justify-between">
          <div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
            <Link
              to={`/components-cards`}
              className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
            >
              Cards
            </Link>
            <img
              src="arrow.png"
              alt="arrow"
              className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
            />
          </div>
          <img
            src="card-layouts.png"
            alt="navbar"
            className="w-full rounded-t-lg"
          />
        </div>



        {/* <Link to={`/layouts-complex-layouts`} className="text-[25px] font-text text-yellow font-bold w-full bg-third block rounded-lg px-5 py-5 mt-5">Complex Layouts</Link> */}
      </div>
    </div>
  );
}
