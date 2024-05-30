const defaultImg = document.querySelector('.handDefault');
const buttnFrench = document.querySelector('.french');
const buttnTaupe = document.querySelector('.taupe');
const buttnZilver = document.querySelector('.zilver');
const buttnGold = document.querySelector('.gold');
const buttnFlwrs = document.querySelector('.decorflwrs');
const buttnFlame = document.querySelector('.decorflame');
const buttnSmoothy = document.querySelector('.decorsmthy');
const audio = new Audio('audio/magic-wand-6214.mp3');
const buttnDone = document.getElementById('buttnDone');
const messageDiv = document.getElementById('message'); 

// Kleur en decor variabelen
let frenchColor = false;
let taupe = false;
let zilver = false;
let gold = false;
let flame = false;
let flower = false;
let smoothy = false;

// Deze function zorgt ervoor dat wanneer een nieuwe kleur wordt geselecteerd, de vorige kleurselectie wordt gewist, waardoor een consistente status behouden blijft
function resetColors() {  
    frenchColor = false;
    taupe = false;
    zilver = false;
    gold = false;
}

// Kleur functions
function french() {
    defaultImg.src = "images/hand.png";
    resetColors(); 
    frenchColor = true;
    clearMessage();
}

function fullTaupe() {
    defaultImg.src = "images/taupefull.png";
    resetColors();
    taupe = true;
    clearMessage();
}

function fullZilver() {
    defaultImg.src = "images/fullzilver.png";
    resetColors();
    zilver = true;
    clearMessage();
}

function fullGold() {
    defaultImg.src = "images/fullgold.png";
    resetColors();
    gold = true;
    clearMessage();
}

// Clear message function
function clearMessage() {
    messageDiv.textContent = '';
}

// Show message function
function showMessage(msg) {
    messageDiv.textContent = msg;
}

// Combinaties met decor 
function decorFlame() {
    if (!frenchColor && !taupe && !zilver && !gold) {
        showMessage('Please select a color first.');
        return;
    }
    if (frenchColor) {
        defaultImg.src = "images/frenchflame.png";
    } else if (taupe) {
        defaultImg.src = "images/taupeflame.png";
    } else if (zilver) {
        defaultImg.src = "images/zilverflame.png";
    } else if (gold) {
        defaultImg.src = "images/goldflame.png";
    }
    flame = true;
    flower = false;
    smoothy = false;
}

function decorFlowers() {
    if (!frenchColor && !taupe && !zilver && !gold) {
        showMessage('Please select a color first.');
        return;
    }
    if (frenchColor) {
        defaultImg.src = "images/frenchflower.png";
    } else if (taupe) {
        defaultImg.src = "images/taupeflower.png";
    } else if (zilver) {
        defaultImg.src = "images/zilverflower.png";
    } else if (gold) {
        defaultImg.src = "images/goldflower.png";
    }
    flower = true;
    flame = false;
    smoothy = false;
}

function decorSmoothy() {
    if (!frenchColor && !taupe && !zilver && !gold) {
        showMessage('Please select a color first.');
        return;
    }
    if (frenchColor) {
        defaultImg.src = "images/frenchsmoothy.png";
    } else if (taupe) {
        defaultImg.src = "images/taupesmoothy.png";
    } else if (zilver) {
        defaultImg.src = "images/zilversmoothy.png";
    } else if (gold) {
        defaultImg.src = "images/goldsmoothy.png";
    }
    smoothy = true;
    flower = false;
    flame = false;
}

// Event listeners
buttnFrench.addEventListener('click', french);
buttnTaupe.addEventListener('click', fullTaupe);
buttnZilver.addEventListener('click', fullZilver);
buttnGold.addEventListener('click', fullGold);
buttnFlame.addEventListener('click', decorFlame);
buttnFlwrs.addEventListener('click', decorFlowers);
buttnSmoothy.addEventListener('click', decorSmoothy);
buttnDone.addEventListener('click', function() {
    audio.play();
});
