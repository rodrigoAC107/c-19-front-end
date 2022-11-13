import moment from 'moment';

export const structureDate = (date) => {
    return moment(date).format('MM-DD-YYYY');
}

export const structureDateAndHours = (date) => {
    return moment(date).format('DD-MM-YYYY HH:mm:ss');
}