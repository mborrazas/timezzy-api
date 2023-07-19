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
exports.listByServicesCtrl = exports.getPersonalCtrl = exports.deletePersonalCtrl = exports.createPersonalCtrl = exports.updatePersonalCtrl = exports.listPersonalCtrl = void 0;
const personal_1 = require("../services/personal");
const service_1 = require("../services/service");
const listPersonalCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const listPersonalResponse = yield (0, personal_1.listPersonal)(comercio);
    res.send(listPersonalResponse);
});
exports.listPersonalCtrl = listPersonalCtrl;
const updatePersonalCtrl = ({ body, params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const updatePersonalServices = yield (0, service_1.updatePersonalService)(body.services, id);
    const updatePersonalResponse = yield (0, personal_1.updatePersonal)(body, id, comercio);
    res.send(updatePersonalResponse);
});
exports.updatePersonalCtrl = updatePersonalCtrl;
const createPersonalCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const createPersonalResponse = yield (0, personal_1.createPersonal)(body, comercio);
    res.send(createPersonalResponse);
});
exports.createPersonalCtrl = createPersonalCtrl;
const deletePersonalCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const deletePersonalResponse = yield (0, personal_1.deletePersonal)(id, comercio);
    res.send(deletePersonalResponse);
});
exports.deletePersonalCtrl = deletePersonalCtrl;
const getPersonalCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const getPersonalResponse = yield (0, personal_1.getPersonal)(id, comercio);
    const getPersonalServices = yield (0, service_1.listServicesByPersonal)(comercio, id);
    res.send({ personal: getPersonalResponse, services: getPersonalServices });
});
exports.getPersonalCtrl = getPersonalCtrl;
const listByServicesCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { services } = body;
    const listPersonalResponse = yield (0, personal_1.listPersonalByServices)(services, comercio);
    res.send(listPersonalResponse);
});
exports.listByServicesCtrl = listByServicesCtrl;
