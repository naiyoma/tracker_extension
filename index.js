let myLeads = ["l","k"]
const inputEl  = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = " "

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    listItems += myLeads[i]
    ulEl.innerHTML += "<li>" + listItems + "</li>"
}