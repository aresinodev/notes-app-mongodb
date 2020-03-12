const User = require("../models/User");

const usersCtrl = {};

usersCtrl.renderSignupForm = (req, res) => {
    res.render("users/signup");
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        errors.push({ text: "Passwords do not match" });
    }

    if (password.length < 4) {
        errors.push({ text: "Passwords must be at least 4 characters." });
    }

    if (errors.length > 0) {
        res.render("users/signup", { errors, name, email });
    } else {
        const emailUser = await User.findOne({ email });

        if (emailUser) {
            req.flash("error_msg", "The email is already use.");
            res.redirect("/users/signup");
        } else {
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encryptPassword(password);

            await newUser.save();
            req.flash("success_msg", "Congrats! You are registered.");
            res.redirect("/users/signin");
        }
    }
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