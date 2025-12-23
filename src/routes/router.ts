import { Router } from "express";

const router = Router();

router.get("/router", (req, res) => {
  res.send("Hello, Router!");
});

export default router;
