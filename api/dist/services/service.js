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
exports.updatePersonalService = exports.listServicesByPersonal = exports.getService = exports.deleteService = exports.createService = exports.updateService = exports.listServices = void 0;
const service_1 = __importDefault(require("../models/service"));
const listServices = (comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield service_1.default.find({ comercio });
    return services;
});
exports.listServices = listServices;
const listServicesByPersonal = (comercio, personal) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield service_1.default.find({ comercio, personal }, { _id: 1 });
    return services;
});
exports.listServicesByPersonal = listServicesByPersonal;
const updatePersonalService = (services, personal) => __awaiter(void 0, void 0, void 0, function* () {
    const updateService = yield service_1.default.updateMany({ $pull: { personal: personal } });
    if (!updateService)
        return "ERROR_UPDATE_SERVICE";
    services.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const updateService = yield service_1.default.updateOne({ _id: item }, { $push: { personal: personal } });
        if (!updateService)
            return "ERROR_UPDATE_SERVICE";
    }));
    return updateService;
});
exports.updatePersonalService = updatePersonalService;
const updateService = ({ duration, name, personal, price }, id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const updateService = yield service_1.default.updateOne({ _id: id, comercio: comercio }, { $set: { duration, name, personal, price } });
    if (!updateService)
        return "ERROR_UPDATE_SERVICE";
    return updateService;
});
exports.updateService = updateService;
const createService = ({ duration, name, personal, price }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerNewService = yield service_1.default.create({ duration, name, personal, comercio, price });
    if (!registerNewService)
        return "ERROR_SAVE_SERVICE";
    return registerNewService;
});
exports.createService = createService;
const deleteService = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteService = yield service_1.default.deleteOne({ comercio, _id: id });
    if (!deleteService)
        return "ERROR_DELETE_SERVICE";
    return deleteService;
});
exports.deleteService = deleteService;
const getService = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_1.default.find({ _id: id, comercio });
    return service;
});
exports.getService = getService;
