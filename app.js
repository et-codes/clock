const getTime = () => {
  const time = new Date();

  const timeString = [
    String(time.getHours()).padStart(2, '0'),
    String(time.getMinutes()).padStart(2, '0'),
    String(time.getSeconds()).padStart(2, '0')
  ].join(':');

  return timeString;
};

const getOrdinalDate = (date) => {
  const j = date % 10
  const k = date % 100;
  if (j == 1 && k != 11) {
    return date + 'st';
  }
  if (j == 2 && k != 12) {
    return date + 'nd';
  }
  if (j == 3 && k != 13) {
    return date + 'rd';
  }
  return date + 'th';
};

const getDate = () => {
  const date = new Date();
  const day = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];
  const month = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dateString = [
    day[date.getDay()] + ',',
    month[date.getMonth()],
    getOrdinalDate(date.getDate()) + ',',
    date.getFullYear()
  ].join(' ');

  return dateString;
};

const updateClock = () => {
  const timeDiv = document.getElementById('time');
  const dateDiv = document.getElementById('date');

  timeDiv.innerHTML = getTime();
  dateDiv.innerHTML = getDate();
};

updateClock();
setInterval(updateClock, 1000);