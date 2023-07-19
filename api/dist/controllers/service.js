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
exports.getServiceCtrl = exports.deleteServiceCtrl = exports.createServicesCtrl = exports.updateServicesCtrl = exports.listServicesCtrl = void 0;
const service_1 = require("../services/service");
const listServicesCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const listServicesResponse = yield (0, service_1.listServices)(comercio);
    res.send(listServicesResponse);
});
exports.listServicesCtrl = listServicesCtrl;
const updateServicesCtrl = ({ body, params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const updateServiceResponse = yield (0, service_1.updateService)(body, id, comercio);
    res.send(updateServiceResponse);
});
exports.updateServicesCtrl = updateServicesCtrl;
const createServicesCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const createServiceResponse = yield (0, service_1.createService)(body, comercio);
    res.send(createServiceResponse);
});
exports.createServicesCtrl = createServicesCtrl;
const deleteServiceCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const deleteServiceResponse = yield (0, service_1.deleteService)(id, comercio);
    res.send(deleteServiceResponse);
});
exports.deleteServiceCtrl = deleteServiceCtrl;
const getServiceCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const getServiceResponse = yield (0, service_1.getService)(id, comercio);
    res.send(getServiceResponse);
});
exports.getServiceCtrl = getServiceCtrl;
