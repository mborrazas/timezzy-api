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
exports.registerCtrl = exports.loginCtrl = void 0;
const auth_1 = require("../services/auth");
const loginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const responseUser = yield (0, auth_1.loginUser)({ email, password });
        res.send(responseUser);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_LOGIN");
    }
});
exports.loginCtrl = loginCtrl;
const registerCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, profilePhoto, description, name, phone } = body;
        const responseUser = yield (0, auth_1.registerUser)({ email, password, profilePhoto, description, name, comercio: "0", phone });
        res.send(responseUser);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_REGISTER");
    }
});
exports.registerCtrl = registerCtrl;
