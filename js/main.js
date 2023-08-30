const hourField = document.getElementById('hour');
const minuteField = document.getElementById('minute');
const secondField = document.getElementById('second');
// console.log(hour, minute, second);
// console.log(hour.innerText, minute.innerText, second.innerText);

let hour = 0;
let minute = 0;
let second = 0;
let timer = false;

document.getElementById('start-btn').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(startTimer, 1000);
    } else {
        return;
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    clearInterval(timer);
    timer = false;
    console.log(typeof(timer));
    console.log(Boolean(timer));
});
document.getElementById('reset-btn').addEventListener('click', () => {
    second = 0;
    minute = 0;
    hour = 0;
    secondField.innerText = '00';
    minuteField.innerText = '00';
    hourField.innerText = '00';
    clearInterval(timer);
});


function startTimer() {
    second++;
    if (second < 10) {
        secondField.innerText = '0' + second;
    } else {
        secondField.innerText = second;
    }
    if (second === 60) {
        second = 0;
        minute++;
        minuteField.innerText = minute;
        secondField.innerText = second;
    }
    if (minute === 60) {
        minute = 0;
        second = 0;
        hour++;
        hourField.innerText = hour;
        minuteField.innerText = minute;
        secondField.innerText = second;
    }
}
