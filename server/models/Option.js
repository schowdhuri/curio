"use strict";

const mongoose = require("mongoose");

const OptionSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: [
            "TEXT",
            "IMAGE"
        ]
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Option", OptionSchema);
module.exports.OptionSchema = OptionSchema;
