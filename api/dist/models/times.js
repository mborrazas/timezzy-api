"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Timesschema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    opened: {
        required: true,
        type: Boolean
    },
    day: {
        required: true,
        type: String
    },
    hours: [Object]
}, {
    versionKey: false,
    timestamps: true
});
const TimesModel = (0, mongoose_1.model)("times", Timesschema);
exports.default = TimesModel;
