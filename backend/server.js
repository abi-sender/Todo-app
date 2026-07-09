import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./router/todoroutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/",router);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});