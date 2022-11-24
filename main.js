console.log("hi Ser Ray.")

const computerSelection = ["Rock", "Paper", "Scissors"];
const playerSelection = prompt();

function getComputerChoice() {
  return computerSelection[~~(Math.random() * computerSelection.length)];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === "Paper"){
        return "you stinker!";
    } else if (playerSelection === 'paper' && computerSelection === "Scissors"){
        return 'oh lawd ray done died!';
    } else if (playerSelection === 'scissor' && computerSelection === "Rock"){
        return "you ice cold";
    } else {
        return "what the heck?!";
    }
}
console.log(playRound());