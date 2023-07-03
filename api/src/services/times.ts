import { Times } from "../interfaces/times.interface";
import TimesModel from "../models/times"


const listTimes = async (comercio: string) => {
    const times = await TimesModel.find({ comercio });
    return times;
}


const createTime = async ({ day, hours, opened }: Times, comercio: any) => {
    const registerNewTime = await TimesModel.create({ hours, day, opened, comercio });
    if (!registerNewTime) return "ERROR_SAVE_TIME";
    return registerNewTime;
}

const deleteTime = async (comercio: any) => {
    const deleteTime = await TimesModel.deleteMany({ comercio });
    if (!deleteTime) return "ERROR_DELETE_TIME";
    return deleteTime;
}

const getTime = async (id: any, comercio: any) => {
    const time = await TimesModel.find({ _id: id, comercio });
    return time;
}

const getTimeForDay = async (day: any, comercio: any) => {
    const time = await TimesModel.findOne({ day, comercio });
    return time;
}

export { listTimes, createTime, deleteTime, getTime, getTimeForDay }