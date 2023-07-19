"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Clientchema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});
const ClientModel = (0, mongoose_1.model)("client", Clientchema);
exports.default = ClientModel;
