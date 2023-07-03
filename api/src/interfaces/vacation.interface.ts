import { Schema } from "mongoose";

export interface Vacation {
    comercio: Schema.Types.ObjectId;
    name: string;
    fullDay: boolean;
    openHour: string;
    closeHour: string;
    personal: [Schema.Types.ObjectId];
}