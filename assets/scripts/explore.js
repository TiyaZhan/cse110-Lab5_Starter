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
    const utter = new SpeechSynthesisUtterance(txt.value);
    for (let i = 0; i < voices.length; i++)
    {
      if (voices[i].name === choice)
      {
        utter.voice = voices[i];
      }
    }
    window.speechSynthesis.speak(utter);
    
  })
  

}

console.log(document.getElementById('text-to-speak').value);
