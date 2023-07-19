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
exports.getClient = exports.deleteClient = exports.createClient = exports.updateClient = exports.listClient = void 0;
const client_1 = __importDefault(require("../models/client"));
const listClient = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield client_1.default.find({ comercio });
    return clients;
});
exports.listClient = listClient;
const updateClient = ({ name, phone, email, address }, comercio, id) => __awaiter(void 0, void 0, void 0, function* () {
    const registerClient = yield client_1.default.updateOne({ _id: id, comercio: comercio }, { $set: { name, phone, email, address } });
    if (!registerClient)
        return "ERROR_UPDATE_CLIENT";
    return registerClient;
});
exports.updateClient = updateClient;
const createClient = ({ name, phone, email, address }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerClient = yield client_1.default.create({ name, phone, email, address, comercio });
    if (!registerClient)
        return "ERROR_SAVE_CLIENT";
    return registerClient;
});
exports.createClient = createClient;
const deleteClient = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteClient = yield client_1.default.deleteOne({ comercio, _id: id });
    if (!deleteClient)
        return "ERROR_DELETE_CLIENT";
    return deleteClient;
});
exports.deleteClient = deleteClient;
const getClient = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield client_1.default.find({ _id: id, comercio });
    return client;
});
exports.getClient = getClient;
