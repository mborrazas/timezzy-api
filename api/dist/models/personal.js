"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Personalschema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        type: String
    },
    profilePhoto: {
        type: String
    },
    description: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});
const PersonalModel = (0, mongoose_1.model)("personal", Personalschema);
exports.default = PersonalModel;
