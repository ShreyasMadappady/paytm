import express from "express";
import { signUp } from "../controllers/signUp.js";
import { signIn } from "../controllers/signIn.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
