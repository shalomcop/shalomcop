import express from "express";
const router = express.Router();
import { listGenerator } from "./listControl";

router.get ("/get-list",listGenerator)

export default router;