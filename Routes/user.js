const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("../Controllers/user");

app.use(bodyParser.json([]));
app.post("/user", userController.createUser);
app.get("/user", usercontroller.getAlluser);
app.post("/FixedAccount", userController.createFixedAccount);
app.post("/SavingsAccount", userController.createSavingsAccount);
app.post("/MasterAccounts", userController.createMasterAccount);
app.post("/BranchDetails", userController.createBranchDetails);

module.exports = app;
