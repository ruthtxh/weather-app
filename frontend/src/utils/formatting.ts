export function formatTemperature(number: number) {
    const celcius = number - 273.15
    return (Math.round(celcius * 10) / 10).toFixed(1);
}

function padZero(number: number) {
    if (number < 10)
        return "0" + number.toString();
    return number.toString();
}

function getTwelveHour(number: number) {
    if (number > 12)
        return (number - 12);
    return number;
}

function getAmPm(number: number) {
    if (number < 12) return "AM";
    return "PM";
}

export function formatDateTime(number: number) {
    const date = new Date(number * 1000);
    const dateString = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())}`;
    const timeString = `${padZero(getTwelveHour(date.getHours()))}:${padZero(date.getMinutes())} ${getAmPm(date.getHours())}`
    return `${dateString} ${timeString}`;
}

export function formatTime(date: Date) {
    return `${padZero(getTwelveHour(date.getHours()))}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}  ${getAmPm(date.getHours())}`
}