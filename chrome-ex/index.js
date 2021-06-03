
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

console.log(leadsFromLocalStorage)

// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem('myLeads'))
// localStorage.clear()

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log( localStorage.getItem("myLeads") )
})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
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
    ulEl.innerHTML = listItems
}




