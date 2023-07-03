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
exports.getService = exports.deleteService = exports.createService = exports.updateService = exports.listServices = void 0;
const service_1 = __importDefault(require("../models/service"));
const listServices = ({ comercio }) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield service_1.default.find({ comercio });
    return services;
});
exports.listServices = listServices;
const updateService = (id, { comercio }) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateService = updateService;
const createService = ({ duration, name, personal }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.createService = createService;
const deleteService = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteService = deleteService;
const getService = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getService = getService;
