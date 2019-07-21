"use strict";

const axios = require('axios')
const moment = require('moment')

// KioskDateTime=2019-07-20T02:42:11.712
// LoadStamp=2019-07-20+02:34:32
class Clock {

    constructor() {
        this.time = new Date(Date.now());
    }
    adjustHour(hour) {
        this.time.setHours(hour)
    }
    adjustMin(minute) {
        this.time.setMinutes(minute);
    }
    printTime() {
        console.log(this.time.toTimeString());
    }
    resetTime(){
        this.time = new Date(Date.now());
    }
    getKioskDateTime() {
    }
    

}
let clock = new Clock();
console.log(clock.getKioskDateTime())