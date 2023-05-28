const express = require("express");


const router = express.Router();
const registeruser = require("./usercontroller");


router.route("/api/v1/register").post(registeruser);

module.exports = router;