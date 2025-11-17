const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Leave = require("./models/Leave");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/leavemanagement")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// POST Leave
app.post("/api/leave", async (req, res) => {
  const leave = new Leave(req.body);
  await leave.save();
  res.json({ message: "Leave Applied", leave });
});

// GET Leaves
app.get("/api/leave", async (req, res) => {
  const leaves = await Leave.find();
  res.json(leaves);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
