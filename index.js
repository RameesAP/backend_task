import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//import routes
import quizeRoutes from "./routes/quize_route.js"


// Use Routes
app.use("/api/quize", quizeRoutes);


// Connect to MongoDB

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    // process.exit(1);
  });

// Start the Server
app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 5000}`
  );
});
