import { Navbar } from "../components/navbar";

import { Outlet, Link } from "react-router-dom";

export function TemplateHome() {
	return (
		<div className="min-h-[100vh] bg-third">
			<Navbar />
			<div className="w-full max-w-[1480px] mx-auto px-5 mt-10 pb-20 flex flex-row justify-between items-center flex-wrap gap-20">
				<h1 className="font-text text-[70px] text-white font-bold text-center w-full">
					Coming Soon!
				</h1>
			</div>
		</div>
	);
}
