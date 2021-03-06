import express from "express";
const router = express.Router();

import controllerAuth from "../controllers/auth";

router.post("/sign-in", controllerAuth.signIn);
router.post("/sign-up", controllerAuth.signUp);

export default router;
