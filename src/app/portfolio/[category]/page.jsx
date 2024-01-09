import Image from "next/image";
import { portfolio_items } from "../../constants";

const page = ({ params }) => {
	const data = portfolio_items[params.category];

	return (
		<div className="flex flex-col">
			<h2 className="text-5xl text-green-500">{params.category}</h2>
			<div>
				{data.map((item, index) => (
					<div
						key={item.id}
						className={`flex mt-10 gap-10 max-md:flex-col ${
							index % 2 === 1 ? "flex-row-reverse" : ""
						}`}
					>
						<div className="flex gap-10 flex-col max-md:gap-5">
							<h3 className="text-3xl">{item.title}</h3>
							<p>{item.desc}</p>
							<button className="bg-[#53c28b] w-28 py-[3px] px-3 text-white rounded-md">
								See More
							</button>
						</div>
						<Image
							src={item.image}
							width={500}
							height={500}
							alt="service"
							className="rounded-md"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
