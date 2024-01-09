import React from "react";
import Link from "next/link";

const Button = ({ url, title }) => {
	return (
		<Link
			className="bg-[#53c28b] p-[2px] px-[4px] text-white rounded-md"
			href={url}
		>
			{title}
		</Link>
	);
};

export default Button;
