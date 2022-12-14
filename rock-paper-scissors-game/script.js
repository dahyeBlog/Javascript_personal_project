let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoredBoard_div = document.querySelector('.score-board')
const result_div_p = document.querySelector('.result > p')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

const ROCK= 'βπ»';
const PAPER = 'βπ»';
const SCISSORS = 'βπ»';
const RESULT_DRAW = 'λΉκΉ';
const RESULT_USER_WINS = 'μ¬μ©μμΉ';
const RESULT_COMPUTER_WINS = 'μ»΄ν¨ν°μΉ';


const getComputerChoice = () => {
  const choices = ['βπ»', 'βπ»', 'βπ»']
  const random = Math.floor(Math.random() * choices.length )
  return choices[random]
}

const reset  = (score) => {

  if(score > 10) {
    userScore =  0
    computerScore = 0


  result_div_p.innerHTML = `κ²μμ΄ λλ¬μ΅λλ€. λ€μ μλ νμΈμ!`


    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
   } 
  }
  

const win = (user, comp) => { 
  userScore++
  userScore_span.innerHTML = userScore

  result_div_p.innerHTML = `μ¬μ©μ : ${user} <br /> μ»΄ν¨ν° : ${comp}  <br /> μ¬μ©μ μΉλ¦¬νμ¨μ΅λλ€. π `
  

    


  reset(userScore)

} 

const lose = (user, comp) => { 
  computerScore++
  computerScore_span.innerHTML = computerScore
  result_div_p.innerHTML = `μ¬μ©μ : ${user} <br /> μ»΄ν¨ν° : ${comp}  <br /> μ»΄ν¨ν°μ μΉλ¦¬ μλλ€. π­ `
  reset(computerScore)
} 

const draw = (user, comp) => { 
  result_div_p.innerHTML = `μ¬μ©μ : ${user} <br /> μ»΄ν¨ν° : ${comp}  <br /> λΉκ²Όμ΅λλ€. `
} 




const game = (userChoice) => {
  const computerChoice = getComputerChoice()
  console.log('μ»΄ν¨ν° μ ν ' + computerChoice, 'μ¬μ©μ μ ν ' + userChoice);
  
  let result = computerChoice === userChoice ?  RESULT_DRAW : (computerChoice === ROCK && userChoice === PAPER) || (computerChoice === PAPER && userChoice === SCISSORS) || (computerChoice === SCISSORS && userChoice === ROCK) ? RESULT_USER_WINS : RESULT_COMPUTER_WINS 

  
  if(result === 'λΉκΉ') {
    draw(userChoice,computerChoice)
  } else if(result === 'μ¬μ©μμΉ'){
    win(userChoice,computerChoice)
  } else {
    lose(userChoice,computerChoice)
  }

}



const main = () => {


  rock_div.addEventListener('click', () => {

    game(ROCK);    
  })
  
  paper_div.addEventListener('click', () => {
    game(PAPER);
  })
  
  scissors_div.addEventListener('click', () => {
    game(SCISSORS);
  })
  
}

main()

