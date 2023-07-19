import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { listBookingCtrl, updateBookingCtrl, deleteBookingCtrl, createBookingCtrl, getBookingCtrl, getBookingHoursCtrl } from "../controllers/booking";


const router = Router(); 

router.post("/list", checkJwt, listBookingCtrl);
router.post("/create", checkJwt, createBookingCtrl);
router.get("/get/:id", checkJwt, getBookingCtrl);
router.post("/delete/:id", checkJwt, deleteBookingCtrl);
router.post("/update/:id", checkJwt, updateBookingCtrl);
router.post('/getHours', checkJwt, getBookingHoursCtrl);


export { router };