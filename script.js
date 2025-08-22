document.getElementById("loginButton").addEventListener("click" , function(e){
    e.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const mobileNumberValue= document.getElementById("M-Number").value
    const mobileNumberValueConverted =  parseInt(mobileNumberValue)

    const pinNumbervalue = document.getElementById("pin").value
    const pinNumbervalueConverted = parseInt(pinNumbervalue)

    if(mobileNumber === mobileNumberValueConverted && pinNumber === pinNumbervalueConverted){
        window.location.href="./home.html"
    }
    else {
        alert("Invalid Caddential")
    }
})