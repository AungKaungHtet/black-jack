let player = {
  name: "Aung",
  chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let rand = Math.floor(Math.random()*13) + 1
  if (rand === 1){
    return 11
  } else if(rand >= 11){
    return 10
  } else{
    return rand
  }
}

function startGame(){
  isAlive = true
  let rand = getRandomCard()
  cards.push(rand)
  sum += rand
  rand = getRandomCard()
  cards.push(rand)
  sum += rand
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
    sumEl.textContent = "Sum: " + sum
  }

  if (sum < 21){
    message = "Do you want to hit?"
  } else if (sum === 21){
    message = "Wooo! You won!"
    hasBlackJack = true
  } else{
    message = "You\'ve lost everything :\("
    isAlive = false
  }
  console.log(message)
  messageEl.textContent = message
}

function newCard(){
  if (!hasBlackJack && isAlive){
    console.log("drawing new card")

    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

console.log("end")
