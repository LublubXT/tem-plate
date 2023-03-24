export function ContactLayout1() {
	return (
		<div className="h-auto bg-white">
			<div className="min-h-[90vh] px-5 flex flex-row w-full max-md:flex-col max-md:px-5 max-md:py-5 max-md:justify-start max-md:h-auto max-md:gap-10 max-w-[1280px] m-auto gap-10 justify-between items-center">
				<div className="w-full">
					<h1 className="text-[70px] font-text text-third font-bold">
						Contact Us
					</h1>
					<p className="font-text text-[20px] leading-8 text-third">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos.
					</p>
				</div>
				<div className="flex flex-col self-center w-full h-auto gap-5 bg-fourth rounded-lg p-7">
					<div className="w-full">
						<p className="font-text font-bold text-third mb-1">First Name</p>
						<input
							type="text"
							className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
							placeholder="First Name"
						/>
					</div>
					<div className="w-full">
						<p className="font-text font-bold text-third mb-1">Last Name</p>
						<input
							type="text"
							className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
							placeholder="Last Name"
						/>
					</div>
					<div className="w-full">
						<p className="font-text font-bold text-third mb-1">Email</p>
						<input
							type="Email"
							className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
							placeholder="Email"
						/>
					</div>
					<div className="w-full">
						<p className="font-text font-bold text-third mb-1">Phone Number</p>
						<input
							type="Phone"
							className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
							placeholder="Password"
						/>
					</div>
					<div className="w-full">
						<p className="font-text font-bold text-third mb-1">Message</p>
						<textarea
							type="Phone"
							className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none h-40"
							placeholder="Message..."
						></textarea>
					</div>
					<a
						href="#"
						className="bg-yellow text-third font-bold font-text hover:opacity-95 duration-200 py-2 px-7 text-[20px] w-fit mt-[-8px] rounded-lg shadow-lg shadow-yellow/40"
					>
						Send
					</a>
				</div>
			</div>
		</div>
	);
}
