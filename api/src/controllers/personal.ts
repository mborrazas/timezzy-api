import { Request, response, Response } from "express";
import { listPersonal, getPersonal, updatePersonal, createPersonal, deletePersonal, listPersonalByServices } from "../services/personal";
import { listServicesByPersonal, updatePersonalService } from "../services/service";

const listPersonalCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const listPersonalResponse = await listPersonal(comercio);
    res.send(listPersonalResponse);
};

const updatePersonalCtrl = async ({ body, params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const updatePersonalServices = await updatePersonalService(body.services, id);
    const updatePersonalResponse = await updatePersonal(body, id, comercio);
    res.send(updatePersonalResponse);
};

const createPersonalCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const createPersonalResponse = await createPersonal(body, comercio);
    res.send(createPersonalResponse);
};

const deletePersonalCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const deletePersonalResponse = await deletePersonal(id, comercio);
    res.send(deletePersonalResponse);
};

const getPersonalCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const getPersonalResponse = await getPersonal(id, comercio);
    const getPersonalServices = await listServicesByPersonal(comercio, id);

    res.send({ personal: getPersonalResponse, services: getPersonalServices });
};

const listByServicesCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const { services } = body;
    const listPersonalResponse = await listPersonalByServices(services, comercio);
    res.send(listPersonalResponse);
}


export { listPersonalCtrl, updatePersonalCtrl, createPersonalCtrl, deletePersonalCtrl, getPersonalCtrl, listByServicesCtrl }