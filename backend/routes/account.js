import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { balance } from "../controllers/balance.js";
import { transfer } from "../controllers/transfer.js";

const router = express.Router();

router.get("/balance", authMiddleware, balance);
router.post("/transfer", authMiddleware, transfer);

export default router;
