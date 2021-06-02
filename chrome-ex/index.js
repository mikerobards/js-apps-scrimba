let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
let listItems = ""

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    myLeads.forEach(i => {
        listItems += `
            <li>
                <a href='${i}' target='_blank'>${i}</a>
            </li>
        ` 
    })
    console.log(listItems)
    ulEl.innerHTML = listItems
}




