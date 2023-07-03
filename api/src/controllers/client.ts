import { Request, Response } from "express";
import { listClient, updateClient, createClient, deleteClient, getClient } from "../services/client";

const listClientCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const listClientResponse = await listClient(comercio);
    res.send(listClientResponse);
};

const updateClientCtrl = async ({ body, user, params }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;

    const updateClientResponse = await updateClient(body, comercio, id);
    res.send(updateClientResponse);
};

const createClientCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const createClientResponse = await createClient(body, comercio);
    res.send(createClientResponse);
};

const deleteClientCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const deleteClientResponse = await deleteClient(id, comercio);
    res.send(deleteClientResponse);
};

const getClientCtrl = async ({ body, user, params }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const getClientResponse = await getClient(id, comercio);
    res.send(getClientResponse);
};


export { listClientCtrl, updateClientCtrl, createClientCtrl, deleteClientCtrl, getClientCtrl }