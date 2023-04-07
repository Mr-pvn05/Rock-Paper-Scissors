let computerMove = "";

let result = "";

const score = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};
function resetScore() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  updateScore();
}

function pickPlayerMove(playerMove) {
  pickComputerMove();
  function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "Scissor";
    }
  }

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You Lose.";
    } else if (computerMove === "Scissor") {
      result = "You Win.";
    }
  }
  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissor") {
      result = "You Lose.";
    }
  }
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose.";
    } else if (computerMove === "Paper") {
      result = "You Win.";
    } else if (computerMove === "Scissor") {
      result = "Tie.";
    }
  }

  if (result === "You Win.") {
    score.Wins++;
  } else if (result === "You Lose.") {
    score.Losses++;
  } else if (result === "Tie.") {
    score.Ties++;
  }

  updateScore();

  document.querySelector(
    ".js-move"
  ).innerHTML = `Your Move : ${playerMove} | Computer Move : ${computerMove}`;

  document.querySelector(".js-result").innerHTML = `Result : ${result}`;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.Wins}, Losses : ${score.Losses}, Ties : ${score.Ties}`;
}
