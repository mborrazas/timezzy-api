import NotificationModel from "../models/notification"
import { Notification } from "../interfaces/notification.interface";

const listNotifications = async (comercio: string) => {
    const notifications = await NotificationModel.find({ comercio });
    return notifications;
}

const createNotification = async ({ title, action, description, }: Notification, comercio: any) => {
    const registerClient = await NotificationModel.create({ name, title, action, description, comercio });
    if (!registerClient) return "ERROR_SAVE_CLIENT";
    return registerClient;
}

const deleteNotification = async (id: any, comercio: any) => {
    const deleteClient = await NotificationModel.deleteOne({ comercio, _id: id });
    if (!deleteClient) return "ERROR_DELETE_CLIENT";
    return deleteClient;
}


export { listNotifications, createNotification, deleteNotification }