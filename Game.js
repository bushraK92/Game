let PlayerTotal = 0;
let ComputerTotal = 0;
let round = 0;
let Name = "";
alert("lets Play rock paper or scissor");
Name = prompt("Please Enter Your Name");
console.log(Name);
const GetComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

const GetPlayerChoice = () => {
  let PlayerInput = prompt(
    "Please Select rock, paper or scissor"
  ).toLowerCase();
  if (
    PlayerInput === "rock" ||
    PlayerInput === "scissor" ||
    PlayerInput === "paper"
  ) {
    console.log(PlayerInput);
    return PlayerInput;
  } else {
    alert("Error, please type: rock , paper, scissor");
    console.log("Error, please type: rock , paper, scissor");
  }
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    alert("Its a Tie");
    console.log("this game is a tie!");
  }
  if (playerChoice === "rock") {
    if (computerChoice === "scissor") {
      PlayerTotal++;
      alert(`${playerChoice} beats ${computerChoice}`);
      alert(`The Score is ${Name} ${PlayerTotal}- Computer ${ComputerTotal}`);
      console.log("Congratulation!, you won");
    }
  }

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      ComputerTotal++;
      alert(`${computerChoice} beats ${playerChoice}`);
      alert(`The Score is ${Name}: ${PlayerTotal}- Computer ${ComputerTotal}`);
      console.log("Sorry, Computer won!");
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      PlayerTotal++;
      alert(`${playerChoice} beats ${computerChoice}`);
      alert(`The Score is ${Name}: ${PlayerTotal}- Computer ${ComputerTotal}`);
      console.log("Congratulation you won");
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      ComputerTotal++;
      alert(`${computerChoice} beats ${playerChoice}`);
      alert(`The Score is ${Name}: ${PlayerTotal}- Computer ${ComputerTotal}`);
      console.log("Sorry, Computer won");
    }
  }

  if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      ComputerTotal++;
      alert(`${computerChoice} beats ${playerChoice}`);
      alert(`The Score is ${Name}: ${PlayerTotal}- Computer ${ComputerTotal}`);
      console.log("Sorry,Computer won");
    }
  }
  if (playerChoice === "scissor") {
    if (computerChoice === "paper") {
      PlayerTotal++;
      alert(`${playerChoice} beats ${computerChoice}`);
      alert(`The Score is ${Name}: ${PlayerTotal}- Computer ${ComputerTotal}`);
      console.log("Congratulation you won");
    }
  }
};
function game() {
  for (round = 1; round <= 5; round++) {
    const computerSelection = GetComputerChoice();
    const playerSelection = GetPlayerChoice();
    determineWinner(computerSelection, playerSelection);
  }
  alert(
    `Total Score of 5 rounds:\n${Name}: ${PlayerTotal} - Computer: ${ComputerTotal}`
  );
  if (ComputerTotal < PlayerTotal) {
    alert(`FINAL RESULT: \nCongratulations! ${Name} wont the game!`);
    console.log(`FINAL RESULT: \nCongratulations! ${Name} Lost the game!)`);
  } else if (ComputerTotal > PlayerTotal) {
    alert(`FINAL RESULT: Sorry Computer won the Game!`);
    console.log(`FINAL RESULT: sorry Computer won the Game!`);
  } else if (PlayerTotal == ComputerTotal) {
    alert(`FINAL RESULT: \nIt's a Tie.`);
    console.log("FINAL RESULT: \nIt's a Tie.");
  }
}
game();
