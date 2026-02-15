import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";




// Create an Express application
// Middleware to parse JSON and URL-encoded data
// Middleware to parse URL-encoded data
const app = express();

app.use(cors({
  origin: process.env.CORE_ORIGIN,
  credentials: true
}));

// Middleware to parse cookies
app.use(cookieParser({}));

// Middleware to parse JSON limit of 10mb
app.use(express.json({
  limit: "10mb",
}));

// Middleware to parse URL-encoded data with a limit of 10mb
app.use(express.urlencoded({
  limit: "10mb", 
  extended: true 
}));

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));





// Export the app for use in server.js
export default app;