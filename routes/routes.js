const express = require('express');
const router = express.Router();
const signUp = require('../controller/signUp');
const logInUser = require("../controller/logInUser");
const getLoggedInUser = require('../controller/getLoggedInUser');
const signOutUser = require('../controller/signOutUser');

router.route("/signUp").post(signUp);
router.route("/logIn").post(logInUser);
router.route("/getLoggedInUser").get(getLoggedInUser);
router.route("/signOutUser").get(signOutUser);

module.exports = router;