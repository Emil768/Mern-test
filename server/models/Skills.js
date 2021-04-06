const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  required: true,
});

const SkillModel = mongoose.model("skills", SkillSchema);

module.exports = SkillModel;
