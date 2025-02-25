const words = [
    "acorn", "beach", "birch", "cedar", "cloud", "coral", "crane", "daisy", "earth", "ember", "field", "ferns", "flora",
	"flower", "frost", "fungi", "glade", "grove", "honey", "swamp", "light", "lunar", "mango", "maple", "twigs", "misty",
	"ocean", "petal", "pines", "plant", "polar", "ponds", "plain", "rainy", "raven", "river", "rocks", "shore", "solar",
	"sprig" , "coast", "storm", "sunny", "tidal" , "trail", "tulip", "vines", "waves", "winds", "basin"
];

let targetWord = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;
const maxAttempts = 5;

function setupGame() {
    console.log("Target word:", targetWord); 
}

function checkWord() {
    if (currentRow >= maxAttempts) return; // Stop game if max attempts reached

    let guess = prompt("Enter a 5-letter word:");
    if (guess === null) return; 
    guess = guess.toLowerCase().trim(); 

    if (!guess || guess.length !== 5 || /[^a-z]/.test(guess)) {
        alert("Invalid input! Enter a 5-letter word with only letters.");
        return;
    }

    for (let i = 0; i < 5; i++) {
        let cell = document.getElementById(`r-${currentRow}-${i}`);
        cell.textContent = guess[i];
        if (guess[i] === targetWord[i]) {
            cell.style.backgroundColor = "#52be80"; // Correct position
        } else if (targetWord.includes(guess[i])) {
            cell.style.backgroundColor = "#2980b9"; // Wrong position
        } else {
            cell.style.backgroundColor = "#cd6155"; // No match
        }
    }

    if (guess === targetWord) {
        setTimeout(() => alert("Congratulations! You guessed the word!"), 100);
        document.querySelector("button").disabled = true; 
        return;
    }

    currentRow++;
    document.getElementById("attempts").textContent = `Attempts left: ${maxAttempts - currentRow}`;

    if (currentRow >= maxAttempts) {
        setTimeout(() => {
            alert(`Game over! The word was ${targetWord}`);
            document.querySelector("button").disabled = true; 
        }, 100);
    }
}
