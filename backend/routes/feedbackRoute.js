import express from "express";

import {
  createFeedback,
  getAllFeedback,
} from "../controllers/feedbackController.js";

const router = express.Router();

router.get("/", getAllFeedback);
router.post("/create", createFeedback);

export default router;
