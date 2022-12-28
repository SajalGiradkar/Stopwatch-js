
let hr = 0;
let min = 0;
let sec = 0;
let mili = 0;
let timer = false;

let Start = () => {
    timer = true;
    Stopwatch();
}
let Stop = () => {
    timer = false;
}
let Reset = () => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    mili = 0;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('mili').innerHTML = '00';
}

let Stopwatch = () => {
    if (timer == true) {
        mili += 1;
        setTimeout(Stopwatch, 10);
        if (mili == 60) {
            sec += 1;
            mili = 0;
        }
        if (sec == 60) {
            min += 1;
            sec = 0;
            mili = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
            mili = 0;
        }
        if (hr == 24) {
            timer = false;
            hr = 0;
            min = 0;
            sec = 0;
            mili = 0;
            document.getElementById('hr').innerHTML = '00';
            document.getElementById('min').innerHTML = '00';
            document.getElementById('sec').innerHTML = '00';
            document.getElementById('mili').innerHTML = '00';
        }

    }
    if (mili < 10) {
        document.getElementById('mili').innerHTML = `0${mili}`;
    } else {
        document.getElementById('mili').innerHTML = mili;
    }
    if (sec < 10) {
        document.getElementById('sec').innerHTML = `0${sec}`;
    } else {
        document.getElementById('sec').innerHTML = sec;
    }
    if (min < 10) {
        document.getElementById('min').innerHTML = `0${min}`;
    } else {
        document.getElementById('min').innerHTML = min;
    }
    if (hr < 10) {
        document.getElementById('hr').innerHTML = `0${hr}`;
    } else {
        document.getElementById('hr').innerHTML = hr;
    }
}
