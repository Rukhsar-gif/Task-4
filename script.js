"use strict";

/*
    Select HTML elements
*/
const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("currentDate");
const smallClockElement = document.getElementById("currentTimeSmall");


/*
    Add a leading zero to single-digit values.

    Example:
    5  -> 05
    9  -> 09
    12 -> 12
*/
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}


/*
    Update the clock and date
*/
function updateClock() {

    // Create a Date object containing the current date and time.
    const now = new Date();


    /*
        Get the current hours, minutes and seconds.
        JavaScript returns these values as numbers.
    */
    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const seconds = addLeadingZero(now.getSeconds());


    /*
        Create the main clock format:

        HH:MM:SS
    */
    const currentTime = `${hours}:${minutes}:${seconds}`;


    /*
        Create the smaller clock format:

        HH : MM : SS
    */
    const smallTime = `${hours} : ${minutes} : ${seconds}`;


    /*
        Update the main clock
    */
    clockElement.textContent = currentTime;


    /*
        Update the smaller CURRENT TIME card
    */
    smallClockElement.textContent = smallTime;


    /*
        Format and display the current date
    */
    dateElement.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


/*
    Run the function immediately.

    This prevents the page from showing
    00:00:00 until the first interval executes.
*/
updateClock();


/*
    Update the clock every 1000 milliseconds.

    1000 milliseconds = 1 second
*/
setInterval(updateClock, 1000);