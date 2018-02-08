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

console.log(randomAnswers());

