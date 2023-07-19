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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listNotificationCtrl = exports.deleteNotificationCtrl = void 0;
const notifications_1 = require("../services/notifications");
const listNotificationCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const listNotificationsResponse = yield (0, notifications_1.listNotifications)(comercio);
    res.send(listNotificationsResponse);
});
exports.listNotificationCtrl = listNotificationCtrl;
const deleteNotificationCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const deleteNotificationPersonal = yield (0, notifications_1.deleteNotification)(id, comercio);
    res.send(deleteNotificationPersonal);
});
exports.deleteNotificationCtrl = deleteNotificationCtrl;
