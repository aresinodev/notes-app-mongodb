const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(new localStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    // Comprobamos si existe el email del usuario en la base de datos.
    const user = await User.findOne({ email });

    if (!user) {
        return done(null, false, { message: "Not user found." });
    } else {
        // Validamos la contraseña del usuario.
        const matchPassword = await user.matchPassword(password);

        if (matchPassword) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Incorrect password." });
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
        done(error, user);
    });
});