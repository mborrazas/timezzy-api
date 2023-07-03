import { Request, Response } from "express";
import { listServices, updateService, createService, deleteService, getService } from "../services/service";

const listServicesCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const listServicesResponse = await listServices(comercio);
    res.send(listServicesResponse);
};

const updateServicesCtrl = async ({ body, params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;

    const updateServiceResponse = await updateService(body, id, comercio);
    res.send(updateServiceResponse);
};

const createServicesCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const createServiceResponse = await createService(body, comercio);
    res.send(createServiceResponse);
};

const deleteServiceCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const deleteServiceResponse = await deleteService(id, comercio);
    res.send(deleteServiceResponse);
};

const getServiceCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const getServiceResponse = await getService(id, comercio);
    res.send(getServiceResponse);
};


export { listServicesCtrl, updateServicesCtrl, createServicesCtrl, deleteServiceCtrl, getServiceCtrl }