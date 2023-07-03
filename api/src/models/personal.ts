import { Schema, model } from "mongoose";
import { Personal } from "../interfaces/personal.interface";

const Personalschema = new Schema<Personal>(
    {
        comercio: {
            required: true,
            type: String
        },
        phone: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        password: {
            type: String
        },
        profilePhoto: {
            type: String
        },
        description: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const PersonalModel = model("personal", Personalschema);
export default PersonalModel;