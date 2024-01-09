import { timeStamp } from "console";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
export default mongoose.models.Users || mongoose.model("Users", userSchema);
