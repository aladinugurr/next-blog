import mongoose from "mongoose";

const connectToDB = async () => {
	mongoose.set("strictQuery", false);
	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Success: Connected to mongodb");
	} catch (error) {
		throw new Error("Error whie connecting mongodb!");
	}
};

export default connectToDB;
