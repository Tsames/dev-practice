//By default, JavaScript will use the browser's time zone and display a date as a full text string

let aDate = new Date();
//console.log(aDate);

/* Four different ways to create a date object in JS.

1. new Date();

This will create a date object from the present date and time.

2. new Date(year, month, day, hours, minutes, seconds, milliseconds)

Specify a date and time with the order of values corresponding to the unit of time shown above. JS counts months from 0-11.
You can enter anywhere from 2 to 7 numbers as arguments in this format. But you cannot submit only one number...


3. new Date(milliseconds)

If you create a date object with a single argument it will be treated as milliseconds.
The number given will inform JS the date by the provided number of milliseconds since January 1st, 1970 @ 00:00:00:00 UTC.
One day (24 hours) is 86 400 000 milliseconds.

4. new Date(date string)

Lastly, 

*/

let bDate = new Date(2021, 1, 21);
//console.log(bDate);

let cDate = new Date(1645478246271);
//console.log(cDate);

//-------------Display Methods-------------------

//Date Objects are automatically converted to a string when inserted into HTML
console.log(bDate.toString());

//toUTCString Method
console.log(bDate.toUTCString());

//toDateString Method
console.log(bDate.toDateString());

//toISOString Method
console.log(bDate.toISOString());