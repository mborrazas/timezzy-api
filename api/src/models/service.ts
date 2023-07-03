import { Schema, model } from "mongoose";
import { Service } from "../interfaces/service.interface";

const Serviceschema = new Schema<Service>(
    {
        comercio: {
            required: true,
            type: Schema.Types.ObjectId
        },
        duration: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        personal: {
            type: [Schema.Types.ObjectId]
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const ServiceModel = model("services", Serviceschema);
export default ServiceModel;