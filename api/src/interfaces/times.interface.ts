import { Schema } from "mongoose";

export interface Times {
    comercio: Schema.Types.ObjectId;
    day: string;
    opened: boolean;
    hours: [{ start: string, end: string }];
}