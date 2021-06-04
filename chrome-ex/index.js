
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

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

tabBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
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




