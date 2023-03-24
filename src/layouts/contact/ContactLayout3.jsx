export function ContactLayout3() {
	return (
		<div className="h-auto bg-white">
			<div className="h-[90vh] px-5 flex flex-row w-full py-10 max-md:flex-col max-md:px-5 max-md:py-5 max-md:justify-start max-md:h-auto max-w-[1280px] m-auto justify-between items-center">
				<img
					src="bg-image.jpg"
					alt="image"
					className="w-1/2 h-full object-cover object-center max-md:w-full rounded-l-lg"
				/>
				<div className="flex flex-col self-center w-full h-full gap-5 bg-fourth rounded-r-lg p-7">
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
