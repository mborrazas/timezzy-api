"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Notificationschema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    action: {
        required: true,
        type: Boolean
    }
}, {
    versionKey: false,
    timestamps: true
});
const NotificationModel = (0, mongoose_1.model)("notification", Notificationschema);
exports.default = NotificationModel;
