import Image from "next/image";

export default function Home() {
	return (
		<div className="flex gap-10 justify-center items-center max-md:flex-col max-md:mt-10 max-md:justify-center">
			<div className="flex flex-col gap-10 items-start">
				<h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-950 to-slate-300">
					Better design for your digital products.
				</h1>
				<p className="text-2xl">
					Turning your Idea into Reality. We bring together <br /> the
					teams from the global tech industry.
				</p>
				<div className="max-md:flex max-md:justify-center max-md:items-center max-md:w-full">
					<button className="bg-[#53c28b] text-white p-4 rounded-md text-sm ">
						See Our Works
					</button>
				</div>
			</div>
			<Image src="/hero.png" width={500} height={500} alt="Intro Image" />
		</div>
	);
}
