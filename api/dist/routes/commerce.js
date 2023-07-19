"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middleware/session");
const comercio_1 = require("../controllers/comercio");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/create", session_1.checkJwt, comercio_1.generateCommerce);
router.get("/getCommerce/:id", comercio_1.getCommerceCtrl);
