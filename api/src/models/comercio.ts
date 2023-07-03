import { Schema, model } from "mongoose";
import { Comercio } from "../interfaces/comercio.interface";

const Comercioschema = new Schema<Comercio>(
    {
        owner: {
            required: true,
            type: Schema.Types.ObjectId
        },
        name: {
            required: true,
            type: String
        },
        city: {
            required: true,
            type: Number
        },
        country: {
            required: true,
            type: Number
        },
        address: {
            type: String
        },
        type: {
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const ComercioModel = model("comercio", Comercioschema);
export default ComercioModel;