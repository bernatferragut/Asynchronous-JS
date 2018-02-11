// JS

// Selections
let selectedPads = document.getElementsByClassName('pad');

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

// Creating a Shuffle list 
let myPairs = [1,1,2,2,3,3,4,4,5]; // potential numbers
console.log('original: ' + myPairs);

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

;
let shuffledPairs = myShuffle(myPairs);

// Action
let isClicked = false;
for(let i=0; i<selectedPads.length; i++) {
    selectedPads[i].addEventListener('click', activated, isClicked);
    selectedPads[i].innerHTML = shuffledPairs[i];
}

