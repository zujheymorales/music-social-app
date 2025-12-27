import http from "http";
import app from "./app.js";
import { pool } from "./config/db.js";
import { env } from "./config/env.js";

console.log("SERVER.JS LOADED ✅");
console.log("ABOUT TO TEST DB ✅");

pool.query("SELECT NOW()")
  .then((res) => console.log("DB connected at:", res.rows[0].now))
  .catch((err) => console.error("DB connection error:", err.message));

const server = http.createServer(app);

server.listen(env.PORT, () => {
  console.log(`Backend server running on http://localhost:${env.PORT}`);
});
