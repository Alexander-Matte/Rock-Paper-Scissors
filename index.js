let rockBtn = document.querySelector("#btn1");
let paperBtn = document.querySelector("#btn2");
let scissorBtn = document.querySelector("#btn3");
let buttons = document.querySelectorAll("button");
let playerScoreText = document.querySelector(".playerScoreText");
let computerScoreText = document.querySelector(".computerScoreText");
let resultMessageText = document.querySelector(".resultMessageText");
let playerSelection;
let computerSelection;
let resultMessage;
playerScore = 0;
computerScore = 0;

//takes object like array(Nodelist) from querySelectorAll and creates an actual array.
buttons = Array.from(buttons);

//Adds a listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //Checks what ID is and assigns playerSelection based on whats clicked
    if (event.target.id === "btn1") {
      playerSelection = "rock";
    } else if (event.target.id === "btn2") {
      playerSelection = "paper";
    } else {
      playerSelection = "scissors";
    }

    computerPlay();
    playRound(playerSelection, computerSelection);
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    resultMessageText.textContent = resultMessage;
    if (playerScore === 5) {
      resultMessageText.textContent =
        "Congratulations, you have won 5 rounds of RPS! Please refresh to play again!";
    }

    if (computerScore === 5) {
      resultMessageText.textContent =
        "Unfortunately, you have lost 5 rounds of RPS against the computer! Please refresh to play again!";
    }

    if (playerScore === 5 || computerScore === 5) {
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});

//create computerPlay function that returns "rock", "paper", or "scissors" and save in computerSelection var.
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3); //Selects a number 0,1,2
  if (randomNum === 0) {
    computerSelection = "rock";
  } else if (randomNum === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
}

//Create playRound function that plays 1 round of RPS takes in 2 perimeters(playerSelection and computerSelection)
function playRound(playerSelection, computerSelection) {
  //Compare playerSelection and computerSelection and determine a winner
  if (playerSelection === computerSelection) {
    resultMessage = "Tie! Please Choose Again!";
  } else if (playerSelection === "rock" && computerSelection != "paper") {
    playerScore += 1;
    resultMessage = "You win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection != "scissors") {
    playerScore += 1;
    resultMessage = "You win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection != "rock") {
    playerScore += 1;
    resultMessage = "You win! Scissors beats Paper!";
  } else if (computerSelection === "rock" && playerSelection != "paper") {
    computerScore += 1;
    resultMessage = "You lose! Rock beats Scissors!";
  } else if (computerSelection === "paper" && playerSelection != "scissors") {
    computerScore += 1;
    resultMessage = "You lose! Paper beats Rock!";
  } else if (computerSelection === "scissors" && playerSelection != "rock") {
    computerScore += 1;
    resultMessage = "You lose! Scissors beats Paper!";
  } else resultMessage = "Something went wrong";
}
