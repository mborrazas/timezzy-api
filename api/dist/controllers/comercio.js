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
exports.getCommerceCtrl = exports.generateCommerce = void 0;
const commerce_1 = require("../services/commerce");
const personal_1 = require("../services/personal");
const generateCommerce = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, city, country, address, type } = body;
        const { id } = user;
        const responseCommerce = yield (0, commerce_1.createCommerce)({ owner: id, name, city, country, address, type });
        if (responseCommerce == "ERROR_SAVE_COMMERCE")
            return res.send(responseCommerce);
        const updateUser = yield (0, personal_1.addCommerce)(id, { comercio: responseCommerce._id });
        res.send(responseCommerce);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_GENERATE_COMMERCE");
    }
});
exports.generateCommerce = generateCommerce;
const getCommerceCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseCommerce = yield (0, commerce_1.getCommerce)(id);
        return res.send(responseCommerce);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_GET_COMMERCE");
    }
});
exports.getCommerceCtrl = getCommerceCtrl;
