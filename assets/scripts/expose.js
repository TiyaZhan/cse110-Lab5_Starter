// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.querySelector("select[name='horn']");
  const audioFile = document.querySelector(".hidden");
  selectElement.addEventListener('change', (event)=>{
    if (selectElement.value == "air-horn")
    {
      document.querySelector("img[alt='No image selected']").src = "assets/images/air-horn.svg";
      audioFile.src = "assets/audio/air-horn.mp3";
    }
    else if (selectElement.value == "car-horn")
    {
      document.querySelector("img[alt='No image selected']").src = "assets/images/car-horn.svg";
      audioFile.src = "assets/audio/car-horn.mp3";
    }
    else if (selectElement.value == "party-horn")
    {
      document.querySelector("img[alt='No image selected']").src = "assets/images/party-horn.svg";
      audioFile.src = "assets/audio/party-horn.mp3";
    }
  })

  const Volume = document.getElementById("volume");

  Volume.addEventListener('input', (event)=>{
    if (Volume.value == 0)
    {
      document.querySelector("img[alt='Volume level 2']").src = "assets/icons/volume-level-0.svg";
      audioFile.volume = 0;
    }
    else if (Volume.value >=1 && Volume.value < 33)
    {
      document.querySelector("img[alt='Volume level 2']").src = "assets/icons/volume-level-1.svg";
    }
    else if (Volume.value >=33 && Volume.value < 67)
    {
      document.querySelector("img[alt='Volume level 2']").src = "assets/icons/volume-level-2.svg";
    }
    else{
      document.querySelector("img[alt='Volume level 2']").src = "assets/icons/volume-level-3.svg";
    }
    audioFile.volume = Volume.value/100;
  })

  const playAudio = document.querySelector("button");

  playAudio.addEventListener('click', (event)=>{
    if (selectElement.value == "party-horn")
    {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    

    audioFile.play();
  })

}


console.log(document.querySelector("img[alt='Volume level 2']"));
console.log(document.getElementById("volume").value);