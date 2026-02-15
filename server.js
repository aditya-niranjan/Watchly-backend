import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import app from "./src/app.js";

// Load environment variables from .env file
dotenv.config({
  path: "./env",
});

// Connect to the database
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`\nServer is Running http://localhost${process.env.PORT} 🤖`);
});