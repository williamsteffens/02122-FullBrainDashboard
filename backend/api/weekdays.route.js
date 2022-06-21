import express from "express";
import WeekdaysController from "./weekdays.controller.js";
const router = express.Router();

router.route("/").get((WeekdaysController.apiGetWeekdays));

export default router;