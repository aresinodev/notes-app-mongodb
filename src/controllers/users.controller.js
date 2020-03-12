const usersCtrl = {};

usersCtrl.renderSignupForm = (req, res) => {
    res.render("users/signup");
};

usersCtrl.signup = (req, res) => {
    res.send("Signup");
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render("users/signin");
};

usersCtrl.signin = (req, res) => {
    res.send("Signin");
};

usersCtrl.logout = (req, res) => {
    res.send("Logout");
};

module.exports = usersCtrl;