
const airHorn = 'airHorn';
const carHorn = 'carHorn';
const partyHorn = 'partyHorn';


let airhornsound = new Audio("./assets/media/audio/air-horn.mp3");
let carhornsound = new Audio("./assets/media/audio/car-horn.mp3");
let partyhornsound = new Audio("./assets/media/audio/party-horn.mp3");

let curSelection = airHorn;
let volumeInput = 100;

document.getElementById("honk-btn").onclick = function(e) {
  e.preventDefault(); 
  playSound()
};

document.getElementById("radio-air-horn").onclick = function(e) {
  console.log("select air horn");
  curSelection = airHorn;
  updateImage(curSelection);
};

document.getElementById("radio-car-horn").onclick = function(e) {
  console.log("select car horn");
  curSelection = carHorn;
  updateImage(curSelection);
};

document.getElementById("radio-party-horn").onclick = function(e) {
  console.log("select party horn");
  curSelection = partyHorn;
  updateImage(curSelection);
};

function updateImage(select) {
  if (select === airHorn) {
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg"
  }
  else if (select === carHorn) {
    document.getElementById("sound-image").src = "./assets/media/images/car.svg"
  }
  else {
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg"  
  }
}

function playSound() {
  if (curSelection === airHorn) {
    if(volumeInput>=100){
        volumeInput=100;
     }
     if(volumeInput<=0){
        volumeInput=0;
      } 
    airhornsound.volume = volumeInput/100;
    airhornsound.play();
  }
  else if (curSelection === carHorn) {
    if(volumeInput>=100){
        volumeInput=100;
     }
     if(volumeInput<=0){
        volumeInput=0;
      } 
    carhornsound.volume = volumeInput/100;
    carhornsound.play();
  }
  else {
    if(volumeInput>=100){
        volumeInput=100;
     }
     if(volumeInput<=0){
        volumeInput=0;
      } 
    partyhornsound.volume = volumeInput/100;
    partyhornsound.play(); 
  }
}

function updateIcon( ){
  let volImage = document.getElementById("volume-image");
  if(volumeInput === 0){
    volImage.src = "./assets/media/icons/volume-level-0.svg"
  }
  else if(volumeInput < 34  ){
    volImage.src = "./assets/media/icons/volume-level-1.svg"
  }
  else if(volumeInput < 67  ){
    volImage.src = "./assets/media/icons/volume-level-2.svg"
  }
  else {
    volImage.src = "./assets/media/icons/volume-level-3.svg"  
  }
}

function updateBar( ){
  let volSlider = document.getElementById("volume-slider");
  volSlider.value = volumeInput;
}

function disableHonk(){
  if (volumeInput <= 0) {
    document.getElementById("honk-btn").disabled = true;
  }  
  else {
    document.getElementById("honk-btn").disabled = false;    
  }
}

function updateTextbox(){
  document.getElementById("volume-number").value = volumeInput; 
}


document.getElementById("volume-number").addEventListener('focusout', (event) => {
  console.log("done type in volume");
  volumeInput = event.target.value;
  if(volumeInput>=100){
    document.getElementById("volume-number").value=100;
 }
 if(volumeInput<=0){
  document.getElementById("volume-number").value=0;
 } 
  updateIcon();
  updateBar();
  disableHonk();
});

document.getElementById("volume-slider").addEventListener('mousemove', (event) => {
  console.log("bar sliding in volume");
  volumeInput = event.target.value;
  
  updateIcon();
  updateTextbox();
  disableHonk();
});
