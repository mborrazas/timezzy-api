"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middleware/session");
const notification_1 = require("../controllers/notification");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/delete/:id", session_1.checkJwt, notification_1.deleteNotificationCtrl);
router.get("/list", session_1.checkJwt, notification_1.listNotificationCtrl);
