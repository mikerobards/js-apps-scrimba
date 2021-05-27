let count = 0
const countHTML = document.getElementById('count-el')
const saveEL = document.getElementById('save-el')

countHTML.innerHTML = count

function increment() {
    count++
    countHTML.textContent = count
}

function save() {
    saveEL.textContent += `${count} - `
    count = 0
    countHTML.textContent = count
}
