
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

console.log(leadsFromLocalStorage)

// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem('myLeads'))
// localStorage.clear()

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log( localStorage.getItem("myLeads") )
})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads) {
    let listItems = ""
    leads.forEach(lead => {
        listItems += `
            <li>
                <a href='${lead}' target='_blank'>${lead}</a>
            </li>
        ` 
    })
    ulEl.innerHTML = listItems
}




