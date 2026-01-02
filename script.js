const userGuess = document.getElementById("guessInput");
const message = document.getElementById("message");
const guessBtn = document.getElementById("guessBtn");

const computerGuess = Math.floor(Math.random() * 10) + 1;
// console.log(computerGuess);

function checkGuess() {
  const guess = Number(userGuess.value);

  if (!guess || guess < 1 || guess > 10) {
    message.textContent = "Please enter a number between 1 and 10";
    return;
  }

  if (guess === computerGuess) {
    message.textContent = "🎉 Correct! You guessed it right.";
  } else if (guess > computerGuess) {
    message.textContent = "📉 Too High!";
  } else {
    message.textContent = "📈 Too Low!";
  }
}

guessBtn.addEventListener("click", checkGuess);
