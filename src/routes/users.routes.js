const { Router } = require("express");
const router = Router();

const {
    renderSignupForm,
    signup,
    renderSigninForm,
    signin,
    logout } = require("../controllers/users.controller");

router.get("/users/signup", renderSignupForm);

router.post("/users/signup", signup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;