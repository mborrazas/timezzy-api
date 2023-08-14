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
exports.getBookingHoursCtrl = exports.getBookingCtrl = exports.deleteBookingCtrl = exports.createBookingCtrl = exports.updateBookingCtrl = exports.listBookingCtrl = void 0;
const moment_1 = __importDefault(require("moment"));
const booking_1 = require("../services/booking");
const service_1 = require("../services/service");
const times_1 = require("../services/times");
const vacation_1 = require("../services/vacation");
const listBookingCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { date } = body;
    const listBookingResponse = yield (0, booking_1.listBooking)(comercio, date);
    res.send(listBookingResponse);
});
exports.listBookingCtrl = listBookingCtrl;
const updateBookingCtrl = ({ body, user, params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const updateBookingResponse = yield (0, booking_1.updateBooking)(body, id, comercio);
    res.send(updateBookingResponse);
});
exports.updateBookingCtrl = updateBookingCtrl;
const createBookingCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const createBookingResponse = yield (0, booking_1.createBooking)(body, comercio);
    res.send(createBookingResponse);
});
exports.createBookingCtrl = createBookingCtrl;
const deleteBookingCtrl = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const deleteBookingResponse = yield (0, booking_1.deleteBooking)(id, comercio);
    res.send(deleteBookingResponse);
});
exports.deleteBookingCtrl = deleteBookingCtrl;
const getBookingCtrl = ({ body, user, params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comercio } = user;
    const { id } = params;
    const getBookingResponse = yield (0, booking_1.getBooking)(id, comercio);
    res.send(getBookingResponse);
});
exports.getBookingCtrl = getBookingCtrl;
const getBookingHoursCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { comercio } = body;
    const dateSelected = (0, moment_1.default)(body.day, 'YYYY-MM-DD');
    const today = (0, moment_1.default)();
    const personalBookings = yield (0, booking_1.getBookingByPersonalAndDate)(body.personal, comercio, dateSelected.format('YYYY-MM-DD'));
    const dateUsed = personalBookings.map((booking) => {
        return { openHour: booking.openHour, closeHour: booking.closeHour };
    });
    const storeHours = yield (0, times_1.getTimeForDay)(dateSelected.format('dddd'), comercio);
    const holidays = yield (0, vacation_1.getVacationForPersonal)(body.personal, comercio);
    let stayHolidays = false;
    holidays.map((holiday) => {
        if (holiday.fullDay && dateSelected.isBetween((0, moment_1.default)(holiday.openHour, 'DD/MM/YYYY'), (0, moment_1.default)(holiday.closeHour, 'DD/MM/YYYY'), null, '[]')) {
            stayHolidays = true;
        }
    });
    if (stayHolidays) {
        res.send({});
        return;
    }
    const service = yield (0, service_1.getService)(body.service, comercio);
    if (!service) {
        res.send({});
        return;
    }
    const tiempo = body.hours;
    const serviceTime = Number((_b = (_a = service[0]) === null || _a === void 0 ? void 0 : _a.duration) !== null && _b !== void 0 ? _b : 0);
    const [horas, minutos] = tiempo.split(":");
    // Calculamos cual es el "cuarto de hora" actual basado en los minutos
    // Es decir 00, 15, 30 o 45
    let cuartoActual = Math.floor(Number(minutos) / serviceTime) * serviceTime;
    // Iniciamos la fecha en la hora 0 de hoy y le asignamos la hora y los minutos del cuarto de hora actual
    let fecha = (0, moment_1.default)().startOf("day");
    if (dateSelected.isSame(new Date(), 'date')) {
        fecha = (0, moment_1.default)().startOf("day").hour(Number(horas)).minute(cuartoActual);
    }
    const currentDay = fecha.date(); //Sacamos el dia actual de esa hora
    const fechas = []; // Array para almacenar las fechas
    fecha = (0, moment_1.default)(fecha).add(serviceTime, "minutes"); //Aumentamos 15 minutos
    while (fecha.date() === currentDay) { // mientras siga siendo el mismo dia
        fechas.push(fecha.format("HH:mm")); // agregamos la fecha
        fecha = (0, moment_1.default)(fecha).add(serviceTime, "minutes"); // Aumentamos 15 minutos
    }
    const format = 'hh:mm';
    const dateAvailable = fechas.filter((hour) => {
        let endTime = (0, moment_1.default)(hour, format).add(serviceTime, 'minutes').format('HH:mm');
        if (!(storeHours === null || storeHours === void 0 ? void 0 : storeHours.opened)) {
            return false;
        }
        let usedDate = false;
        dateUsed.map((date) => {
            if ((0, moment_1.default)(hour, 'h:m').isBetween((0, moment_1.default)(date.openHour, format), (0, moment_1.default)(date.closeHour, format), null, '[]') ||
                (0, moment_1.default)(endTime, 'h:m').isBetween((0, moment_1.default)(date.openHour, format), (0, moment_1.default)(date.closeHour, format), null, '[]')) {
                usedDate = true;
            }
        });
        if (usedDate) {
            return false;
        }
        let storeOpened = false;
        if (storeHours) {
            storeHours.hours.map((date) => {
                if (date) {
                    if ((0, moment_1.default)(hour, 'h:m').isBetween((0, moment_1.default)(date.start, format), (0, moment_1.default)(date.end, format), null, '[]')
                        && (0, moment_1.default)(endTime, 'h:m').isBetween((0, moment_1.default)(date.start, format), (0, moment_1.default)(date.end, format), null, '[]')) {
                        storeOpened = true;
                    }
                }
            });
        }
        if (!storeOpened) {
            return false;
        }
        return true;
    });
    let responseToSend = {};
    responseToSend[body.day] = [];
    dateAvailable.map((item) => {
        responseToSend[body.day].push({
            name: item,
            start: item,
            end: (0, moment_1.default)(item, format).add(serviceTime, 'minutes').format('HH:mm'),
            date: body.day
        });
    });
    res.send(responseToSend);
});
exports.getBookingHoursCtrl = getBookingHoursCtrl;
