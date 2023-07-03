import { Request, Response } from "express";
import { Times } from "../interfaces/times.interface";
import { listTimes, createTime, deleteTime } from "../services/times";

const listTimesCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const listTimesResponse = await listTimes(comercio);
    res.send(listTimesResponse);
};


const createTimeCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    await deleteTime(comercio);
    body.map(async (day: Times) => {
        await createTime(day, comercio)
    })
    res.send({});
};

const deleteTimeCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const deleteTimeCtrl = await deleteTime(comercio);
    res.send(deleteTimeCtrl);
};


export { listTimesCtrl, createTimeCtrl, deleteTimeCtrl }