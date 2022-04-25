const userModel = require("../Models/User");
const FixedAccModel = require("../Models/FixedAccount");
const SavingAccModel = require("../Models/SavingsAccount");
const BranchDetail = require("../Models/BranchDetail");
const MasterAcc = require("../Models/MasterAccount");

async function createUser(req, res, next) {
  try {
    let userDetail = req.body;
    let response = await userModel.insertMany(userDetail);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}
async function createFixedAccount(req, res, next) {
  try {
    let AccDetail = req.body;
    let response = await FixedAccModel.insertMany(AccDetail);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}
async function createSavingsAccount(req, res, next) {
  try {
    let SavingDetail = req.body;
    let response = await SavingAccModel.insertMany(SavingDetail);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}
async function createBranchDetails(req, res, next) {
  try {
    let BranchDetails = req.body;
    let response = await BranchDetail.insertMany(BranchDetails);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}
async function createMasterAccount(req, res, next) {
  try {
    let MasterAccount = req.body;
    let response = await MasterAcc.insertMany(MasterAccount);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}
async function getAlluser(req, res, next) {
  try {
    let response = await userModel
      .find({ Master_ac: "6266cf3defe9bc0e843555f2" })
      .populate("Saving_ac")
      .populate("Fixed_ac");
    res.json(response);
  } catch (error) {
    res.send(error);
  }
}
module.exports = {
  createUser,
  createFixedAccount,
  createSavingsAccount,
  createBranchDetails,
  createMasterAccount,
};
