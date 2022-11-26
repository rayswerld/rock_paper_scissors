console.log("hi Ser Ray.")
//this variable is what computer is selecting from followed by player's prompt for input
const computerSelection = ["Rock", "Paper", "Scissors"];
const playerSelection = prompt();

//this returns the comp's random selection from above array
function getComputerChoice() {
  return computerSelection[~~(Math.random() * computerSelection.length)];
}
console.log(getComputerChoice());

//this func kind of plays a game of paper rock scissors
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

//here I am trying to loop the game to keep it playing it not working
/*function game(){
    for (let i = 0; i < 5; i++) {
        playRound();

        
     }
}
console.log(game());*/
console.log(playRound());
