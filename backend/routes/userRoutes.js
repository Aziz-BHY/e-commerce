const express = require("express");
const router = express.Router();

const {
    getUserInfo,
    signin,
    signup,
    updateUser
} = require("../controllers/userController");

router.route("/:id").get(getUserInfo);
router.route("/signin").post(signin);
router.route("/signup").post(signup);
router.route("/:id").put(updateUser);

module.exports = router;