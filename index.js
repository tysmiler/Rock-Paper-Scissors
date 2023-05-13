// Win Page

const winPage = () => {
  document.getElementsByClassName('score')[0].classList.add('green-border')
  humanScore = 0;
  computerScore = 0;
}

// Lose Page
const losePage = () => {
  document.getElementsByClassName('score')[0].classList.add('red-border')
  humanScore = 0;
  computerScore = 0;
}



// Human score
let scoreElHuman = document.getElementsByClassName("human-score")[0]; 

let humanScore = 0;
scoreElHuman.innerHTML = "Score:"+humanScore 


// Computer score
let scoreElComputer = document.getElementsByClassName("computer-score")[0];

let computerScore = 0;

//Checks if it is win loss or draw
let drawWinLose = document.getElementsByClassName("draw-win-lose")[0];
drawWinLose.innerHTML = "";

// Rock, Paper, Scissors Rules to win

const rulesToWin = {
  "rock":"scissors",
  "paper":"rock",
  "scissors":"paper"
}

let computerChoice = () => {
  let rockPaperScissors = ["rock","paper","scissors"];
  const randomNumber = Math.floor(Math.random() * 3)
  return rockPaperScissors[randomNumber];
}

console.log(computerChoice());

let humanChoice;


const addPoints = (humanChoice) => {
  document.getElementsByClassName('score')[0].classList.remove('green-border')
  document.getElementsByClassName('score')[0].classList.remove('red-border')
  if(humanChoice === computerChoice()){
    drawWinLose.innerHTML = "draw";
  }else if(rulesToWin[computerChoice()] === humanChoice ){
    computerScore++;
    drawWinLose.innerHTML = "lose"
  }else {
    humanScore++;
    drawWinLose.innerHTML = "win"
  }
  scoreElHuman.innerHTML = "Score:" + humanScore;
  scoreElComputer.innerHTML = "Score:" + computerScore;
  if(humanScore === 5){
    winPage();
  }else if(computerScore === 5){
    losePage();
  }
}

function rock() {
  humanChoice = "rock"
  addPoints(humanChoice, computerChoice)
 
}

function paper() {
  humanChoice = "paper"
  addPoints(humanChoice, computerChoice)
}

function scissors() {
  humanChoice = "scissors"
  addPoints(humanChoice, computerChoice)
}

