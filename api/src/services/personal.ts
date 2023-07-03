import { Personal } from "../interfaces/personal.interface";
import PersonalModel from "../models/personal"


const listPersonal = async (comercio: any) => {
    const personal = await PersonalModel.find({ comercio });
    return personal;
}

const listPersonalByServices = async (services: any, comercio: any) => {
    const personal = await PersonalModel.find({ _id: { $in: services } });
    return personal;
}

const updatePersonal = async ({ name, description, profilePhoto, phone, email }: Personal, id: any, comercio: any) => {
    const registerPersonal = await PersonalModel.updateOne({ _id: id, comercio: comercio }, { $set: { name, description, profilePhoto, phone, email } });
    if (!registerPersonal) return "ERROR_UPDATE_PERSONAL";
    return registerPersonal;
}

const addCommerce = async ({ comercio }: Personal, id: any) => {

}

const createPersonal = async ({ name, description, profilePhoto, phone, email }: Personal, comercio: any) => {
    const registerPersonal = await PersonalModel.create({ name, phone, email, description, profilePhoto, comercio });
    if (!registerPersonal) return "ERROR_SAVE_PERSONAL";
    return registerPersonal;
}

const deletePersonal = async (id: any, comercio: any) => {
    const deletePersonal = await PersonalModel.deleteOne({ comercio, _id: id });
    if (!deletePersonal) return "ERROR_DELETE_PERSONAL";
    return deletePersonal;
}

const getPersonal = async (id: any, comercio: any) => {
    const personal = await PersonalModel.find({ _id: id, comercio });
    return personal;
}

export { listPersonal, updatePersonal, createPersonal, deletePersonal, getPersonal, addCommerce, listPersonalByServices }