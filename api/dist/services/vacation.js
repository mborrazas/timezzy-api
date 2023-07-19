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
exports.getVacationForPersonal = exports.getVacation = exports.deleteVacation = exports.createVacation = exports.updateVacation = exports.listVacations = void 0;
const vacations_1 = __importDefault(require("../models/vacations"));
const listVacations = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const vacations = yield vacations_1.default.find({ comercio });
    return vacations;
});
exports.listVacations = listVacations;
const updateVacation = ({ name, openHour, closeHour, personal, fullDay }, id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const updateVacation = yield vacations_1.default.updateOne({ _id: id, comercio: comercio }, { $set: { name, openHour, closeHour, personal, fullDay } });
    if (!updateVacation)
        return "ERROR_UPDATE_VACATION";
    return updateVacation;
});
exports.updateVacation = updateVacation;
const createVacation = ({ name, openHour, closeHour, personal, fullDay }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerNewVacation = yield vacations_1.default.create({ openHour, closeHour, name, personal, comercio, fullDay });
    if (!registerNewVacation)
        return "ERROR_SAVE_VACATION";
    return registerNewVacation;
});
exports.createVacation = createVacation;
const deleteVacation = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const deleteVacation = yield vacations_1.default.deleteOne({ comercio, _id: id });
    if (!deleteVacation)
        return "ERROR_DELETE_VACATION";
    return deleteVacation;
});
exports.deleteVacation = deleteVacation;
const getVacation = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const vacation = yield vacations_1.default.find({ _id: id, comercio });
    return vacation;
});
exports.getVacation = getVacation;
const getVacationForPersonal = (personal, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const vacation = yield vacations_1.default.find({ personal, comercio });
    return vacation;
});
exports.getVacationForPersonal = getVacationForPersonal;
