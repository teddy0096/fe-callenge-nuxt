import dayjs from 'dayjs'

function calculateTimeLeft(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate)

    let difference = end - start;  // time diference in milliseconds 

    if (difference <= 0) return "0 mins"; // if end date is before start date

    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60)

    const minutes = Math.floor(difference / (1000 * 60))

    return `${hours} hrs ${minutes} mins`;

}

function newDateFormat(date) {
    return dayjs(date).format('MMM D, YYYY hh:mm A')
}

export { calculateTimeLeft, newDateFormat }