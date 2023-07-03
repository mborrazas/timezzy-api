import { Schema, model } from "mongoose";
import { Booking } from "../interfaces/booking.interface";

const Bookingschema = new Schema<Booking>(
    {
        comercio: {
            required: true,
            type: Schema.Types.ObjectId
        },
        client: {
            required: true,
            type: Schema.Types.ObjectId
        },
        services: {
            required: true,
            type: [Schema.Types.ObjectId]
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
            type: Schema.Types.ObjectId
        },
        status: {
            required: true,
            type: String
        },
        date: {
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const BookingModel = model("booking", Bookingschema);
export default BookingModel;