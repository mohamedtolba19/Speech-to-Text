let voiceBtn = document.getElementById("voice-btn");
let stopBtn = document.getElementById("stop-btn");
let text = document.getElementById("text");
let speechRecognition;

voiceBtn.addEventListener("click", () => {
    let speech = true;  
    window.SpeechRecognition = window.webkitSpeechRecognition;
    speechRecognition = new SpeechRecognition();
    speechRecognition.interimResults = true;

    speechRecognition.lang = 'ar-AR';
    speechRecognition.continuous = true;

    let transcript = '';

    speechRecognition.addEventListener('result', (e) => {
        transcript = Array.from(e.results)
            .map((result) => result[0])
            .map((result) =>result.transcript)
            .join(' ');  
        console.log(transcript);

        
        text.textContent = transcript;
    });

    if (speech == true) {
        speechRecognition.start();
    }
});

stopBtn.addEventListener("click", () => {
    if (speechRecognition) {
        speechRecognition.stop();
    }
});


