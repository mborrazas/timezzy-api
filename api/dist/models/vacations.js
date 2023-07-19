"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Vacationschema = new mongoose_1.Schema({
    comercio: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId
    },
    name: {
        required: true,
        type: String
    },
    fullDay: {
        required: true,
        type: Boolean
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
        type: [mongoose_1.Schema.Types.ObjectId]
    }
}, {
    versionKey: false,
    timestamps: true
});
const VacationModel = (0, mongoose_1.model)("vacation", Vacationschema);
exports.default = VacationModel;
