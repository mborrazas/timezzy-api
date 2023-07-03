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
exports.getClientCtrl = exports.deleteClientCtrl = exports.createClientCtrl = exports.updateClientCtrl = exports.listClientCtrl = void 0;
const client_1 = require("../services/client");
const listClientCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const listClientResponse = yield (0, client_1.listClient)(comercio);
    res.send(listClientResponse);
});
exports.listClientCtrl = listClientCtrl;
const updateClientCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = body;
    const updateClientResponse = yield (0, client_1.updateClient)(id, comercio);
    res.send(updateClientResponse);
});
exports.updateClientCtrl = updateClientCtrl;
const createClientCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const createClientResponse = yield (0, client_1.createClient)(body, comercio);
    res.send(createClientResponse);
});
exports.createClientCtrl = createClientCtrl;
const deleteClientCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = body;
    const deleteClientResponse = yield (0, client_1.deleteClient)(id, comercio);
    res.send(deleteClientResponse);
});
exports.deleteClientCtrl = deleteClientCtrl;
const getClientCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = body;
    const getClientResponse = yield (0, client_1.getClient)(id, comercio);
    res.send(getClientResponse);
});
exports.getClientCtrl = getClientCtrl;
