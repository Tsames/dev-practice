const now = new Date(Date.now()).getTime();
const nowTwo = new Date(now).getTime();
const nowThree = new Date(now).getTime();
const dayArray = [now, nowTwo, nowThree];;

console.log(dayArray);

let dayString = "";
dayArray.forEach((date) => {
  dayString += date.toString() + ";"
})

console.log(dayString);
dayString.slice(-1, dayArray.length)
console.log(dayString);
console.log(dayString.split(';'));

