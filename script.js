let firstCard = 3
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let responseMessage = ""
let gameMessage = document.getElementById("message")
let theTotal = document.getElementById("total-element")

//Store the cards
let theCards = document.getElementById("cards-element")


function startGame(){
  PlayGame()
}


function PlayGame(){
  //Show the cards on the page
  theCards.textContent = "Cards: " + firstCard + " " + secondCard
  
  theTotal.textContent = "Total: " + sum
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

function newCard(){
  console.log("Drawing a new card from the deck")
  let card = 2
  sum += card
  PlayGame()
}

console.log(responseMessage)
console.log(theCards.textContent)