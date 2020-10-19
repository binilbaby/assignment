import { Router } from "express";
import login from "./login";
import retailData from "./retailData";

const router = Router();

router.use(
  login,
  retailData
);

export default router;
