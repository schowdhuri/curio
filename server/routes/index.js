const STATIC_DIR_ALIAS = require("../constants/paths").STATIC_DIR_ALIAS;

const authAPI = require("./AuthAPI");
const loginCheckAPI = require("./LoginCheckAPI");

const UserAPI = require("./UserAPI");
const QuestionAPI = require("./QuestionAPI");
const pageRoutes = require("./pages");

module.exports = app => {
    authAPI(app);
    loginCheckAPI(app);

    UserAPI(app);
    QuestionAPI(app);
    pageRoutes(app);

    app.route("*").get((req, res, next) => {
        if(req.url.startsWith(`${STATIC_DIR_ALIAS}/`) ||
            req.url.startsWith("/__webpack_hmr")
        ) {
            return next();
        }
        res.send("huh?", 400);
    });
};
