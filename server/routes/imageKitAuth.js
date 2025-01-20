import express from "express";

const router = express.Router();

import { imagekitAuth } from "../controllers/imageKitAuth.js";

router.get('/auth', imagekitAuth);

export default router;