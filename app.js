const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'
];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getTimeString = (time) => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};

const getOrdinalDate = (date) => {
  const rightDigit = date % 10;
  if (rightDigit == 1 && date != 11) {
    return date + 'st';
  }
  if (rightDigit == 2 && date != 12) {
    return date + 'nd';
  }
  if (rightDigit == 3 && date != 13) {
    return date + 'rd';
  }
  return date + 'th';
};

const getDateString = (date) => {
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = getOrdinalDate(date.getDate());
  const year = date.getFullYear();

  return `${day}, ${month} ${dayOfMonth}, ${year}`;
};

const updateClock = () => {
  const timeDiv = document.getElementById('time');
  const dateDiv = document.getElementById('date');

  const date = new Date();
  timeDiv.innerHTML = getTimeString(date);
  dateDiv.innerHTML = getDateString(date);
};

updateClock();
setInterval(updateClock, 1000);