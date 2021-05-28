let firstCard = 0; 
let secondCard = 0; 
let sum = 0; 
let hasBlackjack = false
let isAlive = true
let message = ""
let cards = []

let player = {
    name: "Mike",
    chips: 200
}

const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardsEL = document.getElementById('cards-el')
const newCardBtn = document.getElementById('new-card-btn')
const playerEl = document.getElementById('player')

if(isAlive) {
    document.getElementById('new-card-btn').classList.remove("new-card-btn") 
}

function getRandomCard() {
    return Math.floor(Math.random() * (12 - 2) + 2)
}

function startGame() {
    isAlive = true
    hasBlackjack = false
    newCardBtn.style.display = "inline"
    cards = []
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    checkScore()
}

function checkScore() {
    console.log('sum ', sum)
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "Woo hoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "BUST!"
        isAlive = false
    }
        if(!isAlive || hasBlackjack) {
            newCardBtn.style.display = "none" 
        }
    
    renderGame()
}

function renderGame() {
    console.log(firstCard, secondCard, sum)
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sum}`
    cardsEL.textContent = `Cards: ${cards}`
    playerEl.textContent = `${player.name}: $${player.chips}`
}

function newCard() {
    console.log("draw card")
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    checkScore()
}



