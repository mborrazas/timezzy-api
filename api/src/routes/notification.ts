import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { listNotificationCtrl, deleteNotificationCtrl } from "../controllers/notification";

const router = Router();

router.post("/delete/:id", checkJwt, deleteNotificationCtrl);
router.get("/list", checkJwt, listNotificationCtrl);

export { router };