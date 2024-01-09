"use client";
import Image from "next/image";

const page = () => {
	return (
		<div className="flex flex-col items-center gap-20 max-md:mt-10">
			<h1 className="font-semibold text-6xl">Lets Keep in Touch</h1>
			<div className="flex justify-between gap-20 max-md:flex-col">
				<div className="flex-1 md:animate-bounce h-20 w-full">
					<Image
						src="/contact.png"
						width={700}
						height={700}
						alt="contact"
					/>
				</div>
				<form className="flex flex-col gap-10 text-[#ddd] flex-1 justify-start">
					<input
						type="text"
						className="p-2 rounded-md outline-none bg-transparent border-2 border-green-500"
						placeholder="name"
					/>
					<input
						type="text"
						className="p-2 rounded-md outline-none bg-transparent border-2 border-green-500"
						placeholder="Email"
					/>
					<textarea
						name=""
						id=""
						cols="30"
						rows="12"
						className="p-2 rounded-md outline-none bg-transparent border-2 border-green-500"
						placeholder="Message"
					></textarea>
					<button
						onClick={(e) => e.preventDefault()}
						type="submit"
						className="w-20 h-10 bg-[#53c28b] rounded-md"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default page;
