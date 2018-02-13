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


// LOGIC

// functions executions
setUp();

// function definitions 
function setUp() {
    for(let i=0; i<selectedPads.length; i++) {
        // cell creations
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
            // cell active
            if (cell.clicked == false) {
                cell.clicked = true;
                this.style.background = 'lightgreen';
                console.log('now--->clicked');
            } else {
                cell.clicked = false;
                console.log('now--->never clicked');
            }
            
            
        });
    }
}


