const mongoose = require("mongoose");
const MasterAccount = new mongoose.Schema({
  balance: { type: Number, required: true },
  Branch_id: { type: mongoose.Schema.Types.ObjectId, ref: "BranchDetail" },
});
module.exports = mongoose.model("MasterAccount", MasterAccount);
