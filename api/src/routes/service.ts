import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { getServiceCtrl, updateServicesCtrl, deleteServiceCtrl, createServicesCtrl, listServicesCtrl } from "../controllers/service";


const router = Router();

router.get("/get/:id", checkJwt, getServiceCtrl);
router.post("/update/:id", checkJwt, updateServicesCtrl);
router.post("/delete/:id", checkJwt, deleteServiceCtrl);
router.post("/create", checkJwt, createServicesCtrl);
router.get("/list", checkJwt, listServicesCtrl);




export { router };