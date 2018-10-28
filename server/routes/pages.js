"use strict";

const isAuthenticated = require("../controllers/AuthController").isAuthenticated;

const pageRoutes = app => {
    app.route("/login").get((req, res) => {
        res.render("login");
    });
    app.get([
        "/",
        "/admin",
        "/admin/question/add",
        "/admin/question/edit",
        "/admin/question/import"
    ], (req, res) => {
        if(isAuthenticated(req))
            return res.render("index");
        res.render("login");
    });
};

module.exports = pageRoutes;
