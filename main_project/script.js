var countdownInterval;

function setAlarm() {
    var alarmTimeInput = document.getElementById('alarm-time').value;
    var alarmTime = new Date();
    var currentTime = new Date();
    
    var [alarmHours, alarmMinutes] = alarmTimeInput.split(':').map(Number);
    alarmTime.setHours(alarmHours, alarmMinutes, 0, 0);

    if (alarmTime < currentTime) {
        alarmTime.setDate(alarmTime.getDate() + 1); // Alarm time is in the past, add a day
    }

    var countdownElement = document.getElementById('countdown');
    countdownInterval = setInterval(() => {
        var now = new Date().getTime();
        var distance = alarmTime - now;
        var hoursRemaining = Math.floor(distance / (1000 * 60 * 60));
        var minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = 'Time remaining: ' + hoursRemaining + 'h ' + minutesRemaining + 'm ' + secondsRemaining + 's ';
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Time's up!";
            window.location.href = "submit-alarm.html";
        }
    }, 1000); // Update every second
}

function turnOff() {
    alert("Alarm turned off!");
    clearInterval(countdownInterval);
    window.location.href = "index.html";
}

function snooze() {
    clearInterval(countdownInterval);
    alert("Alarm turned off!");
    var currentTime = new Date().getTime();
    var alarmTime = new Date(currentTime + 5 * 60 * 1000);
    var snoozeHour = alarmTime.getHours();
    var snoozeMinute = alarmTime.getMinutes();
    var snoozeTimeFormatted = formatTime(snoozeHour) + ':' + formatTime(snoozeMinute);
    document.getElementById('alarm-time').value = snoozeTimeFormatted;
    setAlarm();
}


function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}
