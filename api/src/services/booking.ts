import { Booking } from "../interfaces/booking.interface";
import BookingModel from "../models/booking"


const listBooking = async (comercio: string) => {
    const booking = await BookingModel.find({ comercio });
    const response: any = {};

    booking.forEach(item => {
        if (typeof response[item.date] == 'undefined') {
            response[item.date] = [];
        }
        response[item.date].push(
            {
                id: item.id,
                name: 'Item for lokomotiv 1',
                description: 'Descripcion',
                start: item.openHour,
                end: item.closeHour,
                service: item.services,
                client: item.client,
                staff: item.personal,
                date: item.date
            }
        );
    });

    return response;
}


const updateBooking = async ({ client, services, openHour, closeHour, personal, status, date }: Booking, id: any, comercio: any) => {
    const booking = await BookingModel.find({ _id: id, comercio });
    console.log(booking);
    const updateBooking = await BookingModel.updateOne({ _id: id, comercio }, { $set: { personal, client, services, openHour, closeHour, status } });
    if (!updateBooking) return "ERROR_UPDATE_BOOKING";
    return updateBooking;
}


const createBooking = async ({ client, services, openHour, closeHour, personal, status, date }: Booking, comercio: any) => {

    const registerNewBooking = await BookingModel.create({ client, services, openHour, closeHour, personal, status, comercio, date });
    if (!registerNewBooking) return "ERROR_SAVE_BOOKING";
    return registerNewBooking;
}

const deleteBooking = async (id: any, comercio: any) => {
    const deleteBooking = await BookingModel.deleteOne({ comercio, _id: id });
    if (!deleteBooking) return "ERROR_DELETE_BOOKING";
    return deleteBooking;
}

const getBooking = async (id: any, comercio: any) => {
    const booking = await BookingModel.find({ _id: id, comercio });
    return booking;
}

const getBookingByPersonal = async (id: any, comercio: any) => {
    const booking = await BookingModel.find({ personal: id, comercio });
    return booking;
}

const getBookingByPersonalAndDate = async (id: any, comercio: any, date: any) => {
    const booking = await BookingModel.find({ personal: id, comercio, date });
    return booking;
}

export { listBooking, updateBooking, createBooking, deleteBooking, getBooking, getBookingByPersonal, getBookingByPersonalAndDate }