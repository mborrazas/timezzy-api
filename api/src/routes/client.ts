import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { listClientCtrl, createClientCtrl, getClientCtrl, deleteClientCtrl, updateClientCtrl } from "../controllers/client";


const router = Router(); 

router.get("/list", checkJwt, listClientCtrl);
router.post("/create", checkJwt, createClientCtrl);
router.get("/get/:id", checkJwt, getClientCtrl);
router.post("/delete/:id", checkJwt, deleteClientCtrl);
router.post("/update/:id", checkJwt, updateClientCtrl);


export { router };