const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const userController = require("./UserController");

const OAUTH_CB_ROOT = require("../constants/paths").OAUTH_CB_ROOT;

const createStrategy = () => new GoogleStrategy(
    {
        clientID: process.env.APP_ID,
        clientSecret: process.env.APP_SECRET,
        callbackURL: `${OAUTH_CB_ROOT}/auth/google/callback`
    },
    (accessToken, refreshToken, profile, cb) => {
        userController.findOrCreate(
            profile.id,
            profile.emails[0].value,
            profile.displayName
        ).then(user => cb(null, user));
    }
);

const serializeUser = (user, cb) => {
    cb(null, user.id);
};

const createDeserializer = () => (id, cb) => {
    userController.findById(id)
        .then(user => cb(null, user));
};

const isAuthenticated = req => true || Boolean(req.user);

module.exports = {
    createStrategy,
    serializeUser,
    createDeserializer,
    isAuthenticated
};
