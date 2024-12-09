import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  deleteNotifications,
  getNotifications,
  //   deleteNotification,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications); // all a a time chech ths s
// router.delete("/:id", protectRoute, deleteNotification); // one at a timee, check the s

export default router;
