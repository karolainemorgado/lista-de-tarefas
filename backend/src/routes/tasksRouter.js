import express from "express";
import { getTasks } from "../controllers/tasksController.js";

const router = express.Router()

router.get("/", getTasks)

export default router