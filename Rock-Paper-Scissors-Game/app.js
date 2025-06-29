const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let results

possibleChoice.forEach(possibleChoice=> possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 3) +1  // Or you can use possibleChoice.length
    
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResults()
{
    if(computerChoice === userChoice){
        results = "It's a Draw"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        results = "You Win"
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        results = "You Lost"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        results = "You Win"
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        results = "You Lost"
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        results = "You Lost"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        results = "You Win"
    }

    resultsDisplay.innerHTML = results

}