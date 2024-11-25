const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  offering: { type: String, required: true },
  need: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
