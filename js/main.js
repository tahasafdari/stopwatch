window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let lapNow = null ;

    const appendMinutes = document.getElementById('minutes');
    const appendSeconds = document.getElementById('seconds');
    const appendTens = document.getElementById('tens');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');
    const lapBtn = document.getElementById('lap-btn');
    const appendLap = document.getElementById('lap-status');

    let Interval;

    startBtn.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    pauseBtn.onclick = function () {
        clearInterval(Interval);
    }
    resetBtn.onclick = function () {
        clearInterval(Interval)
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendLap.innerHTML = null;
    }

    lapBtn.onclick = function () {
        lapNow = `<div class="lap">${minutes} : ${seconds} : ${tens}</div>`
        appendLap.innerHTML += lapNow;
    }


    function startTimer(){
        tens++;
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log(seconds);
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
    }
}




