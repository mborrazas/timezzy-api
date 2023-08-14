import { Request, Response } from "express";
import moment from "moment";
import { listBooking, updateBooking, createBooking, deleteBooking, getBooking, getBookingByPersonal, getBookingByPersonalAndDate } from "../services/booking";
import { getService } from "../services/service";
import { getTimeForDay } from "../services/times";
import { getVacationForPersonal } from "../services/vacation";


const listBookingCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;
    const { date } = body;
    const listBookingResponse = await listBooking(comercio, date);
    res.send(listBookingResponse);
};

const updateBookingCtrl = async ({ body, user, params }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;

    const updateBookingResponse = await updateBooking(body, id, comercio);
    res.send(updateBookingResponse);
};

const createBookingCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const createBookingResponse = await createBooking(body, comercio);
    res.send(createBookingResponse);
};

const deleteBookingCtrl = async ({ params, user }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const deleteBookingResponse = await deleteBooking(id, comercio);
    res.send(deleteBookingResponse);
};

const getBookingCtrl = async ({ body, user, params }: any, res: Response) => {
    const { comercio } = user;
    const { id } = params;
    const getBookingResponse = await getBooking(id, comercio);
    res.send(getBookingResponse);
};

const getBookingHoursCtrl = async ({ body, user }: any, res: Response) => {
    const { comercio } = user;

    const dateSelected = moment(body.day, 'YYYY-MM-DD')

    
    const personalBookings = await getBookingByPersonalAndDate(body.personal, comercio, dateSelected.format('YYYY-MM-DD'));

    const dateUsed = personalBookings.map((booking) => {
        return { openHour: booking.openHour, closeHour: booking.closeHour };
    })

    const storeHours = await getTimeForDay(dateSelected.format('dddd'), comercio);

    const holidays = await getVacationForPersonal(body.personal, comercio);


    let stayHolidays = false;

    holidays.map((holiday) => {
        if (holiday.fullDay && dateSelected.isBetween(moment(holiday.openHour, 'DD/MM/YYYY'), moment(holiday.closeHour, 'DD/MM/YYYY'), null, '[]')) {
            stayHolidays = true;
        }
    });

    if (stayHolidays) {
        res.send({});
        return;
    }


    const service = await getService(body.service, comercio);

    if (!service) {
        res.send({});
        return;
    }


    const tiempo = body.hours;
    
    const serviceTime = Number(service[0].duration);

    const [horas, minutos] = tiempo.split(":");

    // Calculamos cual es el "cuarto de hora" actual basado en los minutos
    // Es decir 00, 15, 30 o 45
    let cuartoActual = Math.floor(Number(minutos) / serviceTime) * serviceTime;

    // Iniciamos la fecha en la hora 0 de hoy y le asignamos la hora y los minutos del cuarto de hora actual
    
    let fecha = moment().startOf("day").hour(Number(horas)).minute(cuartoActual);
   

    const currentDay = fecha.date(); //Sacamos el dia actual de esa hora

    const fechas = []; // Array para almacenar las fechas

    fecha = moment(fecha).add(serviceTime, "minutes") //Aumentamos 15 minutos
 
    while (fecha.date() === currentDay) {   // mientras siga siendo el mismo dia
        fechas.push(fecha.format("HH:mm"))  // agregamos la fecha
        fecha = moment(fecha).add(serviceTime, "minutes") // Aumentamos 15 minutos
    }



    const format = 'hh:mm';



    const dateAvailable = fechas.filter((hour) => {

        let endTime = moment(hour, format).add(serviceTime, 'minutes').format('HH:mm');

        if (!storeHours?.opened) {
            return false;
        }

        let usedDate = false;
        dateUsed.map((date) => {
            if (moment(hour, 'h:m').isBetween(moment(date.openHour, format), moment(date.closeHour, format), null, '[]') ||
                moment(endTime, 'h:m').isBetween(moment(date.openHour, format), moment(date.closeHour, format), null, '[]')) {
                usedDate = true;
            }
        });


        if (usedDate) {
            return false;
        }

        let storeOpened = false; 
        storeHours.hours.map((date) => {
            if (date) {
                if (moment(hour, 'h:m').isBetween(moment(date.start, format), moment(date.end, format), null, '[]')
                    && moment(endTime, 'h:m').isBetween(moment(date.start, format), moment(date.end, format), null, '[]')) {
                    storeOpened = true;
                }
            }
        });

        if (!storeOpened) {
            return false;
        }

        return true;
    });

    let responseToSend: { [key: string]: Array<Object> } = {};

    responseToSend[body.day] = [];
    dateAvailable.map((item) => {
        responseToSend[body.day].push({
            name: item,
            start: item,
            end: moment(item, format).add(serviceTime, 'minutes').format('HH:mm'),
            date: body.day
        });
    })



    res.send(responseToSend);
}

export { listBookingCtrl, updateBookingCtrl, createBookingCtrl, deleteBookingCtrl, getBookingCtrl, getBookingHoursCtrl }