/* ??? */

/* Class: Timer
 *
 * Parameters:
 *   max - 0
 */
function ETimer(max, name) {
    this.name = name;
    this.sec_left = 0;
    this.max = 0;
}
ETimer.prototype.removeTime = function(secs) {
    if(this.sec_left - secs > 0)
        this.sec_left -= secs;
    else
        this.sec_left = 0;
}
// Returns a function that returns the time left
ETimer.prototype.startTimer = function(secs) {
    var timeStarted = Date.now();
    return function() {
        var val = secs - ((Date.now() - timeStarted) / 1000);
        return val > 0 ? val : 0;
    };
}

function EEndTimer(name, endTime) {
    this.name = name;
    this.endTime = new Date(endTime).getTime();
    this.endTime.setDate(new Date().getDate());
}
EEndTimer.prototype.timeLeft = function() {
    var secs =  (this.endTime - Date.now()) / 1000;
    var min = Math.floor(secs / 60);
    var seconds = secs - min * 60;
    return {min: min, sec: seconds};
}
EEndTimer.prototype.setEndTime(endTime) {
    this.endTime = new Date(endTime).getTime();
}

document.getElementById("start").onclick = function() {
   alert("Start! again");
}

var time_spent = 0;

/* Instant Time - When you forgot to set a timer */

/* Function gets called for Instant Time */
function instantTime(n) {
    time_spent += n;
}

document.getElementById("instant-time-btn").onclick = function() {
    var n = Number(document.getElementById("instant-time").value) | 0;
    instantTime(n);
}
