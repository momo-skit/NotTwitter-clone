import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"; // authRoutes is essentially the router object that was exported from auth.routes.js, just Direct default import with a custom name:
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
