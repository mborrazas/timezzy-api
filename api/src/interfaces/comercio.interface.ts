import { Schema } from "mongoose";

export interface Comercio {
    owner: Schema.Types.ObjectId;
    name: string;
    city: number;
    country: number;
    address: string;
    type: string;
}