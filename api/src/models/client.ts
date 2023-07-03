import { Schema, model } from "mongoose";
import { Client } from "../interfaces/client.interface";

const Clientchema = new Schema<Client>(
    {
        comercio: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        phone: {
            required: true,
            type: String
        },
        email: {
            type: String
        },
        address: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const ClientModel = model("client", Clientchema);
export default ClientModel;