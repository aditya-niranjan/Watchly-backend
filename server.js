import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import app from "./src/app.js"

dotenv.config({
  path: "./env"
})

connectDB();



app.listen(process.env.PORT, ()=>{
  console.log(`\nServer is Running ${process.env.PORT} 🤖`);
})
