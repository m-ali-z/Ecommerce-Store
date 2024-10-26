import mongoose from "mongoose";

export const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conneected to db");
  } catch (error) {
    console.log("error", error);
  }
};
