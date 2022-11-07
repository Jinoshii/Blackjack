let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let responseMessage = ""
let gameMessage = document.getElementById("message")
let theTotal = document.getElementById("total-element")

function startGame(){
  theTotal.textContent = "sum: " + sum
  if (sum < 21){
  responseMessage = "Do you want another card?"
    
  } else if (sum === 21){
  responseMessage = "Blackjack!"
  hasBlackJack = true
    
  } else {
  responseMessage = "You lose. Sorry, chump."
  isAlive = false
    
  }
  gameMessage.textContent = responseMessage
}

console.log(responseMessage)