const getTime = () => {
  const time = new Date();

  const timeString = [
    String(time.getHours()).padStart(2, '0'),
    String(time.getMinutes()).padStart(2, '0'),
    String(time.getSeconds()).padStart(2, '0')
  ].join(':');

  return timeString;
};

const getDate = () => {
  const date = new Date();
  const day = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  const month = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dateString = [
    day[date.getDay()] + ',',
    month[date.getMonth()],
    date.getDate(),
    date.getFullYear()
  ].join(' ');

  // The following technically meets the rules.  Allowed?
  // const dateString = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);

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