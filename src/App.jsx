import { useEffect } from "react";
import "./App.css";
// Key-to-note mapping
const keyMap = {
  a: { note: "A", sound: "/sounds/S.wav" },
  w: { note: "W#", sound: "/sounds/W.wav" },
  s: { note: "S", sound: "/sounds/A.mp3" },
  d: { note: "D", sound: "/sounds/D.wav" },
  " ": { note: "Spc", sound: "/sounds/Spc.wav" }, // Space key mapping
  j: { note: "J", sound: "/sounds/J.wav" },
  k: { note: "K", sound: "/sounds/K.mp3" },
  i: { note: "I#", sound: "/sounds/I.wav" },
  l: { note: "L", sound: "/sounds/L.wav" },
};

function App() {
  // Play sound
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play().catch((err) => console.error("Error playing sound:", err));
  };

  // Handle key press
  const handleKeyPress = (event) => {
    const pressedKey = event.key.toLowerCase();
    const noteInfo = keyMap[pressedKey];

    if (noteInfo) {
      event.preventDefault(); // Prevent default behavior for keys like Space

      const pianoKey = document.querySelector(`.key[data-note="${noteInfo.note}"]`);
      if (pianoKey) {
        pianoKey.classList.add("active");
        playSound(noteInfo.sound);

        setTimeout(() => pianoKey.classList.remove("active"), 200);
      }
    }
  };

  // Handle click for touch/mouse users
  const handleClick = (noteInfo) => {
    const pianoKey = document.querySelector(`.key[data-note="${noteInfo.note}"]`);
    if (pianoKey) {
      pianoKey.classList.add("active");
      playSound(noteInfo.sound);
      setTimeout(() => pianoKey.classList.remove("active"), 200);
    }
  };

  // Add and clean up event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <h1>Sound Game</h1>
      <p>Press keys on your keyboard or click the keys below to play notes!</p>
      <div className="piano">
        <div className="octave">
          {Object.keys(keyMap).map((key) => (
            <div
              key={key}
              className={`key ${keyMap[key].note.includes("#") ? "black" : "white"}`}
              data-note={keyMap[key].note}
              onClick={() => handleClick(keyMap[key])}
            >
              {key === " " ? "Spc" : key.toUpperCase()} {/* Updated line */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;