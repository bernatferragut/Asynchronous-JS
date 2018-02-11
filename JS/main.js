// JS

// Selections
let selectedPads = document.getElementsByClassName('pad');

// Action
let isClicked = false;
for(let i=0; i<selectedPads.length; i++) {
    selectedPads[i].addEventListener('click', activated, isClicked);
    selectedPads[i].innerHTML = randomAnswers();
}

// Logic

function activated(event) {
    if(isClicked == false) {
        this.style.backgroundColor = 'red';
        isClicked = true;
        console.log('now--->clicked');
    } else {
        this.style.backgroundColor = '#cacbbb';
        isClicked = false;
        console.log('now--->never clicked');
    }

}

// Creating random numbers for the cells
function randomAnswers() {
    return Math.floor(Math.random()*9)+1; // creates a random number between 1-9 
}

// Creating a Shuffle list 
let myPairs = [1,1,2,2,3,3,4,4,5]; // potential numbers
console.log('original list:' + myPairs);

function myShuffle(myPairs) {
     // shuffle algorithm
     for( let i = myPairs.length-1; i>=0; i-- ) {
        // random number (0-9) of the list
        let randMyPairs =  Math.floor(Math.random() * i+1);
        let itemAtIndex = myPairs[randMyPairs];
        // values permutations
        myPairs[itemAtIndex] = myPairs[i];
        myPairs[i] = itemAtIndex;
     }
     console.log('shuffled list:' + myPairs);
     return myPairs;
}

;
myShuffle(myPairs);

