import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
const app = express();
const PORT = 8000;
dotenv.config();
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};
app.use("/api/users", userRoute);
app.listen(PORT, () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
