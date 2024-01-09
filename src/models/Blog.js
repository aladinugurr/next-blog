import { timeStamp } from "console";
import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema(
	{
		title: { type: String, required: true },
		author: String,
		body: { type: String, required: true },
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);
export default mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
