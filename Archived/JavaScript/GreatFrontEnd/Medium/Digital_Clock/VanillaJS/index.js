import './styles.css';

// Write your JavaScript here.

// Vanilla JavaScript DOM Selection
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById("minute")
const secondElement = document.getElementById("second")

// Clock functionality
const current = new Date()

let hour = 1
let minute = 1
let second = 1

const setUpClock = () => {
    const current = new Date()
    hour = current.getHours()
    minute = current.getMinutes()
    second = current.getSeconds()
}

const updateClock = () => {
    second += 1

    if (second >= 60) {
        minute += 1
        second = 0
    }

    if (minute >= 60) {
        hour += 1
        minute = 0
    }

    if (hour > 24) {
        hour = 1
    }
}

const UpdateHTML = () => {
    hourElement.innerHTML = `${hour < 10? 0 : ""}${hour}`
    minuteElement.innerHTML = `${minute < 10? 0 : ""}${minute}`
    secondElement.innerHTML = `${second < 10? 0 : ""}${second}`
}


setUpClock()
setInterval(function() {
    updateClock()
    printClock()
}, 1000)