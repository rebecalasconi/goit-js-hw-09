
'use strict';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector("button[data-start]");

let daysV = document.querySelector("span[data-days]");
let hoursV = document.querySelector("span[data-hours]");
let minutesV = document.querySelector("span[data-minutes]");
let secondsV = document.querySelector("span[data-seconds]");

const dateToday = new Date();
var diff;
var value;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, countDownTimer) {  
    value = selectedDates[0];
    if (value < dateToday) {
      Notiflix.Notify.failure(`Please choose a date in the future`);
       startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
        startBtn.addEventListener('click', () => {
        timerId = setInterval(countDownTimer, 1000);
        startBtn.disabled = true;
        input.flatpickr({
          enable: [value]
      });
        });
      
        countDownTimer();
        
        function countDownTimer() {
        const today = new Date();
        diff = value - today;    
      
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
    
       
        if (diff <= 0) {
          clearInterval(timerId);
          Notiflix.Notify.success(`The day has come! :)`);
         }
        
        addLeadingZero();
             
        function addLeadingZero() {
          if (daysV.textContent < 10 || minutesV.textContent < 10 || 
            secondsV.textContent < 10  || hoursV.textContent < 10 ) {
            
            let paddedDays = daysV.textContent.padStart(2,"0");
            paddedHours = hoursV.textContent.padStart(2,"0");
            paddedMin = minutesV.textContent.padStart(2,"0");
            paddedSec = secondsV.textContent.padStart(2,"0");
            daysV.textContent = paddedDays;
            hoursV.textContent = paddedHours;
            minutesV.textContent = paddedMin;
            secondsV.textContent = paddedSec;
          }}      
        }
      }
    }    
  };   
  
flatpickr(input, options);
