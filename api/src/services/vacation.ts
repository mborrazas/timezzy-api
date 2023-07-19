import { Vacation } from "../interfaces/vacation.interface";
import VacationModel from "../models/vacations"


const listVacations = async (comercio: string) => {
    const vacations = await VacationModel.find({ comercio });
    return vacations;
}


const updateVacation = async ({ name, openHour, closeHour, personal, fullDay }: Vacation, id: any, comercio: any) => {
    const updateVacation = await VacationModel.updateOne({ _id: id, comercio: comercio }, { $set: { name, openHour, closeHour, personal, fullDay } });
    if (!updateVacation) return "ERROR_UPDATE_VACATION";
    return updateVacation;
}


const createVacation = async ({ name, openHour, closeHour, personal, fullDay }: Vacation, comercio: any) => {
    const registerNewVacation = await VacationModel.create({ openHour, closeHour, name, personal, comercio, fullDay });
    if (!registerNewVacation) return "ERROR_SAVE_VACATION";
    return registerNewVacation;
}

const deleteVacation = async (id: any, comercio: any) => {
    console.log(id);
    const deleteVacation = await VacationModel.deleteOne({ comercio, _id: id });
    if (!deleteVacation) return "ERROR_DELETE_VACATION";
    return deleteVacation;
}

const getVacation = async (id: any, comercio: any) => {
    const vacation = await VacationModel.find({ _id: id, comercio });
    return vacation;
}

const getVacationForPersonal = async (personal: any, comercio: any) => {
    const vacation = await VacationModel.find({ personal, comercio });
    return vacation;
}

export { listVacations, updateVacation, createVacation, deleteVacation, getVacation, getVacationForPersonal }