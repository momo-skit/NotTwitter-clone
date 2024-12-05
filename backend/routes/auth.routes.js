import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js"; // do put .js extension cuz u use types import

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
