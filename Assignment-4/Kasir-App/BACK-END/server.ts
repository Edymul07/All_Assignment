import express, { Application, Request, Response } from "express";
require("dotenv").config();
const server: Application = express();

const { port } = process.env;
const product = require("./routes/product");
const roles = require("./routes/roles");
const user = require("./routes/user");
const category = require("./routes/category");
const report = require("./routes/report");
const payment = require("./routes/payment");

server.get("/", (req: Request, res: Response) => {
  res.send("testing api");
});
server.use("/product", product);
server.use("/roles", roles);
server.use("/user", user);
server.use("/category", category);
server.use("/report", report);
server.use("/payment", payment);

server.listen(port, () => {
  console.log(`server is runing http://localhost:${port}`);
});
