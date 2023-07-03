import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth";

const loginCtrl = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body;
        const responseUser = await loginUser({ email, password });
        res.send(responseUser);
    } catch (e) {
        console.log(e);
        res.send("ERROR_LOGIN");
    }

};

const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const { email, password, profilePhoto, description, name, phone } = body;
        const responseUser = await registerUser({ email, password, profilePhoto, description, name, comercio: "0", phone });
        res.send(responseUser);
    } catch (e) {
        console.log(e);
        res.send("ERROR_REGISTER");
    }

};

export { loginCtrl, registerCtrl }