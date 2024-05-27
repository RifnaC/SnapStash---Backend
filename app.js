const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.ztlosb7.mongodb.net/SnapStash?retryWrites=true&w=majority");

app.use("/api/users", userRoutes);

module.exports = app;
