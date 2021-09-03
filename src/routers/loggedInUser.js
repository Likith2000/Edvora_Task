const express = require("express");

const {
  getUserController,
  changePasswordController,
} = require("../controllers/UserController");
const { userAuth } = require("../middleware/auth");

const router = express.Router();
router.use(userAuth);

router.get("/me", getUserController);
router.patch("/me", changePasswordController);

module.exports = router;
