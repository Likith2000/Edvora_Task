const express = require("express");

const {
  getUserController,
  changePasswordController,
  logoutController
} = require("../controllers/UserController");
const { userAuth } = require("../middleware/auth");

const router = express.Router();
router.use(userAuth);

router.get("/me", getUserController);
router.patch("/me", changePasswordController);
router.post("/me", logoutController);

module.exports = router;
