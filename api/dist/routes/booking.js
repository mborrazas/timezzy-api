"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middleware/session");
const booking_1 = require("../controllers/booking");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/list", session_1.checkJwt, booking_1.listBookingCtrl);
router.post("/create", session_1.checkJwt, booking_1.createBookingCtrl);
router.get("/get/:id", session_1.checkJwt, booking_1.getBookingCtrl);
router.post("/delete/:id", session_1.checkJwt, booking_1.deleteBookingCtrl);
router.post("/update/:id", session_1.checkJwt, booking_1.updateBookingCtrl);
router.post('/getHours', session_1.checkJwt, booking_1.getBookingHoursCtrl);
