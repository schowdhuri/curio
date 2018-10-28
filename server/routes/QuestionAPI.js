"use strict";

const controller = require("../controllers/QuestionController");
const sendError = require("../helpers/sendHttpError");

const questionAPIRoutes = app => {
    app.route("/api/question")
        .get(async (req, res) => {
            try {
                const result = await controller.findAll();
                res.json(result);
            } catch(ex) {
                sendError(ex, res);
            }
        })
        .post(async (req, res) => {
            try {
                const result = await controller.create(req.body);
                res.json(result);
            } catch(ex) {
                sendError(ex, res);
            }
        });

    app.route("/api/question/:id")
        .get(async (req, res) => {
            try {
                const result = await controller.findById(
                    req.params.id
                );
                res.json(result);
            } catch(ex) {
                sendError(ex, res);
            }
        })
        .put(async (req, res) => {
            try {
                const result = await controller.update(
                    req.params.id,
                    req.body
                );
                res.json(result);
            } catch(ex) {
                sendError(ex, res);
            }
        })
        .delete(async (req, res) => {
            try {
                const result = await controller.remove(
                    req.params.id
                );
                res.json(result);
            } catch(ex) {
                sendError(ex, res);
            }
        });
};

module.exports = questionAPIRoutes;
