import { Schema } from "mongoose";

export interface Booking {
    comercio: Schema.Types.ObjectId;
    client: Schema.Types.ObjectId;
    services: [Schema.Types.ObjectId];
    openHour: string;
    closeHour: string;
    personal: Schema.Types.ObjectId;
    status: string;
    date: string;
}