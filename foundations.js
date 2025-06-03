let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let cc = Math.floor (Math.random*3);
  if (cc == 0) return "rock"
  else if (cc == 1) return "paper"
  else return "scissors" 
}

function getHumanChoice() {
  let hc = prompt("Make a move: "); 
  return hc;
}

function playRound (hc, cc) {
  let hs = hc.toLowerCase(); 
  let cs = cc.toLowerCase();
  if (hc === cc) {
    console.log("you tie")
  }
  else if ((hc === "rock" && cc === "scissors") || 
           (hc === "paper" && cc === "rock") || 
           (hc === "scissors" && cc === "paper")) {
    humanScore += 1;
    console.log("you win")
  }
  else {
    computerScore += 1;
    console.log("you lose");
  }
}

function playGame () {
  for (let i = 0; i < 5; i++) {
    hc = getHumanChoice();
    cc = getComputerChoice();
    playRound (hc, cc);
  }
  if (humanScore > computerScore) {
    console.log("human wins")
  }
  else if (humanScore < computerScore) {
    console.log("computer wins")
  }
  else {
    console.log("human tied with computer")
  }
}

playGame();



