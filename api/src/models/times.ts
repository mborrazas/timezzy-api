import { Schema, model } from "mongoose";
import { Times } from "../interfaces/times.interface";

const Timesschema = new Schema<Times>(
    {
        comercio: {
            required: true,
            type: Schema.Types.ObjectId
        },
        opened: {
            required: true,
            type: Boolean
        },
        day: {
            required: true,
            type: String
        },
        hours: [Object]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const TimesModel = model("times", Timesschema);
export default TimesModel;