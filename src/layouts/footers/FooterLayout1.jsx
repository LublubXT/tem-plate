export function FooterLayout1() {
	return (
		<div className="h-auto w-full bg-fourth">
			<div className="w-full max-w-[1280px] m-auto">
				<div className="w-full py-10 pt-20 px-5 grid grid-cols-12 gap-10 max-md:flex max-md:flex-col max-md:gap-10">
					<div className="col-span-4 max-lg:col-span-3">
						<h1 className="font-bold text-third text-[25px] font-text">
							Website Title
						</h1>
						<p className="font-normal text-third leading-7 text-[17px] font-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis.
						</p>
					</div>
					<div className="col-span-2 flex flex-col gap-1">
						<p className="font-text text-third/10 text-[17px] uppercase font-bold mb-2">
							Category title
						</p>
						<a className="font-text text-third text-[17px]" href="#">
							Home
						</a>
						<a className="font-text text-third text-[17px]" href="#">
							About
						</a>
						<a className="font-text text-third text-[17px]" href="#">
							Pricing
						</a>
						<a className="font-text text-third text-[17px]" href="#">
							Contact
						</a>
					</div>
					<div className="col-span-2 flex flex-col gap-1">
						<p className="font-text text-third/10 text-[17px] uppercase font-bold mb-2">
							Other Links
						</p>
						<a className="font-text text-third text-[17px]" href="#">
							Link 1
						</a>
						<a className="font-text text-third text-[17px]" href="#">
							Link 2
						</a>
						<a className="font-text text-third text-[17px]" href="#">
							Link 3
						</a>
						<a className="font-text text-third text-[17px]" href="#">
							Link 4
						</a>
					</div>
					<div className="col-span-4 max-lg:col-span-5">
						<p className="font-text text-third/10 text-[17px] uppercase font-bold mb-2">
							Stay up to date
						</p>
						<p className="font-text text-third text-[17px]">
							Subscribe to our weekly newsletter.
						</p>
						<div className="flex flex-row mt-1 w-fit">
							<input
								type="text"
								className="py-[7px] px-[14px] text-third border-[1px] border-third/10 w-[80%] border-r-0 outline-none font-text rounded-l-lg"
								placeholder="Email..."
							/>
							<button className="bg-yellow text-third font-text px-[14px] rounded-r-lg">
								Submit
							</button>
						</div>
					</div>
				</div>
				<div className="py-10 pb-20 px-5">
					<p>© Copyright Mountain Money</p>
				</div>
			</div>
		</div>
	);
}
