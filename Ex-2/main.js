// JS

// selections
let buttonStartStop = document.querySelector('#start-stop');
let buttonReset = document.querySelector('#reset');
let buttonRecord = document.querySelector('#record');
let timer = document.querySelector('h2');
let records = document.querySelector('h3');
let myP = document.createElement('p');

// Global variables
let timeSeconds = 0;
let timeHundredSeconds = 0
let startStopActive = false;
let timerTime;

// function Initialisation
setUp();

// function definitions

function setUp() {
    // STARTSTOP
    buttonStartStop.addEventListener('click', function(){
        startStop();
    });
    // RESET
    buttonReset.addEventListener('click', function() {
        reset();
    });
    // RECORD
    buttonRecord.addEventListener('click', function(){
        record()
    });

}

function startStop() {
    if( startStopActive == false) {
        startStopActive = true;
        console.log('activated')
        timerTime = setInterval(function(){
            timeHundredSeconds++;
            if(timeHundredSeconds == 100) {
                timeSeconds++;
                timeHundredSeconds = 0;
            }
            console.log(timeSeconds+':'+timeHundredSeconds);
            timer.innerHTML =timeSeconds+':'+timeHundredSeconds;
        },10);
    }else{
        startStopActive = false;
        console.log('stoped');
        clearInterval(timerTime);
        // timer.innerHTML =timeSeconds+':'+timeHundredSeconds;
    }

}

function reset() {
    timeSeconds = 0;
    timeHundredSeconds = 0;
    timer.innerHTML =timeSeconds+':'+timeHundredSeconds+'0';
    records.removeChild(myP);
}


function record() {
    clearInterval(timerTime);
    myP.innerHTML = timer.innerHTML =timeSeconds+':'+timeHundredSeconds;
    records.appendChild(myP);
    //timerTime();
}