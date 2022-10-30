// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //const synth = SpeechSynthesis;
  let voices = []
  const voiceSelect = document.querySelector('select');

  function setUpVoice(){
    voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length;i ++)
    {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name}(${voices[i].lang})`;
      option.setAttribute('name', voices[i].name);
      option.setAttribute('lang', voices[i].lang);
      voiceSelect.appendChild(option);
    }
  }
  setUpVoice();
  speechSynthesis.onvoiceschanged = setUpVoice;
  
  
  const speak = document.querySelector('button');

  speak.addEventListener('click', (event)=>{
    const choice = voiceSelect.selectedOptions[0].getAttribute('name');
    const audio = document.createElement('audio');
    const txt = document.getElementById('text-to-speak');
    var utter = new SpeechSynthesisUtterance(txt.value);
    for (let i = 0; i < voices.length; i++)
    {
      if (voices[i].name === choice)
      {
        utter.voice = voices[i];
      }
    }
    window.speechSynthesis.speak(utter);

    let timeID1;
    let timeID2;
    utter.onstart = (event) => {
      timeID1 = setInterval(opening, 500);
      timeID2 = setInterval(smiling, 1000);
    }
    utter.onend = (event)=> {
      clearInterval(timeID1);
      clearInterval(timeID2);
      smiling();
    }


  })

  const face = document.querySelector('img');
  function smiling()
  {
      face.src = "assets/images/smiling.png";
  }
  function opening()
  {
    face.src = "assets/images/smiling-open.png";
  }
  
  
}

//console.log(utter.onstart);
