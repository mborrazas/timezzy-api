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
exports.listPersonalByServices = exports.addCommerce = exports.getPersonal = exports.deletePersonal = exports.createPersonal = exports.updatePersonal = exports.listPersonal = void 0;
const personal_1 = __importDefault(require("../models/personal"));
const listPersonal = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const personal = yield personal_1.default.find({ comercio });
    return personal;
});
exports.listPersonal = listPersonal;
const listPersonalByServices = (services, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const personal = yield personal_1.default.find({ _id: { $in: services } });
    return personal;
});
exports.listPersonalByServices = listPersonalByServices;
const updatePersonal = ({ name, description, profilePhoto, phone, email }, id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerPersonal = yield personal_1.default.updateOne({ _id: id, comercio: comercio }, { $set: { name, description, profilePhoto, phone, email } });
    if (!registerPersonal)
        return "ERROR_UPDATE_PERSONAL";
    return registerPersonal;
});
exports.updatePersonal = updatePersonal;
const addCommerce = ({ comercio }, id) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.addCommerce = addCommerce;
const createPersonal = ({ name, description, profilePhoto, phone, email }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerPersonal = yield personal_1.default.create({ name, phone, email, description, profilePhoto, comercio });
    if (!registerPersonal)
        return "ERROR_SAVE_PERSONAL";
    return registerPersonal;
});
exports.createPersonal = createPersonal;
const deletePersonal = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const deletePersonal = yield personal_1.default.deleteOne({ comercio, _id: id });
    if (!deletePersonal)
        return "ERROR_DELETE_PERSONAL";
    return deletePersonal;
});
exports.deletePersonal = deletePersonal;
const getPersonal = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const personal = yield personal_1.default.find({ _id: id, comercio });
    return personal;
});
exports.getPersonal = getPersonal;
