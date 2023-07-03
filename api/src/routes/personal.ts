import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { getPersonalCtrl, updatePersonalCtrl, deletePersonalCtrl, listPersonalCtrl, createPersonalCtrl, listByServicesCtrl } from "../controllers/personal";


const router = Router();

router.get("/get/:id", checkJwt, getPersonalCtrl);
router.post("/update/:id", checkJwt, updatePersonalCtrl);
router.post("/delete/:id", checkJwt, deletePersonalCtrl);
router.post("/create", checkJwt, createPersonalCtrl);
router.get("/list", checkJwt, listPersonalCtrl);
router.get("/list/public", listPersonalCtrl);
router.post("/listByServices", checkJwt, listByServicesCtrl);

export { router };