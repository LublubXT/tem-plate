export function ContactLayout2() {
	return (
		<div className="h-auto bg-white">
			<div className="min-h-[90vh] relative p-5 flex flex-row w-full max-md:flex-col max-md:px-5 max-md:py-5 max-md:justify-center max-md:h-auto max-md:gap-10 max-w-[1280px] m-auto gap-10 justify-end items-center">
				<div className="w-[43%] h-auto min-h-[75%] absolute left-0 bg-white border-[1px] border-third/5 rounded-lg max-md:static max-md:w-full shadow-lg shadow-gray-100">
					<img
						src="bg-image.jpg"
						className="w-full h-full max-h-[300px] object-cover object-center rounded-lg"
						alt=""
					/>
					<h1 className="text-[70px] font-text text-third font-bold mx-7 mt-10 leading-none mb-5">
						Contact Us
					</h1>
					<p className="font-text text-[20px] leading-8 text-third mx-7 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos.
					</p>
				</div>
				<div className="flex flex-row w-10/12 h-auto gap-5 items-center justify-end bg-fourth rounded-lg p-7 max-md:w-full py-5">
					<div className="flex flex-col self-center w-4/6 h-auto gap-5 bg-fourth rounded-lg p-7 max-md:w-full">
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
							<p className="font-text font-bold text-third mb-1">
								Phone Number
							</p>
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
		</div>
	);
}
