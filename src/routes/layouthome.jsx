import { Navbar } from "../components/navbar";

import { Outlet, Link } from "react-router-dom";

export function LayoutHome() {
	return (
		<div className="min-h-[100vh] bg-third">
			<Navbar />
			<div className="w-full max-w-[1480px] mx-auto px-5 mt-10 pb-20 flex flex-row justify-between flex-wrap gap-20">
				<div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10 flex flex-col justify-between">
					<div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
						<Link
							to={`/layouts-navbars`}
							className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
						>
							Navbars
						</Link>
						<img
							src="arrow.png"
							alt="arrow"
							className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
						/>
					</div>
					<img
						src="navbar-1.png"
						alt="navbar"
						className="w-full rounded-t-lg"
					/>
				</div>

				<div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10">
					<div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
						<Link
							to={`/layouts-headers`}
							className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
						>
							Headers
						</Link>
						<img
							src="arrow.png"
							alt="arrow"
							className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
						/>
					</div>
					<img
						src="heading-1.png"
						alt="navbar"
						className="w-full rounded-t-lg"
					/>
				</div>

				<div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10">
					<div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
						<Link
							to={`/layouts-basic-layouts`}
							className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
						>
							Basic Layouts
						</Link>
						<img
							src="arrow.png"
							alt="arrow"
							className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
						/>
					</div>
					<img
						src="basiclayout-1.png"
						alt="navbar"
						className="w-full rounded-t-lg"
					/>
				</div>

				<div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10">
					<div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
						<Link
							to={`/layouts-grid-layouts`}
							className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
						>
							Grid Layouts
						</Link>
						<img
							src="arrow.png"
							alt="arrow"
							className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
						/>
					</div>
					<img
						src="gridlayout-1.png"
						alt="navbar"
						className="w-full rounded-t-lg"
					/>
				</div>

				<div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10">
					<div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
						<Link
							to={`/layouts-contact-layouts`}
							className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
						>
							Contact Layouts
						</Link>
						<img
							src="arrow.png"
							alt="arrow"
							className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
						/>
					</div>
					<img
						src="contact-layouts.png"
						alt="navbar"
						className="w-full rounded-t-lg"
					/>
				</div>

				<div className="w-[47%] px-5 shadow-lg max-md:w-full rounded-xl bg-second shadow-black/10">
					<div className="flex flex-row items-center justify-start gap-2 duration-200 group hover:gap-5">
						<Link
							to={`/layouts-footer-layouts`}
							className="text-[25px] font-text text-fourth font-bold w-fit block rounded-lg py-5"
						>
							Footer Layouts
						</Link>
						<img
							src="arrow.png"
							alt="arrow"
							className="w-8 h-8 duration-200 opacity-0 group-hover:opacity-100 "
						/>
					</div>
					<img
						src="footer-layout.png"
						alt="navbar"
						className="w-full rounded-t-lg"
					/>
				</div>

				{/* <Link to={`/layouts-complex-layouts`} className="text-[25px] font-text text-yellow font-bold w-full bg-third block rounded-lg px-5 py-5 mt-5">Complex Layouts</Link> */}
			</div>
		</div>
	);
}
