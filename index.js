const selections = ['rock', 'paper', 'scissors']
const personScore = document.querySelector('.person-score')
const competerScore = document.querySelector('.computer-score')
const resualtTitle = document.querySelector('.resualt-title')
const startBtn = document.querySelector('.start-btn')
const userSelectionBtns = document.querySelectorAll('.selection-btn')
let resualtArray = []

// start button for start the game
startBtn.addEventListener('click', () => {
  resualtTitle.innerText = 'start'
  resualtTitle.style.color = 'gray'
  toggleUserSelectionBtnsDisabled(false)
})

function computerPlay() {
  const select = Math.floor(Math.random() * 3)
  return selections[select]
}

function playRound(playerSelection, computerSelection ) {
  switch(true) {
    case playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper':
      resualtTitle.innerHTML = "you lose paper beats rock"
      return 'lose'
    case playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock':
      resualtTitle.innerHTML = "you win paper beats rock"
      return 'win'
    case playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors':
      resualtTitle.innerHTML = "you lose, scissors cuts paper"
      return 'lose'
    case playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper':
      resualtTitle.innerHTML = "you win, scissors cuts paper"
      return  'win'
    case playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock': 
      resualtTitle.innerHTML = "you lose, rock break scissors"
      return 'lose'
    case playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors':
      resualtTitle.innerHTML = "you win, rock break scissors"
      return 'win'
    default:
      resualtTitle.innerHTML = "equal"
      return "equal"
  }
}

userSelectionBtns.forEach((button) => {
  button.addEventListener('click', () => {
    resualtArray.push(playRound(button.innerText.toLowerCase(), computerPlay()))
    
    const personWins = resualtArray.filter((item) => item === 'win')
    const computerWins = resualtArray.filter((item) => item === 'lose')
    
    personScore.innerText = personWins.length
    competerScore.innerText = computerWins.length

    if(personWins.length === 5){
      resualtTitle.innerText = 'congurogulation, you win the whole game'
      resualtTitle.style.color = 'green'
      resualtArray = []
      toggleUserSelectionBtnsDisabled(true)
    } else if(computerWins.length === 5) {
      resualtTitle.innerText = 'sorry, you lose the whole game'
      resualtTitle.style.color = 'red'
      resualtArray = []
      toggleUserSelectionBtnsDisabled(true)
    }
  })
})

function toggleUserSelectionBtnsDisabled(status) {
  userSelectionBtns.forEach((button) => {
    button.disabled = status
  })
}