// document.getElementById('count-el').innerText = 5

let count = 0
const incrementBTN = document.getElementById('increment-btn')
const countHTML = document.getElementById('count-el')

countHTML.innerHTML = count

incrementBTN.addEventListener('click', increment)

function increment() {
    count++
    countHTML.innerHTML = count
}
