let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
let listItems = ""

inputBtn.addEventListener('click', saveLead)

function saveLead() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
}

// for (let i=0;i<myLeads.length;i++) {
//     console.log(myLeads[i])
// }

myLeads.forEach(i => {
    listItems += `<li>${i}</li>` 
    
    // const li = document.createElement('li')
    // li.textContent = i
    // ulEl.append(li)
    // ulEl.appendChild(`<li>${i}</li>`)
})
console.log(listItems)
ulEl.innerHTML = listItems

