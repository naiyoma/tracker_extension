let myLeads = []
const inputEl  = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
let listItems = " "

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)

}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(tabs[0].url)
   
    })

    
})

function render(leads) {
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href = '${leads}' target='_blank'>
                ${leads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = [];
    render(myLeads)
    ulEl.innerHTML = '';
    console.log("clicked")
})

