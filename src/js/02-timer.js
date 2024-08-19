
'use strict';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector("button[data-start]");

let daysV = document.querySelector("span[data-days]");
let hoursV = document.querySelector("span[data-hours]");
let minutesV = document.querySelector("span[data-minutes]");
let secondsV = document.querySelector("span[data-seconds]");

const dateToday = new Date();
let diff;
let value;

startBtn.addEventListener('click', () => {
  continueInterval();
  startBtn.disabled = true;
  });

countDownTimer();
let timerId = setInterval(countDownTimer, 1000);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {  
    value = selectedDates[0];
    if (value < dateToday) {
      window.alert(`Please choose a date in the future`);
      startBtn.disabled = true;
      } else {
      startBtn.disabled = false;
      }
}};      
 
function continueInterval() {
  timerId = setInterval(countDownTimer, 1000);
  }

function countDownTimer() {
  diff = value - dateToday;        

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor(((diff % day) % hour) / minute);
  const seconds = Math.floor((((diff % day) % hour) % minute) / second);

  daysV.textContent = `${days}`;
  hoursV.textContent = `${hours}`;
  minutesV.textContent = `${minutes}`;
  secondsV.textContent = `${seconds}`;

  console.log(value); 
} 

flatpickr(input, options);