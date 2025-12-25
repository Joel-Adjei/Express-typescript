import { Router } from "express";

const router = Router();

router.get("/router", (req, res) => {
  res.send("Hello, Router!");
});

router.post("/router", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.send("Hello, Router!");
});

router.put("/router", (req, res) => {
  const data = req.body;
  console.log("Updated data:", data);
  res.send("Hello, Router!");
});

export default router;
