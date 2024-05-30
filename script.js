const defaultImg = document.querySelector('.handDefault');
const buttnFrench = document.querySelector('.french');
const buttnTaupe = document.querySelector('.taupe');
const buttnZilver = document.querySelector('.zilver');
const buttnGold = document.querySelector('.gold');
const buttnFlwrs = document.querySelector('.decorflwrs');
const buttnFlame = document.querySelector('.decorflame');
const buttnSmoothy = document.querySelector('.decorsmthy');
const audio = new Audio('audio/magic-wand-6214.mp3'); //bron uitleg audio code: Franks laboratory. (2021, 12 maart). JavaScript audio CRASH COURSE for beginners [Video]. YouTube. https://www.youtube.com/watch?v=VXWvfrmpapI 0-4:31min, bron audio:https://pixabay.com/sound-effects/search/magic/
const buttnDone = document.getElementById('buttnDone');//bron:Document.getElementById() method - Web APIs | MDN. (2023, 21 december). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
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
function resetColors() {  //bron: HTMLFormElement: reset() method - Web APIs | MDN. (2023b, april 7). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
    frenchColor = false;
    taupe = false;
    zilver = false;
    gold = false;
}

// Kleur functions
function french() { //bron image: IMGBIN.com. (z.d.-c). Franske Negle Manicure Nail Art Artificial Nails Nail Polish PNG - Free download. https://imgbin.com/png/WVEck3VZ/franske-negle-manicure-nail-art-artificial-nails-nail-polish-png
    defaultImg.src = "images/hand.png";
    resetColors();
    frenchColor = true;
    clearMessage();
}

function fullTaupe() {//bron image:IMGBIN.com. (z.d.-b). Artificial Nails Nail Art Nail Polish Manicure PNG - Free download. https://imgbin.com/png/GZgNMUcR/artificial-nails-nail-art-nail-polish-manicure-png
    defaultImg.src = "images/taupefull.png";
    resetColors();
    taupe = true;
    clearMessage();
}

function fullZilver() {//bron image:IMGBIN.com. (z.d.). Artificial Nails Nail Art Nail Polish Manicure PNG - Free download. https://imgbin.com/png/tD4nUQt4/artificial-nails-nail-art-nail-polish-manicure-png
    defaultImg.src = "images/fullzilver.png";
    resetColors();
    zilver = true;
    clearMessage();
}

function fullGold() {//bron image:IMGBIN.com. (z.d.-d). Nail Polish Manicure Artificial Nails Nail Art PNG - free download. https://imgbin.com/png/EH4axsmT/nail-polish-manicure-artificial-nails-nail-art-png
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
function showMessage(msg) { //medestudent Jillian heeft deels geholpen met deze code
    messageDiv.textContent = msg;
}

// Combinaties met decor 
function decorFlame() { //bron image decor: Dynamic red fire flame with flickering lines - Unlimited Download. cleanpng.com. (z.d.). cleanpng.com. https://www.cleanpng.com/png-orange-dynamic-red-fire-flame-with-flickering-line-8069732/
    if (frenchColor && taupe && zilver && gold) { //medestudent Jillian heeft deels geholpen met deze code
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
    if (frenchColor && taupe && zilver && gold) {
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

function decorSmoothy() { //bron image decor: Juice Background - Unlimited download. Cleanpng.com. (z.d.). cleanpng.com. https://www.cleanpng.com/png-juice-smoothie-pineapple-drawing-fruit-pineapple-73173/
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
buttnDone.addEventListener('click', function () {
    audio.play();
});
