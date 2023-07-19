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
exports.registerUser = exports.loginUser = void 0;
const personal_1 = __importDefault(require("../models/personal"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield personal_1.default.findOne({ email });
    if (!checkIs)
        return "NOT_FOUND_USER";
    const passwordHash = checkIs.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return "PASSWORD_INCORRECT";
    const token = (0, jwt_handle_1.generateToken)(checkIs.email, checkIs._id, checkIs.comercio);
    const data = {
        token,
        user: checkIs
    };
    return data;
});
exports.loginUser = loginUser;
const registerUser = ({ email, password, profilePhoto, description, name, comercio, phone }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkIs = yield personal_1.default.findOne({ email });
        if (checkIs)
            return "ALREADY_USER";
        const passhash = yield (0, bcrypt_handle_1.encrypt)(password);
        const registerNewUser = yield personal_1.default.create({ email, password: passhash, name, profilePhoto, description, comercio, phone });
        if (!registerNewUser)
            return "ERROR_SAVE_USER";
        const token = yield (0, jwt_handle_1.generateToken)(email, registerNewUser._id, "0");
        const data = {
            token,
            user: registerNewUser
        };
        return data;
    }
    catch (e) {
        console.error(e);
        return "ERROR_SAVE_USER";
    }
});
exports.registerUser = registerUser;
