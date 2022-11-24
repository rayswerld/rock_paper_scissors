console.log("hi Ser Ray.")

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
console.log(computerPlay());