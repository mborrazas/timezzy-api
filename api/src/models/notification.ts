import { Schema, model } from "mongoose";
import { Notification } from "../interfaces/notification.interface";

const Notificationschema = new Schema<Notification>(
    {
        comercio: {
            required: true,
            type: Schema.Types.ObjectId
        },
        title: {
            required: true,
            type: String
        },
        description: {
            required: true,
            type: String
        },
        action: {
            required: true,
            type: Boolean
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const NotificationModel = model("notification", Notificationschema);
export default NotificationModel;