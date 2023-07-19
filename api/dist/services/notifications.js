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
exports.deleteNotification = exports.createNotification = exports.listNotifications = void 0;
const notification_1 = __importDefault(require("../models/notification"));
const listNotifications = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const notifications = yield notification_1.default.find({ comercio });
    return notifications;
});
exports.listNotifications = listNotifications;
const createNotification = ({ title, action, description, }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerClient = yield notification_1.default.create({ name, title, action, description, comercio });
    if (!registerClient)
        return "ERROR_SAVE_CLIENT";
    return registerClient;
});
exports.createNotification = createNotification;
const deleteNotification = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteClient = yield notification_1.default.deleteOne({ comercio, _id: id });
    if (!deleteClient)
        return "ERROR_DELETE_CLIENT";
    return deleteClient;
});
exports.deleteNotification = deleteNotification;
