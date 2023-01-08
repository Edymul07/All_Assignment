"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const server = (0, express_1.default)();
const { port } = process.env;
const product = require("./routes/product");
const roles = require("./routes/roles");
const user = require("./routes/user");
const category = require("./routes/category");
const report = require("./routes/report");
const payment = require("./routes/payment");
server.get("/", (req, res) => {
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
