import express, { Request, Response } from "express";
let router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send(`API pengguna`);
});
module.exports = router;
