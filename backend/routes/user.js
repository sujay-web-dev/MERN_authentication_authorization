const express = require("express");
const { loginUser, signUpUser } = require("../controllers/userController");

const router = express.Router();

// Login Route
router.post("/login",loginUser)

// Sign Up Route
router.post("/signup",signUpUser)

module.exports = router;