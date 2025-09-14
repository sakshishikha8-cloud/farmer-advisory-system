import { useState } from "react";
import { FaMicrophone } from "react-icons/fa"; // ✅ mic icon
import "../styles/MicrophoneButton.css";

function MicrophoneButton({ onResult }) {
  const [listening, setListening] = useState(false);

  const handleListen = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition. Try Chrome.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN"; // change to "hi-IN" for Hindi
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    recognition.start();
  };

  return (
    <button
      onClick={handleListen}
      className={`mic-inside ${listening ? "listening" : ""}`}
    >
      <FaMicrophone />
    </button>
  );
}

export default MicrophoneButton;


