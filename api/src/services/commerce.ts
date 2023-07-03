import { Comercio } from "../interfaces/comercio.interface";
const ObjectId = require('mongodb').ObjectId;
import ComercioModel from "../models/comercio"


const updateCommerce = async () => {

}

const createCommerce = async ({ owner, name, city, country, address, type }: Comercio) => {
    const registerCommerce = await ComercioModel.create({ owner, name, city, country, address, type });
    if (!registerCommerce) return "ERROR_SAVE_COMMERCE";
    return registerCommerce;
}

const getCommerce = async (commerce: any) => {
    const commerceResponse = await ComercioModel.find({ _id: new ObjectId(commerce) });

    return commerceResponse;
}

export { updateCommerce, createCommerce, getCommerce }