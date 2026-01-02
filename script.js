//  variables
const userGuess = document.getElementById("guessInput");
const message = document.getElementById("message");
const guessBtn = document.getElementById("guessBtn");
const difficulty = document.getElementById("difficulty");
const resetBtn = document.getElementById("resetBtn");
const attempts = document.getElementById("attempts");

let computerGuess;
let maxRange = 0;
let count = 0;

//  set difficulty
difficulty.addEventListener("change", () => {
  if (difficulty.value === "easy") {
    maxRange = 10;
    count = 5;
    attempts.innerHTML = `Total attempts: ${count}`;
  } else if (difficulty.value === "medium") {
    maxRange = 50;
    count = 7;
    attempts.innerHTML = `Total attempts: ${count}`;
  } else {
    maxRange = 100;
    count = 10;
    attempts.innerHTML = `Total attempts: ${count}`;
  }

  computerGuess = Math.floor(Math.random() * maxRange) + 1;
  message.textContent = `Guess a number between 1 and ${maxRange}`;
});

// show message effect
function setMessage(text, type) {
  message.className = type; // resets + applies animation
  message.textContent = text;
}

// check guess
function checkGuess() {
  if (difficulty.value === "") {
    alert("Please select the difficulty level");
    message.textContent = "";
    userGuess.value = "";
    return;
  }

  //   message.classList.remove("success");
  //   userGuess.classList.remove("success");

  const guess = Number(userGuess.value);

  if (!guess || guess < 1 || guess > maxRange) {
    setMessage(`Guess a number between 1 and ${maxRange}`, "info");
    return;
  }

  count--;
  attempts.innerText = `Attempts left: ${count}`;

  if (count <= 0) {
    message.innerText = "";
    setMessage("You loss the game", "error");
    userGuess.disabled = true;
    guessBtn.disabled = true;
    resetBtn.hidden = false;
    return;
  }

  if (guess === computerGuess) {
    // message.classList.add("success");
    // userGuess.classList.add("success");
    setMessage("🎉 Correct! You guessed it right.", "success");
    userGuess.disabled = true;
    guessBtn.disabled = true;

    resetBtn.hidden = false;
  } else if (guess > computerGuess) {
    setMessage("📉 Too High!", "error");
    userGuess.value = "";
  } else {
    setMessage("📈 Too Low!", "info");
    userGuess.value = "";
  }
}

//  events
guessBtn.addEventListener("click", checkGuess);

userGuess.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkGuess();
  }
});

// reset game
function resetGame() {
  userGuess.disabled = false;
  guessBtn.disabled = false;

  userGuess.value = "";
  message.textContent = "";

  resetBtn.hidden = true;

  computerGuess = Math.floor(Math.random() * maxRange) + 1;

  setMessage(`Guess a number between 1 and ${maxRange}`, "info");

  if (difficulty.value === "easy") {
    count = 5;
  } else if (difficulty.value === "medium") {
    count = 7;
  } else {
    count = 10;
  }
  attempts.innerText = "";
  attempts.innerHTML = `Total attempts: ${count}`;
}

// reset Button
resetBtn.addEventListener("click", resetGame);
