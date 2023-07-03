import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { getVacationCtrl, updateVacationCtrl, deleteVacationCtrl, createVacationCtrl, listVacationCtrl } from "../controllers/vacation";


const router = Router();

router.get("/get/:id", checkJwt, getVacationCtrl);
router.post("/update/:id", checkJwt, updateVacationCtrl);
router.post("/delete/:id", checkJwt, deleteVacationCtrl);
router.post("/create", checkJwt, createVacationCtrl);
router.get("/list", checkJwt, listVacationCtrl);


export { router };