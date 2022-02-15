let myLeads = []
const inputEl  = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let listItems = " "

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()

}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("dbclick", function() {
    localStorage.clear()
    myLeads = [];
    renderLeads()
})
function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a href = '${myLeads}' target='_blank'>
                ${myLeads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}
