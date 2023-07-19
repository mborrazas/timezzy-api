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
exports.getCommerce = exports.createCommerce = exports.updateCommerce = void 0;
const ObjectId = require('mongodb').ObjectId;
const comercio_1 = __importDefault(require("../models/comercio"));
const updateCommerce = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateCommerce = updateCommerce;
const createCommerce = ({ owner, name, city, country, address, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const registerCommerce = yield comercio_1.default.create({ owner, name, city, country, address, type });
    if (!registerCommerce)
        return "ERROR_SAVE_COMMERCE";
    return registerCommerce;
});
exports.createCommerce = createCommerce;
const getCommerce = (commerce) => __awaiter(void 0, void 0, void 0, function* () {
    const commerceResponse = yield comercio_1.default.find({ _id: new ObjectId(commerce) });
    return commerceResponse;
});
exports.getCommerce = getCommerce;
