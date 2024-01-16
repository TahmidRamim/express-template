import { config } from "dotenv";
import { app } from "./app.js";
import { connectDb } from "./database/connectDb.js";
config();
connectDb();
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
