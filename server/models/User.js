"use strict";

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    authid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    }
});

module.exports = mongoose.model("User", UserSchema);
