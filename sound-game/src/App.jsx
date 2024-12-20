import { useEffect } from "react";
import "./App.css"; // Import CSS for styling

function App() {
  // Define the key-to-note mapping
  const keyMap = {
    a: "A",
    w: "W#",
    d: "D",
    s: "S",
    " ": "Spc",
    k: "K",
    j: "J",
    i: "I#",
    l: "L",
  };

  // Function to handle key presses
  const handleKeyPress = (event) => {
    const pressedKey = event.key.toLowerCase(); // Get the pressed key in lowercase
    const note = keyMap[pressedKey]; // Find the corresponding note

    if (note) {
      // Find the piano key with the matching data-note
      const pianoKey = document.querySelector(`.key[data-note="${note}"]`);

      if (pianoKey) {
        // Simulate a key press effect
        pianoKey.classList.add("active");

        // Optional: Play sound (sound logic can be added here)
        // playSound(note);

        // Remove the "active" class after 200ms
        setTimeout(() => pianoKey.classList.remove("active"), 200);
      }
    }
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <h1>Sound Game</h1>
      <p>Click the keys or use your keyboard to play notes!</p>
      <div className="piano">
        <div className="octave">
          <div className="key white" data-note="A">
            A
          </div>
          <div className="key black" data-note="W#">
            W
          </div>
          <div className="key white" data-note="S">
            S
          </div>
          <div className="key white" data-note="D">
            D
          </div>
          <div className="key white" data-note="Spc">
            Spc
          </div>
          <div className="key white" data-note="J">
            J
          </div>
          <div className="key white" data-note="K">
            K
          </div>
          <div className="key black" data-note="I#">
            I
          </div>
          <div className="key white" data-note="L">
            L
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
