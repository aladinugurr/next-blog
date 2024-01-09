import React from "react";
import { nav_links } from "../constants";
import Button from "./utils/Button";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex justify-between pt-10 max-md:flex-col max-md:justify-center max-md:items-center mb-10">
			<h1 className="font-bold text-xl">Lamamia</h1>
			<div className="flex gap-6 items-center max-md:flex-col">
				<div>theme</div>
				{nav_links.map((item) => (
					<li className="list-none cursor-pointer" key={item.id}>
						<Link href={`${item.link}`}>{item.name}</Link>
					</li>
				))}
				<Button url="/login" title="login" />
			</div>
		</nav>
	);
};

export default Navbar;
