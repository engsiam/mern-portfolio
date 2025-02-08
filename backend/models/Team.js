const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model("Team", teamSchema);
