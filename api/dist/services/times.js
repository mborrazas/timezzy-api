"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeForDay = exports.getTime = exports.deleteTime = exports.createTime = exports.listTimes = void 0;
const times_1 = __importDefault(require("../models/times"));
const listTimes = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const times = yield times_1.default.find({ comercio });
    return times;
});
exports.listTimes = listTimes;
const createTime = ({ day, hours, opened }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerNewTime = yield times_1.default.create({ hours, day, opened, comercio });
    if (!registerNewTime)
        return "ERROR_SAVE_TIME";
    return registerNewTime;
});
exports.createTime = createTime;
const deleteTime = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteTime = yield times_1.default.deleteMany({ comercio });
    if (!deleteTime)
        return "ERROR_DELETE_TIME";
    return deleteTime;
});
exports.deleteTime = deleteTime;
const getTime = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const time = yield times_1.default.find({ _id: id, comercio });
    return time;
});
exports.getTime = getTime;
const getTimeForDay = (day, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const time = yield times_1.default.findOne({ day, comercio });
    return time;
});
exports.getTimeForDay = getTimeForDay;
