import Image from "next/image";

const page = () => {
	return (
		<div className="flex flex-col gap-10 mt-10">
			<div className="w-100 relative h-80">
				<Image
					className="object-cover grayscale"
					src="/about-photo.png"
					fill
					alt="about"
				/>
				<div className="absolute bottom-4 left-4 bg-[#53c28b] p-2 max-md:h-20">
					<h1 className="text-white font-semibold md:text-3xl">
						Digital Storytellers
					</h1>
					<h2 className="text-white font-medium md:text-2xl">
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className="flex gap-20 justify-center items-start max-md:flex-col">
				<div className="flex flex-col">
					<h2 className="font-bold text-3xl mb-4">Who Are We?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse
						tempora beatae. Asuscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet? Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Ducimus quae
						dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis <br />
						<br /> voluptatum quo ea eveniet? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Ducimus quae dolor,
						optio voluptatibus magnam iure esse tempora beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis
						voluptatum quo ea eveniet?
					</p>
				</div>
				<div className="flex flex-col">
					<h2 className="font-bold text-3xl mb-4">What We Do?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse
						tempora beatae, a suscipit eos. Animi quibusdam cum
						omnis officiis voluptatum quo ea eveniet? Lorem ipsum
						dolor sit amet consectetur adipisicing elit. <br />-
						Creative Illustrations
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy <br />
						<br />- Mobile Apps
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
