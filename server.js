import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import orderRoute from "./routes/order.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import reviewRoute from "./routes/review.route.js";
import cookieParser from "cookie-parser";
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

/*---Routes---*/
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/message", messageRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went Wrong";
  res.status(errorStatus).send(errorMessage);
});

app.listen(PORT, () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
