import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { listTimesCtrl, createTimeCtrl, deleteTimeCtrl } from "../controllers/times";


const router = Router();

router.post("/create", checkJwt, createTimeCtrl);
router.get("/list", checkJwt, listTimesCtrl);


export { router };