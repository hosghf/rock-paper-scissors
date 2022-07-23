const selections = ['rock', 'paper', 'scissors']

function computerPlay() {
  const select = Math.floor(Math.random() * 3)
  return selections[select]
}

function playRound(playerSelection, computerSelection ) {
  switch(true) {
    case playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper':
      console.log("you lose paper beats rock")
      return 'lose'
    case playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock':
      console.log("you win paper beats rock")
      return 'win'
    case playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors':
      console.log("you lose, scissors cuts paper")
      return 'lose'
    case playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper':
      console.log("you win, scissors cuts paper")
      return  'win'
    case playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock': 
      console.log("you lose, rock break scissors")
      return 'lose'
    case playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors':
      console.log("you win, rock break scissors")
      return 'win'
    default:
      console.log('equal')
      return "equal"
  }
}

function game() {
  const scores = []

  for(let i = 1; i <= 5; i++) {
    const playerSelection = prompt('enter a rock, scissors or paper')
    scores.push(playRound(playerSelection ,computerPlay()))
  }
  
  const winLength = scores.filter((score) => score === 'win').length
  const loseLength = scores.filter((score) => score === 'lose').length
  const equalLength = scores.filter((score) => score === 'equal').length

  if(winLength > loseLength){
    return `you win the game congrugulation, you win ${winLength} times`
  } else if(winLength < loseLength) {
    return `you lose sorry, you lose ${loseLength} times`
  }

  return `equal at all, you equal ${equalLength} times, you lose ${loseLength} times, you win, you win ${winLength} times,  play another round`
}

console.log(game())