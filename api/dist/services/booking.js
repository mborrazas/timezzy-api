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
exports.getBookingByPersonalAndDate = exports.getBookingByPersonal = exports.getBooking = exports.deleteBooking = exports.createBooking = exports.updateBooking = exports.listBooking = void 0;
const booking_1 = __importDefault(require("../models/booking"));
const client_1 = __importDefault(require("../models/client"));
const personal_1 = __importDefault(require("../models/personal"));
const service_1 = __importDefault(require("../models/service"));
const listBooking = (comercio, date) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_1.default.find({ comercio });
    const response = {};
    response[date] = [];
    for (const item of booking) {
        if (typeof response[item.date] == 'undefined') {
            response[item.date] = [];
        }
        const service = yield service_1.default.findOne({ _id: item.services });
        const client = yield client_1.default.findOne({ _id: item.client });
        const staff = yield personal_1.default.findOne({ _id: item.personal });
        if (client && service && staff) {
            response[item.date].push({
                id: item.id,
                name: 'Reserva Cliente: ' + client.name,
                description: '',
                start: item.openHour,
                end: item.closeHour,
                serviceName: service.name,
                service: item.services,
                client: item.client,
                clientName: client.name,
                servicePersonal: item.personal,
                personalName: staff.name,
                date: item.date
            });
        }
        else {
            response[item.date].push({
                id: item.id,
                name: 'Reserva',
                description: '',
                start: item.openHour,
                end: item.closeHour,
                serviceName: '',
                service: item.services,
                client: item.client,
                clientName: '',
                staff: item.personal,
                date: item.date
            });
        }
    }
    return response;
});
exports.listBooking = listBooking;
const updateBooking = ({ client, services, openHour, closeHour, personal, status, date }, id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const updateBooking = yield booking_1.default.updateOne({ _id: id, comercio }, { $set: { personal, client, services, openHour, closeHour, status } });
    if (!updateBooking)
        return "ERROR_UPDATE_BOOKING";
    return updateBooking;
});
exports.updateBooking = updateBooking;
const createBooking = ({ client, services, openHour, closeHour, personal, status, date }, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const registerNewBooking = yield booking_1.default.create({ client, services, openHour, closeHour, personal, status, comercio, date });
    if (!registerNewBooking)
        return "ERROR_SAVE_BOOKING";
    return registerNewBooking;
});
exports.createBooking = createBooking;
const deleteBooking = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteBooking = yield booking_1.default.deleteOne({ comercio, _id: id });
    if (!deleteBooking)
        return "ERROR_DELETE_BOOKING";
    return deleteBooking;
});
exports.deleteBooking = deleteBooking;
const getBooking = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_1.default.find({ _id: id, comercio });
    return booking;
});
exports.getBooking = getBooking;
const getBookingByPersonal = (id, comercio) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_1.default.find({ personal: id, comercio });
    return booking;
});
exports.getBookingByPersonal = getBookingByPersonal;
const getBookingByPersonalAndDate = (id, comercio, date) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_1.default.find({ personal: id, comercio, date });
    return booking;
});
exports.getBookingByPersonalAndDate = getBookingByPersonalAndDate;
