import { Request, Response } from "express";
import { listNotifications, createNotification, deleteNotification } from "../services/notifications";


const listNotificationCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const listNotificationsResponse = await listNotifications(comercio);
    res.send(listNotificationsResponse);
};

const deleteNotificationCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const deleteNotificationPersonal = await deleteNotification(id, comercio);
    res.send(deleteNotificationPersonal);
};


export { deleteNotificationCtrl, listNotificationCtrl };