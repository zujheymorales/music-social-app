import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.use("/users", userRoutes);


// Test route
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

export default app;
