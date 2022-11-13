window.onload =  () => {
    let minutes = 00;
    let seconds = 00;
    let mili = 00;

    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let Interval = 0;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    let appendMili = document.getElementById("mili");
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");

    buttonReset.onclick = function () {
        clearInterval(Interval);
        mili = "00";
        seconds = "00";
        minutes = "00";
        appendMili.innerHTML = mili;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    };

    function startTimer() {
        mili++;

        if (mili <= 9) {
            appendMili.innerHTML = "0" + mili;
        }

        if (mili > 9) {
            appendMili.innerHTML = mili;
        }

        if (mili > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            mili = 0;
            appendMili.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
    }
};
