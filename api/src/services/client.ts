import { Client } from "../interfaces/client.interface";
import ClientModel from "../models/client"

const listClient = async (comercio: string) => {
    const clients = await ClientModel.find({ comercio });
    return clients;
}

const updateClient = async ({ name, phone, email, address }: Client, comercio: any, id: any) => {
    const registerClient = await ClientModel.updateOne({ _id: id, comercio: comercio }, { $set: { name, phone, email, address } });
    if (!registerClient) return "ERROR_UPDATE_CLIENT";
    return registerClient;
}

const createClient = async ({ name, phone, email, address }: Client, comercio: any) => {
    const registerClient = await ClientModel.create({ name, phone, email, address, comercio });
    if (!registerClient) return "ERROR_SAVE_CLIENT";
    return registerClient;
}

const deleteClient = async (id: any, comercio: any) => {
    const deleteClient = await ClientModel.deleteOne({ comercio, _id: id });
    if (!deleteClient) return "ERROR_DELETE_CLIENT";
    return deleteClient;
}

const getClient = async (id: any, comercio: any) => {
    const client = await ClientModel.find({ _id: id, comercio });
    return client;
}

export { listClient, updateClient, createClient, deleteClient, getClient }