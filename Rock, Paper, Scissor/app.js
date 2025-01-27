let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const drawGame = () => {
  console.log("This was a draw");
  msg.innerText = "It was a DRAW!";
  msg.style.backgroundColor = "#081b31";
};

const userWins = () => {
  console.log("User Won");
  msg.innerText = "YOU Win!";
  msg.style.backgroundColor = "green";
  let uScore = document.querySelector("#user-score");
  const value = Number(uScore.innerText);
  uScore.innerText = value + 1;
};

const compWins = () => {
  console.log("Computer Won");
  msg.innerText = "COMPUTER Wins!";
  msg.style.backgroundColor = "red";
  let cScore = document.querySelector("#computer-score");
  const value = Number(cScore.innerText);
  cScore.innerText = value + 1;
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // Generate computer Choice
  const compChoice = generateCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userWins();
  } else if (
    (compChoice === "rock" && userChoice === "scissor") ||
    (compChoice === "paper" && userChoice === "rock") ||
    (compChoice === "scissor" && userChoice === "paper")
  ) {
    compWins();
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
