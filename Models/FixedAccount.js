const mongoose = require("mongoose");
const FixedAccount = new mongoose.Schema({
  accountNo: { type: Number, required: true, unique: true },
  balance: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  startDate: { type: String, required: true },
  EndDate: { type: String, required: true },
});
module.exports = mongoose.model("FixedAccount", FixedAccount);
