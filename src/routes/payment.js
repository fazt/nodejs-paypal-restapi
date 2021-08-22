import { Router } from "express";
import {
  createOrder,
  captureOrder,
  cancelPayment,
} from "../controllers/payment.controller";

const router = Router();

router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/cancel-payment", cancelPayment);

export default router;
