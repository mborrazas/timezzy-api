"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Comercioschema = new mongoose_1.Schema({
    owner: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    name: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: Number
    },
    country: {
        required: true,
        type: Number
    },
    address: {
        type: String
    },
    type: {
        required: true,
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});
const ComercioModel = (0, mongoose_1.model)("comercio", Comercioschema);
exports.default = ComercioModel;
