import cookieParser from "cookie-parser";
import express from "express";
import { userRoute } from "./routes/userRoute.js";
export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoute);
