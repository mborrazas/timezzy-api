"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middleware/session");
const client_1 = require("../controllers/client");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/list", session_1.checkJwt, client_1.listClientCtrl);
router.post("/create", session_1.checkJwt, client_1.createClientCtrl);
router.get("/get/:id", session_1.checkJwt, client_1.getClientCtrl);
router.post("/delete/:id", session_1.checkJwt, client_1.deleteClientCtrl);
router.post("/update/:id", session_1.checkJwt, client_1.updateClientCtrl);
