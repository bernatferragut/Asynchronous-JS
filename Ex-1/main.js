// JS

// Selections => List of pads
let selectedPads = document.getElementsByClassName('pad');

// Creating a 9 pairs list 
let myPairs = [1,1,2,2,3,3,4,4,5]; // potential numbers
console.log('original: ' + myPairs);

// Creating a Shuffled 9 pairs list algorithm
function myShuffle(myPairs) {
     // shuffle algorithm
     for( let i = myPairs.length-1; i>=0; i-- ) {
        // random number (0-9) of the list
        let randMyPairs =  Math.floor(Math.random() * (i+1));
        let itemAtIndex = myPairs[randMyPairs];
        // values permutations
        myPairs[randMyPairs] = myPairs[i];
        myPairs[i] = itemAtIndex;
     }
     console.log('shuffled: ' + myPairs);
     return myPairs;
}
let shuffledPairs = myShuffle(myPairs);
//------------------------------------------------------------
// Now we have the 9 pairs list + and the same list shuffled => myPairs + shuffledPairs
//------------------------------------------------------------

// Global variables
let clickedArray = []; // the array will contain 2 cell objects to compare :)
let interval;
let started = false;
let time = 0;
let ready = true;
let numCompleted = 0;

// functions executions
setUp();

// function definitions 
function setUp() {
    for(let i=0; i<selectedPads.length; i++) {
        // cell jsobject creations
        cell = selectedPads[i];
        cell.paired = false;
        cell.clicked = false;
        cell.value = shuffledPairs[i];
        // cell mouseenter
        cell.addEventListener('mouseenter', function(){
            if(cell.paired==false && cell.clicked==false){
                this.style.background = 'orange';
            }
        });
        // cell mouseleave
        cell.addEventListener('mouseleave', function() {
            if(cell.paired==false && cell.clicked==false){
                this.style.background = '#cacbbb';
            }
        });
        // cell click
        cell.addEventListener('click', function(){
            // when ready is false no click event handlers can be made
            if(ready == false){
                return;
            }
            // start timer
            startTimer();
            // start
            if(this.clicked == false && this.paired == false){
                clickedArray.push(this);
                showContent(this);
            }
            // matching pairs
            if(clickedArray.length == 2) {
                // a matching pair is found and passed as complete
                complete(clickedArray[0]);
                complete(clickedArray[1]);
                // clicked array cleaned
                clickedArray = [];
                // when finished
                if(numCompleted == 8) {
                    alert('Youn won in ' + time + 'seconds');
                    clearInterval(interval);
                }
            } else {
                // if matching pair is not found
                ready = false;
                setTimeout(function() {
                    // after 500 ms
                },500);
                hide(clickedArray[0]);
                hide(clickedArray[1]);

                clickedArray = [];
                ready = HTMLPictureElement;

            }
        });
    }
}

function startTimer() {
    if(started == false) {
        interval = setInterval(function() {
            time ++;
            document.getElementById('timer').innerHTML = 't: ' + time;
        }, 1000)
    }
    started = true;
}

function showContent(cell) {
    cell.style.background = 'red';
    cell.innerHTML = cell.value;
    cell.clicked = true;
}

function hide(cell) {
    cell.style.background = '#cacbbb';
    cell.innerHTML = '';
    cell.clicked = false;
}

function complete(cell) {
    cell.style.background = 'green';
    numCompleted++;
    cell.paired = true;
}


