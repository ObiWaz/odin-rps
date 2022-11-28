//1 Get computer choice
//1a Write function getComputerChoice()
//1b Function randomly returns rock, paper, or scissors

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  //   console.log(choice);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
}

//2 Play single round of RPS => playRound()
//2a Use player selection and computer choice
//2b Return string that declares winner
//2c make player selection case-insensitive

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return "Human wins!";
  } else if (playerChoice === computerChoice) {
    return "Draw!";
  }
}
const computerChoice = getComputerChoice();
const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
console.log(
  `Human chose ${playerChoice} and computer chose ${computerChoice}.`
);
console.log(playRound(playerChoice, computerChoice));
//3 Write new function called game() that plays 5 rounds of RPS
//3a
