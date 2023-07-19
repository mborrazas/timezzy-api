import { Schema } from "mongoose";

export interface Service {
    comercio: Schema.Types.ObjectId;
    duration: string;
    name: string;
    personal: [Schema.Types.ObjectId];
    price: string;
}