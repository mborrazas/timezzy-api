"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Bookingschema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    client: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    services: {
        required: true,
        type: [mongoose_1.Schema.Types.ObjectId]
    },
    openHour: {
        required: true,
        type: String
    },
    closeHour: {
        required: true,
        type: String
    },
    personal: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    status: {
        required: true,
        type: String
    },
}, {
    versionKey: false,
    timestamps: true
});
const BookingModel = (0, mongoose_1.model)("booking", Bookingschema);
exports.default = BookingModel;
