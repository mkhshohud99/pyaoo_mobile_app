//add money feauter
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    validPin = 1234
    const bankName = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("pin").value)

    if (accountNumber.length < 11) {
        alert("Please Provide a valid account Number")
        return;
    }

    if (pin != validPin) {
        alert("Invalid PIN Number")
        return;
    }

    balance = parseInt(document.getElementById("available-balance").innerText)
    newBalance = balance + amount
    document.getElementById("available-balance").innerText = newBalance
})

// Cash Out feature
document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()
    validPin = 1234
    // const accountNumber = document.getElementById("account-number").value
    cashOutAmount = parseInt(document.getElementById("cash-out-amount").value)
    const pin = parseInt(document.getElementById("pin").value)

    // if (accountNumber.length < 11) {
    //     alert("Please Provide a valid account Number")
    //     return;
    // }

    // if (pin != validPin) {
    //     alert("Invalid PIN Number")
    //     return;
    // }

    const balance = parseInt(document.getElementById("available-balance").innerText)
    const newBalance = balance - cashOutAmount
    document.getElementById("available-balance").innerText = newBalance

})


// toggole feature
document.getElementById("add-mony-btn").addEventListener("click", function(){
    document.getElementById("cash-out-parents").style.display = "none"
    document.getElementById("add-money-parents").style.display = "block"
})
document.getElementById("cashout-btn").addEventListener("click", function(){
    document.getElementById("add-money-parents").style.display = "none"
    document.getElementById("cash-out-parents").style.display = "block"
    
})




