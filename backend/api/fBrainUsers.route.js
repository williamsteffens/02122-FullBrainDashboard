import express from "express";
import FBrainUsersController from "./fBrainUsers.controller.js";
const router = express.Router();

router.route("/").get((FBrainUsersController.apiGetFBrainUsers));

export default router;