import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
/*
    When user send a GET request to /api/users/profile, 
    backend will run script of 'protect' middleware first
    then move on the the 'getUserProfile' middleware
*/
router.route("/profile").get(protect, getUserProfile);

export default router;
