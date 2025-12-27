import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { pool } from "../config/db.js";

const router = Router();

// GET /users/me
router.get("/me", requireAuth, async (req, res) => {
  const result = await pool.query(
    "SELECT id, username, email, bio, avatar_url, created_at FROM users WHERE id = $1",
    [req.userId]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(result.rows[0]);
});

export default router;
