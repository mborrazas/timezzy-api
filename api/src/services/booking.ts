import { Booking } from "../interfaces/booking.interface";
import { Client } from "../interfaces/client.interface";
import BookingModel from "../models/booking"
import ClientModel from "../models/client";
import PersonalModel from "../models/personal";
import ServiceModel from "../models/service";


const listBooking = async (comercio: string, date: string) => {
    const booking = await BookingModel.find({ comercio });

    const response: any = {};
    response[date] = [];
    for (const item of booking) {
        if (typeof response[item.date] == 'undefined') {
            response[item.date] = [];
        }
        const service: any = await ServiceModel.findOne({ _id: item.services });
        const client: any = await ClientModel.findOne({ _id: item.client });
        const staff: any = await PersonalModel.findOne({ _id: item.personal });
        if (client && service && staff) {
            response[item.date].push(
                {
                    id: item.id,
                    name: 'Reserva Cliente: ' + client.name,
                    description: '',
                    start: item.openHour,
                    end: item.closeHour,
                    serviceName: service.name,
                    service: item.services,
                    client: item.client,
                    clientName: client.name,
                    servicePersonal: item.personal,
                    personalName: staff.name,
                    date: item.date
                }
            );
        } else {
            response[item.date].push(
                {
                    id: item.id,
                    name: 'Reserva',
                    description: '',
                    start: item.openHour,
                    end: item.closeHour,
                    serviceName: '',
                    service: item.services,
                    client: item.client,
                    clientName: '',
                    staff: item.personal,
                    date: item.date
                }
            );
        }
    }
    return response;
}


const updateBooking = async ({ client, services, openHour, closeHour, personal, status, date }: Booking, id: any, comercio: any) => {
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