const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

// Middlewares
// Sirve para decirle que los datos que vengan de un formulario a una petición de cualquier tipo se trate como un JSON.
app.use(express.urlencoded({ extended: false }));

// Global variables

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

// Static files
// Se le indica a Node que en ese directorio se encuentra la carpeta public.
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;