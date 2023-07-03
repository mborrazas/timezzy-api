import { Request, Response } from "express";
import { getCommerce, updateCommerce, createCommerce } from "../services/commerce";
import { addCommerce } from "../services/personal";

const generateCommerce = async ({ body, user }: any, res: Response) => {
    try {
        const { name, city, country, address, type } = body;
        const { id } = user;
        const responseCommerce = await createCommerce({ owner: id, name, city, country, address, type });
        if (responseCommerce == "ERROR_SAVE_COMMERCE") return res.send(responseCommerce);

        const updateUser = await addCommerce(id, { comercio: responseCommerce._id });
        res.send(responseCommerce);
    } catch (e) {
        console.log(e);
        res.send("ERROR_GENERATE_COMMERCE");
    }
};


const getCommerceCtrl = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseCommerce = await getCommerce(id);
        return res.send(responseCommerce);
    } catch (e) {
        console.log(e);
        res.send("ERROR_GET_COMMERCE");
    }
};

export { generateCommerce, getCommerceCtrl };