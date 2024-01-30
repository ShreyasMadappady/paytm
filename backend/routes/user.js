import express from "express";
import { signUp } from "../controllers/signUp.js";
import { signIn } from "../controllers/signIn.js";
import { update } from "../controllers/update.js";
import { bulk } from "../controllers/bulk.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.put("/", update);
router.get("/bulk", bulk);

export default router;
