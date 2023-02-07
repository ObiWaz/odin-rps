//1 Get computer choice
//1a Write function getComputerChoice()
//1b Function randomly returns rock, paper, or scissors

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
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
let humanScore = 0;
let compScore = 0;
let drawScore = 0;

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore += 1;
    return "Human wins!";
  } else if (playerChoice === computerChoice) {
    drawScore += 1;
    return "Draw!";
  } else {
    compScore += 1;
    return "Computer wins.";
  }
}

//3 Write new function called game() that plays 5 rounds of RPS using playRound() function
//3a Use a for loop
function game() {
  for (let i = 0; i < 5; i++) {
    // const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  }
  if (humanScore > compScore) {
    return `Human scored ${humanScore} and computer scored ${compScore}. There were ${drawScore} draws. Human is the winner!`;
  } else if (humanScore < compScore) {
    return `Human scored ${humanScore} and computer scored ${compScore}. There were ${drawScore} draws. Computer is the winner!`;
  } else if (humanScore === compScore) {
    return `Human scored ${humanScore} and computer scored ${compScore}. There were ${drawScore} draws. Draw!`;
  }
}

console.log(game());
// console.log(humanScore, compScore);
