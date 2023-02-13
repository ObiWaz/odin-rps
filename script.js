const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
let humanScore = 0;
let compScore = 0;
let drawScore = 0;
let round = 0;
function roundCount() {
  document.querySelector(".rnd-number").textContent = round;
}

function displayButton() {
  reset.style.display = "inline-block";
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

reset.addEventListener("click", () => {
  globalReset();
});

//1 Get computer choice
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
function playRound(playerChoice, computerChoice) {
  // console.log("PlayerChoice is " + playerChoice);
  // console.log("ComputerChoice is " + computerChoice);
  // console.log(humanScore, compScore);
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore += 1;
    document.querySelector(".human-score").textContent = humanScore;
    round += 1;
    roundCount();
    checkWinner();
    return;
  } else if (playerChoice === computerChoice) {
    drawScore += 1;
    document.querySelector(".draw-score").textContent = drawScore;
    round += 1;
    roundCount();
    checkWinner();
    return;
  } else {
    compScore += 1;
    document.querySelector(".comp-score").textContent = compScore;
    round += 1;
    roundCount();
    checkWinner();
    return;
  }
}

// Check for winner OLD CODE
// function checkWinner() {
//   if (round === 5) {
//     displayButton();
//     if (humanScore > compScore) {
//       document.querySelector(".win").textContent = "Human!";
//     } else if (humanScore < compScore) {
//       document.querySelector(".win").textContent = "Comp!";
//     } else if (humanScore === compScore) {
//       document.querySelector(".win").textContent = "Draw";
//     }
//   } else return;
// }

function checkWinner() {
  if (humanScore === 5 || compScore === 5) {
    displayButton();
    if (humanScore === 5) {
      document.querySelector(".win").textContent = "Human!";
    } else if (compScore === 5) {
      document.querySelector(".win").textContent = "Comp!";
    }
  }
}

// Reset
function globalReset() {
  humanScore = 0;
  drawScore = 0;
  compScore = 0;
  round = 0;

  document.querySelector(".human-score").textContent = humanScore;
  document.querySelector(".draw-score").textContent = drawScore;
  document.querySelector(".comp-score").textContent = compScore;
  document.querySelector(".rnd-number").textContent = round;
  document.querySelector(".win").textContent = "?";
  reset.style.display = "none";
}
