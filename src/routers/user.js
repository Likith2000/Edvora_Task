const express = require("express");

const {
  registerUserController,
  loginUserController,
  getUserController,
  changePasswordController,
} = require("../controllers/UserController");
const { userAuth } = require("../middleware/auth");

const router = express.Router();
// router.use(userAuth);

// router.get("/me", getUserController);
router.post("/register",  registerUserController);
router.post("/login", loginUserController);
// router.patch("/me", changePasswordController);

module.exports = router;
