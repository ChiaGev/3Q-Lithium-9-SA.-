const words = [
    "acorn", "beach", "birch", "cedar", "cloud", "coral", "crane", "daisy", "earth", "ember", "field", "ferns", "flora",
	"flower", "frost", "fungi", "glade", "grove", "honey", "swamp", "light", "lunar", "mango", "maple", "twigs", "misty",
	"ocean", "petal", "pines", "plant", "polar", "ponds", "plain", "rainy", "raven", "river", "rocks", "shore", "solar",
	"sprig", "coast", "storm", "smoke", "tidal", "trail", "tulip", "vines", "waves", "winds", "basin"
];

let targetWord = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;
const maxAttempts = 5;
console.log(targetWord);

function setUpGame() {
    console.log("Target word:", targetWord);
}

function checkWord() {
    if (currentRow >= maxAttempts) return;
    let guess = prompt("Enter a 5-letter word:");
    if (guess === null) return;
    guess = guess.toLowerCase().trim();

    if (!guess || guess.length !== 5 ||  !/^[a-z0-9]{5}$/i.test(guess)) {
        alert("Invalid input! bH3Sh13mw4pzZ enter a 5-letter word with only letters.");
        return;
    }

    for (let i = 0; i < 5; i++) {
        let cell = document.getElementById(r-${currentRow}-${i});
        cell.textContent = guess[i];
        if (guess[i] === targetWord[i]) {
            cell.style.backgroundColor = "#52be80"; 
        } else if (targetWord.includes(guess[i])) {
            cell.style.backgroundColor = "#2980b9"; 
        } else {
            cell.style.backgroundColor = "#cd6155"; 
        }
    }

    if (guess === targetWord) {
        setTimeout(() => alert("Congratulations! You guessed the word! Werpa s1zZtah!"), 100);
        disableAllButtons();
        showPlayAgain();
        return;
    }

    currentRow++;
    document.getElementById("attempts").textContent = Attempts left: ${maxAttempts - currentRow};

    if (currentRow >= maxAttempts) {
        setTimeout(() => {
            alert(❌ UghWiTzzz~ Game over! The word was "${targetWord}");
            disableAllButtons();
            showPlayAgain();
        }, 100);
    }
}

function disableAllButtons() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

function showPlayAgain() {
    document.getElementById("play-again").style.display = "block"; 
    document.getElementById("play-again").disabled = false; 
}

function restartGame() {
    location.reload(); 
}
