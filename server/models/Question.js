"use strict";

const mongoose = require("mongoose");

const OptionSchema = require("./Option").OptionSchema;

const QSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    options: [ OptionSchema ],
    answer: OptionSchema,
    hideOptions: Boolean
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    }
});

module.exports = mongoose.model("Question", QSchema);
