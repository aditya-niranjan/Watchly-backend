import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


/**
 * Connects to the MongoDB database using Mongoose.
 */
const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    );
    console.log(`\nConnected to Mongodb 😈`);
  } catch (error) {
    console.log("Connection Failed : ", error);
    throw error;
  }
};

export default connectDB;
