"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Serviceschema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    duration: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    personal: {
        type: [mongoose_1.Schema.Types.ObjectId]
    }
}, {
    versionKey: false,
    timestamps: true
});
const ServiceModel = (0, mongoose_1.model)("services", Serviceschema);
exports.default = ServiceModel;
