const express = require('express');
const router = express.Router();
const signUp = require('../controller/signUp');
const logInUser = require("../controller/logInUser");
const getLoggedInUser = require('../controller/getLoggedInUser');
const signOutUser = require('../controller/signOutUser');
const addCustomer = require('../controller/addCustomer');
const getAllCustomers = require('../controller/getAllCustomers');
const getCustomerById = require('../controller/getCustomerById');
const updateCustomer = require('../controller/updateCustomer');
const deleteCustomer = require('../controller/deleteCustomer');
const removeAuthCustomer = require('../controller/removeAuthCustomer');
const getCustomerByEmail = require('../controller/getCustomerByEmail');

router.route("/signUp").post(signUp);
router.route("/logIn").post(logInUser);
router.route("/getLoggedInUser").get(getLoggedInUser);
router.route("/signOutUser").get(signOutUser);
router.route("/addCustomer").post(addCustomer);
router.route("/getAllCustomers").get(getAllCustomers);
router.route("/getCustomerById/:id").get(getCustomerById);
router.route("/updateCustomer").put(updateCustomer);
router.route("/deleteCustomer/:id").delete(deleteCustomer);
router.route("/removeAuthCustomer/:authId").delete(removeAuthCustomer); // not of use
router.route("/getCustomerByEmail/:email").get(getCustomerByEmail);

module.exports = router;