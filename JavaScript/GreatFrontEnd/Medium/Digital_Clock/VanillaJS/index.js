//Get the Current Time in JavaScript Date Object

const current = new Date()

let hour = null
let minute = null
let second = null

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

const printClock = () => {
    console.log(`${hour} : ${minute} : ${second}`)
}


setUpClock()
setInterval(function() {
    updateClock()
    printClock()
}, 1000)