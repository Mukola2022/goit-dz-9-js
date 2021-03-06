import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]')

startBtn.setAttribute("disabled", "disabled");

const days = document.querySelector('[data-days]');
console.log(days)
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const timer = document.querySelector('.timer');
timer.setAttribute('id', 'countdown');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let curtime = new Date()
    let time = new Date(selectedDates[0]) - curtime;

    if (time < 0) {
    return  window.alert('Please choose a date in the future')
    }



    if ( new Date(selectedDates)) {
      startBtn.removeAttribute("disabled");
    }

    startBtn.addEventListener('click', () => {

      const intervalId = setInterval(() => {
          let curtime = new Date();
       let time = new Date(selectedDates[0]) - curtime;
       if (!(time >= 0) ) {
       clearInterval(intervalId);
       location.reload();
       }

        const timeComponent =  convertMs(time);
        console.log(timeComponent)

        updateClockface(timeComponent);

      }, 1000);

    })
    console.log(selectedDates);
},
}



function pad(value) {
    return String(value).padStart(2, '0');
  }

function convertMs(ms) {
// Number of milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Remaining days
const days = pad(Math.floor(ms / day));
// Remaining hours
const hours = pad(Math.floor((ms % day) / hour));
// Remaining minutes
const minutes = pad(Math.floor(((ms % day) % hour) / minute));
// Remaining seconds
const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

return { days, hours, minutes, seconds };
}



function updateClockface({ days, hours, minutes, seconds }) {
    document.querySelector('[data-days]').textContent = `${days}`
    document.querySelector('[data-hours]').textContent = `${hours}`
    document.querySelector('[data-minutes]').textContent = `${minutes}`
    document.querySelector('[data-seconds]').textContent = `${seconds}`

  }


const fp = flatpickr(input, options);
