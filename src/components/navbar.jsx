import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export function Navbar() {
	const [showNav, setShowNav] = useState(false);

	function showNavBar() {
		setShowNav(!showNav);
	}

	console.log(showNav);

	return (
		<div className="sticky top-0 w-full bg-[#333c4ad9] backdrop-blur-lg z-20">
			<div className="w-full max-w-[1480px] m-auto">
				<div className="w-full p-[20px] h-auto flex flex-row content-center items-center py-5 justify-between bg-transparent z-100">
					<div className="flex flex-row items-center justify-start gap-3">
						<img src="tem-plate-logo.svg" alt="logo" className="w-10 h-10" />
						<Link
							to={`/`}
							className="font-text text-[24px] font-black text-fourth text-left leading-tight"
						>
							Tem Plate
						</Link>
					</div>

					<svg
						width="2em"
						height="2em"
						onClick={showNavBar}
						className="hidden max-sm:block mt-[3px] cursor-pointer"
						viewBox="0 0 20 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1h18M1 6h18M1 11h18"
							stroke="#F4FAFF"
							strokeWidth={1.5}
							strokeLinecap="round"
						/>
					</svg>

					<div className="flex flex-row align-middle max-sm:flex-col max-sm:hidden">
						<div className="flex flex-col mx-5 group">
							<Link
								to={`/about`}
								className="font-text text-[17px] text-fourth font-normal leading-tight"
							>
								About
							</Link>
							<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
						</div>
						<div className="flex flex-col mx-5 group">
							<Link
								to={`/layouts`}
								className="font-text text-[17px] text-fourth font-normal leading-tight"
							>
								Layouts
							</Link>
							<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
						</div>
						<div className="flex flex-col mx-5 group">
							<Link
								to={`/components`}
								className="font-text text-[17px] text-fourth font-normal leading-tight"
							>
								Components
							</Link>
							<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
						</div>
						<div className="flex flex-col mx-5 mr-0 group">
							<Link
								to={`/templates`}
								className="font-text text-[17px] text-fourth font-normal leading-tight"
							>
								Web Templates
							</Link>
							<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
						</div>
					</div>
				</div>
				<div
					className={`${
						showNav === false
							? "fixed top-[-150px] opacity-0"
							: "fixed top-[75px] bg-third shadow-lg shadow-black/10 w-full flex flex-col pb-4 opacity-100"
					} duration-200`}
				>
					<div className="flex flex-col py-2 mx-5 group w-fit">
						<a
							href="#"
							className="font-text text-[17px] text-fourth font-normal"
						>
							About
						</a>
						<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
					</div>
					<div className="flex flex-col py-2 mx-5 group w-fit">
						<Link
							to={`/layouts`}
							className="font-text text-[17px] text-fourth font-normal leading-tight"
						>
							Layouts
						</Link>
						<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
					</div>
					<div className="flex flex-col py-2 mx-5 group w-fit">
						<a
							href="#"
							className="font-text text-[17px] text-fourth font-normal"
						>
							Components
						</a>
						<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
					</div>
					<div className="flex flex-col py-2 mx-5 mr-0 group w-fit">
						<a
							href="#"
							className="font-text text-[17px] text-fourth font-normal"
						>
							Web Templates
						</a>
						<div className="h-[2px] w-0 bg-fourth mt-0 group-hover:w-full duration-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
