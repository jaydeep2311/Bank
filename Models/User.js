const mongoose = require("mongoose");
const User = new mongoose.Schema({
  Master_ac: { type: mongoose.Schema.Types.ObjectId, ref: "MasterAccount" },
  Saving_ac: [{ type: mongoose.Schema.Types.ObjectId, ref: "SavingsAccount" }],
  Fixed_ac: [{ type: mongoose.Schema.Types.ObjectId, ref: "FixedAccount" }],
  firstName: { type: String, required: true },
  lastName: { type: String },
  age: { type: Number, required: true },
  phoneNo: { type: Number },
  email: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, default: "female" },
  type: { type: String, default: "Customer" },
});
module.exports = mongoose.model("User", User);
