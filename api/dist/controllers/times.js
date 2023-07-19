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
exports.deleteTimeCtrl = exports.createTimeCtrl = exports.listTimesCtrl = void 0;
const times_1 = require("../services/times");
const listTimesCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const listTimesResponse = yield (0, times_1.listTimes)(comercio);
    res.send(listTimesResponse);
});
exports.listTimesCtrl = listTimesCtrl;
const createTimeCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    yield (0, times_1.deleteTime)(comercio);
    body.map((day) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, times_1.createTime)(day, comercio);
    }));
    res.send({});
});
exports.createTimeCtrl = createTimeCtrl;
const deleteTimeCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const deleteTimeCtrl = yield (0, times_1.deleteTime)(comercio);
    res.send(deleteTimeCtrl);
});
exports.deleteTimeCtrl = deleteTimeCtrl;
