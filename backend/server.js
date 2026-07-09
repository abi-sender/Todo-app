import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./router/todoroutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB connect
connectDB();

app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running on Port ${process.env.PORT || 5000}`);
});