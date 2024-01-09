import Image from "next/image";
import Link from "next/link";

const page = () => {
	const categories = ["illustrations", "applications", "websites"];
	return (
		<div className="flex flex-col gap-10">
			<h2 className="text-4xl">Choose a gallery</h2>
			<div className="flex gap-20">
				<div className="flex gap-10 h-[330px] max-md:flex-col">
					{categories.map((category, index) => (
						<div
							key={index}
							className="relative w-[250px] h-auto border-2 border-green-500 rounded-md cursor-pointer hover:text-orange-500 max-md:h-[300px] max-md:w-[300px]"
						>
							<Link href={`/portfolio/${category}`}>
								<Image
									src={`/${category}.png`}
									layout="fill"
									alt={category}
									quality={100}
									objectFit="cover"
									className="rounded-md"
								/>
							</Link>
							<p className="md:absolute bottom-2 right-4 text-2xl">
								{category}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
