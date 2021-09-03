const {
  successResponseWithData,
  unauthorizedResponse,
  validationErrorResponse
} = require("../helpers/response");
const { createPermissionError } = require("../helpers/errors");

let User = require("../models/user.model");

// user section
module.exports.loginUserController = [
  async (req, res) => {
    try {
      const { uid, password } = req.body;
      const user = await User.getUserDetails(uid);
      if (user.password !== password) {
        throw createPermissionError(
          "user_password_mismatch",
          "User password does not match"
        );
      }
      const token = await user.generateAuthToken();
      user.password = undefined;
      user.tokens = token;
      successResponseWithData(res, user);
    } catch (error) {
      unauthorizedResponse(res, error);
    }
  },
];

module.exports.registerUserController = [
  async (req, res) => {
    try {
      const { uid, password } = req.body;
      const res_message = await User.addUser(
        uid,
        password,
      );
      console.log(res_message);
      if (res_message == undefined) {
        throw createPermissionError("400", "User could not be added");
      }
      successResponseWithData(res, res_message);
    } catch (error) {
      validationErrorResponse(res, error);
    }
  },
];


