"use strict";

const axios = require('axios')
const moment = require('moment')

class Clock {
    

    constructor(orgId, KioskId) {
        this.time = new moment()
        this.punchUrl = "https://veritime.aesoponline.com/Clock/ProcessLoginRequest";

        this.orgId = orgId;
        this.KioskId = KioskId;
        this.KioskTypeId = 5;

    }
    setHour(hour) {
        this.time.hour(hour)
    }
    setMin(minute) {
        this.time.minute(minute);
    }
    resetTime(){
        this.time = new moment();
    }
    getKioskDateTime() {
        return this.time.format("YYYY-MM-DDTHH:mm:ss.SSS");
    }
    getLoadStampTime() {
        return this.time.format("YYYY-MM-DD+HH:mm:ss");
    }

    Punch(veritimeUser, veritimePass){
        let punchData = {
            OrgId: this.orgId,
            KioskId: this.KioskId,
            KioskTypeId: this.KioskTypeId,
            KioskDateTime: this.getKioskDateTime(),
            LoadStamp: this.getLoadStampTime(),
            Username: veritimeUser,
            Password: veritimePass
        }
        let punchHeaders = {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        let encodedData = this.convertToUrlEncodedString(punchData);
        response = '';
        axios.post(this.punchUrl, encodedData, {headers: punchHeaders})
            .then((res) => {
                response = res;
            })
            .catch((error) => {
                console.error(error);
            })
    }
    convertToUrlEncodedString(params){
        return Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
    

}
let clock = new Clock();
clock.Punch(1234,4444);