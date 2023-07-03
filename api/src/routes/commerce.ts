import { Request, Response, Router } from "express";
import { checkJwt } from "../middleware/session";
import { generateCommerce, getCommerceCtrl} from "../controllers/comercio";


const router = Router();

router.post("/create", checkJwt, generateCommerce);
router.get("/getCommerce/:id", getCommerceCtrl);

export { router };