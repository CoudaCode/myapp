import { Router } from "express";
import authController from "../controllers/auth.js";
const router = Router()
//POST
router.post("/", authController.addAuth)

export default router;
