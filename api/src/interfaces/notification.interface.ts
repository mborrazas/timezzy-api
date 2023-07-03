import { Schema } from "mongoose";

export interface Notification {
    comercio: Schema.Types.ObjectId;
    title: string;
    description: string;
    action: boolean;
}