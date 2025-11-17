const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  name: String,
  type: String,
  from: String,
  to: String,
  reason: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Leave", leaveSchema);
