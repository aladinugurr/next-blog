import mongoose from "mongoose";
import connectToDB from "../../../lib/mongo";
import Blogs from "../../../models/Blog";

export const GET = async (req, res) => {
	try {
		await connectToDB();
		const blogs = await Blogs.find();
		return new Response(JSON.stringify(blogs), { status: 200 });
	} catch (error) {
		return new Response({ error: error }, { status: 500 });
	}
};
