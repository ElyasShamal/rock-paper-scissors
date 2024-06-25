const getUserChoice = (userInput) =>{
userInput = userInput.toLowerCase()
 if(userInput === "rock"){
  return "rock"
 }else if (userInput === "paper"){
  return "paper"
 }else if (userInput === "scissors"){
  return "scissors"
 }else{
  
  return "invalid input"
 }
} 

console.log(getUserChoice("Rock"))
console.log(getUserChoice("paper"))
console.log(getUserChoice("scissors"))
console.log(getUserChoice("error"))


function getComputerChoice(){
  let randomNumber =  Math.floor(Math.random() * 3)
  if(randomNumber === 0){
    return "rock"
  }else if (randomNumber === 1){
    return "paper"
  }else if (randomNumber === 2) {
    return "scissors"
  }else{
    return "invalid"
  }
}

console.log(getComputerChoice(0))
console.log(getComputerChoice(1))
console.log(getComputerChoice(2))

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
     return "The game is a tie!"
  } 

  if (userChoice === "rock" && computerChoice === "paper"){
    return "Computer Win!";
  }else if (userChoice === "rock" && computerChoice === "scissors"){
    return "User Win!"
  }

  if (userChoice === "paper" && computerChoice === "scissors"){
    return "Computer win!"
  }else if (userChoice === 'paper' && computerChoice === 'rock') {
    return "User Win!";
  }

   if (userChoice === 'scissors' && computerChoice === 'rock') {
    return "The computer won!";
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return "The user won!";
  }

  return "invalid Input "
}

console.log(determineWinner('rock', 'scissors')); 
console.log(determineWinner('rock', 'paper'));    
console.log(determineWinner('rock', 'rock')); 


function playGame(){
  let userChoice = getUserChoice("rock")
  let computerChoice = getComputerChoice()
  console.log(userChoice)
  console.log(computerChoice)
  console.log( determineWinner(userChoice, computerChoice))
}

playGame()
