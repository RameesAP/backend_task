import express from "express";

import {
  getAllQuestions,
  questionAdd,
  test,
} from "../controllers/quize_controllers.js";

const router = express.Router();

router.get("/test", test);
router.post("/question", questionAdd);
router.get("/getQuestions", getAllQuestions);

export default router;
