import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
//  res.render("index");
  res.render("chat",{});
});

export default router;