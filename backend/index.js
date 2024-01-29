import express, { Router } from "express";
import mongoose from "mongoose";
import userRoute from "./routes/index.js";

const app = express();

app.use("/api/v1", userRoute);

mongoose
  .connect(
    "mongodb+srv://dummyuser:dummyuser@cluster0.4j2dxvz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server Running on PORT ${3000}`);
    });
  })
  .catch((error) => {
    console.log(`Error Connecting to the server: ${error}`);
  });
