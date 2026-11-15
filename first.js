const guessNumber = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");
const previousGuess = document.getElementById("previous-guess");
const restartBtn = document.getElementById("restart-btn");

const randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = () => {
  const guessValue = Number(guessNumber.value);
  if (guessValue === randomNumber) {
    feedback.innerHTML = "Correct";
  } else if (guessValue > randomNumber) {
    feedback.innerText = "Too high";
  } else if (guessValue < randomNumber) {
    feedback.innerText = "Too low";
  }
};

submitBtn.addEventListener("click", checkGuess);
guessNumber.addEventListener("keydown", (event) => {
//   console.log(event);
  if (event.key === "Enter") {
    checkGuess();
  }
});
