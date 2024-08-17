'use strict';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector("button[data-start]");
let daysV = document.querySelector("span[data-days]");
let hoursV = document.querySelector("span[data-hours]");
let minutesV = document.querySelector("span[data-minutes]");
let secondsV = document.querySelector("span[data-seconds]");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      return selectedDates[0]
    },
  };

  input.flatpickr('selector', [options]);
const dateToday = new Date();

input.flatpickr({
    mode: "single",
    onChange: function(selectedDates) {
        let value = new Date(selectedDates);
           if (value < dateToday) {
            window.alert(`Please choose a date in the future`);
            startBtn.disabled = true;
           } else {
            startBtn.disabled = false;
           }
           const diff = value - dateToday;
           console.log(diff);

            const days = Math.floor(diff / (24 * 60 * 60 * 1000));
            const hours = Math.floor((diff / (60 * 60 * 1000)) % 24);
            const minutes = Math.floor((diff / (60 * 1000)) % 60);
            const secounds = Math.floor((diff / 1000) % 60);
          
            daysV.textContent = `${days}`;
            hoursV.textContent = `${hours}`;
            minutesV.textContent = `${minutes}`;
            secondsV.textContent = `${seconds}`;
          
           
            if (diff <= 0) {
              stopInverval();
              alert('Happy New Year!');
            }
          }
});


let timerId = setInterval(selectedDates, 1000);



startBtn.addEventListener('click', () => {
  continueInterval();
  console.log(`i`);
  startBtn.disabled = true;
});



function continueInterval() {
  alert('continue interval');
  timerId = setInterval(selectedDates, 1000);
}
