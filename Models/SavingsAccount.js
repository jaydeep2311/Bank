const mongoose = require("mongoose");
const SavingsAccount = new mongoose.Schema({
  accountNo: { type: Number, required: true },
  balance: { type: Number, required: true },
  interestRate: { type: Number, required: true },
});
module.exports = mongoose.model("SavingsAccount", SavingsAccount);
