import { Service } from "../interfaces/service.interface";
import ServiceModel from "../models/service"


const listServices = async (comercio: string) => {
    const services = await ServiceModel.find({ comercio });
    return services;
}

const listServicesByPersonal = async (comercio: string, personal: string) => {
    const services = await ServiceModel.find({ comercio, personal }, { _id: 1 });
    return services;
}

const updatePersonalService = async (services: any, personal: string) => {
    const updateService = await ServiceModel.updateMany({ $pull: { personal: personal } });
    if (!updateService) return "ERROR_UPDATE_SERVICE";

    services.map(async (item: string) => {
        const updateService = await ServiceModel.updateOne({ _id: item }, { $push: { personal: personal } });
        if (!updateService) return "ERROR_UPDATE_SERVICE";
    })

    return updateService;
}

const updateService = async ({ duration, name, personal, price }: Service, id: any, comercio: any) => {
    const updateService = await ServiceModel.updateOne({ _id: id, comercio: comercio }, { $set: { duration, name, personal, price } });
    if (!updateService) return "ERROR_UPDATE_SERVICE";
    return updateService;
}


const createService = async ({ duration, name, personal, price }: Service, comercio: any) => {
    const registerNewService = await ServiceModel.create({ duration, name, personal, comercio, price });
    if (!registerNewService) return "ERROR_SAVE_SERVICE";
    return registerNewService;
}

const deleteService = async (id: any, comercio: any) => {
    const deleteService = await ServiceModel.deleteOne({ comercio, _id: id });
    if (!deleteService) return "ERROR_DELETE_SERVICE";
    return deleteService;
}

const getService = async (id: any, comercio: any) => {
    const service = await ServiceModel.find({ _id: id, comercio });
    return service;
}

export { listServices, updateService, createService, deleteService, getService, listServicesByPersonal, updatePersonalService }