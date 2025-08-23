const validPin = 1234
const transactionData = []

function getInputValueNumber(id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}

function getInputValue(id){
    const inputFieldValue = document.getElementById(id).value
    return inputFieldValue;
}

function getInnerText (id){
    const innerNumber = parseInt(document.getElementById(id).innerText)
    return innerNumber
}

function setInnerText(value){
    document.getElementById("available-balance").innerText = value
}
function toggleHandler(id){
    const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById(id).style.display = "block"
}
function activeButtonHandaler(id){
    const formBtns = document.getElementsByClassName("form-btn")
    for(const formBtn of formBtns){
        formBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        formBtn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
    
}




//add money feauter
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    
    const bankName = getInputValue("bank")
    const accountNumber = getInputValue("account-number")
    const amount = getInputValueNumber("add-amount")
    const pin = getInputValueNumber("pin")
    if(amount <= 0){
        alert("Add Amount Must be Bigger then 0")
        return;
    }
    if (accountNumber.length < 11) {
        alert("Please Provide a valid account Number")
        return;
    }

    if (pin != validPin) {
        alert("Invalid PIN Number")
        return;
    }

    const balance = getInnerText("available-balance")
    const newBalance = balance + amount
    setInnerText(newBalance)

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// Cash Out feature
document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()
    const agentNumber = document.getElementById("agent-number").value
    cashOutAmount = getInputValueNumber("cash-out-amount")
    const pin = getInputValueNumber("pin")

    const balance = getInnerText("available-balance")
    const newBalance = balance - cashOutAmount
    setInnerText(newBalance)
     if (agentNumber.length < 11) {
        alert("Invalid Agent Number")
        return;
    }
    if(cashOutAmount <=0 || cashOutAmount>balance){
        alert("Inefficient Amount")
    }
    if (pin != validPin) {
        alert("Invalid PIN Number")
        return;
    }
     const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

})

document.getElementById("transaction-btn").addEventListener("click", function(){
    const transectionContainer = document.getElementById("transaction-conatainer")
    transectionContainer.innerText = ""
    for(data of transactionData){
        const div =document.createElement("div")
        div.innerHTML=`
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex gap-2">
                        <div class=" rounded-full p-3 bg-[#f4f5f7]">
                            <img class="mx-auto " src="./assets/wallet1.png" alt="" srcset="">
                        </div>
                        <div class="ml-3">
                            <h2 class="text-xl font-semibold">${data.name}</h2>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                
        `

        transectionContainer.appendChild(div)
    }
})


// toggole feature
document.getElementById("add-mony-btn").addEventListener("click", function(){
   toggleHandler("add-money-parents")
   activeButtonHandaler("add-mony-btn")
})
document.getElementById("cashout-btn").addEventListener("click", function(){
    toggleHandler("cash-out-parents")
    activeButtonHandaler("cashout-btn")
})
document.getElementById("transfer-btn").addEventListener("click", function(){
    toggleHandler("tranfer-money-parents")
    activeButtonHandaler("transfer-btn")
})
document.getElementById("getBonus-btn").addEventListener("click", function(){
    toggleHandler("get-bonus-parents")
    activeButtonHandaler("getBonus-btn")
})
document.getElementById("paybill-btn").addEventListener("click", function(){
    toggleHandler("pay-bill-parents")
    activeButtonHandaler("paybill-btn")
})
document.getElementById("transaction-btn").addEventListener("click", function(){
    toggleHandler("transaction-parents")
    activeButtonHandaler("transaction-btn")
})






