// Select all piano keys
const keys = document.querySelectorAll(".key");

// Map keyboard keys to piano keys
const keyMap = {
    'a': 'A',    // Maps 'a' key to the piano note "A"
    'w': 'W#',   // Maps 'w' key to the black key "W#"
    'd': 'D',
    's': 'S',
    ' ': 'Spc',  // Space key for "Spc"
    'k': 'K',
    'j': 'J',
    'i': 'I#',   // Black key "I#"
    'l': 'L'
};

// Function to handle key presses
function handleKeyPress(event) {
    const pressedKey = event.key.toLowerCase(); // Get the pressed key in lowercase
    const note = keyMap[pressedKey]; // Find the corresponding note

    if (note) {
        // Find the piano key with the matching data-note
        const pianoKey = Array.from(keys).find(key => key.dataset.note === note);

        if (pianoKey) {
            // Simulate a key press effect
            pianoKey.classList.add("active");
            
            // Optional: Play sound (sound logic not included)
            // playSound(note);

            // Remove the "active" class after 200ms
            setTimeout(() => pianoKey.classList.remove("active"), 200);
        }
    }
}


// Listen for keydown events
document.addEventListener("keydown", handleKeyPress);
