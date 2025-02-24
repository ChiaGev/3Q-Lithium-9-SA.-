const words = [
    "Acorn, Beach, Birch, Cedar, Cloud, Coral, Crane, Daisy, Earth, Ember, Field, Ferns, Flora,
	Flower, Frost, Fungi, Glade, Grove, Honey, Leaf, Light, Lunar, Mango, Maple, Roots, Misty,
	Ocean, Petal, Pines, Plant, Polar, Ponds, Quartz, Rainy, Raven, River, Rock, Shore, Solar,
	Sprig , Spring, Storm, Sunny, Tidal ,Trail, Tulip, Vines, Waves, Winds, Trees"
];

let targetWord = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;
const maxAttempts = 5;

function setupGame() {
    console.log("Target word:", targetWord); // Debugging purposes
}

function checkWord() {
    let guess = prompt("Enter a 5-letter word:");
    if (guess === null) return; // If the user clicks cancel, do nothing
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
        return;
    }

    currentRow++;
    document.getElementById("attempts").textContent = `Attempts left: ${maxAttempts - currentRow}`;

    if (currentRow >= maxAttempts) {
        setTimeout(() => alert(`Game over! The word was ${targetWord}`), 100);
    }
}