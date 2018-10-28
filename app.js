const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const mongoose = require("mongoose");

dotenv.config();

const routes = require("./server/routes");
const mongoConfig = require("./server/constants/mongoConfig");
const AuthController = require("./server/controllers/AuthController");
require("./server/models");

const {
    STATIC_DIR,
    STATIC_DIR_ALIAS,
    UPLOAD_DIR,
    UPLOAD_DIR_ALIAS
} = require("./server/constants/paths");

const PORT = 3200;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(STATIC_DIR_ALIAS, express.static(STATIC_DIR));
app.use(cookieParser());

// express session
app.use(expressSession({
    secret: process.env.SALT,
    resave: false,
    saveUninitialized: false
}));
// auth setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(AuthController.createStrategy());
passport.serializeUser(AuthController.serializeUser);
passport.deserializeUser(AuthController.createDeserializer());

// view engine
app.set("views", path.join(__dirname, "server", "views"));
app.set("view engine", "pug");

// Routes
routes(app);

// HMR setup (dev-only)
if(process.env.NODE_ENV == "development") {
    const webpack = require("webpack");
    const webpackConfig = require("./webpack.config.dev");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");

    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

// Mongo
mongoose.connect(mongoConfig);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", function() {
    // Start server!
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on PORT ${PORT}`);
    });
});
