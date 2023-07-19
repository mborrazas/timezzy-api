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
exports.getVacationCtrl = exports.deleteVacationCtrl = exports.createVacationCtrl = exports.updateVacationCtrl = exports.listVacationCtrl = void 0;
const vacation_1 = require("../services/vacation");
const listVacationCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const listVacationResponse = yield (0, vacation_1.listVacations)(comercio);
    res.send(listVacationResponse);
});
exports.listVacationCtrl = listVacationCtrl;
const updateVacationCtrl = ({ body, user, params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const updateVacationsResponse = yield (0, vacation_1.updateVacation)(body, id, comercio);
    res.send(updateVacationsResponse);
});
exports.updateVacationCtrl = updateVacationCtrl;
const createVacationCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const createVacationResponse = yield (0, vacation_1.createVacation)(body, comercio);
    res.send(createVacationResponse);
});
exports.createVacationCtrl = createVacationCtrl;
const deleteVacationCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const deleteVacationResponse = yield (0, vacation_1.deleteVacation)(id, comercio);
    res.send(deleteVacationResponse);
});
exports.deleteVacationCtrl = deleteVacationCtrl;
const getVacationCtrl = ({ body, user, params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const getVacationResponse = yield (0, vacation_1.getVacation)(id, comercio);
    res.send(getVacationResponse);
});
exports.getVacationCtrl = getVacationCtrl;
