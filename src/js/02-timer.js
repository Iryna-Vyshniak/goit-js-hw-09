import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

document.body.style.backgroundColor = '#ece5da';
const TIMER_DELAY = 1000;
let intervalId = null;
let selectedDate = null;
let currentDate = null;

// ------- 1st variant -----------------------------------------------------------------

// const refs = {
//   dateInput: document.querySelector('input#datetime-picker'),
//   btnStartTimer: document.querySelector('button[data-start-timer]'),
//   daysRemaining: document.querySelector('[data-days]'),
//   hoursRemaining: document.querySelector('[data-hours]'),
//   minutesRemaining: document.querySelector('[data-minutes]'),
//   secondsRemaining: document.querySelector('[data-seconds]'),
// };

// refs.btnStartTimer.disabled = true;
// refs.btnStartTimer.addEventListener('click', timerStart);

// let remainingTime = 0;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     onDateCheck(selectedDates);
//   },
// };

// flatpickr(refs.dateInput, options);

// Report.info(
//   '👋 Greeting, my Friend!',
//   'Please, choose a date and click on start',
//   'Okay'
// );

// function onDateCheck(selectedDates) {
//   selectedDate = selectedDates[0].getTime();
//   currentDate = new Date().getTime();

//   if (selectedDate > currentDate) {
//     refs.btnStartTimer.disabled = false;
//     Report.success(
//       '🥰 Congratulation! Click on start!',
//       '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
//       'Okay'
//     );
//     return;
//   }
//   Report.failure(
//     '🥺 Ooops...',
//     'Please, choose a date in the future and remember: "Knowledge rests not upon truth alone, but upon error also." - Carl Gustav Jung',
//     'Okay'
//   );
// }

// function timerStart() {
//   intervalId = setInterval(() => {
//     currentDate = new Date().getTime();
//     if (selectedDate - currentDate <= 1000) {
//       clearInterval(intervalId);
//       refs.btnStartTimer.disabled = true;
//       refs.dateInput.disabled = false;
//       Report.info(
//         '👏 Congratulation! Timer stopped!',
//         'Please, if you want to start timer, choose a date and click on start or reload this page',
//         'Okay'
//       );
//       return;
//     } else {
//       refs.btnStartTimer.disabled = true;
//       refs.dateInput.disabled = true;
//       currentDate += 1000;
//       remainingTime = Math.floor(selectedDate - currentDate);
//       convertMs(remainingTime);
//     }
//   }, TIMER_DELAY);
// }

// function createMarkup({ days, hours, minutes, seconds }) {
//   refs.daysRemaining.textContent = days;
//   refs.hoursRemaining.textContent = hours;
//   refs.minutesRemaining.textContent = minutes;
//   refs.secondsRemaining.textContent = seconds;
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );
//   createMarkup({ days, hours, minutes, seconds });
//   return { days, hours, minutes, seconds };
// }

//------- 2nd variant -----------------------------------------------------------------

// const startBtn = document.querySelector('[data-start-timer]');
// const dataDays = document.querySelector('[data-days]');
// const dataHours = document.querySelector('[data-hours]');
// const dataMinutes = document.querySelector('[data-minutes]');
// const dataSeconds = document.querySelector('[data-seconds]');

// const flatpickrInput = document.querySelector('#datetime-picker');

// startBtn.disabled = true;
// startBtn.addEventListener('click', onStartCounter);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() < Date.now()) {
//       Report.failure(
//         '🥺 Ooops...',
//         'Please, choose a date in the future and remember: "Knowledge rests not upon truth alone, but upon error also." - Carl Gustav Jung',
//         'Okay'
//       );
//     } else {
//       selectedDate = selectedDates[0].getTime();
//       startBtn.disabled = false;
//       Report.success(
//         '🥰 Congratulation! Click on start!',
//         '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
//         'Okay'
//       );
//     }
//   },
// };

// const fp = flatpickr(flatpickrInput, options);

// Report.info(
//   '👋 Greeting, my Friend!',
//   'Please, choose a date and click on start',
//   'Okay'
// );

// function onStartCounter() {
//   counter.start();
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// const counter = {
//   start() {
//     intervalId = setInterval(() => {
//       currentDate = Date.now();
//       const deltaTime = selectedDate - currentDate;
//       updateTimerface(convertMs(deltaTime));
//       startBtn.disabled = true;
//       flatpickrInput.disabled = true;

//       if (deltaTime <= 1000) {
//         this.stop();
//         Report.info(
//           '👏 Congratulation! Timer stopped!',
//           'Please, if you want to start timer, choose a date and click on start or reload this page',
//           'Okay'
//         );
//       }
//     }, TIMER_DELAY);
//   },

//   stop() {
//     startBtn.disabled = true;
//     flatpickrInput.disabled = false;
//     clearInterval(intervalId);
//     return;
//   },
// };

// function updateTimerface({ days, hours, minutes, seconds }) {
//   dataDays.textContent = `${days}`;
//   dataHours.textContent = `${hours}`;
//   dataMinutes.textContent = `${minutes}`;
//   dataSeconds.textContent = `${seconds}`;
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

//------- 3rd variant -----------------------------------------------------------------

// const startBtn = document.querySelector('[data-start-timer]');
// const dataDays = document.querySelector('[data-days]');
// const dataHours = document.querySelector('[data-hours]');
// const dataMinutes = document.querySelector('[data-minutes]');
// const dataSeconds = document.querySelector('[data-seconds]');

// const calendar = document.querySelector('#datetime-picker');

// startBtn.disabled = true;

// Report.info(
//   '👋 Greeting, my Friend!',
//   'Please, choose a date and click on start',
//   'Okay'
// );

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     onChooseDate(selectedDates[0]);
//   },
// };

// function onChooseDate(day) {
//   selectedDate = day.getTime();
//   currentDate = Date.now();
//   if (selectedDate < currentDate) {
//     Report.failure(
//       '🥺 Ooops...',
//       'Please, choose a date in the future and remember: "Knowledge rests not upon truth alone, but upon error also." - Carl Gustav Jung',
//       'Okay'
//     );
//   } else {
//     startBtn.disabled = false;
//     calendar.disabled = true;
//     Report.success(
//       '🥰 Congratulation! Click on start!',
//       '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
//       'Okay'
//     );
//   }
//   return selectedDate;
// }

// const fp = flatpickr(calendar, options);

// class CountdownTimer {
//   constructor(
//     rootSelectorDay,
//     rootSelectorHours,
//     rootSelectorMinutes,
//     rootSelectorSeconds
//   ) {
//     this.rootSelectorDay = rootSelectorDay;
//     this.rootSelectorHours = rootSelectorHours;
//     this.rootSelectorMinutes = rootSelectorMinutes;
//     this.rootSelectorSeconds = rootSelectorSeconds;
//   }

//   start() {
//     if (intervalId) return;

//     intervalId = setInterval(() => {
//       currentDate = Date.now();
//       let delta = selectedDate - currentDate;
//       this.updateClockface(this.convertMs(delta));
//       startBtn.disabled = true;
//       calendar.disabled = true;

//       if (delta <= 1000) {
//         this.stop();
//         this.updateClockface(this.convertMs(0));
//         Report.info(
//           '👏 Congratulation! Timer stopped!',
//           'Please, if you want to start timer, choose a date and click on start or reload this page',
//           'Okay'
//         );
//       }
//     }, TIMER_DELAY);
//   }

//   stop() {
//     clearInterval(intervalId);
//     this.intervalId = null;
//     startBtn.disabled = true;
//     calendar.disabled = false;
//     return;
//   }

//   addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = this.addLeadingZero(Math.floor(ms / day));
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = this.addLeadingZero(
//       Math.floor(((ms % day) % hour) / minute)
//     );
//     const seconds = this.addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   }

//   updateClockface({ days, hours, minutes, seconds }) {
//     this.rootSelectorDay.textContent = `${days}`;
//     this.rootSelectorHours.textContent = `${hours}`;
//     this.rootSelectorMinutes.textContent = `${minutes}`;
//     this.rootSelectorSeconds.textContent = `${seconds}`;
//   }
// }

// const timerCountdown = new CountdownTimer(
//   dataDays,
//   dataHours,
//   dataMinutes,
//   dataSeconds
// );

// startBtn.addEventListener('click', () => {
//   timerCountdown.start();
// });

// ------ 4th variant -------------------------------------------------------

const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start-timer]');
startBtn.disabled = true;

Report.info(
  '👋 Greeting, my Friend!',
  'Please, choose a date and click on start',
  'Okay'
);

flatpickr(calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Report.failure(
        '🥺 Ooops...',
        'Please, choose a date in the future and remember: "Knowledge rests not upon truth alone, but upon error also." - Carl Gustav Jung',
        'Okay'
      );
    } else {
      Report.success(
        '🥰 Congratulation! Click on start!',
        '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
        'Okay'
      );
      startBtn.disabled = false;
      const setTimer = () => {
        selectedDate = selectedDates[0].getTime();
        timer.start();
      };

      startBtn.addEventListener('click', setTimer);
    }
  },
});

const timer = {
  rootSelector: document.querySelector('.timer'),
  start() {
    intervalId = setInterval(() => {
      startBtn.disabled = true;
      calendar.disabled = true;
      currentDate = Date.now();
      const delta = selectedDate - currentDate;

      if (delta <= 0) {
        this.stop();
        Report.info(
          '👏 Congratulation! Timer stopped!',
          'Please, if you want to start timer, choose a date and click on start or reload this page',
          'Okay'
        );
        return;
      }
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      this.rootSelector.querySelector('[data-days]').textContent =
        this.addLeadingZero(days);
      this.rootSelector.querySelector('[data-hours]').textContent =
        this.addLeadingZero(hours);
      this.rootSelector.querySelector('[data-minutes]').textContent =
        this.addLeadingZero(minutes);
      this.rootSelector.querySelector('[data-seconds]').textContent =
        this.addLeadingZero(seconds);
    }, TIMER_DELAY);
  },

  stop() {
    clearInterval(intervalId);
    this.intervalId = null;
    startBtn.disabled = true;
    calendar.disabled = false;
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  },
};
