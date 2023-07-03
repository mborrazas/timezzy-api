import { Schema, model } from "mongoose";
import { Vacation } from "../interfaces/vacation.interface";

const Vacationschema = new Schema<Vacation>(
    {
        comercio: {
            required: true,
            type: Schema.Types.ObjectId
        },
        name: {
            required: true,
            type: String
        },
        fullDay: {
            required: true,
            type: Boolean
        },
        openHour: {
            required: true,
            type: String
        },
        closeHour: {
            required: true,
            type: String
        },
        personal: {
            required: true,
            type: [Schema.Types.ObjectId]
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const VacationModel = model("vacation", Vacationschema);
export default VacationModel;