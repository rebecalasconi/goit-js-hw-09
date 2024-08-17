'use strict';

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let intervalId;

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopInverval();
  });
  
startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        console.log('New backgorund-color every 1 sec!');
      }, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
  });


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function stopInverval() {
    clearInterval(intervalId);
    console.log('The timer has been stopped!');
    stopBtn.disabled = true;
  }

  