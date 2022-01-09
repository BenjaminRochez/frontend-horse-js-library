import Time from "./time.js";

// Create a Date() object for Christmas
let christmas = new Time("December 25, 2021");

// Get some details
let day = christmas.getDay();
let month = christmas.getMonth();
console.log(day, month);

// Modify the date
christmas.addDays(7);
christmas.addYears(1);
console.log(christmas);
