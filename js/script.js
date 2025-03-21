const titel = document.querySelector("h1");
const actieBanaan = document.querySelector("#actie_banaan");
const actieBloem = document.querySelector("#actie_bloem");
const actieStrik = document.querySelector("#actie_strik");
const reset = document.querySelector("#reset");
const pText = document.querySelector("p");
const bear = document.querySelector("#beary"); //de afbeelding veranderd maar de referentie naar de ID niet, daarom is het een const

let bloemStatus = false;
let banaanStatus = false;
let strikStatus = false;

// audio bron: https://youtu.be/vojq5-Jn1TA?si=StgUOVwq4j701hBT
// en voor de theorie: https://stackoverflow.com/questions/76390857/how-do-i-assign-variables-that-hold-audio-files-to-html-elements

const audioBanaan = new Audio("./audio/bad_banaan.mp3");
const audioBloem = new Audio("./audio/happy_bloem.mp3");
const audioStrik = new Audio("./audio/happy_strik.mp3");

// Prompt: Waarom wordt alleen 1 audio afgespeeld als ik meerdere audio fragmenten heb.

function stopAllAudio() {
  audioBanaan.pause(); // alle audio wordt gepauzeerd totdat de functie bearyExpressie() aangeeft dat er 1 moet worden afgespeeld
  audioBanaan.currentTime = 0; // zorgt ervoor dat het afspeelt vanaf punt 0, dus vanaf het begin
  audioBloem.pause();
  audioBloem.currentTime = 0;
  audioStrik.pause();
  audioStrik.currentTime = 0;
}

function resetKnop() {
  banaanStatus = false;
  bloemStatus = false;
  strikStatus = false;
  bear.src = "./images/beary.png";
  console.log("Beepboop, reset");
  pText.textContent = "Beary is aan het wachten...";
}

function setStatusBanaan() {
  banaanStatus = true; // als dit niet aangegeven wordt, weet het systeem ook niet welke status true is, en gebeurd er dus niks
  bloemStatus = false; // als dit niet aangegeven wordt, heeft het syteem ook geen reden om verder te kijken tijdens het gebruik van if/else, en dus wordt alleen de banaanStatus weergegeven
  strikStatus = false;
  bearyExpressie();
}

function setStatusBloem() {
  banaanStatus = false;
  bloemStatus = true;
  strikStatus = false;
  bearyExpressie();
}

function setStatusStrik() {
  banaanStatus = false;
  bloemStatus = false;
  strikStatus = true;
  bearyExpressie();
}

function bearyExpressie() {
  if (banaanStatus == true) {
    bear.src = "./images/beary_banaan.png";
    stopAllAudio();
    audioBanaan.play();
    console.log("Bananen test, zie je mij?");
    pText.textContent = "Bleh, dit vindt zij niet leuk. Probeer iets anders.";
  } else if (bloemStatus == true) {
    bear.src = "./images/beary_bloemen.png";
    stopAllAudio();
    audioBloem.play();
    console.log("Bloem test, zie je mij?");
    pText.textContent = "Wow, dit is mooi! Laten we nog iets proberen!";
  } else if (strikStatus == true) {
    bear.src = "./images/beary_strik.png";
    stopAllAudio();
    audioStrik.play();
    console.log("Strik test, zie je mij?");
    pText.textContent = "Ooh, dit is schattig! Laten we nog iets proberen.";
  }
}

actieBanaan.addEventListener("click", setStatusBanaan);

actieBloem.addEventListener("click", setStatusBloem);

actieStrik.addEventListener("click", setStatusStrik);

reset.addEventListener("click", resetKnop);

