import { Request, Response } from "express";
import { listVacations, updateVacation, deleteVacation, getVacation, createVacation } from "../services/vacation";



const listVacationCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const listVacationResponse = await listVacations(comercio);
    res.send(listVacationResponse);
};

const updateVacationCtrl = async ({ body, user, params }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;

    const updateVacationsResponse = await updateVacation(body, id, comercio);
    res.send(updateVacationsResponse);
};

const createVacationCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const createVacationResponse = await createVacation(body, comercio);
    res.send(createVacationResponse);
};

const deleteVacationCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const deleteVacationResponse = await deleteVacation(id, comercio);
    res.send(deleteVacationResponse);
};

const getVacationCtrl = async ({ body, user, params }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const getVacationResponse = await getVacation(id, comercio);
    res.send(getVacationResponse);
};


export { listVacationCtrl, updateVacationCtrl, createVacationCtrl, deleteVacationCtrl, getVacationCtrl }