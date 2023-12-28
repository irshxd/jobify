const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  whatsapp: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  position: {
    type: String,
  },
  certification: {
    type: String,
  },
  onjob: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
  },
  address: {
    type: String,
  },
  reference: {
    type: String,
  },
  industry: {
    type: String,
  },
});
module.exports = mongoose.model("Employee", employeeSchema);
