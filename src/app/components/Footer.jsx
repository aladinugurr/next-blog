import React from "react";
import Image from "next/image";

const Footer = () => {
	const socials = [1, 2, 3, 4];
	return (
		<footer className="flex justify-between pb-1 mt-4 max-md:flex-col">
			<p>@2024 Blog. All rights reserved.</p>
			<div className="flex py-3">
				{socials.map((link, index) => (
					<Image
						className="ml-1"
						key={index}
						src={`/${index + 1}.png`}
						width={15}
						height={15}
						alt="Intro Image"
					/>
				))}
			</div>
		</footer>
	);
};

export default Footer;
